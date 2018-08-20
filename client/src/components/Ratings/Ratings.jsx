import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { format } from "date-fns";
import PropType from "prop-types";
import { ToastContainer } from "react-toastify";
import ReactStars from "react-stars";

import BookedMeals from "./BookedMeals";
import UnBookedMeals from "./UnBookedMeals";
import Loader from "../common/Loader/Loader";
import { editOrder } from "../../actions/ordersAction";
import { fetchBookedRatings } from "../../actions/ratingsAction";

/**
 *
 *
 * @class Ratings
 * @extends {Component}
 */
class Ratings extends Component {
  state = {
    main: "",
    firstAccompaniment: "",
    secondAccompaniment: "",
    bookedData: [],
    bookedStatus: true
  };

  componentDidMount() {
    const id = "000023";
    this.props.editOrder(id);

    // this.props.fetchBookedRatings()
  }

  render() {
    const { isLoading } = this.props;

    console.log("Booked Meal", this.props.ratings);

    return (
      <Fragment>
        {isLoading && <Loader />}
        <div className={`wrapper ${isLoading && "blurred"}`}>
          <div className="orders-wrapper">
            <h3>Rate Order</h3>
            <ToastContainer />
            <div className="orders-container">
              <div className="date-wrapper">
                <h3>{format(Date.now(), "MMMM YYYY")}</h3>
                <ul>
                  <li className="active">{format("2018-07-19", "dddd Do")}</li>
                </ul>
              </div>
              <div className="menu-wrapper">
                <div className="menus-container">
                  {this.state.bookedStatus ? (
                    <BookedMeals />
                  ) : (
                    <UnBookedMeals {...this.props} />
                  )}

                  <div className="comment-area">
                    <div className="react-stars">
                      <div className="text">Rate Meal</div>
                      <ReactStars 
                      value={3}
                      color2="green"
                      name="ratings"
                      size={35}
                    />
                    </div>
                    <div className="text">Leave a comment</div>
                    <textarea className="comment-textarea" />
                  </div>

                  <div className="rating-comment-area">
                    <div className="user-comment-area">
                      <div>
                        <img />
                      </div>
                      <div className="user-comment">
                        <div className="user-comment-header">louis dante</div>
                        <div className="user-comment-text">
                          This is a commment for andela eats and we are testing
                          it.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cta">
                    <div className="float-left" />
                    <div className="float-right">
                      <div
                        className="btn reset-order"
                        onClick={() => alert("Resetting")}
                      >
                        reset rating
                      </div>
                      <button
                        className="btn submit-order"
                        type="submit"
                        onClick={() => alert("Submitting")}
                      >
                        submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

/**
 * connect to redux store
 * @param {state} state
 * @returns {object} menus
 */
function mapStateToProps(state) {
  return {
    menu: state.orders.menu,
    order: state.orders.order,
    isLoading: state.orders.isLoading,
    ratings: state.ratings
  };
}

export default connect(
  mapStateToProps,
  { editOrder, fetchBookedRatings }
)(Ratings);
