import React from "react"

import Avatar from "@material-ui/core/Avatar"
import {useStyles} from "./UserProfile.Style"


 const UserProfile =() => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Avatar alt="Jefferson" src={"../images/logo/photo.png"} />
    </div>
  )
 }

 export default UserProfile







