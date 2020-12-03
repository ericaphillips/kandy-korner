import React, { useState, useEffect } from "react"
//useEffect defines responses based on user action performed
//the context is imported and used by components that need data

//creates empty context
export const LocationContext = React.createContext()

//this component estanblishes what data can be used from Locationcontext
export const LocationProvider = (props) => {
    //useState helps store data to maintain state
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch ("http://localhost:8080/locations")
        .then(res => res.json())
        .then(setLocations)
    }

    const addLocation = location => {
        return fetch("http://localhost:8080/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
        .then(getLocations)
    }
    //child elements can access what is returned in return statement
    return (
        <LocationContext.Provider value={{
            locations, addLocation, getLocations
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}