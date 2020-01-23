import React from 'react'

export default class List extends React.Component {
    constructor() {
        super()

    }
    render() {
        let list = this.props.savedstatesPro.map((element, index)=>{
            return <p>{element}</p>})
        return (
            <div>
                {list}
            </div>
        )
    }
}