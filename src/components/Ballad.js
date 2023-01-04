import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import { changeName, increase, addCount, initCount,minusCount } from '../music';

// export let StockContext = React.createContext(); // 1. 컨텍스트 만들고

function Ballad() {

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
        
        <h2>발라드 페이지</h2>
        {/* <button onClick={()=>{ dispatch(changeName()) }}>changeName</button>
        <button onClick={() =>{ dispatch(increase(5))} }>나이증가</button>  */}
                    
        <Table >
            <thead className="thead-dark">
                <tr>
                    <th>곡 번호</th>
                    <th >제목</th>
                    <th></th>
                    <th>앨범소개</th>
                    <th>상세보기</th>
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
                        <button onClick={()=>{ navigate(`/detail/${balladList[i].id}`) }} className="btn btn-dark">상세보기</button></td>  
                    </tr>
                )}             
            </tbody>
        </Table>
    </div>
    )
  }

export default Ballad;