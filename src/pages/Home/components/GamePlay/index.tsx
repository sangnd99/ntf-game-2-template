import cn from "classnames";

import styles from "./GamePlay.module.scss";
import { P2E, P2P } from "./helper";
import { GamePlayBackground } from "assets/images";
import { randomId } from "common/functions";

interface IGamePlayProps {}

const cssVariables = {
  "--game-play-background": `url(${GamePlayBackground})`,
} as React.CSSProperties;

const GamePlay: React.FC<IGamePlayProps> = (props) => {
  return (
    <div className={styles.wrapper} style={{ ...cssVariables }}>
      <div className={cn(styles.container, "container")}>
        <h2 className={styles.title}>GAME PLAY TO EARN </h2>
        <div className={styles.type}>
          <div className={styles["type__container"]} data-ros="fade-right">
            <p className={styles["type__title"]}>P2E</p>
            <ul className={styles["type__list"]}>
              {P2E.map((item) => (
                <li className={styles["type__item"]} key={`P2E-${randomId()}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles["type__container"]} data-ros="fade-left">
            <p className={styles["type__title"]}>P2P</p>
            <ul className={styles["type__list"]}>
              {P2P.map((item) => (
                <li className={styles["type__item"]} key={`P2P-${randomId()}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles["food-manufacture"]}>
          <p className={styles["food-manufacture__title"]}>Food manufacture:</p>
          <div className={styles["food-manufacture__container"]}>
            <div className={styles["food-manufacture__text"]}>
              <p>
                01 piece of cultivated land can harvest 03 times/per day which
                is equal to 03 bags of food.
              </p>
              <p>10 WBT/1 bag of food.</p>
              <p>40 WBT/1 nutrition box.</p>
            </div>
            <p className={styles.note}>
              *Rent a stadium for each P2P match, the winning side's total bet
              cards will be deducted 5% and burned.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePlay;
