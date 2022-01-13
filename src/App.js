import {useState} from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import ModalValidation from "./components/UI/ModalValidation";

const USERS_LIST = [
  {
    id: "1",
    name: "Jim Holden",
    age: 30,
  }
];

function App() {
  const [users, setUsers] = useState(USERS_LIST);
  const [modalHeader, setModalHeader] = useState(false);
  const [modalMessage, setModalMessage] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const addUserHandler = (newUser) => {
    setUsers((prevState => {
      return [newUser, ...prevState];
    }));
  };

  const showModalHandler = (show) => {
    setShowModal(show)
  };

  return (
    <div>
      <ModalValidation
          showModal={showModal}
          modalHeader={modalHeader}
          modalMessage={modalMessage}
          onShowModal={showModalHandler} />
      <AddUser
          onAddUser={addUserHandler}
          onShowModal={showModalHandler}
          setModalHeader={setModalHeader}
          setModalMessage={setModalMessage} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
