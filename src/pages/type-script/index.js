import React from 'react'
import { connect } from 'dva'
//import Highlight from 'react-highlight.js'
import Highlight from '../../components/highlight'
//import 'highlight.js/styles/github.css'

@connect(({ typeScript }) => ({ typeScript }))
class HomePage extends React.Component{
    constructor({dispatch, route}){
        super()
        console.log(route)
        this.state = {
            code: `
                declare function create(o: object | null): void;
                
                create({ prop: 0 }); // OK
                create(null); // OK
                
                create(42); // Error
                create("string"); // Error
                create(false); // Error
                create(undefined); // Error
                //返回never的函数必须存在无法达到的终点
                function error(message: string): never {
                    throw new Error(message);
                }
                
                //推断的返回值类型为never
                function fail() {
                    return error("Something failed");
                }
                
                //返回never的函数必须存在无法达到的终点
                function infiniteLoop(): never {
                    while (true) {}
                }
            `
        }
    }
    componentDidMount() {
        console.log(this.props.typeScript.abc);
    }
    render() {
        let str = this.state.code;
        return (
            <div>
                <h2>I am type-script.</h2>
                <h3>{this.props.typeScript.abc}</h3>
                <Highlight hhh="122">
                    {str}
                </Highlight>
            </div>
        )
    }
}

export default HomePage
