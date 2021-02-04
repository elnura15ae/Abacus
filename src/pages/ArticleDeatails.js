import React from 'react'
import {useParams} from 'react-router-dom'


export default function ArticleDeatails({single}) {
    let {id} = useParams()
    return (
        <div>
            <h1>LA MÉTHODE- MENTAL MATH</h1>
            <h2>Methode ID:{id}</h2>
            {/* {console.log(sigle)} */}
            <h3 style={{'display':'block'}}>Article TITLE:{single.title}</h3>
            <p>{single.body}</p>
        </div>
    )
}
