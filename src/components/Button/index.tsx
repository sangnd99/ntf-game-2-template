import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

import styles from "./Button.module.scss";

export type IVariant = "primary" | "secondary" | "outline";

export type ISize = "sm" | "md" | "full";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
}

const Button: React.FC<IButtonProps> = (props) => {
  const { children, onClick, to, ...restProps } = props;
  const navigate = useNavigate();
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (to) {
      navigate(to);
    }
    onClick && onClick(e);
  };
  return (
    <button
      className={styles.container}
      onClick={handleClick}
      {...(restProps as any)}
    >
      <div className={cn(styles.wrapper)}>{children}</div>
    </button>
  );
};

export default Button;
