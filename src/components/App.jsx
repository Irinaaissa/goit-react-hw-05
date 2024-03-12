// import { useState } from 'react'

import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './Navigation/Navigation'
import HomePage from '../pages/HomePages/HomePage'
import MoviesPage from '../pages/MoviesPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage'
import MovieCast from './MovieCasts/MovieCast'
import MovieReviews from './MoviesReviews/MovieReviews'

function App() {
 

  return (
    <>
    
<Navigation/>
    <Routes>
    <Route path='/' element = {<HomePage/>}/>
    <Route path='/movies' element = {<MoviesPage/>}/>
   
    <Route path='/movies/:movieId' element = {<MovieDetailsPage/>}>

     <Route path='cast' element = {<MovieCast/>}/>
     <Route path='reviews' element = {<MovieReviews/>}/>

    </Route>
    <Route path='/*' element = {<NotFoundPage/>}/> 
    </Routes>
    </>
  )
}

export default App
