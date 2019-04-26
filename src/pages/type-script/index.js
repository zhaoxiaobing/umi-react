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
            code: [`
                import React from 'react';
                export default function() {
                    return (
                        <div>
                            <h2>I am type-script list.</h2>
                        </div>
                    );
                }
            `]
        }
    }
    componentDidMount() {
        console.log(this.props.typeScript.abc);
    }
    Component(){
        const codeString = `
import React from 'react';
export default function() {
    return (
        <div>
            <h2>I am type-script list.</h2>
        </div>
    );
}`
        return codeString;
        /*const codeString = `
            import React from 'react';
                export default function() {
                    return (
                    <div>
                        <h2>I am type-script list.</h2>
                    </div>
                );
            }
        `;
        return <SyntaxHighlighter language='javascript' style={xcode}>{codeString}</SyntaxHighlighter>;*/
    }
    render() {
        return (
            <div>
                <h2>I am type-script.</h2>
                <h3>{this.props.typeScript.abc}</h3>
                {/*{this.Component()}*/}
                <Highlight>
                    {this.state.code}
                </Highlight>
            </div>
        )
    }
}

export default HomePage
