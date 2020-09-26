import React from "react"

import Listings from "./Wellington/TaproomBrewery"

import "date-fns"
import DateFnsUtils from "@date-io/date-fns"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers"
import { makeStyles } from "@material-ui/core/styles"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Button from "@material-ui/core/Button"
import Link from "@material-ui/core/Link"
import { isThisSecond } from "date-fns/esm"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
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
    top: '50%',

    width:"60%",
    padding: 20,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
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
    marginLeft: 10,
   
  },

  button: {
      marginLeft: 10,
      marginTop:5,
      alignItems: 'center',    
    "&:hover": {
      backgroundColor: "red",
    },
  },
}))
const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}


const cities = ["Wellington", "Auckland", "Christchurch"]
const guests = [1, 2, 3, 4, 5]


export default function SearchBar() {

    //States
    const [city, setCity] = React.useState("")
    const [guest, setGuest] = React.useState(0)
    const [startDate, setStartDate] = React.useState(null)
    const [endDate, setEndDate] = React.useState(null)
    
 
    const handleCityChange = (event) => {
    setCity(event.target.value)
  }
  
    const handleGuestChange = (event) => { 
    
    setGuest(event.target.value)
  }
    const handleStartDateChange = (date) => {
    setStartDate(date)
    }
    const handleEndDateChange = (date) => {
    setEndDate(date)
    }
   

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-name-label">Where</InputLabel>
          <Select
            labelId="demo-mutiple-name-label"
            id="demo-mutiple-name"
            value={city}
            onChange={handleCityChange}
            input={<Input />}
            MenuProps={MenuProps}
          >
            {cities.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-name-label">Who</InputLabel>
          <Select
            labelId="demo-mutiple-name-label"
            id="demo-mutiple-name"
            value={guest}
            onChange={handleGuestChange}
            input={<Input />}
            MenuProps={MenuProps}
          >
            {guests.map((guest) => (
              <MenuItem key={guest} value={guest}>
                {guest}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            label="Start"
            className={classes.datePicker}
            value={startDate}
            onChange={handleStartDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            label="End"
            className={classes.datePicker}
            value={endDate}
            onChange={handleEndDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
        <Button variant="contained" color="primary" className={classes.button}>
          Go
        </Button>
      </div>
    </div>
  )
}
