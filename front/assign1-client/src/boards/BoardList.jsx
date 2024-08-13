import React, { useState } from 'react'
import './css/BoardList.css'

function BoardList() {
    const [boardList, setBoardList] = useState([]);

    return (
        <div className='boardList'>BoardList
            <section>
                <div className="container">
                    <div className="col-md-12">
                        <h2>Board 목록</h2>
                    </div>
                    <div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>글 번호</th>
                                    <th>글 제목</th>
                                    <th>등록일</th>
                                    <th>작성자</th>
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