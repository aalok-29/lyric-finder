
import TextField from '@mui/material/TextField';
import React,{useContext} from 'react'
import Box from '@mui/material/Box';
import {LyricsContext} from "../Helpers/context"


import Button from '@mui/material/Button';

const Search = () => {

  const{artist,setArtist,track,setTrack,setLyricsState,setSearchState}=useContext(LyricsContext)
    
  //function to validate user's search field
  const search=()=>
  {
      if(track==="" && artist==="")
       alert("Please enter Track and Artist name")
      else if(track==="")
       alert("Please enter Track name")
      else if(artist==="")
      alert("Please enter Artist name")
      else
      {
          //to show and search lyrics
          setSearchState(true)
          setLyricsState(true)
      }
  }

  return (
    <div>
       <h1>Search lyrics</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Song" variant="outlined" onChange={e=>{setSearchState(false);setTrack(e.target.value);}}/>
      <TextField id="filled-basic" label="Artist" variant="outlined" onChange={e=>{setSearchState(false);setArtist(e.target.value)}}/>
      
    </Box>

    <Button 
    onClick={()=>search()}
    variant="contained"
    >Find
    </Button>
    </div>
  )
}

export default Search
