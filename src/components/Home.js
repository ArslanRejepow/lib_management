import React from 'react'

export default function Navbar(props){
    return(
        <div>
            <h1>Maglumatlar</h1>
            <table className={props.darkMode ? "table" : "table table-dark" }>
            <thead>
                <tr>
                <th scope="col">Ulanyjy ady</th>
                <th scope="col">Alan kitaby</th>
                <th scope="col">Alan senesi</th>
                </tr>
            </thead>
            <tbody>
                {/* {Object.keys(props.records).map((i, k) => (
                    <tr>
                        <td>{props.users.find(x => x.id === props.records[i]['user_id']).name}</td>
                        <td>{props.books.find(x => x.id === props.records[i]['book_id']).name}</td>
                        <td>{props.records[i]['date']}</td>
                    </tr>
                    ))} */}
                
            </tbody>
            </table>
            <hr />
            <button type='button' className='btn btn-primary' onClick = {() => props.setCurrentPage('addRecord')} >Maglumat gos</button>
        </div>
    )
}