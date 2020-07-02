import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Paper,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import BlockIcon from "@material-ui/icons/Block";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import * as React from "react";
import { ITheme } from "spfx-js-theme";
import {
  BackButton,
  CustomTextField,
  ErrorButton,
  NextButton,
  state_DD,
  SucessButton,
} from "../../common/Common";
import {
  faExternalLinkSquareAlt,
 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../AINFunds_Main.module.scss";
import { AdminAINFundsMain } from "./AINFunds_MainAdmin";
import { AdminAction } from "./Action_admin";

const theme: ITheme = window.__themeState__.theme;


export class AdminInternalCareSubmission extends React.Component<any, any> {
  public statesDD = state_DD;
  public constructor(props: any, state: any) {
    super(props);
    this.state = {
      context: this.props.properties.context,
      passesData:this.props.properties.previous_Data,
      queryString:""
    };
  }

  public componentDidMount() {
    let params = window.location.hash.substring(
      window.location.hash.lastIndexOf("/") + 1
    );
    this.setState({
      queryString:params
    })
    // console.log(this.props.properties.previous_Data);
    // console.log(this.state.context);
  }


  // public calledfrominternalCareSubmission = (e) => {
  //   this.props.properties.calledfrominternalCareSubmission(e);
  // }

  public main_HTML = () => {
    let _html = (
      <React.Fragment>
        <div className="col-md-12">
          <Paper elevation={3} style={{ marginLeft: "15px" }}>
            <FormControl fullWidth>
              <ExpansionPanel
                expanded={this.state.submitterInformation === true}
                onChange={(e) => {
                  this.setState({
                    submitterInformation: !this.state.submitterInformation,
                  });
                }}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <h5 style={{ color: "maroon", fontSize: "16px" }}>
                    Submitter Information
                  </h5>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {/* {this.actionSteps_HTML()} */}
                  Submitter Information
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                expanded={this.state.asssociateInformation === true}
                onChange={(e) => {
                  this.setState({
                    asssociateInformation: !this.state.asssociateInformation,
                  });
                }}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <h5 style={{ color: "maroon", fontSize: "16px" }}>
                    Associate Information
                  </h5>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {/* {this.uploadDocument_HTML()} */}
                  Test B
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                expanded={this.state.submissionInformation === true}
                onChange={(e) => {
                  this.setState({
                    submissionInformation: !this.state.submissionInformation,
                  });
                }}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <h5 style={{ color: "maroon", fontSize: "16px" }}>
                    Submission Information
                  </h5>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {/* {this.ainCoverLetter_HTML()} */}
                  Test C
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                expanded={this.state.administrationInformation === true}
                onChange={(e) => {
                  this.setState({
                    administrationInformation: !this.state
                      .administrationInformation,
                  });
                }}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <h5 style={{ color: "maroon", fontSize: "16px" }}>
                    Administration Information
                  </h5>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {/* {this.uploadDocument_HTML()} */}
                  Test B
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                expanded={this.state.actionSteps === true}
                onChange={(e) => {
                  this.setState({
                    actionSteps: !this.state.actionSteps,
                  });
                }}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <h5 style={{ color: "maroon", fontSize: "16px" }}>
                    Action Steps
                  </h5>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {/* {this.ainCoverLetter_HTML()} */}
                  Test C
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                expanded={this.state.emailTemplate === true}
                onChange={(e) => {
                  this.setState({
                    emailTemplate: !this.state.emailTemplate,
                  });
                }}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <h5 style={{ color: "maroon", fontSize: "16px" }}>
                    Email Template
                  </h5>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {/* {this.ainCoverLetter_HTML()} */}
                  Test C
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                expanded={this.state.ainFinancialAssistanceInformation === true}
                onChange={(e) => {
                  this.setState({
                    ainFinancialAssistanceInformation: !this.state
                      .ainFinancialAssistanceInformation,
                  });
                }}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <h5 style={{ color: "maroon", fontSize: "16px" }}>
                    AIN Financial Assistance Information
                  </h5>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Link
                    style={{
                      color: "maroon",
                      cursor: "pointer",
                      padding: "5px;",
                    }}
                    to={`/aINFundAdmin/${this.state.queryString}`}
                    target={"_blank"}
                  >
                    <FontAwesomeIcon
                      style={{ marginBottom: "2px", marginRight: "2px" }}
                      icon={faExternalLinkSquareAlt}
                    />
                    Click here to Access AIN
                  </Link>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                expanded={this.state.associateContactHistory === true}
                onChange={(e) => {
                  this.setState({
                    associateContactHistory: !this.state
                      .associateContactHistory,
                  });
                }}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <h5 style={{ color: "maroon", fontSize: "16px" }}>
                    Associate Contact History
                  </h5>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {/* {this.ainCoverLetter_HTML()} */}
                  Test C
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </FormControl>
          </Paper>
        </div>
        {/* <div className="col-md-12">
          <div className="row">
            <AdminAction />
          </div>
        </div> */}
        <div className="row">&nbsp;</div>
      </React.Fragment>
    );
    return _html;
  }

  public voteModel_HTML = () => {
    let _html = (
      <React.Fragment>
        </React.Fragment>
    );
    return _html;
  }

  public render(): React.ReactElement<any> {
    return (
      <div className={styles.ainfunds} style={{ width: "100%" }}>
        <Router>
          <div className="row">
            <div
              className="alert"
              style={{
                textAlign: "justify",
                backgroundColor: "rgb(217, 217, 214)",
                width: "100%",
                border: "none",
                borderRadius: "0",
                marginBottom: "0",
              }}
            >
              <h5>Internal Care Submission</h5>
            </div>
          </div>
          <div>
            <br />
          </div>
          <div className="row" style={{ margin: "0" }}>
            {this.main_HTML()}
          </div>
          <Switch>
            <Route
              exact
              path="/aINFundAdmin/:submissionID"
              render={(props) => (
                <AdminAINFundsMain
                  properties={{
                    context: this.state.context,
                  }}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
