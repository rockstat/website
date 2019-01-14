// import React from 'react';

export const ShowIf = (props) => {
    return !props.condition
        ? null
        : props.children;
};

export const ShowIfElse = (props) => {
    return !props.condition
        ? props.children[1]
        : props.children[0];
};

