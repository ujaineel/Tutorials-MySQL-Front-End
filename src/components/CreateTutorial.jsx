import axios from 'axios';
import React, { useState } from 'react'
import { Button, Modal, Spinner } from 'react-bootstrap';

const CreateTutorial = ({setTutorials, ...props}) => {
    const [formState, setFormState] = useState({
        title: "",
        description: "",
        published: false
    });

    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        if (event.target.type !== "checkbox") {
            setFormState(oldForm => {
                return {
                    ...oldForm,
                    [name]: value
                }
            });
        }
        if (event.target.type === "checkbox") {
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
        setError("");
        setMessage("");
        setSubmitting(true);
        async function postTutorial() {
            await axios.post("https://experienced-rogue-avatar.glitch.me/api/tutorials", formState)
                .then(
                    setMessage("Submitted Tutorial")
                )
                .catch(err => {
                    console.log(err);
                    setError(err.message);
                });
        }

        setTimeout(() => {
            postTutorial();
            setSubmitting(false);
        }, 2500);
    }

    const handleClose = () => {
        setFormState({
            title: "",
            description: "",
            published: false
        });
        setError("");
        setMessage("");
        props.setShowCreateTutorial(false);
    }
    const handleShow = () => props.setShowCreateTutorial(true);

    return (
        <Modal show={props.showCreateTutorial} onHide={handleShow}>
            <Modal.Header>
                <Modal.Title>Create a Tutorial</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                    {submitting ? (
                        <Button type="submit" variant="primary">
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />Loading...)
                        </Button>
                    ) : (
                        <Button type="submit" variant="primary">
                            Submit
                        </Button>
                    )}
                    {message.length > 0 && <p style={{ color: "white"}}>{message}</p>}
                    {error.length > 0 && <p style={{ color: "red" }}>{error}</p>}
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button disabled={submitting} variant="primary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateTutorial