import { useState,useEffect } from 'react';

const Filter = (props) => {
    const [type,setType] = useState([]);
    useEffect(()=> {
        props.search(type)    
    }, [props.movies,type])

return(
    <div>
    <h2>Movies Search</h2>
    Title : <input type="text" placeholder="Search Title" onChange={(e) => setType({titleMovie:e.target.value})}/> 
    Rating : 0<input type="range" placeholder="rating" min={0} max={5} onChange={(e)=> setType({rating: Number(e.target.value)})} />5
    </div>    
);
}

export default Filter;