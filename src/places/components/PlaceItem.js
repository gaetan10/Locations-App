import React from "react";

import './PlaceItem.css';
import Card from "../../shared/components/Card";
import Button from "../../shared/components/formElements/Button";
import { useHttpClient } from "../../shared/hooks/http-hook";

function PlaceItem(props) {
    const {isLoading, error, sendRequest} = useHttpClient();

    const deleteButtonHandle = async () => {
        const placeId = props.id

        try {
            await sendRequest(`http://localhost:4000/api/places/${placeId}/delete-place`, 'DELETE');
            props.onDelete(props.id);  
        } catch (err) {}
    };

    return(
        <li className="place-item">
            <Card className="place-item__content">
                <div className="place-item__image">
                    <img src={props.image} alt={props.title} />
                </div>
                <div className="place-item__info">
                    <h2>{props.title}</h2>
                    <h3>{props.address}</h3>
                    <p>{props.description}</p>
                </div>
                <div className="place-item__actions">
                    <Button>VIEW ON MAP</Button>
                    <Button to={`/places/edit/${props.id}`}>EDIT</Button>
                    <Button onClick={deleteButtonHandle}>DELETE</Button>
                </div>
            </Card>
        </li>
    )

};

export default PlaceItem;