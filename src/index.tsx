import React from 'react';
import ReactDom from 'react-dom';

export default function App(): JSX.Element {  //custom react 
    return (
        <h1>
            Meow
        </h1>
    )
}

const root = document.getElementById('app-root')
ReactDom.render(<App />, root) //this takes in 2 arguments, the react code and the HTML element render to 