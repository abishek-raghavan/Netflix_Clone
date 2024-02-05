import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Navbar from './Navbar'
//bfded3ae7e78621272e257bfbde8e090

//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmRlZDNhZTdlNzg2MjEyNzJlMjU3YmZiZGU4ZTA5MCIsInN1YiI6IjY1YWIzYmY4NDU1N2EwMDEzNTdlYmQ5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZNIgi9J1T4AgqG_-aeRx0SydrH7cJs_iehBKKTRBXSY

function App() {

  return (
    <>
      <div className="app">
        {/** Nav*/}
       
        <Banner />
        <Navbar />
     
      <Row title='NETFILX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/> 
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romantic Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
      </div>
      
    </>
  )
}

export default App
