import React from 'react';
import './style/calculadora.css';

const Modal = (props) => {
    const {parentStatus, handleShowModalClick} = props;
    const {showModal} = parentStatus;
    return showModal ? (
        <div className={"modal active"} >
            <div className="modal-contenido">
                <div className="modal-header">
                    <a href="#" onClick={(e) => {
                        e.preventDefault(); 
                        handleShowModalClick(); 
                        }}
                        >
                            X
                    </a>
                </div>
                <div className="modal-body">
                    <p>Operacion invalida</p>
                </div>
                <button type="button" className="close" onClick={() => {
                    handleShowModalClick();
                }}>
                    Cerrar Modal
                </button>
            </div>
        </div>
    ) : null;
}

export default Modal;