import {useState} from "react";

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

      if (Number(enteredAge) <= 0) {
          props.onShowModal(true);
          props.setModalHeader("Invalid input");
          props.setModalMessage("Please enter a valid age (> 0)");
          return
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
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label>Name</label>
                    <input type="text" value={enteredName} onChange={nameChangeHandler} />
                </div>
                <div>
                    <label>Age</label>
                    <input type="number" value={enteredAge} onChange={ageChangeHandler}/>
                </div>
                <div>
                    <button type="submit">Add User</button>
                </div>
            </div>
        </form>
    );
}

export default AddUser;