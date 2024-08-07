import styles from "../index.module.css";
import {MoneyInput} from "./moneyInput";
import {CalculateButton} from "./calculateButton";
import Screen from "../../components/Screen/screen";
import styled from "styled-components";
import Heading from "@theme/Heading";

const WhiteTitle = styled(Heading)`
  color : black;
`

const title = '일년에 얼마나 저축할 수 있나요?'
export function MainPage() {
    return (
        <Screen>
            <section className={styles.heroBanner}>
                <div className="container">
                    <WhiteTitle as="h1" className="hero__title">
                        {title}
                    </WhiteTitle>
                    <MoneyInput/>
                    <CalculateButton/>
                </div>
            </section>
        </Screen>
    );
}