import React from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/vs.css'
import './index.less'

//hljs.initHighlighting()
interface IProps {
    hhh: string
}
interface IState {
    hhh: number
}

class HighLight extends React.Component<IProps,IState>{
    static props:IProps = {
        hhh: 'true'
    };
    static state:IState = {
        hhh: 123
    };
    constructor(props:IProps, state:IState){
        super(props, state);
        //console.log(props, this.props,state);

        let code = props.children.match(/.+\n/g),
            l = code[0].match(/\s+/g)[0].length;
        code = code.map(v => v.replace(new RegExp("^\\s{"+l+"}"),'    '));
        code.push('\n');
        code.shift('\n');
        this.state = {
            code
        };
    }
    public componentDidMount(): void {
        hljs.initHighlightingOnLoad();
    }
    public componentDidUpdate (): void {
        //hljs.initHighlighting.called = false
        /*hljs.configure({
            tabReplace: '    ',
            classPrefix: ''
        });*/
        //hljs.initHighlightingOnLoad()
        //hljs.highlightBlock(this.node)
    }
    public componentWillUpdate(): void {

    }
    public render(){
        return(
            <div className="codeBeautiful">
                {/*<pre ref={(node) => this.node = node}>*/}
                <pre>
                    <code className="hljs typescript">
                        {this.state.code}
                    </code>
                </pre>
            </div>
        )
    }
}

export default HighLight;
