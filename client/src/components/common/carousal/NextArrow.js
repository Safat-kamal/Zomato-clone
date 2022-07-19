import React from 'react'

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, 
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"4px",
        borderRadius:"50%",
        zIndex:"100",
        marginRight:"15px"
    }}
        onClick={onClick}
    />
    )
}

export default NextArrow