import { Table } from "react-bootstrap";


function Soul(){
    return (
        <>
            <div className="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <h2>소울 음악</h2>
                    </div>
                    <div class="row">
                            <div class="col-md-4">
                                <iframe width="400" height="300" src="https://www.youtube.com/embed/EPLZL4s_jtI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div class="col-md-4">
                                <iframe width="400" height="300" src="https://www.youtube.com/embed/wEBlaMOmKV4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div class="col-md-4">
                                <iframe width="400" height="300" src="https://www.youtube.com/embed/9iayJ8u4Qew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <iframe width="400" height="300" src="https://www.youtube.com/embed/N-q559-hhUA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div class="col-md-4">
                                <iframe width="400" height="300" src="https://www.youtube.com/embed/ApthDWoPMFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div class="col-md-4">
                                <iframe width="400" height="300" src="https://www.youtube.com/embed/7YGc6RMOYF8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <h3>개요</h3>
                        <p>Soul music</p>
                        <p>소울 음악 또는 솔 음악이라고도 하며, 미국 흑인 음악의 한 장르이다.</p>

                        <h3>추천앨범</h3>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>찜</th>
                                <th>앨범</th>
                                <th>음악/아티스트</th>
                                <th>설명</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                            </tbody>
                        </Table>
                    
                    </div>

                </div>
            </div>
        </>
    )
}

export default Soul;