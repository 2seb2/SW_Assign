import React, { useEffect, useState } from "react";
import './css/BoardList.css'
import axios from "axios";

function BoardList({ onSelectArticle }) {
    const [boardList, setBoardList] = useState([]);

    let callListApi = async () => {
        axios.post('/api/board?type=list', {

        }).then(response => {
            try {
                let result = [];
                let BoardList = response.data;

                for (let i = 0; i < BoardList.json.length; i++) {
                    let data = BoardList.json[i];
                    let date = data.write_date;
                    let year = date.substr(0, 4);
                    let month = date.substr(5, 2);
                    let day = date.substr(8, 2);
                    let write_date = year + '.' + month + '.' + day;

                    result.push(
                        <tr key={i}>
                            <td>{data.article_no}</td>
                            <td>{data.title}</td>
                            <td>{data.write_id}</td>
                            <td>{write_date}</td>
                            <td>
                                <button onClick={() => onSelectArticle(data.article_no)} style={{ cursor: 'pointer' }}>
                                    수정
                                </button>
                                <button onClick={(e) => deleteSwtool(data.article_no, e)} style={{ cursor: 'pointer' }}>
                                    삭제
                                </button>
                            </td>

                        </tr>
                    );
                }
                setBoardList(result);
            } catch (error) {
                alert('목록 작업 중 오류');
            }
        }).catch(error => {
            alert('axios 호출 에러');
            return false;
        });
    }

    let deleteSwtool = (articleNo, e) => {
        e.preventDefault();
        console.log('deleteBoard()');

        if (window.confirm('정말 삭제하시겠습니까?')) {
            axios.post('/api/board?type=delete', {
                is_ArticleNo: articleNo // 클릭한 게시글의 article_no를 사용
            },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(response => {
                    callListApi();  // 삭제 후 목록 갱신
                }).catch(error => {
                    alert('작업 중 오류가 발생하였습니다.');
                    return false;
                });
        }
    }

    useEffect(() => {
        callListApi();
    }, []);

    return (
        <div className='boardList'><h2>BoardList</h2>
            <section>
                <button id='createPostBtn' onClick={() => onSelectArticle('new')} style={{ marginBottom: '10px' }}>
                    새 글 작성
                </button>
                <div className="boardlist-container">
                    <div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>글 번호</th>
                                    <th>글 제목</th>
                                    <th>등록일</th>
                                    <th>작성자</th>
                                    <th> 버튼 </th>
                                </tr>
                            </thead>
                        </table>
                        <table className="table table-striped">
                            <tbody>
                                {boardList}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BoardList

