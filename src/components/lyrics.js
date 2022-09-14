import React,{useState,useContext} from 'react';
import axios from 'axios';
import {LyricsContext} from "../Helpers/context";
// import '../styles/lyrics.css'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../App.css';

function Lyrics() {
    //creationg a state to store the lyrics of a song
    const[lyrics,setLyrics]=useState("Loading...")

    //to use contesxt
    const{artist,track,searchState,setLyricsState}=useContext(LyricsContext)

        //function to frtch data from API
        function getlyrics()
        {
            axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${track}&q_artist=${artist}&apikey=1538e2542ebac4878de127b5193d9854`).then(res => {
           setLyrics(res.data.message.body.lyrics.lyrics_body);
        })
        .catch(err => {console.log(err);setLyrics("An ERROR occured please try again")})
        console.log("done")
        }
        //to check if user has searched for a new lyrics
        if(searchState===true)
        {
           getlyrics();
        }
    return (
        <div className="lyrics">
            <Box sx={{ flexGrow: 8 }}>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
             {track}<br/> {artist}<br/>
          </Typography>
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {lyrics}
          </Typography>
          
            <Button onClick={()=>setLyricsState(false)} variant="contained">CLOSE &#10006;</Button>
            </Box>
        </div>
    )
}

export default Lyrics
