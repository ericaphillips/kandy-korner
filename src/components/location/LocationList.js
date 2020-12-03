import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { Location } from "./Location"
import "./Location.css"

export const LocationList = () => {
    //This state changes when getLocations is invoked
    const { locations, getLocations } = useContext(LocationContext)

    //Component gets mounted to DOM
    //React renders blank HTML first, then gets data and re-renders
    useEffect(() => {
        console.log("LocationList: Initial render")
        getLocations()
    }, [])

    useEffect(() => {
        console.log("LocationList after state change")
        console.log(locations)
    }, [locations])

    return (
        <div className="locations">
            {
                locations.map(location => <Location key={location.id} location={location} />)
            }
        </div>
    )
}