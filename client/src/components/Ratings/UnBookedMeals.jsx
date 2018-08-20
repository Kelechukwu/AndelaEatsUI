import React, { Component } from "react";

import RatingCard from './RatingCard';


/**
 *
 *
 * @class UnBookedMeals
 * @extends {Component}
 */
class UnBookedMeals extends Component {
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

    const {
      main,
      firstAccompaniment,
      secondAccompaniment,
    } = this.props.menu.meal;

    return (
      <div className="main-meal">
        <h3>Main Meal</h3>
        <ul>
          {main.map(meal => (
            <RatingCard
              key={meal.id}
              name="main"
              meal={meal}
              selectedMealId={this.state.main}
              handleOptionChange={this.handleOptionChange}
            />
          ))}
        </ul>
        <h3>Accompaniment 1</h3>
        <ul>
          {firstAccompaniment.map(meal => (
            <RatingCard
              key={meal.id}
              name="firstAccompaniment"
              meal={meal}
              selectedMealId={this.state.firstAccompaniment}
              handleOptionChange={this.handleOptionChange}
            />
          ))}
        </ul>
        <h3>Accompaniment 2</h3>
        <ul>
          {secondAccompaniment.map(meal => (
            <RatingCard
              key={meal.id}
              name="secondAccompaniment"
              meal={meal}
              selectedMealId={this.state.secondAccompaniment}
              handleOptionChange={this.handleOptionChange}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default UnBookedMeals;
