import * as React from "react";
import styles from "./Military_Main.module.scss";
//export const WorkUnderProgress: any = require("../images/WorkUnder.jpg");
import { ITheme } from "spfx-js-theme";
const theme: ITheme = window.__themeState__.theme;

export class MilitaryMain extends React.Component<any, any> {
  public constructor(props: any, state: any) {
    super(props);
    this.state = {};
  }

  public render(): React.ReactElement<any> {
    return (
      <div className={styles.military}>
      <div className="row" style={{ background: "#d9d9d6", padding: "15px" }}>
        <h4 style={{ color: "black" }}> Military </h4>
      </div>
    </div>
    );
  }
}
