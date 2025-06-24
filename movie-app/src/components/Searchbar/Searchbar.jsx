import React from "react";
import TextField from '@mui/material/TextField';

const Searchbar = ({placeholder, onChange})=>{
    
    return (
        <TextField fullWidth placeholder={placeholder} id="fullWidth" />
    )
}
export default Searchbar;