import * as React from "react";
import styles from "./InternalCareTeam_Main.module.scss";
//export const WorkUnderProgress: any = require("../images/WorkUnder.jpg");
import { ITheme } from "spfx-js-theme";
const theme: ITheme = window.__themeState__.theme;

export class InternalCareTeamMain extends React.Component<any, any> {
  public constructor(props: any, state: any) {
    super(props);
    this.state = {};
  }

  public render(): React.ReactElement<any> {
    return (
      <div className={styles.internalCareTeamMain}>
        <div className="row" style={{ background: "#d9d9d6", padding: "15px" }}>
          <h4 style={{ color: "black" }}> Internal Care Team </h4>
        </div>
        <div className="row">
          <div className="col-md-12" style={{ backgroundColor: "#f4f5f7" }}>
           <h5 style={{color:"maroon", padding: "10px 0px", fontSize: "16px"}}>Sample</h5>
          </div>
        </div>
      </div>
    );
  }
}
