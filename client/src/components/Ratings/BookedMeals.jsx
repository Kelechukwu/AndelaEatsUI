import React, { Component } from "react";

import RatingCard from './RatingCard';


/**
 *
 *
 * @class BookedRatings
 * @extends {Component}
 */
class BookedRatings extends Component {
  state = {
    main: "",
    firstAccompaniment: "",
    secondAccompaniment: ""
  }

  handleOptionChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {

    const meal = {
      mainMeal: {
        id: 11,
        meal: 'Eba',
        mealPicture: "http://cdn.playbuzz.com/cdn/89c9243a-e0cd-495e-90e0-11642327f13f/f4b834c8-a506-43f5-8c2c-3e125311275c_560_420.jpg"
      },
      firstAccompaniment: {
        id: 12,
        meal: 'Stew',
        mealPicture: "http://www.beachwoodreporter.com/ku-bigpic.jpg"
      },
      secondAccompaniment: {
        id: 13,
        meal: 'Cake',
        mealPicture: "https://img.buzzfeed.com/buzzfeed-static/static/2017-03/14/8/campaign_images/buzzfeed-prod-fastlane-01/do-you-add-salt-to-these-random-foods-2-7680-1489494796-6_dblbig.jpg"
      }
    }

    return (
      <div className="main-meal">
        <h3>Main Meal</h3>
        <ul>         
            <RatingCard
              key={11}
              name="main"
              meal={meal.mainMeal}
              selectedMealId={this.state.main}
              handleOptionChange={this.handleOptionChange}
            />
        
        </ul>
        <h3>Accompaniment 1</h3>
        <ul>
            <RatingCard
              key={meal.id}
              name="firstAccompaniment"
              meal={meal.firstAccompaniment}
              selectedMealId={this.state.firstAccompaniment}
              handleOptionChange={this.handleOptionChange}
            />
        </ul>
        <h3>Accompaniment 2</h3>
        <ul>
            <RatingCard
              key={meal.id}
              name="secondAccompaniment"
              meal={meal.secondAccompaniment}
              selectedMealId={this.state.secondAccompaniment}
              handleOptionChange={this.handleOptionChange}
            />
        </ul>
      </div>
    );
  }
}

export default BookedRatings;
