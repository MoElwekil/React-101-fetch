import React, { Component } from 'react';
import axios from 'axios';

import Form from './form'

class App extends Component {
    state = { images: [] }

    onFormSubmit(e) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: e },
            headers: { Authorization: "Client-ID Yme6ZcumIXpWryQ0DPc249CE0ua2Mxh66Y-4W2gPAAc", },
        }).then(response => {
            this.setState({ images: response.data.results })
        })
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