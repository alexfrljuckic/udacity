import React from 'react'
import ReactDOM from 'react-dom'

//How to use Create Element to build UI
const element = React.createElement('div', {
    className: 'welcome-message'
}, 'hello world')

const element2 = React.createElement('ol', null, 
    React.createElement('li', null, 'Tyler'),
    React.createElement('li', null, 'Dude'),
    React.createElement('li', null, 'Guy')
)

console.log(element);

ReactDOM.render(
    element,
    document.getElementById('root')
)


const people = [
    { name : 'tyler'},
    { name : 'dude'},
    { name : 'Guy'},
]

const element3 = React.createElement('ol', null, 
    people.map((person) => (
        React.createElement('li', { key : person.name }, person.name)
    ))
)

//How to use JSX
 const elementX = <ol>
    <li>{people[0].name}</li>
    <li>{true ? 'ya' : 'no'}</li>
    {people.map((person) => (
        <li key={person.name}>{person.name}</li>
    ))}
 </ol>