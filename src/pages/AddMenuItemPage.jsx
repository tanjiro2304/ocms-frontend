import { Button, TextField } from '@mui/material'
import React from 'react'

const AddMenuItemPage = () => {
  return (
    <div style={{
      backgroundColor: 'white', color: 'black', width: '1300px', height: '900px',
      borderRadius: '20px'
    }}>
      <h2>Add Menu Item </h2>

      <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
        <TextField style={{ width: '300px', marginBottom: '30px', marginLeft: 'auto', marginRight: 'auto' }} id="standard-basic" label="Item Name" variant="standard" />
        <TextField style={{ width: '300px', marginBottom: '30px', marginLeft: 'auto', marginRight: 'auto' }} id="standard-basic" label="Item Price " variant="standard" />
        <TextField style={{ width: '300px', marginBottom: '30px', marginLeft: 'auto', marginRight: 'auto' }} id="standard-basic" label="Quantity " variant="standard" />
        <Button style={{ width: '300px', marginBottom: '30px', marginLeft: 'auto', marginRight: 'auto' }} variant="contained" color="primary">
          Add
        </Button>
      </div>
    </div>

  )
}

export default AddMenuItemPage