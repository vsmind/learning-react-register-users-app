import './ModalValidation.css';

const ModalValidation = (props) => {

    const onCloseHandler = () => {
        props.onShowModal(false);
    }

    if (!props.showModal) {
        return null;
    }

    return (
        <div className="modal">
            <div>
                <h1>{props.modalHeader}</h1>
            </div>
            <div>
                <h1>{props.modalMessage}</h1>
            </div>
            <div>
                <button onClick={onCloseHandler}>Okay</button>
            </div>
        </div>
    );
}

export default ModalValidation;