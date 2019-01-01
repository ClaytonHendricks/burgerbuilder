import React from 'react';

import BreadIngredients from './BurgerIngredient.module.css'

const burgerIngredient = (props) => {
  let ingredient = null;

  switch(props.type) {
    case ('bread-bottom'):
      ingredient = <div className={BreadIngredients.BreadBottom}></div>;
      break;
    case ('bread-top'):
      ingredient = (
        <div className={BreadIngredients.BreadTop}>
          <div className={BreadIngredients.Seeds1}></div>
          <div className={BreadIngredients.Seeds2}></div>
        </div>
      );
      break;
    case ('meat'):
      ingredient = <div className={BreadIngredients.Meat}></div>
      break;
    case ('cheese'):
      ingredient = <div className={BreadIngredients.Cheese}></div>
      break;
    case ('lettuce'):
      ingredient = <div className={BreadIngredients.Salad}></div>
      break;
    case ('bacon'):
      ingredient = <div className={BreadIngredients.Bacon}></div>
      break;
    default:
      ingredient = null;
      
  }
};

export default burgerIngredient;