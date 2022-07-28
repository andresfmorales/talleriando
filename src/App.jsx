import React from 'react';
import Calculadora from './Calculadora';
import ItemOperation from './ItemOperation';
import Modal from './Modal';
import Operations from './Operations';
import './style/style.css';
import useLocalStorage from './useLocalStorage';

const App = () => {

    const {result, handleClick, clearInput, deleteClick, handleResult, handleClickOperation, handleShowModalClick,uploadOperation} = useLocalStorage('CALCULADORA_V1', {
        OperationsList: [],
        operacionMostrar: ' ',
        operacionResultado: ' ',
        showModal: false
    });
   
    return (
        //Fragment
        <> 
            <div className="container">
                <h2 className="title">Calculadora Talleriando </h2>
            </div>
            <div className='calculator'>
                <Calculadora
                            parentStatus={result}
                            handleClick={handleClick}
                            clearInput={clearInput}
                            deleteClick={deleteClick}
                            handleResult={handleResult}
                            handleClickOperation={handleClickOperation}>
                </Calculadora>
            </div>
            <div className='calculator'>
                <Operations
                            parentStatus={result}><ul>
                            { result.OperationsList.map((item, index) => (
                                <ItemOperation 
                                    key = {'ItemOperation' + index}
                                    item={item} 
                                    index={index}
                                    uploadOperation={uploadOperation}/>
                            ))}
                        </ul>
                </Operations>
            </div>
            
            <Modal 
                    parentStatus={result} 
                    handleShowModalClick={handleShowModalClick}>
            </Modal>
        </>
    );
            
}

export default App;
