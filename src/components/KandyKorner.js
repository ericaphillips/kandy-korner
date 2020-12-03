import React from "react"
import "./KandyKorner.css"
import "./location/Location.css"
import { Location } from "./location/Location"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"

export const KandyKorner = () => (
    <>
        <h2>Kandy Korner</h2>
        <small>This spelling is awful and hurts me</small>
        <address>
            <div>If the name doesn't turn you away</div>
            <div>Come to 555 Candy Cane Lane</div>
        </address>

        <h2>Locations</h2>
        <article className="locations">
            <LocationProvider>
                <LocationList />
            </LocationProvider>
        </article>
    </>
)