import { useEffect, useState } from "react"
import ShowData from "./shows"

export default function Frirnd(){
    const [friends,setFriend] =useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])
    return(
        <div>
            <h3>friends :{friends.length}</h3>
            {
                friends.map(Frind=><ShowData post={Frind}></ShowData>)
            }
        </div>
    )
}