import React from 'react'
import { useStyles} from "./LogoStyle"

import Container from "@material-ui/core/Container"


const Logo = () => { 
 const classes = useStyles()
    return (
      <Container className={classes.containerLogo}>
    <img src={"../images/logo/moteLogo.png"}  />
      </Container>
    )

 }

 export default Logo