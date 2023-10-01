import React from "react";

const HelloWorld = () =>
    {
    // const myElement = <div><h1>Hello World</h1></div> // JSX

    // React.createElement("div", null, React.createElement('h1', null, 'Hello World')) // No JSX
    function handleClick()
        {
        alert("button clicked");
        }

    const name = "Ramiz"

    const addition = 1 + 2

    return (
        <div>
            <h1 className = {"title"}>Title</h1>
            <h2>Sub Title</h2>
            <p>{name}</p>
            <p>{addition}</p>
            <button onClick = {handleClick}>Click</button>
            <image></image>
        </div>)
    }

export default HelloWorld