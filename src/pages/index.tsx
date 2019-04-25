import React from 'react';
import './index.less';
import {Link} from 'react-router-dom';


export default function () {
    return (
        <div className="home">
            <Link to='/type-script'>type-script</Link>
        </div>
    );
}
