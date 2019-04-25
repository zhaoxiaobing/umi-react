import React from 'react'
import { connect } from 'dva'

@connect(({ typeScript }) => ({ typeScript }))
class HomePage extends React.Component{
    constructor({dispatch, route}){
        super()
        console.log(route)
    }
    componentDidMount() {
        console.log(this.props.typeScript.abc)
    }
    render() {
        return (
            <div>
                <h2>I am type-script.</h2>
                <h3>{this.props.typeScript.abc}</h3>
            </div>
        )
    }
}

export default HomePage
