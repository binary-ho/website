import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Screen from '../components/Screen/screen';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import React from 'react';
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-size: 2em; 
  color: #F5F5F5;
  text-decoration: none; 
  
  margin: 10px;
  padding: 15px 30px; 
  
  background-color:  #F5F5F5; 
  border-radius: 5px;

  &:hover {
    color: #ffffff; 
    background-color: #ff5733; 
  }
`;

const WhiteTitle = styled(Heading)`
  color : whitesmoke;
`

function HomepageContent() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Screen>
      <section className={styles.heroBanner}>
        <div className="container">
          <WhiteTitle as="h1" className="hero__title">
            {siteConfig.title}
          </WhiteTitle>

          {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}

          <div className={styles.moneyInputContainerWrapper}>
            <div className={styles.moneyInputContainer}>
              <input type="text" className={styles.moneyInput} placeholder="0" />
              <span className={styles.currencyUnitLabel}>만원</span>
            </div>
          </div>


          <div className={styles.buttons}>
            <StyledLink
              className="button button--secondary button--lg"
              to="/docs/intro">
               ⏰ 🤸‍♂️ 타임머신! 예아 ~! 🤸‍♀️ 🚀
            </StyledLink>
          </div>
        </div>
      </section>
    </Screen>
  );
}

export default function Home() {
  return (
    <body>
      <HomepageContent />
      <HomepageContent />
      <HomepageContent />
    </body>
  );
}
