import React from 'react';


const Scroll = (props) => {
    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

const style = {
    border: '1px solid blue',
    overflowY: 'scroll',
    height: '520px',
    padding: '20px',
}

export default Scroll;