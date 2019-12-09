import React from 'react';


const Like = (props) => {
    let classes = (props.liked) ? "fas fa-heart o" : "far fa-heart";
    return <i onClick={props.onLike} style={{ cursor: 'pointer' }} className={classes}></i>;
}

export default Like;