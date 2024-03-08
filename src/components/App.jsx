// import { useState } from 'react'

import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './Navigation/Navigation'
import HomePage from '../pages/HomePage'
import MoviesPage from '../pages/MoviesPage'
import NotFoundPage from '../pages/NotFoundPage'
import MovieDetailsPage from '../pages/MovieDetailsPag'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
<Navigation/>
    <Routes>
    <Route path='/' element = {<HomePage/>}/>
    <Route path='/movies' element = {<MoviesPage/>}/>
    <Route path='/movies/:movieId' element = {<MovieDetailsPage/>}/>
    <Route path='/*' element = {<NotFoundPage/>}/> 
    </Routes>
    </>
  )
}

export default App
