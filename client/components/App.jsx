import React from 'react'
import LandingPage from './Filter'
import {ThemeProvider } from "@material-ui/core/styles"
import Listings from './Wellington/Listings'
import { HashRouter as Router, Route } from "react-router-dom"

import theme from '../theme/defaultTheme'

const App = () => {
  
  return (
    <>
      <Router>

      <ThemeProvider theme ={theme} >
         <LandingPage/>
          <Listings />
        </ThemeProvider>
       
      </Router>

    </>
  )
}

export default App
