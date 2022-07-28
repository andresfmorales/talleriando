import React from 'react'

const Operations = ({children}) => {

    return (
        <div className='content-list'>
            <div>Historico Operaciones</div>
            {children}
        </div>
    )
}

export default Operations;