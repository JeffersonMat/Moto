import { makeStyles } from "@material-ui/core/styles";

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
export const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}


export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100vw",
    backgroundColor: "#FFD966",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: "white",
    transform: "translateX(30%)",
    transform: "translateX(30%)",
    borderRadius: 38,
    top: "50%",
    width: "60%",
    padding: 20,
    boxShadow:
          "0px 16px 32px rgba(0, 0, 0, 0.15), 0px 3px 8px rgba(0, 0, 0, 0.1)",
    overflow:"scroll"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  formControlInput: {
    borderRight: "solid 0.5px 	#D3D3D3",
    paddingRight: 20,
    paddingLeft: 20,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  datePicker: {
    marginTop: 8,
    marginLeft: 20,
  },

  button: {
    marginLeft: 10,
    marginTop: 5,
    alignItems: "center",
    "&:hover": {
      backgroundColor: "red",
    },
  },
}))