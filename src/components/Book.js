import React from 'react'

export default function Book(props){
    return(
        <div>
            <div className={props.darkMode ? "card" : "card bg-dark text-white"} style={{width: "18rem"}}>
            <img className="card-img-top img-thumbnail" src={props.img} alt="Card img cap" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.about}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Sahypa sany: {props.page_number}</li>
                <li className="list-group-item">Suwagt galan sany: {props.current_number}</li>
                <li className="list-group-item">Umumy sany: {props.all_number}</li>
            </ul>
            </div>
        </div>
    )
}