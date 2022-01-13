import Card from "./Card";
import Button from "./Button";
import Wrapper from "../Helpers/Wrapper";

import classes from './ModalValidation.module.css';
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return (<div className={classes.backdrop} onClick={props.onClick}/>)
};

const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.modalHeader}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.modalMessage}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onClick}>Okay</Button>
            </footer>
        </Card>
    );
};

const ModalValidation = (props) => {
    if (!props.showModal) {
        return null;
    }

    const onCloseHandler = () => {
        props.onShowModal(false);
    }

    return (
        <Wrapper>
            {
                ReactDOM.createPortal(<Backdrop onClick={onCloseHandler}/>, document.getElementById('backdrop-root'))
            }
            {
                ReactDOM.createPortal(<ModalOverlay modalHeader={props.modalHeader} modalMessage={props.modalMessage} onClick={onCloseHandler}/>, document.getElementById('overlay-root'))
            }
        </Wrapper>
    );
}

export default ModalValidation;