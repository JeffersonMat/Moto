import React from 'react'
import SearchBar from './LandingPage'
import {ThemeProvider } from "@material-ui/core/styles"
import Listings from './Wellington/TaproomBrewery'
import { HashRouter as Router, Route } from "react-router-dom"

import theme from '../theme/defaultTheme'

const App = () => {
  
  return (
    <>
      <Router>

      <ThemeProvider theme ={theme} >
         <SearchBar/>
          <Listings />
        </ThemeProvider>
        </Router>
    </>
  )
}

export default App
