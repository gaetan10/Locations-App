import React from "react";

import './PlaceList.css';
import PlaceItem from "./PlaceItem";

function PlaceList(props) {
console.log('losc', props.items)
    if (props.items.length === 0){
        return(
            <div className="place-list center">
                <h2>No places yet.</h2>
            </div>
        )
    }
    return(
        <ul className="place-list">
           {props.items.map((place) => {
            return(
                <li>
                    <PlaceItem 
                        key={place._id}
                        id = {place._id}
                        image= {place.image}
                        title = {place.title}
                        description={place.description}
                        address={place.address}
                        creatorId={place.creator}
                        coordinates={place.location}
                        onDelete={props.onDeletePlace}
                        />
                </li>
                )
           })} 

        </ul>
    )

};

export default PlaceList;