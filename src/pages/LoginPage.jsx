import { Button, TextField } from '@mui/material'
import React from 'react'

const LoginPage = () => {
    return (
        <div className='login'
            style={{ backgroundColor: 'white', color: 'black', width: '500px', height: '400px',
            flexDirection:'column', display: 'flex', justifyContent: 'center', alignSelf: 'center',
             alignItems: 'center', borderRadius: '50px' }}>
            <h3 style={{padding:'0px', margin:'0px'}}>Login Page</h3>
            <TextField style={{marginTop:'25px', width:'300px'}} id="outlined-basic" label="Username" variant="standard" />
            <TextField style={{marginTop:'25px',width:'300px'}} id="outlined-basic" label="Password" variant="standard" />
            <Button style={{marginTop:'25px', width:'150px'}}  variant="contained" color="primary">
                Login
            </Button>
        </div>
    )
}

export default LoginPage