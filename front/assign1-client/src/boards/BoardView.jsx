// BoardView.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/BoardView.css';

function BoardView({ selectedId }) {
    const [boardData, setBoardData] = useState(null);

    useEffect(() => {
        if (selectedId) {
            axios.post('/api/board?type=list', {
                isArticleNo: selectedId,
            }).then(response => {
                const data = response.data.json[0];
                setBoardData(data);
            }).catch(error => {
                alert('게시물 정보를 가져오는 데 실패했습니다.');
            });
        }
    }, [selectedId]);

    if (!boardData) {
        return <div className='boardView'>게시물을 선택하세요.</div>;
    }

    return (
        <div className='boardView'>
            <h2>BoardView</h2>
            <div className="form-container">
                <form action="/submit-url" method="POST">
                    <div className="form-group">
                        <label htmlFor="title">제목:</label>
                        <input type="text" id="title" name="title" value={boardData.title} readOnly />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">내용:</label>
                        <textarea id="content" name="content" rows="4" value={boardData.content} readOnly></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="writer">작성자:</label>
                        <input type="text" id="writer" name="writer" value={boardData.write_id} readOnly />
                    </div>
                    <button type="submit" className="saveClass">
                        제출
                    </button>
                </form>
            </div>
        </div>
    );
}

export default BoardView;
