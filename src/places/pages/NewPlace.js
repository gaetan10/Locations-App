import React from "react";
import { useHistory } from "react-router-dom";
import Input from "../../shared/components/formElements/Input";

import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { useForm } from "../../shared/hooks/form-hook";
import Button from "../../shared/components/formElements/Button";
import './NewPlace.css'



function NewPlace() {
    const {isLoading, error, sendRequest} = useHttpClient();

    const [formState, inputHandler] = useForm(
        {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            },
            address: {
                value:'',
                isValid: false
            }
        },
            false
    )

   
    const history = useHistory();

    const addButtonHandler = async (event) => {
        event.preventDefault();
        //console.log(formState.inputs)
        try {

            await sendRequest('http://localhost:4000/api/places/new-place', 'POST', JSON.stringify({
                title: formState.inputs.title.value ,
                description: formState.inputs.description.value,
                address: formState.inputs.address.value ,
                image: formState.inputs.image.value,
                creator: 'u1'
            }),
            {'Content-Type': 'application/json'} );
            history.push('/u1/places')
            
        } catch (err) {}
     
    }

    return(
        <form className="place-form" onSubmit={addButtonHandler}> 
            <Input
            id='title'
            element='input'
            type='text'
            placeholder='ex: Montreal, Tokyo etc...'
            label='Title'
            errorText='Please enter a valid Title.'
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            />
            <Input
            id='address'
            element='input'
            type='text'
            placeholder='ex: 5210 rue saint denis'
            label='Address'
            errorText='Please enter a valid address.'
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            />
             <Input
            id='description'
            element='text-area'
            label='Description'
            errorText='Please enter a valid description.'
            validators={[]}
            onInput={inputHandler}
            />
             <Input
            id='image'
            element='input'
            type='text'
            placeholder='image url'
            label='image'
            errorText='Please enter a valid url.'
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            />
            
            <Button  type="submit" disabled={!formState.isValid} >ADD PLACE</Button>
        </form>
    )
};

export default NewPlace;