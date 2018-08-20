import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import { isAuthorized } from '../../../helpers/authorization';

const SideNav = ({ children, location: { pathname } }) => {
  const homeActive = (section) => pathname.includes(`/${section}`);
  
  if (!isAuthorized()) {
    return <Redirect to="/" />;
  }

  return (
    <div className="wrapper">
      <Navbar />
      <div className="push-down">
        <div className="side-nav">
          <ul className="side-nav-item-wrapper">
            <Link to="/ordermeal">
              <li className={
                `side-nav-item home ${homeActive('ordermeal') && "active"}`
              }
              >
                <span>Home</span>
              </li>
            </Link>
            <Link to="/orders">
              <li className={
                `side-nav-item order ${homeActive('orders') && "active"}`
              }
              >
                <span>Orders</span>
              </li>
            </Link>
            <Link to="/ratings">
              <li className={
                `side-nav-item rating ${homeActive('ratings') && "active"}`
              }
              >
                <span>Ratings</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="main-container">
          <div className="section">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

SideNav.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  children: PropTypes.node.isRequired
};

SideNav.defaultProps = {
  location: {}
};

export default SideNav;
