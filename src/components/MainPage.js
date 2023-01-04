import { useState } from "react";
import { Table } from "react-bootstrap";

import MusicList from "../musicList.js";

function MainPage() {

  let [musicList, setMusicList] = useState(MusicList);
  let tablelist = musicList.map((i) => {
    return (
      <tr>
        <td>
          <img src={i.image} alt={i.id}></img>
        </td>
        <td>
          <h3>{i.song}</h3>
          <br></br>
          <p>{i.singer}</p>
        </td>
        <td>
          <h3>{i.title}</h3>
          <p>{i.content}</p>
        </td>
      </tr>
    );
  });

  return (
    <div className="m-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>앨범</th>
            <th>음악/아티스트</th>
            <th>설명</th>
            <th>찜하기</th>
          </tr>
        </thead>
        <tbody>{tablelist}</tbody>
      </Table>
    </div>
  );
}

export default MainPage;
