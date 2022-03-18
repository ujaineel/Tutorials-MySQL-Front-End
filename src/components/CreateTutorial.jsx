import axios from 'axios';
import React, { useState } from 'react'

const CreateTutorial = (props) => {
    const [formState, setFormState] = useState({
        title: "",
        description: "",
        published: true
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        if (event.target.type !== "checkbox"){
            setFormState(oldForm => {
                return {
                    ...oldForm,
                    [name]: value
                }
            });    
        } 
        if (event.target.type === "checkbox"){
            setFormState(oldForm => {
                return {
                    ...oldForm,
                    [name]: !oldForm.published
                }
            });
        }
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        async function postTutorial(){
            await axios.post("https://dented-dashing-mountain.glitch.me/api/tutorials", formState)
            .catch(err => {
                console.log(err);
            });
        }

        postTutorial();

        alert(JSON.stringify(formState));
    }

    return (
        <form className="container d-flex flex-column" onSubmit={e => onSubmitHandler(e)}>
            <div className="mb-3">
                <label 
                    htmlFor="createFormTitle" 
                    className="form-label" 
                    name="title"
                >
                    Title
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="createFormTitle" 
                    name="title" 
                    value={formState.title}
                    onChange={onChangeHandler} 
                />
            </div>
            <div className="mb-3">
                <label 
                    htmlFor="createFormDescription" 
                    className="form-label" 
                    name="description"
                >
                    Description
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="createFormDescription" 
                    name="description" 
                    value={formState.description}
                    onChange={onChangeHandler} 
                />
            </div>
            <div className="mb-3 form-check">
                <input 
                    type="checkbox" 
                    className="form-check-input" 
                    id="createFormPublished" 
                    name="published" 
                    checked={formState.published}
                    onChange={onChangeHandler} 
                />
                <label 
                    htmlFor="createFormPublished" 
                    className="form-check-label" 
                    name="published"
                >
                    Published
                </label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default CreateTutorial