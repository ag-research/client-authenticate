import React from 'react';

const ContainerFluid = (props) => {
    let propclass = (props.classes === undefined) ? "" : " " + props.classes;
    const fullclass = "container-fluid" + propclass;
    return (
        <div className={fullclass}>
            {props.children}
        </div>
    )
}

export default ContainerFluid;