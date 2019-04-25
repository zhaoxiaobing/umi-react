import React from 'react';
import './index.less';


interface IProps {
    
}

interface IState {
    
}

class HeaderLayout extends React.Component <IProps, IState> {

    public state = {
        name: 'index.tsx'
    }

    public render(){
        return(
            <div className="header-layout">I am Header! {this.state.name}</div>
        )
    }
}


export default  HeaderLayout;
