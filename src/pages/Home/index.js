import { useEffect } from 'react'
import { withStyles, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteUser, loadUsers } from '../../store/actions'
import './styles.css'

function Home() {
    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    const useStyles = makeStyles({
        button: {
            marginLeft: 10
        },
        table: {
            minWidth: 900
        }
    });

    const classes = useStyles();
    let dispatch = useDispatch()
    const { users } = useSelector(state => state.data)
    const navigation = useNavigate()

    const handleDelete = (id) => {
        if (window.confirm("Confirmar deleção de usuário?")) {
            dispatch(deleteUser(id))
        }
    }

    useEffect(() => {
        dispatch(loadUsers())
    }, [])

    return (
        <div className='home-container'>
            <div className='div-title'>
                <h1>Consulta Usuários</h1>
                <Button variant="contained" color="primary" onClick={() => navigation(`/add-user`)}>Adicionar usuários</Button>
            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Nome</StyledTableCell>
                            <StyledTableCell align="center">Email</StyledTableCell>
                            <StyledTableCell align="center">Contato</StyledTableCell>
                            <StyledTableCell align="center">Endereço</StyledTableCell>
                            <StyledTableCell align="center">Ações</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users && users.map((user) => (
                            <StyledTableRow key={user.id}>
                                <StyledTableCell component="th" scope="row">
                                    {user.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{user.email}</StyledTableCell>
                                <StyledTableCell align="center">{user.contact}</StyledTableCell>
                                <StyledTableCell align="center">{user.address}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <Button variant="contained" color="primary" onClick={() => navigation(`/edit-user/${user.id}`)}>Editar</Button>
                                    <Button variant="contained" color="secondary" className={classes.button} onClick={() => handleDelete(user.id)}>Excluir</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Home;