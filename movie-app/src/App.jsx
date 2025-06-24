import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Dashboard from './views/Dashboard/Dashboard'
import { useQuery } from '@tanstack/react-query'


function App() {
  const apiKey = import.meta.env.VITE_API_KEY
  const { isPending, error, data } = useQuery({
    queryKey: ["movies-list"],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
      ).then((res) => res.json()),
    //.then(d=>setMovieList(d))
  });
  return (
    <>
      
     <Header/>
      <Dashboard data ={data}/>
    </>
  )
}

export default App
