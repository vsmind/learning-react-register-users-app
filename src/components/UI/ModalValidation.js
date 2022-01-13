import Card from "./Card";
import Button from "./Button";

import classes from './ModalValidation.module.css';
import Wrapper from "../Helpers/Wrapper";

const ModalValidation = (props) => {

    const onCloseHandler = () => {
        props.onShowModal(false);
    }

    if (!props.showModal) {
        return null;
    }

    return (
        <Wrapper>
            <div className={classes.backdrop} onClick={onCloseHandler}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.modalHeader}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.modalMessage}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={onCloseHandler}>Okay</Button>
                </footer>
            </Card>
        </Wrapper>
    );
}

export default ModalValidation;