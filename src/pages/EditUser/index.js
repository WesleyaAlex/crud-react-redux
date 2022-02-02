import { useState, useEffect } from 'react';
import { makeStyles,TextField, Button } from '@material-ui/core';
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser, getSingleUser } from '../../store/actions'
import './styles.css'

function EditUser() {
    const {  user } = useSelector(state => state.data)
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
    let { id } = useParams()

    const handleInputChange = (e) => {
        let { name, value } = e.target
        setState({...state, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !address || !email || !contact) {
            setError("Please input all input Field!")
        } else {
            dispatch(updateUser(state, id))
            navigation('/')
            setError('')
        }
    }

    useEffect(() => {
        dispatch(getSingleUser(id))
    }, [])

    useEffect(() => {
        if (user) {
            setState({...user})
        }
    }, [user])

    return (
        <div>
            {error && <h3 className='error'>{error}</h3>}
            <form onSubmit={handleSubmit} noValidate autoComplete="off" className='form'>
                <TextField id="standard-basic" label="Nome" name='name' value={name || ''} type="text" onChange={handleInputChange} className="item-form" />
                <TextField id="standard-basic" label="Email" name='email' value={email || ''} type="text" onChange={handleInputChange} className="item-form" />
                <TextField id="standard-basic" label="Contato" name='contact' value={contact || ''} type="number" onChange={handleInputChange} className="item-form" />
                <TextField id="standard-basic" label="Endereço" name='address' value={address || ''} type="text" onChange={handleInputChange} className="item-form" />
                <div className="item-form div-buttons">
                    <Button variant="contained" color="primary" type="submit" className='buttons'>Alterar</Button>
                    <Button variant="contained" color="primary" type="submit" className='buttons' onClick={() => navigation(`/`)}>Voltar</Button>
                </div>
            </form>
        </div>
    );
}

export default EditUser;