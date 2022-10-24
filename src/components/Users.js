import React from 'react'

export default function Navbar(props){
    return(
        <div>
            <h1>Ulanyjylar</h1>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Ulanyjy ady</th>
                <th scope="col">Nomeri</th>
                <th scope="col">Alan kitap sany</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(props.users).map((i, k) => (
                    <tr>
                        <td>{props.users[i]['name']}</td>
                        <td>{props.users[i]['number']}</td>
                        <td>{props.users[i]['book_number']}</td>
                    </tr>
                    ))}
                
            </tbody>
            </table>
            <hr />
            <button type='button' className='btn btn-primary' onClick = {() => props.setCurrentPage('addUser')} >Ulanyjy gos</button>
        </div>
    )
}