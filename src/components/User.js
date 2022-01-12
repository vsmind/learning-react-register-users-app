import Card from "./Card";

const User = (props) => {
    return (
        <li>
            <Card>
                    <div>{props.name}</div>
                    <div>{props.age}</div>
            </Card>
        </li>
    );
}

export default User;