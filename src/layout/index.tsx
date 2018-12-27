import * as React from "react";

import Header from "../header";
import Content from "./components/Content";
import Footer from "../footer";

import * as styles from "./index.css";

interface Props {}

const App = (props: Props) => (
  <div className={styles.app}>
    <Header />
    <Content>
      {Array.apply(null, { length: 25 }).map(() => (
        <>
          <div className={styles.heading}>* I'm a heading!</div>
          <div className={styles.xyz}>I'm content text</div>
        </>
      ))}
    </Content>
    <Footer />
  </div>
);

export default App;
