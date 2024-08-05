import React from 'react';
import styles from './styles.module.css';

// const ScreenWrapper = styled.div`
//   width:100%;
//   height:100%;
//   scroll-snap-align:center;
//   /* background-image: url(" ../../static/img/cosmos.png"); */
//   background-image: url("../../");
//   background-size: cover;
// `

export default function Screen({ children }) {
  return (
    <div className={styles.screenWrapper}>
      {children}
    </div>
  )
}