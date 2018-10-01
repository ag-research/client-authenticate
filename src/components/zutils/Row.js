import React from 'react';

const Row = (props) => {
    let propclass = (props.classes === undefined) ? "" : " " + props.classes;
    const fullclass = "row" + propclass;
    return (
        <div className={fullclass}>
            {props.children}
        </div>
    )
}

export default Row;