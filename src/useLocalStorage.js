import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue){
    const [result, setResult] = useState(initialValue);

    useEffect(() => {
        try{
            const localStorageItems = localStorage.getItem(itemName);
            let parsedItem = initialValue;

            if(localStorageItems){
                parsedItem = JSON.parse(localStorageItems);
            }else{
                localStorage.setItem(itemName, JSON.stringify(initialValue));
            }
            setResult(parsedItem);
        }catch(err){
            setResult(initialValue);
        }
    }, []);

    const handleClick = (value) => {
        setResult(
            {...result,
                operacionMostrar: result.operacionMostrar.concat(value.target.name)
            }
        )
    }

    const clearInput = () => {
        setResult(
            {...result,
                operacionMostrar: '',
                operacionResultado: ''
            }
        )
    }

    const deleteClick = () => {
        setResult(
            {...result,
                operacionMostrar: result.operacionMostrar.slice(0, -1)
            }
        )
    }

    const uploadOperation = (value) => {
        let _index = value.indexOf("=");
        setResult(
            {...result,
                operacionMostrar :  value.slice(0, _index),
                operacionResultado: value.slice(_index + 1, value.length),
            }
        )
    }

    const handleClickOperation = (value) => {
        setResult(
            {...result,
                operacionMostrar :  String(result.operacionMostrar.concat(value.target.name)),
                operacionResultado: result.operacionMostrar
            }
        )
    }

    const isOperator = (value) => {
        let _isOperator = false;
        let _lastItem = value.substring(value.length-1, value.length);
        if(_lastItem == '-' || _lastItem == '+' || _lastItem == '*' || _lastItem == '/'){
            _isOperator = true
        }
        return _isOperator;
    };

    const handleResult = () => {
        if(!isOperator(result.operacionMostrar)){
            const newStatus = {...result,
                operacionMostrar :  String(eval(result.operacionMostrar)),
                operacionResultado: eval(result.operacionMostrar),
                showModal: false,
                operationsList:  String(result.OperationsList.push(result.operacionMostrar.concat(' ').concat('=').concat(' ').concat(eval(result.operacionMostrar))))
            }
            setResult(newStatus);
            localStorage.setItem(itemName, JSON.stringify(newStatus));
        }else{
            const newStatus = {...result,
                showModal: !result.showModal,
            }
            setResult(newStatus);
            localStorage.setItem(itemName, JSON.stringify(newStatus));
        }
    }


    const handleShowModalClick = () => {
        setResult({
            ...result,
            showModal: !result.showModal
        });
        
    }


    return {result, setResult, handleClick, clearInput, deleteClick, handleResult,handleClickOperation, handleShowModalClick,uploadOperation};
}

export default useLocalStorage;