import React, { useState } from 'react'
import './style/calculadora.css';

const Calculadora = (props) => {
    const {parentStatus, handleClick,clearInput, deleteClick, handleResult, handleClickOperation} = props;

    return (
        //Fragment
        <> 
            
            <div className="container">
                <div className="operation">
                    <p>{parentStatus.operacionMostrar}</p>
                    <div className="operation">
                        <p>{parentStatus.operacionResultado}</p>
                    </div>
                </div>
                <br/>
                <br/>
                <button className="button button-equals" onClick={() => { deleteClick(); }}> Delete</button>
                <button className="button button-equals" onClick={() => { clearInput(); }}> AC </button>
                <br/>
                <button className="button" name="7" onClick={(e) => { handleClick(e); }}> 7</button>
                <button className="button" name="8" onClick={(e) => { handleClick(e); }}> 8</button>
                <button className="button" name="9" onClick={(e) => { handleClick(e); }}> 9</button>
                <button className="button button-operator" name="+" onClick={(e) => { handleClickOperation(e); }}> +</button> 
                <br/>
                <button className="button" name="4" onClick={(e) => { handleClick(e); }}> 4</button> 
                <button className="button" name="5" onClick={(e) => { handleClick(e); }}> 5</button> 
                <button className="button" name="6" onClick={(e) => { handleClick(e); }}> 6</button> 
                <button className="button button-operator"  name="-" onClick={(e) => { handleClickOperation(e); }}> -</button> 
                <br/>
                <button className="button" name="1" onClick={(e) => { handleClick(e); }}> 1</button> 
                <button className="button" name="2" onClick={(e) => { handleClick(e); }}> 2</button> 
                <button className="button" name="3" onClick={(e) => { handleClick(e); }}> 3</button> 
                <button className="button button-operator" name="*" onClick={(e) => { handleClickOperation(e); }}> *</button> 
                <br/>
                <button className="button" name="0" onClick={(e) => { handleClick(e); }}> 0</button> 
                <button className="button button-equals" onClick={(e) => { handleResult(); }}> =</button> 
                <button className="button button-operator" name="/"onClick={(e) => { handleClickOperation(e); }}> /</button>
            </div>
        </>
    )
}

export default Calculadora;