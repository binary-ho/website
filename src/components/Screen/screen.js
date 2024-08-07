import React from 'react';
import styles from './styles.module.css';
import {backgroundImage} from "../../css/backgroundImage";

export default function Screen({ children }) {
  const style = {
    padding: '4rem 0',
    textAlign: 'center',
    position: 'relative',
    /* overflow: hidden; */

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: '100%',
    // background-image: `url("../../../static/img/cosmos.png")`;
    backgroundSize: 'cover',

    scrollSnapStop:'always',
    scrollSnapAlign: 'center',
    scrollSnapType: 'y',
    backgroundImage: backgroundImage.gradient2,
  }

  return (
    <div style={style}>
      {children}
    </div>
  )
}