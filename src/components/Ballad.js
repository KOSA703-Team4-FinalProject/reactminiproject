import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom";

import { changeName, increase, addCount, initCount,minusCount } from '../music';
import Ballad2 from "./Ballad2";

// export let StockContext = React.createContext(); // 1. 컨텍스트 만들고

function Ballad() {

   

        let { id } = useParams();
     
  
     // 최근 본 상품 목록 저장
   useEffect(()=>{
    localStorage.setItem('outarr1',JSON.stringify([]))
   },[]);



    // let value = useSelector((state)=>{ return state})  //useSelector() : Redux store 가져와주는 HOOK
    // let value = useSelector((state)=> state.stock) 
    // let value = useSelector((state)=> state.stock[2]) 

    // 3.useSelector 이용해서 state 가져다 쓴다.
    let state = useSelector((state)=> state)

    let balladList = state.music.filter(data => data.genre == "ballad");
    let navigate = useNavigate();


    
    
//     <Routes>
//     <Route path='/Ballad2/:id' element={
//         <Stockcontext.Provider value={{stock}}>
//           <Ballad2 shirts={shirts} />
//           </Stockcontext.Provider>
//     }/>
// </Routes>
    
    //console.log(state);
    let dispatch = useDispatch();  // actions에 있는 것들 호출해주는 

    // 최근 본 상품 목록 저장
    

    return(
    <div>
        
        <h2>발라드</h2>
        <p>발라드(영어: ballad)는 대중 음악의 한 부류로, 남녀간의 사랑을 주제로 한 감상적인 노래를 지칭하며, 느린 박자와 낭만적이고 감성적인 가사를 지닌 노래와 때로는 약간 빠르면서도 반복적이고 서술적인 노래를 포함한다.</p> <p> 발라드는 랩과 반대로 대체적으로 조용한 음악이다. 발라드라는 이름은 이야기 형태의 시나 악곡을 지칭하던 발라드에서 유래하였다.
        이 말의 본래 뜻은 '스토리를 가진 노래'이며, '담시'(譚詩)라고 번역되기도 한다. 트래디셔널 포크송에서는 특히 중요한 위치를 차지하는 것이 이 발라드이다.</p><p> 매스컴이 발달하기 이전 사람들은 흥미있는 사진이나 재미있는 이야기를 노래로 하여 서로 전하였다. 즉 발라드는 오늘날의 신문이나 소설책의 역할을 한 것으로, 민중생활 속에 깊이 뿌리를 박고 있었다. 특히 스코틀랜드나 북부 잉글랜드는 발라드의 전통이 풍부하였는데, 그것이 이민에 의하여 미국에 전해져 여러 형태로 변하면서 노래되어 왔다. 서던 마운틴은 특히 발라드를 수없이 전하고 있는 지방이기도 하다. 영국에서 기원하여 전승된 발라드 305종을 19세기 말엽 '프랜시스 제임스 차일드'라는 학자가 수집하고 정리하였다. 여기에는 주요 전승 발라드가 대부분 포함되어 있으며, 이 305종을 '차일드 발라드'라고 하여 지금도 발라드 연구의 중요한 열쇠가 되고 있다.
        </p>
        <br/>
        <br/>
        <br/>

            <h4>실시간 차트</h4> 
            <br/>       
        <Table >
            <thead className="thead-dark">
                <tr>
                    <th>곡 번호</th>
                    <th >제목</th>
                    <th></th>
                    <th>앨범소개</th>
                    <th>찜하기</th>
                </tr>
            </thead>
            <tbody>
                 {/* ()=>{ return value } vs ()=> value */}

                
                {balladList.map((item, i )=>
                    <tr key={i}>
                        <td>{balladList[i].id}</td>
                        <td >{balladList[i].song}</td>
                       <td><img src={balladList[i].image} width='30%' alt='옷'/></td>
                        
                        <td>{balladList[i].title}</td>
                        <td> 
                        <button onClick={()=>{ navigate(`/ballad2/${balladList[i].id}`) }} className="btn btn-dark">찜하기</button></td>  </tr>
                )}             
            </tbody>
        </Table>
    </div>
    )
  }

export default Ballad;