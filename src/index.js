import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. THis component should produce HTML.

const App = () => {
  return <div>Hi!</div>;
}

// Take the component's HTML and inject into DOM.

ReactDOM.render(<App />, document.querySelector('.container'));
