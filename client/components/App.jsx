import React from 'react'
import {ThemeProvider } from "@material-ui/core/styles"
import { HashRouter as Router, Route } from "react-router-dom"

import theme from '../theme/defaultTheme'

import { LandingPage } from './LandingPage'
import  Logo  from './Logo/Logo'

const App = () => {
  
  return (
    <>
     
      <Router>
        <ThemeProvider theme={theme}>
          <Logo/>
          <LandingPage />
        </ThemeProvider>
      </Router>
    </>
  )
}

export default App
