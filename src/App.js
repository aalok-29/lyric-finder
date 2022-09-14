import React,{useState} from 'react'
import Navbar from './components/Navbar';
import Search from './components/Search';
import Lyrics from './components/lyrics';
import {LyricsContext} from "./Helpers/context"

function App() {

//state to store artist searched
const[artist,setArtist]=useState("")
//state to store track searched
const[track,setTrack]=useState("")
//state to store whether we want to show lyrics
const[lyricsState,setLyricsState]=useState(false )
//state to store whether user has searched for a new lyrics
const[searchState,setSearchState]=useState(false)

 return(<>
    <LyricsContext.Provider value={{artist,setArtist,track,setTrack,lyricsState,setLyricsState,searchState,setSearchState}}>
        <Navbar/>
        <Search/>
        {lyricsState && <Lyrics/>}
      </LyricsContext.Provider>
    </>
 )
 
}

export default App;
