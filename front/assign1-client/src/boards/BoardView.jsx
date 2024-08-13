import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './css/BoardView.css'

function BoardView({ selectedId }) {
    const [boardData, setBoardData] = useState(null);

    useEffect(() => {
        if (selectedId) {
            axios.post('/api/board?type=list', {
                //해당 selectedId의 게시글 정보만 불러와야함
            }).then(response => {
                for (let i = 0; i < response.data.json.length; i++) {
                    if (response.data.json[i].article_no === selectedId) {
                        let selectIdData = response.data.json[i]
                        setBoardData(selectIdData);
                    }
                    document.querySelector('#title').value = boardData.title;
                    document.querySelector('#content').value = boardData.content;
                    document.querySelector('#writer').value = boardData.write_id;
                }
            }).catch(error => {
                alert('axios 호출 에러');
                return false;
            });
        }
    }, [selectedId]);

    if (!boardData) {
        return <div className='boardView'>게시물을 선택하세요.</div>;
    }

    return (
        <div className='boardView'><h2>BoardView</h2>
            <div className="form-container">
                <form action="/submit-url" method="POST">
                    <div className="form-group">
                        <label htmlFor="title">제목:</label>
                        <input type="text" id="title" name="title" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">내용:</label>
                        <textarea id="content" name="content" rows="4" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="writer">작성자:</label>
                        <input type="text" id="writer" name="writer" required />
                    </div>
                    <button
                        type="submit" className="saveClass"
                        onClick={(e) => submitClick('save', e)}>
                        제출
                    </button>
                </form>
            </div>
        </div>
    )
}

export default BoardView