import React from 'react';
import '../styles/LayoutAdmin.css';

function LayoutAdmin(props){
    return(
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="menu-vertical col-2">
                        <aside>aside</aside>
                    </div>
                    <div className="header-Admin col-10">
                        <div className="">HEADER</div>
                        <div className="">TABLA</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LayoutAdmin;