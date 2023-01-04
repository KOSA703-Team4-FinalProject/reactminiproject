import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeName, increase, addCount, initCount,minusCount } from '../music';



function Ballad() {

    // let value = useSelector((state)=>{ return state})  //useSelector() : Redux store 가져와주는 HOOK
    // let value = useSelector((state)=> state.stock) 
    // let value = useSelector((state)=> state.stock[2]) 

    // 3.useSelector 이용해서 state 가져다 쓴다.
    let state = useSelector((state)=> state )
    //console.log(state);
    let dispatch = useDispatch();  // actions에 있는 것들 호출해주는 

    // 최근 본 상품 목록 저장
    

    return(
    <div>
        
        <h2>{state.user.name} / { state.user.age }님의 장바구니  </h2>
        {/* <button onClick={()=>{ dispatch(changeName()) }}>changeName</button>
        <button onClick={() =>{ dispatch(increase(5))} }>나이증가</button>  */}
                    
        <Table >
            <thead className="thead-dark">
                <tr>
                    <th>순위</th>
                    <th>제목</th>
                    <th>내용</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                 {/* ()=>{ return value } vs ()=> value */}
                {state.cart.map((item, i)=>
                    <tr key={i}>
                        <td>{state.cart[i].id}</td>
                        <td>{state.cart[i].name}<img src={`https://raw.githubusercontent.com/ai-edu-pro/busan/main/t1.jpg`} width='100%' alt='옷'/></td>
                        <td>{state.cart[i].count}</td>
                        <td><button >+</button> 
                        <button >-</button>  
                        <button>수량변경</button></td> 

                        {/* <td><button 
                        onClick={() =>{ dispatch(addCount(state.cart[i].id))} } >+</button></td> 
                        <td><button 
                        onClick={()=>{dispatch(minusCount(state.cart[i].id))}} >-</button></td>  
                        <td><button
                        onClick={()=>{ dispatch(initCount(state.cart[i].id))}}>수량변경</button></td>  */}
                    </tr>
                )}             
            </tbody>
        </Table>
    </div>
    )
  }

export default Ballad;