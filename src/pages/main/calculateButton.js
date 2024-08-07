import styles from "../index.module.css";
import React from "@types/react";
import styled from "styled-components";
import Link from '@docusaurus/Link';

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

export const CalculateButton = () => {
    return (
        <div className={styles.buttons}>
            <StyledLink
                className="button button--secondary button--lg"
                to="/docs/intro">
                ⏰ 🤸‍♂️ 타임머신 타기 🤸‍♀️ 🚀
            </StyledLink>
        </div>
    )
}