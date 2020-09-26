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
    marginTop: "5%",
  },
  text: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: "70%",
    color: "#fff",
    fontSize: "50px",
    textAlign: "center",
    transform: "translateX(-3%)",
    webkitTransform: "translateX(-3%)",
    textShadow:
      "0px 16px 32px rgba(0, 0, 0, 0.15), 0px 3px 8px rgba(0, 0, 0, 0.1)",
  },
}))