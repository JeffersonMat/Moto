import React from 'react'
import { LandingPage } from './LandingPage'
import {ThemeProvider } from "@material-ui/core/styles"
import { HashRouter as Router, Route } from "react-router-dom"

import theme from '../theme/defaultTheme'

const App = () => {
  
  return (
    <>
      <Router>

          <ThemeProvider theme ={theme} >
             <LandingPage/>
        </ThemeProvider>
       
      </Router>

    </>
  )
}

export default App
