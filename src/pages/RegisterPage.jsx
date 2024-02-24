import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { request } from '../service/AxiosHelper';

const RegisterPage = () => {
    const [account,setAccount] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNo:''
    })
    const [user, setUser] = useState({
        username: '',
        password: '',
        role:'',
        account: account
    });

    const onSubmit = () => {
        console.log(user)
        // request(
        //     "POST",
        //     "/register/signup",
        //     user).then(
        //     (response) => {
        //         setAuthHeader(response.data.token);
                
        //         navigate('/login')
        //         alert("Account Created Successfully")
        //     }).catch(
        //     (error) => {
        //         setAuthHeader(null);
                
        //     }
        // );
    }

    const onChangeHandleUser = (e) => {
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    const onChangeHandleAccount = (e) => {
        setAccount((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <div style={{
            backgroundColor: 'white', color: 'black', width: '50%', height: '750px',
            borderRadius: '20px'
        }}>
            

            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
            <h2 style={{marginTop:'30px', marginLeft:'auto', marginRight:'auto'}}>User Registration Page </h2>
                <TextField name='firstName' style={{ width: '300px', marginBottom: '30px', marginLeft: 'auto', marginRight: 'auto',}} value={account.firstName}  label="First Name" variant="standard" onChange={onChangeHandleAccount} />
                <TextField name='lastName' style={{ width: '300px', marginBottom: '30px', marginLeft: 'auto', marginRight: 'auto' }}  value={account.lastName} label="Last Name" variant="standard"  onChange={onChangeHandleAccount}/>
                <TextField name='username' style={{ width: '300px', marginBottom: '30px', marginLeft: 'auto', marginRight: 'auto' }}  value={user.username} label="Username" variant="standard" onChange={onChangeHandleUser} />
                <TextField name='password' id="outlined-password-input" type="password" style={{ width: '300px', marginBottom: '30px', marginLeft: 'auto', marginRight: 'auto' }} value={user.password}  label="Password" variant="standard"  onChange={onChangeHandleUser}/>
                <TextField name='email' style={{ width: '300px', marginBottom: '30px', marginLeft: 'auto', marginRight: 'auto' }}  value={account.email} label="Email" variant="standard"  onChange={onChangeHandleAccount}/>
                <TextField name='contactNo' style={{ width: '300px', marginBottom: '30px', marginLeft: 'auto', marginRight: 'auto' }}  label="Contact No" variant="standard" value={account.contactNo}  onChange={onChangeHandleAccount}/>
                <TextField name='role' style={{ width: '300px', marginBottom: '30px', marginLeft: 'auto', marginRight: 'auto' }}  label="Role" variant="standard" value={user.role}  onChange={onChangeHandleUser}/>
                <Button onClick={onSubmit} style={{ width: '300px', marginBottom: '30px', marginLeft: 'auto', marginRight: 'auto' }} variant="contained" color="primary">
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default RegisterPage