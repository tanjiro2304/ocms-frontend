import { Button, TextField } from '@mui/material'
import React from 'react'

const RegisterPage = () => {
    return (
        <div style={{
            backgroundColor: 'white', color: 'black', width: '100%', height: '650px',
            borderRadius: '20px'
        }}>
            

            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
            <h2 style={{marginTop:'30px', marginLeft:'auto', marginRight:'auto'}}>User Registration Page </h2>
                <TextField style={{ width: '300px', marginBottom: '30px', marginLeft: 'auto', marginRight: 'auto' }} id="standard-basic" label="First Name" variant="standard" />
                <TextField style={{ width: '300px', marginBottom: '30px', marginLeft: 'auto', marginRight: 'auto' }} id="standard-basic" label="Last Name" variant="standard" />
                <TextField style={{ width: '300px', marginBottom: '30px', marginLeft: 'auto', marginRight: 'auto' }} id="standard-basic" label="Username" variant="standard" />
                <TextField id="outlined-password-input" type="password" style={{ width: '300px', marginBottom: '30px', marginLeft: 'auto', marginRight: 'auto' }}  label="Password" variant="standard" />
                <TextField style={{ width: '300px', marginBottom: '30px', marginLeft: 'auto', marginRight: 'auto' }} id="standard-basic" label="Email" variant="standard" />
                <TextField style={{ width: '300px', marginBottom: '30px', marginLeft: 'auto', marginRight: 'auto' }} id="standard-basic" label="Contact No" variant="standard" />
                <Button style={{ width: '300px', marginBottom: '30px', marginLeft: 'auto', marginRight: 'auto' }} variant="contained" color="primary">
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default RegisterPage