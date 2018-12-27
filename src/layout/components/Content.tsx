import * as React from "react";

import * as styles from "./Content.css";

interface Props {
  children: React.ReactNode;
}
const Content = ({ children }: Props) => (
  <div className={styles.content}>{children}</div>
);

export default Content;
