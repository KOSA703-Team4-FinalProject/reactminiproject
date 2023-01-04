import { useContext, useEffect, useState } from "react";
import { Route, useNavigate, useParams,Routes } from "react-router-dom";
import { Tabs,Tab,Nav } from "react-bootstrap";
import styled from "styled-components";
// import { StockContext } from "../App";
// import Cart from "./Cart";
import { useDispatch } from "react-redux";

function Ballad(props){
    let {id} = useParams();
  
    // <Routes>
    // <Route path='/cart/:id' element={<StockContext.Provider><Cart/></StockContext.Provider>}/>
    // </Routes>
  
    
  
   
    //let findId  =   props.shirts.find(function(item){return item.id == id});
    // let findId  =   props.shirts.find((item)=>item.id == id);
    // let cartId = useState(findId.id);
    let navigate = useNavigate();
    let [count,setCount] = useState(0);
    let [flag,setFlag] = useState(true);
    let [clickTab, setClickTab] = useState(0);
  
    let dispatch = useDispatch();
    let[num, setNum] = useState('');
  
    // 최근 본 상품 목록 저장
  
    let ab = '';
  
    useEffect(()=>{
      if(isNaN(num) == true){ // 문자인지를 물어보는 것
        alert('숫자만 입력하세요')
        setNum('');
      } else{
        ab = <div>숫자 입니다.</div>
      }
    },[num])
  
    
  
    useEffect(()=>{
    let timer = setTimeout(()=> {setFlag(false); },3000);
      return()=>{clearTimeout(timer);}
    
    },[count]);
  
    
      return (     
     
          <div className='container'>
               {/* {
          flag == true
          ?<ColorBtn bg="orange">12월 안에 구매시 50% 할인</ColorBtn> 
          : null
               } */}
            {/* <button onClick={()=>{setCount(count+1)}}>증가 {count}</button> */}
            {/* <input onChange={(e)=>{console.log(e.target.value);}}/> */}
          <div className='row'>
            <div className='col-md-4'>
              {/* <img src={"https://raw.githubusercontent.com/ai-edu-pro/busan/main/t" + (props.i) + ".jpg"} width='100%'/> */}
              {/* <img src={`https://raw.githubusercontent.com/ai-edu-pro/busan/main/t${(findId.id)+1}.jpg`} width='100%' alt='옷'/> */}
              <h4>제목</h4>
              <p>내용</p>
              <p>가격 원</p>
              {/* <p><input onChange={(e)=>{console.log(e.target.value);}}
                  navigate('/cart');
              />개</p>
  
             
              {/* <button onClick={()=>{navigate('/cart/'+id)}} className="btn btn-danger" >주문하기</button>&nbsp; */}
              <button onClick={()=>{navigate(-1)}} className="btn btn-primary">뒤로가기</button>&nbsp;
              <button onClick={()=>{navigate('/')}} className="btn btn-success">홈</button>&nbsp;
              {/* <button onClick={()=>{dispatchEvent(addItem(`{id : ${findId.id}, name : ${findId.title}, count : 1`)) navigate('/cart') }}  className="btn btn-dark">장바구니</button>&nbsp;   */}
  
              
            </div>
           </div><br/>
  
           <Nav variant="tabs" defaultActiveKey="/home">
              <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={() => { setClickTab(0) }}>환불정책</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={() => { setClickTab(1) }}>교환방법</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link3" onClick={() => { setClickTab(2) }}>배송문의</Nav.Link>
                </Nav.Item>
          </Nav>
  
          <TabComponent  clickTab = {clickTab} />
        </div> 
      )       
  } // end Detail.js
  
  // function TabComponent(props){
   function TabComponent({clickTab}){
  
    let [fade,setFade] = useState('');
  
    useEffect(()=>{
      let timer = setTimeout(()=>{
          setFade('end')
      },10)
  
      return()=>{
        clearTimeout(timer);
        setFade('')
      }
  
    },[clickTab])
  
    // let {stock} = useContext(StockContext)
    return(
      <div className={`start ${fade}`}>
      {/* {stock[0]} */}
      {[<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][clickTab]}
      </div>
    )    
  }

export default Ballad;