import React from 'react'
import Book from './Book'

export default function Books(props){
    return(
        <div>
            <div className='card-group'>
                {Object.keys(props.books).map((i, k) => (
                    <Book 
                    id = {props.books[i]['key']}
                    key = {props.books[i]['id']}
                    img = {props.books[i]['img']}
                    name = {props.books[i]['name']}
                    category = {props.books[i]['category']}
                    author = {props.books[i]['author']}
                    current_number = {props.books[i]['currentNumber']}
                    all_number = {props.books[i]['allNumber']}
                    pubDate = {props.books[i]['pubDate']}
                    darkMode = {props.darkMode}
                    />
                ))}
            </div>
        <hr />
        <button type='button' className='btn btn-primary' onClick = {() => props.setCurrentPage('addBook')} >Kitap gos</button>
        </div>
    )
}