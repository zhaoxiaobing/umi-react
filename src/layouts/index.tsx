import React from 'react';
import HeaderLayout from './header/';
import MenuLayout from './menu/';


import './index.less';
// @ts-ignore
//import {TransitionGroup, CSSTransition} from "react-transition-group";

const BasicLayout: React.FC = props => {
    return (
        <div className="root-main">
            {/*{location.pathname}*/}
            <MenuLayout />
            <div className="root-content">
                <HeaderLayout />
                <div className="root-content-right">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

{/*<TransitionGroup>
    <CSSTransition key={location.pathname} classNames="fade" timeout={150}>
    </CSSTransition>
</TransitionGroup>*/}

export default BasicLayout;
