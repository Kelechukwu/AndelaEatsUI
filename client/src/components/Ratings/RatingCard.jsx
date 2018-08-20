import React, { Component, Fragment } from "react";
import PropType from "prop-types";
import classname from "classnames";
/* eslint-disable */

const MealOptions = props => {
  const { name, meal, selectedMealId, handleOptionChange } = props;
  return (
    <Fragment>
      <li className={classname({ selected: meal.id === selectedMealId })}>
        <div className="image">
          <img src={meal.mealPicture} alt="food" />
        </div>

        <div className="meal-name">{meal.meal}</div>
      </li>
    </Fragment>
  );
};

MealOptions.propTypes = {
  handleOptionChange: PropType.func,
  meal: PropType.object,
  name: PropType.string,
  selectedMealId: PropType.string
};

export default MealOptions;
