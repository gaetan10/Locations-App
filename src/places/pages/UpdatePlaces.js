import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import Input from "../../shared/components/formElements/Input";

import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { useForm } from "../../shared/hooks/form-hook";
import Button from "../../shared/components/formElements/Button";
import Card from '../../shared/components/Card';

import './NewPlace.css'
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


export const UpdatePlaces = () => {

    const [placeToEdit, setPlaceToEdit] = useState();
    const {isLoading, error, sendRequest} = useHttpClient();
    const placeId = useParams().placeId
    console.log('hello', placeId)

    const [formState, inputHandler, setFormData] = useForm(
        {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            },
        },
            false
    );


    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const responseData = await sendRequest(`http://localhost:4000/api/places/${placeId}`, 'GET');
                setPlaceToEdit(responseData.place);
                setFormData(
                    {
                        title: {
                            value: responseData.place.title,
                            isValid: true
                        },
                        description: {
                            value: responseData.place.description,
                            isValid: true
                        },
                    },
                        true
                );
                
            
            } catch (err) {}
            };
        fetchPlaces();
       
    },[sendRequest, placeId, setFormData]);

 
    {console.log('data fetched', placeToEdit)}
    
    const history = useHistory();

    const editButtonHandler = async (event) => {
        event.preventDefault();
       
       try {

        await sendRequest(`http://localhost:4000/api/places/${placeId}/edit`, 'PATCH',
        JSON.stringify({
          title: formState.inputs.title.value ,
          description: formState.inputs.description.value}),
       {
          "Content-Type" : "application/json"
      })


      history.push('/u1/places')
        
       } catch (err) {
       }
    }

    if (!placeToEdit) {
        return (
          <div className="center">
            <Card>
              <h2>Could not find place!</h2>
            </Card>
          </div>
        );
      }



    return(
       
        <React.Fragment>
        {placeToEdit && (
            <form className="place-form" onSubmit={editButtonHandler}> 
            <Input
            id='title'
            element='input'
            type='text'
            placeholder='ex: Montreal, Tokyo etc...'
            label='Title'
            errorText='Please enter a valid Title.'
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            initialValue = {placeToEdit.title}
            />
             {console.log('comonent rendered')}
             <Input
            id='description'
            element='text-area'
            label='Description'
            errorText='Please enter a valid description.'
            validators={[]}
            onInput={inputHandler}
            initialValue = {placeToEdit.description}
            />

            
            <Button  type="submit" disabled={!formState.isValid} >EDIT PLACE</Button>
        </form>
    )}
    </React.Fragment>
    )




}