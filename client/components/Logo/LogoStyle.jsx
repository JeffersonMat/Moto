import { makeStyles } from "@material-ui/core/styles"


export const useStyles = makeStyles((theme) => ({
  image: {
    
    alignItems: "center",
    justifyContent: "center",
  },
  containerLogo: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "translateX(35%)",
    webkitTransform: "translateX(35%)",
     marginTop:"5%",
  },
}))