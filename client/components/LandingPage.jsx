import React from 'react'
import Filter from './Filter'
import Listings from './Wellington/Listings'
import {MenuBook} from "@material-ui/icons";

export const LandingPage = () => {

    const [city, setCity] = React.useState("")
    const [guest, setGuest] = React.useState(1)
    const [startDate, setStartDate] = React.useState(null)
    const [endDate, setEndDate] = React.useState(null);

    return (
        <>
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
                city={city}
                guest={guest}
                startDate={startDate}
                endDate={endDate}
            />
        </>
    )
}