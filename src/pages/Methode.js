import React, {useState} from 'react'
import {Link, Route} from 'react-router-dom'
import ArticleDetails from './ArticleDeatails'

export default function Methode({data}) {
    const [state, setState] = useState({
        post:{}
    })

    const fetchSingle= async (id) =>{
        let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        let data= await res.json();
        //console.log(data)
        setState({
            post:data
        })
    }
    return (
        <div>
            <h1>Methode Page</h1>
            {
                data.map((item, i)=>{
                    return(
                        <Link onClick={()=>fetchSingle(item.id)} key={i} to={`/methode/${item.id}`} style={{'display':'block'}}>{item.title}</Link>
                    )
                })
            }
            <Route path='/methode/:id' render={()=><ArticleDetails single={state.post} />} />
        </div>
    )
}
