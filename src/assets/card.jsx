import React from 'react';

const Card = (props) => {
    const style={
        "background": `${props.background}`,
        "boxShadow": `${props.boxshadow}`
    }
    return (
        <div className="all-card d-inline-block">
            <div className="card">
                <div style={style} className="ago">
                    <props.ico1 />
                </div>
                <div className="text-right cr">
                    <span>{props.name1}</span>
                    <h3>{props.rupe}</h3>
                </div>
                <div className="cb"><props.ico2 /> {props.name2}</div>
            </div>
        </div>
    );
};

export default Card;