import * as React from "react";

import classNames from "../utils/classNames";
import Arrow from "./components/Arrow";

import * as styles from "./index.css";

interface Props {}

const Footer = (props: Props) => {
  const [isOpen, toggleOpen] = React.useState(false);
  const footer = React.useRef(null);

  return (
    <footer
      ref={footer}
      className={classNames([styles.footer, isOpen && styles.open])}
      onClick={() => toggleOpen(!isOpen)}
    >
      Footer
      <Arrow className={classNames([styles.arrow, isOpen && styles.open])} />
    </footer>
  );
};

export default Footer;
