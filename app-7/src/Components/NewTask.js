import React from 'react'

export default class NewTask extends React.Component {
    constructor() {
        super()

    }
    render() {
        return (
            <div>
                <input onChange={(e) => this.props.handleaddinputPro(e.target.value)} placeholder = 'New Task'></input>
                <button onClick = {this.props.pushinputPro}>Add</button>
            </div>
        )
    }
}