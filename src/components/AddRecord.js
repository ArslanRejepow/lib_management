import React from 'react'

export default function AddRecord(props){
    const [formData, setFormData] = React.useState(
        {"user_id": "", "book_id": "", "date": new Date().toLocaleString() + ""}
    )
    console.log(formData)
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault();
        props.setRecords(prevRecords => [formData, ...prevRecords]);
        props.setCurrentPage('home');
    }

    return(
        <div>
            <form className='form-group' onSubmit={handleSubmit}>
                Ulanyjy: <br />
                <select name='user_id' className='form-control' onChange={handleChange}>
                {Object.keys(props.users).map((i, k) => (
                        <option key={props.users[i]['id']} value={props.users[i]['id']}>{props.users[i]['name']}</option>
                    ))}
                </select>
                Kitap: <br />
                <select name='book_id' className='form-control' onChange={handleChange}>
                {Object.keys(props.books).map((i, k) => (
                        <option key={props.books[i]['id']} value={props.books[i]['id']}>{props.books[i]['name']}</option>
                    ))}
                </select>
                <button className='btn btn-primary'>Gos</button>
            </form>
        </div>
    )
}