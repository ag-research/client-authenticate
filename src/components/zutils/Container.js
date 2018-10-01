import React from 'react';

const Container = (props) => {
    let propclass = (props.classes === undefined) ? "" : " " + props.classes;
    const fullclass = "container" + propclass;
    return (
        <div className={fullclass}>
            {props.children}
        </div>
    )
}

export default Container