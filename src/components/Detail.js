import { useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";

function Detail(props){
    let navigate = useNavigate();
    let { id } = useParams(); 

    let state = useSelector((state)=>state);
    let list = state.music;

    console.log(id);

    let findId = list.find(item=> item.id == id);
  
   console.log(findId);


    return (
    <div>
<div className='container'>

        <div className='row'>
          <div className='col-md-6'>
              <img src={findId.image} width='100%' /> 
            <h4>Title: {findId.song}</h4><br/>
            <p>Singer :{findId.singer}</p><br/>
            <p>Detail: {findId.title}</p><br/>
            <p>Content: {findId.content}</p><br/>
                    
          
           
            <button onClick={()=>{ navigate(-1) }} className="btn btn-primary">BACK</button>&nbsp;
            <button onClick={()=>{ navigate('/') }} className="btn btn-success">HOME</button>
           
          </div>
        </div><br />

 

        

      </div>
    </div>
      )
}
export default Detail;