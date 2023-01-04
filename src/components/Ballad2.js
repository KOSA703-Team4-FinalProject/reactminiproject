import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";                                                                                                                                                                           
import { useNavigate, useParams } from "react-router-dom";

function Ballad2() {
  let { id } = useParams();
  let state = useSelector((state) => state);
  // let balladList = state.music.filter(data => data.genre == "ballad");
  let balladList = new Array();

  let [mytags, setMyTags] = useState('');

  useEffect(() => {
    let outData = localStorage.getItem("outarr");
    outData = JSON.parse(outData);
    localStorage.setItem("outArr", [id]);
    outData = new Set(outData); // 중복 제거
    outData = Array.from(outData); // Set -> array
    outData.push(id);
    localStorage.setItem("outarr", JSON.stringify(outData));

    outData.map((item) => {
      let i = state.music.filter((data) => data.id == item);

      balladList.push(i);
    });

    let my = balladList.map((item, i) => {
      return (
        <tr key={i}>
          <td>{item[0].id}</td>
          <td>{item[0].song}</td>
          <td>
            <img src={item[0].image} width="30%" alt="옷" />
          </td>
  
          <td>{item[0].title}</td>
        </tr>
      )
    });

    setMyTags(my);
    
  }, []);
  

  return (
    <div>
      <h2>찜목록</h2>
      <br />
      <Table>
        <thead className="thead-dark">
          <tr>
            <th>곡 번호</th>
            <th>제목</th>
            <th></th>
            <th>앨범소개</th>
          </tr>
        </thead>
        <tbody>
          {/* ()=>{ return value } vs ()=> value */}

          {mytags}
        </tbody>
      </Table>
    </div>
  );
}

export default Ballad2;
