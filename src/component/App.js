import React, { Component } from 'react';

import Form from './form'
import Unsplash from '../api/unsplash';

class App extends Component {
    state = { images: [] }

    onFormSubmit = async (e) => {
        const response = await Unsplash.get('/search/photos', {
            params: { query: e }
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