import User from "./User";

const UsersList = (props) => {
    return (
        <div>
            <ul>
                {props.users.map(
                    user => (
                        <User key={user.id} name={user.name} age={user.age} />
                    )
                )}
            </ul>
        </div>
    );
}

export default UsersList;