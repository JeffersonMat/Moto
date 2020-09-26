import React from "react"

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




import { useStyles, MenuProps } from './Filter.styles'

const cities = ["Wellington", "Auckland", "Christchurch"]
const guests = [1, 2, 3, 4, 5]


export default function Filter({city, setCity, guest, setGuest, startDate, setStartDate, endDate, setEndDate}) {

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
        <div className={classes.formControlInput}>
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
        </div>
        <div className={classes.formControlInput}>
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
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
           <div className={classes.formControlInput}>
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
          </div>
           
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
        {/* <Button variant="contained" color="primary" className={classes.button}>
          Go
        </Button> */}
      </div>
    </div>
  )
}
