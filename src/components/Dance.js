
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useState } from 'react';


import pop from '../musicList.json';
function Dance(){
    const imagestyle = {
        height: "50vh",  
          width: "50vw",
          };
     let [dance,setDance] =useState(pop);     
    
    return(
        
        <div >
            <div className="container-fluid">
	<div className="row">
		<div className="col-md-1" >
		</div>
		<div className="col-md-10">
        <div className="col-mx-10">
           <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100" 
          src="https://cdnimg.melon.co.kr/cm2/album/images/111/27/145/11127145_20230102135733_500.jpg/melon/resize/120/quality/80/optimize"style = {imagestyle}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>팝음악이란?</h3>
          <p>팝음악 소개 </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdnimg.melon.co.kr/cm2/album/images/110/34/298/11034298_20220822101843_500.jpg/melon/resize/120/quality/80/optimize" style = {imagestyle}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>팝음악의 장르</h3>
          <p>팝음악의 장르를 알아보자!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdnimg.melon.co.kr/cm2/album/images/111/31/176/11131176_20221226143604_500.jpg/melon/resize/120/quality/80/optimize"style = {imagestyle}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>음악추천</h3>
          <p>
           인기있는 팝음악을 소개해드립니다!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        <br/> 
        <div>
        <Card>
      <Card.Header as="h5">What is Pop Music?</Card.Header>
      <Card.Body>
        <Card.Title>Pop음악이란?</Card.Title>
        <Card.Text>
        현대 대중음악의 가장 기본이 되는 장르로 대중의 귀를 쉽게 잡아 끌 수 있는 쉬운 멜로디와 리듬을 가진 곡
        </Card.Text>
        
      </Card.Body>
    </Card>
    <br/>
    <Card>
      <Card.Header as="h5">Various pop music genres</Card.Header>
      <Card.Body>
    
        <Card.Title>신스팝/ 일렉트로팝</Card.Title>
        <Card.Text>
        신디사이저 팝의 줄임말로 이름 그대로 신디사이저를 중심으로 한 전자음악의 한 갈래다. 초기엔 크라프트베르크가 선도했던 크라우트록에 영향을 받았지만 점차 친숙한 멜로디를 앞세워 대중적으로도 큰 성공을 거두었다. 1970년대 중반부터 특히 1980년대 뉴웨이브 무브먼트를 이끌었다. 일렉트로 팝과 혼재돼 쓰이며 이후 하우스나 테크노 등에 많은 영향을 주었다. 한때 가벼운 음악으로 폄하되기도 했지만 시대적 흐름과 함께 최근에 다시 재조명되고 있으며 칠웨이브 등의 하위 장르과 연결된다.
        </Card.Text>
        <Card.Title>시티팝</Card.Title>
        <Card.Text>
        1970년대 중후반부터 1980년대까지 중흥했던 음악 스타일로 이름 그대로 도회적인 분위기를 담고 있다. 팝, 스무드 재즈, 펑크(funk), 소울 등 다양한 장르 음악이 시티팝의 범주에 들어간다. 공통적으로 도회적인 분위기에 세련된 편곡, 깔끔한 연주가 담겨있으며 스튜디오에서 충분히 다듬어진 소리로 표현된다. 1980년대 일본 버블 시대를 대표하는 음악 2010년대 들어 특유의 세련된 분위기로 다시 소환되기 시작했다.
        </Card.Text>
        <Card.Title>댄스팝</Card.Title>
        <Card.Text>
        댄스 팝(Dance Pop)은 1980년대 초반부터 시작된 댄스를 지향하는 팝 음악이다. 이 장르는 디스코 음악에서 파생되었고, 대부분 댄스 팝 노래는 업 템포 음악으로, 클럽에서 단순히 춤추기에 알맞은게 특징이다. 댄스 팝 노래는 일반적으로 강한 비트와 쉽고 단순한 노래 구조가 특징이다. 또한 익숙한 멜로디와 노래를 위해 자유로운 형태의 댄스 음악보다는 최근에는 팝 음악 성향이 짙어졌다.
        </Card.Text>
        <Card.Title>케이팝</Card.Title>
        <Card.Text>
        케이팝은 대한민국에서 대중적 인기를 얻는 유행 음악을 말한다. 간단히 가요라고 부르기도 하며, 영미권의 대중음악을 팝(pop)이라고 부르고, 영미권 이외의 국가의 대중가요도 국가 이니셜을 붙여 나타내는데서 K-pop이라고 쓴다. 특히 대한민국 대중가요가 해외에서 인기를 얻게 된 이후에 케이팝이라는 명칭이 대한민국 이외 국가에서 대한민국 대중가요를 가리키는 이름으로 널리 자리잡고 있다.  한국에서 만들어진 댄스음악, 혹은 아이돌 음악 등을 일컫는 의미로 통용되고 있는 듯 하다.
        </Card.Text>
      </Card.Body>
    </Card>
     <hr/>
        <div>
        <h3>추천곡</h3>
        <hr></hr>
        { 

          dance.filter(dance => dance.genre == "pop").map((item,i)=>
            <div style={{float: "left" }} >
            <div style={{margin: "20px" }} key={i}>
                <Card style={{ width: '18rem' ,height:'20px' }}  > 
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.genre}</Card.Title>
                  <Card.Text>
                    {item.song} -  {item.singer}<br/>
                    {item.content}
                
                  </Card.Text>
                
                </Card.Body>
              </Card>
              </div>
              </div>
            )
        }

</div>

   
     
 
        </div>
		</div>
		<div className="col-md-1">
		</div>
	</div>
</div>
        
       

        </div>
    )
}
export default Dance;