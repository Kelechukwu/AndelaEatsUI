import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import logo from '../../../assets/images/andela-logo.png';

// Actions
import loadActiveUser from '../../../actions/activeUserAction';

// helper
import logoutActiveUser from '../../../helpers/logoutUser';


/**
 * Application nav bar
 */
export class Navbar extends Component { 
/**
 * Creates an instance of login form
 * @param {any} props -
 */
  constructor(props) {
    super(props);
    this.state = {
      activeUser: {}

    };
    this.logOutUser = this.logOutUser.bind(this);
  }

  /**
   * @memberof Navbar
   * @returns {null} null
   */
  componentDidMount() {
    this.props.loadActiveUser();
  }

  /**
   * @memberof Navbar
   * @param {prevProps} prevProps
   * @returns {void} void
   */
  componentDidUpdate(prevProps) {
    if (prevProps.activeUser !== this.props.activeUser) {
      this.setState({ activeUser: this.props.activeUser }); // eslint-disable-line
    }
  }

  /**
   * @memberof Navbar
   * @param {props} props
   * @returns {null} null
   */  
  logOutUser(props) {
    this.props.logoutActiveUser();
    this.props.history.push('/');
  }

  /**
   * 
   * This is React render method that render the UI on the dom
   * @function Navbar
   * @return { void }
   */
  render() {
    const { activeUser } = this.state;
    const { isAdmin, adminDashboard } = this.props;

    return (
      <header className="nav-bar">
        <div className="logo-wrapper">
          <div className="logo-img">
            <img src={logo} alt="logo" />
          </div>
          <div className="logo-name-global">AndelaEats</div>
        </div>

        <div className="nav-spacer" />
        <div className="profile-items">
          <div>
            <i className="far fa-bell bell" />
          </div>
          <div className="profile-pics">
            <img src={activeUser.picture} alt="profile-img" />
          </div>
          <div className="profile-name">{activeUser.name}</div>
          <div className="dropdown">
            <div className="arrow-down" />
            <div className="dropdown-content">
              <a href="" onClick={logoutActiveUser}>Signout</a>
              { isAdmin && adminDashboard ? <Link to="/">User Dashboard</Link>
                : <Link to="/admin">Admin Dashboard</Link>
              }
            </div>
          </div>
        </div>
      </header>
    );
  }
}

/**
 * connect to redux store
 * @param {state} state
 * @returns {object} user
 */
function mapStateToProps(state) {
  return {
    activeUser: state.userReducer,
  };
}

Navbar.propTypes = {
  loadActiveUser: PropTypes.func.isRequired,
  logoutActiveUser: PropTypes.func.isRequired,
  activeUser: PropTypes.object.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  isAdmin: PropTypes.bool.isRequired,
  adminDashboard: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, 
  { 
    loadActiveUser,
    logoutActiveUser 
  })(Navbar);
