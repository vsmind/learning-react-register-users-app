import {useRef} from "react";
import Card from "../UI/Card";

import classes from './AddUser.module.css';
import Button from "../UI/Button";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const eName = nameInputRef.current.value;
        const eAge = ageInputRef.current.value;

        if (eName.trim().length === 0 || eAge.length === 0) {
            props.onShowModal(true);
            props.setModalHeader("Invalid input");
            props.setModalMessage("Please enter a valid name and age (non-empty values)");
            return;
        }

        if (Number(eAge) <= 0) {// we can use +enteredAge to convert value to number
            props.onShowModal(true);
            props.setModalHeader("Invalid age");
            props.setModalMessage("Please enter a valid age (> 0)");
            return;
        }

        const newUser = {
            id: Math.random(),
            name: eName,
            age: eAge,
        };

        props.onAddUser(newUser);

        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Name</label>
                <input id="username" type="text" ref={nameInputRef}/>
                <label htmlFor="age">Age</label>
                <input id="age" type="number" ref={ageInputRef}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;