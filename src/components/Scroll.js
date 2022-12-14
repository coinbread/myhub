import React from "react";

const Scroll = (props) => {
    return (
        <div style={{ overflow: 'scroll', height: '500px',  maxWidth: '100%', overflowX: 'hidden' }}>
            {props.children}
        </div>
    );
}

export default Scroll;