import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import music, { soulList } from "../music";
import musicList from "../musicList";

import '../css/soul.css';

function Soul(){

    let state = useSelector((state)=> state);
    
    let soulList = state.music.filter(data => data.genre == "soul").map((item, i)=>
        <tr>
            <td><h4>{item.id+1}</h4></td>
            <td>
                <img src={item.image} width="300px" />
            </td>
            <td>
                <h4>{item.song}</h4><hr></hr>{item.singer}
            </td>
            <td>
                <h3>{item.title}</h3>
                {item.content}
            </td>
            <td width={"100px"}>

            </td>
        </tr>
    );

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <hr></hr>
                        <h2>소울 음악</h2>
                        <hr></hr>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <iframe width="100%" src="https://www.youtube.com/embed/EPLZL4s_jtI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="col-md-4">
                        <iframe width="100%" src="https://www.youtube.com/embed/wEBlaMOmKV4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="col-md-4">
                        <iframe width="100%" src="https://www.youtube.com/embed/9iayJ8u4Qew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <iframe width="100%" src="https://www.youtube.com/embed/N-q559-hhUA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="col-md-4">
                        <iframe width="100%" src="https://www.youtube.com/embed/ApthDWoPMFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="col-md-4">
                        <iframe width="100%" src="https://www.youtube.com/embed/7YGc6RMOYF8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            
                <div className="row">
                    <div className="col-md-12">
                        <h3>개요</h3>
                        <p>Soul music</p>
                        <p>소울 음악 또는 솔 음악이라고도 하며, 미국 흑인 음악의 한 장르이다.</p>

                        <h3>추천앨범</h3>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th><h2>No.</h2></th>
                                <th><h2>앨범</h2></th>
                                <th><h3>음악/아티스트</h3></th>
                                <th><h2>설명</h2></th>
                                <th><h2>찜</h2></th>
                                </tr>
                            </thead>
                            <tbody>
                                {soulList}
                            </tbody>
                        </Table>
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Soul;