import React from 'react';
import './style/calculadora.css';

const ItemOperation = ({item, uploadOperation}) => {
  return (
        <>
            <li>
                <span>
                    {item}
                </span>
                <button className='load-operation' onClick={() => {
                        uploadOperation(item);
                    }}> Devolver Operacion
                </button>
            </li>
        </>
        
  )
}

export default ItemOperation;