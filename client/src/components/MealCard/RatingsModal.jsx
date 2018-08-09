import React, { Component } from "react";
import ReactStars from "react-stars";
import PropTypes from "prop-types";


/**
 *
 *
 * @class RatingsModal
 * @extends {Component}
 */
class RatingsModal extends Component {
  state = {
    main: this.props.main,
    firstAccompaniment: this.props.firstAccompaniment,
    secondAccompaniment: this.props.secondAccompaniment,
    dessert: this.props.dessert
  }

  /**
   * Handles ratings for food
   *
   * @memberof RatingModal
   * @param {string} newRating
   * 
   * @returns {void}
   */
  ratingChanged = (newRating) => {
    console.log('Normal', newRating);
  }

  mainRating = (newRating) => {
    this.setState({
      main: newRating
    })
    console.log('Main', this.state.main);
  }

  firstAccompaniment = (newRating) => {
    this.setState({
      firstAccompaniment: newRating
    })
    console.log('firstAccompaniment', this.state.firstAccompaniment);
  }

  secondAccompaniment = (newRating) => {
    this.setState({
      secondAccompaniment: newRating
    })
    console.log('secondAccompaniment', this.state.secondAccompaniment);
  }

  dessert = (newRating) => {
    this.setState({
      dessert: newRating
    })
    console.log('dessert', this.state.dessert);
  }


  render() {
    const { displayModal, closeModal, ratingChanged } = this.props;

    return (
      <div
        className="modal"
        style={displayModal ? { display: "block" } : { display: "none" }}
      >
        {displayModal ? (
          <div className="rating-modal-content">
            <div className="rating-modal-wrapper">
              <div className="rating-modal-header">
                <div className="rating header-title">Rate Order</div>
                <div className="close-rating-modal" onClick={closeModal}>
                  X Close
                </div>
              </div>

              <div className="selected-food-wrapper">
                <div className="selected-foods">
                  <div className="food-item right-spacer">
                    <div className="food-img">
                      <img
                        src="http://www.allnigerianrecipes.com/images/friedbeans.jpg"
                        alt="default"
                      />
                    </div>
                    <div className="food-rating-star">
                      <div className="text">Beans</div>
                      <ReactStars
                        count={5}
                        onChange={this.mainRating}
                        size={14}
                        color2="#54a61e"
                        value={this.state.main}
                        half={false}
                        name="Beans"
                      />
                    </div>
                    <div className="food-rating-spacer" />
                  </div>
                  <div className="food-item">
                    <div className="food-img">
                      <img src="" alt="default" />
                    </div>
                    <div className="food-rating-star">
                      <div className="text">Cake</div>
                      <ReactStars
                        count={5}
                        onChange={this.firstAccompaniment}
                        value={this.state.firstAccompaniment}
                        size={14}
                        color2="#54a61e"
                      />
                    </div>
                    <div className="food-rating-spacer" />
                  </div>
                </div>
                <div className="selected-foods">
                  <div className="food-item right-spacer">
                    <div className="food-img">
                      <img src="" alt="default" />
                    </div>
                    <div className="food-rating-star">
                      <div className="text">Beans</div>
                      <ReactStars
                        count={5}
                        onChange={this.secondAccompaniment}
                        value={this.state.secondAccompaniment}
                        size={14}
                        color2="#54a61e"
                      />
                    </div>
                    <div className="food-rating-spacer" />
                  </div>
                  <div className="food-item">
                    <div className="food-img">
                      <img src="" alt="default" />
                    </div>
                    <div className="food-rating-star">
                      <div className="text">Cake</div>
                      <ReactStars
                        count={5}
                        onChange={this.dessert}
                        value={this.state.dessert}
                        size={14}
                        color2="#54a61e"
                      />
                    </div>
                    <div className="food-rating-spacer" />
                  </div>
                </div>
              </div>

              <div className="average-rating">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={20}
                  color2="#54a61e"
                />
                <div className="text">Average Rating</div>
              </div>
              <div className="comment-area">
                <div className="text">Leave a comment</div>
                <textarea className="comment-textarea" />
              </div>
              <div className="modal-footer">
                <div className="cta  modal-adj">
                  <div className="float-left" />
                  <div className="float-right">
                    <div className="btn close-modal" onClick={closeModal}>
                      Cancel
                    </div>
                    <div className="submit-comment">submit</div>
                  </div>
                </div>
              </div>
              <div className="comment-count">105 comments</div>
            </div>
            <div className="rating-modal-comment-area">
              <div className="user-comment-area">
                <div>
                  <img />
                </div>
                <div className="user-comment">
                  <div className="user-comment-header">louis dante</div>
                  <div className="user-comment-text">
                    "This is a commment for andela eats and we are testing it."
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
};

RatingsModal.defaultProps = {
  main: 1,
  firstAccompaniment: 2,
  secondAccompaniment: 3,
  dessert: 4
}

RatingsModal.propTypes = {
  displayModal: PropTypes.bool,
  closeModal: PropTypes.func,
  ratingChanged: PropTypes.func
};

export default RatingsModal;
