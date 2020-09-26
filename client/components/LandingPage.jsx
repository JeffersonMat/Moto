import React from "react"
import "date-fns"


import DateFnsUtils from "@date-io/date-fns"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers"


import { makeStyles, useTheme } from "@material-ui/core/styles"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Button from '@material-ui/core/Button';





const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
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

const names = [
  "Wellington",
  "Auckland",
  "Christchurch",
 
]

const guests = [1, 2, 3, 4, 5]




export default function SerachBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

   const handleChange = (event) => {
    setPersonName(event.target.value);
  };


      const [selectedDate, setSelectedDate] = React.useState(
        new Date("2014-08-18T21:11:54")
      )

      const handleDateChange = (date) => {
        setSelectedDate(date)
      }


    return (
      <div id= "search-bar-container">
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-name-label">Where</InputLabel>
          <Select
            labelId="demo-mutiple-name-label"
            id="demo-mutiple-name"
            value={personName}
            onChange={handleChange}
            input={<Input />}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                // style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-name-label">Who</InputLabel>
              <Select
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"

                value={personName}
                onChange={handleChange}
                input={<Input />}
                MenuProps={MenuProps}
              >
                {guests.map((guest) => (
                  <MenuItem
                    key={guest}
                    value={guest}
                    // style={getStyles(guest, personName, theme)}
                  >
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
            id="date-picker-inline"
            label="When"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        <Button variant="contained" color="primary" href="#contained-buttons">
          Go
        </Button>
        </MuiPickersUtilsProvider>

      </div>
    )
}

