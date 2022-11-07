import React from 'react'
import Axios from 'axios'

export default function AddBook(props){
    const [formData, setFormData] = React.useState({
        'name' : '',
        'fakultet': '',
        'profession': '',
        'birthDate': '',
        'address': '',
        'phoneNumber': ''
    })

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value,
            }
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        props.setUsers(prevUsers => [formData, ...prevUsers])
        var uri = 'http://localhost:5000/addUser'
        Axios.post(uri, {
            name: formData.name,
            fakultet: formData.fakultet,
            profession: formData.profession,
            birthDate: formData.birthDate,
            address: formData.address,
            phoneNumber: formData.phoneNumber
        })

        props.setCurrentPage('users')
    }


    return(
        <div>
            <form className='form-group' onSubmit={handleSubmit}>
                Ady: <br />
                <input name='name' type={'text'} className='form-control' onChange={handleChange}></input><br />
                Fakulteti: <br />
                <select name='fakultet' onChange={handleChange}>
                    <option>Sayla</option>
                    <option>Fakultet 1</option>
                    <option>Fakultet 2</option>
                    <option>Fakultet 3</option>
                    <option>Fakultet 4</option>
                </select><br />
                Hunari: <br />
                <input name='profession' onChange={handleChange}></input><br />
                Doglan senesi: <br />
                <input name='birthDate' type='date' onChange={handleChange}></input> <br />
                Yasayan yeri: <br />
                <input name='address' onChange={handleChange}></input> <br />
                Telefon Nomeri: <br />
                <input name='phoneNumber' type='text' className='form-control' onChange={handleChange}></input> <br />
                <button className='btn btn-primary'>Gos</button>
            </form>
        </div>
    )
}