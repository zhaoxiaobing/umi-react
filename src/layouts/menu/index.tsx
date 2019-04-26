import React from 'react'
import './index.less'
import { Link } from "umi";

interface IProps {

}
interface IState {

}

class MenuLayout extends React.Component <IProps, IState> {
    public state = {

    }
    public render(){
        return(
            <div className="menuList">
                <a href="javascript:void(0)" id="logo"><b>Admin</b>LTE</a>
                <ul>
                    <li>
                        <Link to="/">TypeScript</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MenuLayout;
