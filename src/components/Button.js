import React, { Components } from 'react';
import PropTypes from 'prop-types'
export const Button = ({color, text, onClick}) => {
    
    return <button 
            onClick={onClick} 
            style={{backgroundColor: color}} 
            className='btn'>
        {text}
        </button>
}
Button.defaultProps = {
    color: 'steelblue',
    text: 'Add'
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}