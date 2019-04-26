import React from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

hljs.configure({
    tabReplace: '',
    //classPrefix: ''
});
//hljs.initHighlighting()

interface IProps {

}
interface IState {

}
interface IRefs {

}

class HighLight extends React.Component<IProps, IState, IRefs>{
    public state = {
        code: `import React from 'react';
                export default function() {
                    return (
                        <div>
                            <h2>I am type-script list.</h2>
                        </div>
                    );
            }`
    }
    public componentDidMount(): void {
        //console.log(1)
        hljs.initHighlightingOnLoad()
    }
    public componentDidUpdate (): void {
        //console.log(2)
        //hljs.initHighlighting.called = false
        hljs.initHighlightingOnLoad()
    }
    public render(){
        //console.log(0)
        {/*{this.props.children}*/}
        return(
            <pre>
                <code className="hljs javascript">
                    {this.state.code}
                </code>
            </pre>
        )
    }
}

export default HighLight;
