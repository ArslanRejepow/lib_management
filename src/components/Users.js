import React from 'react'

export default function Navbar(props){

    return(
        <div>
            <h1>Ulanyjylar</h1>
            <table className={props.darkMode ? "table" : "table table-dark" }>
            <thead>
                <tr>
                <th scope="col">Ulanyjy ady</th>
                <th scope="col">Fakulteti</th>
                <th scope="col">Hünäri</th>
                <th scope="col">Doglan Senesi</th>
                <th scope="col">Ýaşaýan ýeri</th>
                <th scope="col">Nomeri</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(props.users).map((i, k) => (
                    <tr>
                        <td>{props.users[i]['name']}</td>
                        <td>{props.users[i]['fakultet']}</td>
                        <td>{props.users[i]['profession']}</td>
                        <td>{props.users[i]['birthDate']}</td>
                        <td>{props.users[i]['address']}</td>
                        <td>{props.users[i]['phoneNumber']}</td>
                    </tr>
                    ))}
                
            </tbody>
            </table>
            <hr />
            <button type='button' className='btn btn-primary' onClick = {() => props.setCurrentPage('addUser')} >Ulanyjy gos</button>
        </div>
    )
}