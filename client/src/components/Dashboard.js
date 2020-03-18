import React from 'react';
import { Link } from 'react-router-dom';
import Info from './Info';

const Dashboard = () => {
    return(
        <div>
            <Info />

            <div className="fixed-action-btn">
                <Link to="/feedback/new" className="btn-floating btn-large black">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );
}

export default Dashboard;