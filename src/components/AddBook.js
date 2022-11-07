import React from 'react'
import Axios from 'axios'

export default function AddBook(props){
    const [formData, setFormData] = React.useState({
        'name' : '',
        'category': '',
        'img' : null,
        'author' : '',
        'pubDate' : '',
        'currentNumber': 0,
        'allNumber': 0,
    })

    function handleChange(event) {
        const {name, value, type, files} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "img" ? URL.createObjectURL(files[0]) : value,
            }
        })
    }

    React.useEffect(()=> {
        setFormData((prevFormData)=> {return {...prevFormData, 'currentNumber': formData['allNumber']}})
    }, [formData])


    async function handleSubmit(event) {
        event.preventDefault()
        props.setbooks(prevUsers => [formData, ...prevUsers])
        var uri = 'http://localhost:5000/addBook'
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
                <input name='name' type={'text'} className='form-control' onChange={handleChange}></input> <br />
                Kategoriyasy: <br />
                <select name='category' onChange={handleChange}>
                    <option>Sayla</option>
                    <option>Kategoriya 1</option>
                    <option>Kategoriya 2</option>
                    <option>Kategoriya 3</option>
                    <option>Kategoriya 4</option>
                </select> <br />
                Suraty: <br />
                <input name='img' type={'file'} className='form-control' onChange={handleChange}></input> <br />
                Awtory: <br />
                <input name='author' onChange={handleChange}></input> <br />
                Cap edilen senesi: <br />
                <input name='pubDate' type='date' onChange={handleChange}></input> <br />
                Mukdary: <br />
                <input name='allNumber' type={'number'} className='form-control' onChange={handleChange}></input> <br />
                <button className='btn btn-primary'>Gos</button>
            </form>
        </div>
    )
}