import { useState } from 'react';
import { makeStyles,TextField, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../../store/actions'

function AddUser() {
    const [state, setState] = useState({
        name: '',
        email: '',
        contact: '',
        address: ''
    })
    const [error, setError] = useState('')
    const navigation = useNavigate()
    const { name, email, contact, address } = state
    let dispatch = useDispatch()

    const handleInputChange = (e) => {
        let { name, value } = e.target
        setState({...state, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !address || !email || !contact) {
            setError("Please input all input Field!")
        } else {
            dispatch(addUser(state))
            navigation('/')
            setError('')
        }
    }

    return (
        <div>
            {error && <h3 className='error'>{error}</h3>}
            <form onSubmit={handleSubmit} noValidate autoComplete="off" className='form'>
                <TextField id="standard-basic" label="Nome" name='name' value={name || ''} type="text" onChange={handleInputChange} className="item-form" />
                <TextField id="standard-basic" label="Email" name='email' value={email || ''} type="text" onChange={handleInputChange} className="item-form" />
                <TextField id="standard-basic" label="Contato" name='contact' value={contact || ''} type="number" onChange={handleInputChange} className="item-form" />
                <TextField id="standard-basic" label="Endereço" name='address' value={address || ''} type="text" onChange={handleInputChange} className="item-form" />
                <div className="item-form div-buttons">
                    <Button variant="contained" color="primary" type="submit" className='buttons'>Cadastrar</Button>
                    <Button variant="contained" color="primary" type="submit" className='buttons' onClick={() => navigation(`/`)}>Voltar</Button>
                </div>
            </form>
        </div>
    );
}

export default AddUser;