import React from 'react';

import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
  {label: 'Lettuce', type: 'lettuce'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Meat', type: 'meat'},
  {label: 'Cheese', type: 'cheese'},
];

const buildControls = (props) => (
  <div className={styles.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        removed={() => props.ingredientRemoved(ctrl.type)}
        added={() => props.ingredientAdded(ctrl.type)}
        disabled={props.disabled[ctrl.type]}/>
    ))}
    <button
      className={styles.OrderButton}
      disabled={!props.purchaseable}>Checkout</button>
  </div>
);

export default buildControls;