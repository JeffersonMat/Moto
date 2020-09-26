import React from 'react'
import {ThemeProvider } from "@material-ui/core/styles"
import { HashRouter as Router, Route } from "react-router-dom"

import theme from '../theme/defaultTheme'

import { LandingPage } from './LandingPage'
import Logo from './logo/Logo'
import UserProfile from "./user/UserProfile"

const App = () => {
  
  return (
    <>
     
      <Router>
        <ThemeProvider theme={theme}>
          <UserProfile/>
          <Logo/>
          <LandingPage />
        </ThemeProvider>
      </Router>
    </>
  )
}

export default App
