import React from 'react';
import ReactDOM from 'react-dom';

// Create custom element class
class ReactExample extends HTMLElement {
    constructor() {
        // Call super first because of extended class
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Call React rendering function when custom element connected/loaded
        this.render();
    }

    render() {
        // Create a main div
        const reactContainer = document.createElement('div');
        this.shadowRoot.appendChild(reactContainer);

        // Create a React Element (h1 element in this example)
        const exampleH1Element = React.createElement(
            'h1', null,
            'Hello React + Wix + Velo!'
        );

        ReactDOM.render(exampleH1Element, reactContainer);
    }
}

// Define custom element class and tag
customElements.define('react-example', ReactExample);