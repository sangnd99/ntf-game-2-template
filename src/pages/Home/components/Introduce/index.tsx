import cn from "classnames";

import styles from "./Introduce.module.scss";
import { pageYOffset } from "common/functions";

import { AppStore, GGPlay } from "assets/svg/common";
import { Background, Object, Rock, Rock1, Rock2 } from "assets/images/parallax";
import Explain from "./components/Explain";
import { useEffect } from "react";

interface IIntroduceProps {}

const Introduce: React.FC<IIntroduceProps> = (props) => {
  useEffect(() => {
    pageYOffset();
  }, []);
  return (
    <div>
      <div className={styles.container}>
        <div className={cn(styles.section, "container")}>
          <div className={styles.content}>
            <h1 className={styles["content__title"]}>WAR BEASTS</h1>
            <p className={styles["content__desc"]}>
              War beasts, in the event of the enlightenment between heaven,
              Earth and the ancient gods, Warbeasts exist. The earthly orders
              among animals were complicated, bloody wars occurred in all
              territories.{" "}
            </p>
            <div className={styles["content__download"]}>
              <a href="#" target="_blank">
                <img
                  src={AppStore}
                  width={155}
                  height={60}
                  alt="Download on app store"
                />
              </a>
              <a href="#" target="_blank">
                <img
                  src={GGPlay}
                  width={155}
                  height={60}
                  alt="Download on google play"
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles["parallax-container"]}>
          <img
            src={Background}
            className={styles.background}
            alt="Parallax background"
            draggable={false}
          />
          <img
            src={Object}
            className={styles.object}
            alt="Parallax object"
            draggable={false}
          />
          <img
            src={Rock}
            className={styles.rock}
            alt="Parallax object"
            width={80}
            draggable={false}
          />
          <img
            src={Rock1}
            className={styles["rock-1"]}
            alt="Parallax object"
            draggable={false}
          />
          <img
            src={Rock2}
            className={styles["rock-2"]}
            alt="Parallax object"
            width={400}
            draggable={false}
          />
        </div>
        <div className={styles.overlay} />
      </div>
      <Explain />
    </div>
  );
};

export default Introduce;
