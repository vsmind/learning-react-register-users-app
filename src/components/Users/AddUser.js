import {useState} from "react";
import Card from "../UI/Card";

import classes from './AddUser.module.css';
import Button from "../UI/Button";

const AddUser = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (enteredName.trim().length === 0 || enteredAge.length === 0) {
            props.onShowModal(true);
            props.setModalHeader("Invalid input");
            props.setModalMessage("Please enter a valid name and age (non-empty values)");
            return;
        }

        if (Number(enteredAge) <= 0) {// we can use +enteredAge to convert value to number
            props.onShowModal(true);
            props.setModalHeader("Invalid age");
            props.setModalMessage("Please enter a valid age (> 0)");
            return;
        }

        const newUser = {
            id: Math.random(),
            name: enteredName,
            age: enteredAge,
        };

        props.onAddUser(newUser);

        setEnteredName('');
        setEnteredAge('')
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Name</label>
                <input id="username" type="text" value={enteredName} onChange={nameChangeHandler}/>
                <label htmlFor="age">Age</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;