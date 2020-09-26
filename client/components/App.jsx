import React from 'react'
import LandingPage from './Filter'
import BookingPage from './BookingPage'

import { ThemeProvider } from "@material-ui/core/styles"
import Listings from './Listings'
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
        
        <Route path="/booking" component={BookingPage}/>
      </Router>

    </>
  )
}

export default App
