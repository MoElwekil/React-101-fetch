import React, { Component } from 'react';

import Form from './form'

class App extends Component {

    onFormSubmit(e) {
    }
    render() {
        return (
            <div>
                <Form onSubmit={(e) => { this.onFormSubmit(e) }} />
            </div>
        )
    }
}

export default App