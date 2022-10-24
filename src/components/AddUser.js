import React from 'react'

export default function AddBook(props){
    const [formData, setFormData] = React.useState({
        'name' : '',
        'number': '',
        'book_number': 0,
    })

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value,
            }
        })
        console.log(formData)
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.setUsers(prevUsers => [formData, ...prevUsers])
        props.setCurrentPage('users')
    }

    return(
        <div>
            <form className='form-group' onSubmit={handleSubmit}>
                Ady: <br />
                <input name='name' type={'text'} className='form-control' onChange={handleChange}></input>
                Telefon nomeri: <br />
                <input name='number' type='text' className='form-control' onChange={handleChange}></input>
                <button className='btn btn-primary'>Gos</button>
            </form>
        </div>
    )
}