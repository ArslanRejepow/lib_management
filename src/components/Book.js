import React from 'react'

export default function Book(props){
    return(
        <div className={props.darkMode ? "card" : "card bg-dark text-white"} style={{width: "18rem"}}>
        <img className="card-img-top img-thumbnail" src={props.img} alt="Card img cap" />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Kategoriýa: {props.category}</li>
            <li className="list-group-item">Suwagt galan sany: {props.current_number}</li>
            <li className="list-group-item">Umumy sany: {props.all_number}</li>
            <li className="list-group-item">Çap edilen senesi: {props.pubDate}</li>
        </ul>
        </div>
    )
}