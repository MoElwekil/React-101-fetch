import React, { Component } from 'react'

class Form extends Component {
    state = { keyword: '' }
    render() {
        console.log(this.state.keyword)
        return (
            <div>
                <form>
                    <input type="text" placeholder="Search" onChange={(e) => { this.setState({ keyword: e.target.value }) }} value={this.state.keyword} />
                </form>
            </div>
        )
    }
}

export default Form