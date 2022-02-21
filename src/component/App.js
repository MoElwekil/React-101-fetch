import React, { Component } from 'react';
import axios from 'axios';

import Form from './form'

class App extends Component {
    state = { images: [] }

    onFormSubmit = async (e) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: e },
            headers: { Authorization: "Client-ID Yme6ZcumIXpWryQ0DPc249CE0ua2Mxh66Y-4W2gPAAc", },
        })

        this.setState({ images: response.data.results });
    }
    render() {
        console.log(this.state.images)
        return (
            <div>
                <Form onSubmit={this.onFormSubmit} />
            </div>
        )
    }
}

export default App