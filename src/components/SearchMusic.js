import axios from "axios";
import { useState } from "react";


function SearchMusic() {
    let [data, setData] = useState(null);
    let [search, setSearch] = useState('');
    const onChange = (e) => {
        setSearch(e.target.value);
        console.log(search);
    }
    const onClick = ()=>{
        setData(`https://www.melon.com/search/song/index.htm?q=${search}&section=&searchGnbYn=Y&kkoSpl=N&kkoDpType=`);
    }


      return (
        <div>
            <h2>음악 제목으로 검색하기</h2>
            <input onChange={onChange} />
            <button  onClick={onClick} className='btn btn-primary'>검색</button>
            <div>
                <a href={data}>클릭</a>
            </div>
            
        </div>
      );

}

export default SearchMusic;