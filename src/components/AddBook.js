import React, { useId } from 'react'

export default function AddBook(props){
    const [formData, setFormData] = React.useState({
        'id' : useId(),
        'img' : null,
        'name' : '',
        'about' : '',
        'page_number': 0,
        'currentNumber': 0,
        'allNumber': 0,
    })

    function handleChange(event) {
        const {name, value, type, files} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "img" ? URL.createObjectURL(files[0]) : value,
                'currentNumber': prevFormData['allNumber']
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.setBooks(prevBooks => [formData, ...prevBooks])
        props.setCurrentPage('books')
    }

    return(
        <div>
            <form className='form-group' onSubmit={handleSubmit}>
                Suraty: <br />
                <input name='img' type={'file'} className='form-control' onChange={handleChange}></input>
                Ady: <br />
                <input name='name' type={'text'} className='form-control' onChange={handleChange}></input>
                Hakynda: <br />
                <textarea name='about' className='form-control' onChange={handleChange}></textarea>
                Sahypa sany: <br />
                <input name='page_number' type={'number'} className='form-control' onChange={handleChange}></input>
                Mukdary: <br />
                <input name='allNumber' type={'number'} className='form-control' onChange={handleChange}></input>
                <button className='btn btn-primary'>Gos</button>
            </form>
        </div>
    )
}