import React, { Component } from 'react'

class Form extends Component {
    state = { keyword: '' }

    onSubmit = (e) => {
        e.preventDefault();
        // pass the value to the callback function
        this.props.onSubmit(this.state.keyword)
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => { this.onSubmit(e) }}>
                    <input type="text" placeholder="Search" onChange={(e) => { this.setState({ keyword: e.target.value }) }} value={this.state.keyword} />
                </form>
            </div >
        )
    }
}

export default Form