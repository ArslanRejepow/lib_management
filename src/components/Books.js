import React from 'react'
import Book from './Book'

export default function Books(props){
    return(
        <div>
            {console.log(props.books)}
            <div className='card-group'>
                {Object.keys(props.books).map((i, k) => (
                    <Book 
                    key = {props.books[i]['id']}
                    img = {props.books[i]['img']}
                    about= {props.books[i]['about']}
                    name = {props.books[i]['name']}
                    page_number = {props.books[i]['page_number']}
                    current_number = {props.books[i]['currentNumber']}
                    all_number = {props.books[i]['allNumber']}
                    darkMode = {props.darkMode}
                    />
                ))}
            </div>
        <hr />
        <button type='button' className='btn btn-primary' onClick = {() => props.setCurrentPage('addBook')} >Kitap gos</button>
        </div>
    )
}