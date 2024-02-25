import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ReactListExample extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    async render() {
        const reactContainer = document.createElement('div');
        this.shadowRoot.appendChild(reactContainer);

        const listArr = await axios.get('...');
        const listArrElements = listArr.data.map((item, index) => {
            return React.createElement('li', { key: item._id }, item.name);
        })

        const reactRepeaterList = React.createElement('ul', { className: "exampleRepeater", id: "repeaterid" }, listArrElements)
        ReactDOM.render(reactRepeaterList, reactContainer);
    }
}

// Define custom element class and tag
customElements.define('react-list-example', ReactListExample);