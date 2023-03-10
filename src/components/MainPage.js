import { useState } from "react";
import { Carousel, Pagination, Table } from "react-bootstrap";
import { Navigate } from "react-router-dom";

import MusicList from "../musicList.js";

function MainPage() {

  let [musicList, setMusicList] = useState(MusicList);

  let no1 = Math.floor( Math.random() * (34-1) + 1 );
  let no2 = Math.floor( Math.random() * (34-1) + 1 );
  let no3 = Math.floor( Math.random() * (34-1) + 1 );

  let tablelist = musicList.map((i) => {

    return (
      <tr key={i.id}>
        <td>
          <img src={i.image} alt={i.id} width="300px"></img>
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
        <td>
        </td>
      </tr>
    );
  });


  return (
    <div className="p-5">
      <div className="mb-5">
        <Carousel variant="dark">
          <Carousel.Item>
            <div className="parkContain">
              <img
                className="park d-block"
                src={musicList[no1].image}
                alt="First slide" 
              />
            </div>
            <Carousel.Caption>
              <h3>{musicList[no1].song}</h3>
              <p>{musicList[no1].title}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="parkContain">
              <img
                className="park d-block"
                src={musicList[no2].image}
                alt="First slide" 
              />
            </div>
            <Carousel.Caption>
              <h3>{musicList[no2].song}</h3>
              <p>{musicList[no2].title}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="parkContain">
              <img
                className="park d-block"
                src={musicList[no3].image}
                alt="First slide" 
              />
            </div>
            <Carousel.Caption>
              <h3>{musicList[no3].song}</h3>
              <p>{musicList[no3].title}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>??????</th>
            <th>??????/????????????</th>
            <th>??????</th>
            <th>?????????</th>
          </tr>
        </thead>
        <tbody>{tablelist}</tbody>
      </Table>
    </div>
  );
}

export default MainPage;
