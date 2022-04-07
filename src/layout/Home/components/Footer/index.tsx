import cn from "classnames";

import styles from "./Footer.module.scss";
import { FooterBackground } from "assets/images";
import { FooterLogo } from "assets/svg";
import { listContact } from "./helper";
import { randomId } from "common/functions";

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = () => {
  return (
    <div
      className={styles.wrapper}
      style={{ background: `url(${FooterBackground})` }}
    >
      <ul className={cn(styles.list, "container")}>
        <li>
          <img src={FooterLogo} width={296} height={130} alt="Warbeast logo" />
        </li>
        <li className={styles.item}>
          <p className={styles["item__title"]}>War beasts</p>
          <p className={styles["item__desc"]}>
            War beasts is an NFT Match fighting game built on blockchain
            platform, with 12 types of game characters inspired by the legendary
            12 zodiac story.
          </p>
        </li>
        <li className={cn(styles.item, styles["text-right"])}>
          <p className={styles["item__title"]}>About us</p>
          <div className={styles["item__navigation"]}>
            <a href="#">About </a>
            <a href="#">Tems </a>
            <a href="#">Privacy</a>
            <a href="#">Contact us</a>
          </div>
        </li>
        <li className={styles["item__wrapper"]}>
          <p className={styles["item__title"]}>Community</p>
          <div className={styles["item__contact"]}>
            {listContact.map(({ name, link, icon }) => (
              <a href={link} key={`contact-${randomId()}`}>
                <img src={icon} width={39} height={39} alt={name} />
              </a>
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
