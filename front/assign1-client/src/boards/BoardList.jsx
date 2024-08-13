import React, { useEffect, useState } from "react";
import './css/BoardList.css'
import axios from "axios";
import Swal from "sweetalert2";

function BoardList() {
    const [boardList, setBoardList] = useState([]);

    let callListApi = async () => {
        axios.post('/api/board?type=list', {

        }).then(response => {
            try {
                console.log(response);

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

    useEffect(() => {
        callListApi();
    }, []);

    return (
        <div className='boardList'><h2>BoardList</h2>
            <section>
                <div className="boardlist-container">
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