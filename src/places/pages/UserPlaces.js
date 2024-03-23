import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import PlaceList from "../components/PlaceList";
import { useHttpClient } from "../../shared/hooks/http-hook";

    function UserPlaces() {
        const [loadedPlaces, setLoadedPlaces] = useState([]);
        const {isLoading, error, sendRequest} = useHttpClient();
        
        const userId = useParams().userId   
        
        useEffect(() => {
            const fetchPlaces = async () => {
                try {
                    const responseData = await sendRequest(`http://localhost:4000/api/places/user/${userId}`, 'GET');
                    setLoadedPlaces(responseData.places);
                } catch (err) {}
                };
            fetchPlaces();

        },[sendRequest, userId]);

       
            const onDeletePlace = (deletedPlaceId) => {
               
                setLoadedPlaces(prevLoadedPlaces => 
                    prevLoadedPlaces.filter(place => 
                        
                        place._id !== deletedPlaceId
                    )
                );
                
            }

      
            
        return (
        <div>
            <PlaceList
                items={loadedPlaces}
                onDeletePlace={onDeletePlace}>
             </PlaceList>
        </div>   
        )

};

export default UserPlaces;