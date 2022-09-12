import React from 'react';
import ReactDOM from 'react-dom';

const ContactList = () => {
    const people = [{ name: "Tyler" }, { name: "karon"}, {name:"Rich"}];

    return (
        <ol>
            {people.map((person) => (
                <li key={perosn.name}>{person.name}</li>
            ))}
        </ol>
    );
}

ReactDOM.render(<ContactList/>, document.getElementById("root"));