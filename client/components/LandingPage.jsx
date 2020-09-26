import React from 'react'
import Filter from './Filter'
import Listings from './Listings'
import { MenuBook } from "@material-ui/icons";
import data from "../data.json"

import { useStyles} from './LandingPage.Style'

export const LandingPage = () => {

    const [city, setCity] = React.useState("")
    const [guest, setGuest] = React.useState(1)
    const [startDate, setStartDate] = React.useState(null)
    const [endDate, setEndDate] = React.useState(null);
    
    const listings = data.filter((space) => space.city === city)
  const classes = useStyles()
    return (
        <div className={classes.root} >
            <Filter
                city={city}
                setCity={setCity}
                guest={guest}
                setGuest={setGuest}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
            />
            <Listings
                listings={listings}
                visible={ city || startDate || endDate }
                city={city}
                guest={guest}
                startDate={startDate}
                endDate={endDate}
            />
        </div>
    )
}