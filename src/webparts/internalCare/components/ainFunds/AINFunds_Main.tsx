import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  RadioGroup,
  Select,
  Zoom,
  Fab,
} from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";
//import PickyDateTime from "react-picky-date-time";
import * as moment from "moment";
import * as React from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import styles from "../ainFunds/AINFunds_Main.module.scss";
import {
  NextButton,
  BackButton,
  CustomTextField,
  state_DD,
} from "../common/Common";
import { AssociateInformation } from "./AssociateInformation";
import { DescriptionofHardship } from "./DescriptionofHardship";
import { FinancialAssistanceRequested } from "./FinancialAssistanceRequested";
import { HouseholdIncome } from "./HouseholdIncome";
import { HouseholdExpenses } from "./HouseholdExpenses";
import { RequiredDocumentation } from "./RequiredDocumentation";
import CheckIcon from '@material-ui/icons/Check';
import { SubmitApplication } from "./SubmitApplication";
import { ITheme } from "spfx-js-theme";
const theme: ITheme = window.__themeState__.theme;

// export interface IAINFundsMain {
//   disclaimers: boolean,
//   onAgree: boolean,
//   stepCount:number,
//   component_AssociateInformation: boolean,
//   component_DescriptionofHardship: boolean,
//   component_AssistanceRequested: boolean,
//   component_Income: boolean,
//   component_HouseholdExpenses: boolean,
//   component_RequiredDocumentation: boolean,
//   component_SubmitApplication: boolean,
//   disable_NextButton: boolean,
//   disable_BackButton: boolean,
//   associateInformation_Test: string
// }


export class AINFundsMain extends React.Component<any, any> {
  public statesDD = state_DD;
  public constructor(props: any, state: any) {
    super(props);
    this.state = {
      disclaimers: false,
      onAgree: false,
      stepCount: 0,
      component_AssociateInformation: true,
      component_DescriptionofHardship: true,
      component_AssistanceRequested: true,
      component_Income: true,
      component_HouseholdExpenses: true,
      component_RequiredDocumentation: true,
      component_SubmitApplication: true,
      disable_NextButton: false,
      disable_BackButton: true,
      // associateInformation_firstName:""
    };
  }

  public onDateSelected = (res, slectedInput) => {
    let d = res.month + "-" + res.date + "-" + res.year;
    d = moment(d).format("MM/DD/YYYY");
    this.setState(
      {
        calendarDialog: false,
      },
      () => {
        switch (slectedInput) {
          case "birthdate":
            this.setState({
              birthdate: d,
            });
            break;
          case "hireDate":
            this.setState({
              hireDate: d,
            });
            break;
          case "leaseMortgage":
            this.setState({
              leaseMortgage: d,
            });
            break;
        }
      }
    );
  };

  public calledfromChild = (data)=>{
    console.log(data);
  }

  public breadCumbs = () => {
    let _html = (
      <React.Fragment>
        <div style={{ backgroundColor: "#f4f5f7", width:"100%" }}>
          <ul className={styles.breadcrumbs}>
            {this.state.component_AssociateInformation === true ? (
              <React.Fragment>
                <li style={{backgroundColor: this.state.stepCount === 0 ? "rgb(217, 217, 214)" : null}}>
                  <a
                    onClick={() => {
                      this.setState({
                        stepCount: 0,
                        disable_NextButton: false,
                        disable_BackButton: true,
                      });
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    Associate Information{" "}
                    <span style={{ paddingLeft: "5px" }}> / </span>
                  </a>
                </li>
              </React.Fragment>
            ) : null}
            {this.state.component_DescriptionofHardship === true ? (
              <React.Fragment>
               <li style={{backgroundColor: this.state.stepCount === 1 ? "rgb(217, 217, 214)" : null}}>
                  <a
                    onClick={() => {
                      this.setState({
                        stepCount: 1,
                        disable_NextButton: false,
                        disable_BackButton: false,
                      });
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    Description of Hardship{" "}
                    <span style={{ paddingLeft: "5px" }}> / </span>
                  </a>
                </li>
              </React.Fragment>
            ) : null}
            {this.state.component_AssistanceRequested === true ? (
              <React.Fragment>
                <li style={{backgroundColor: this.state.stepCount === 2 ? "rgb(217, 217, 214)" : null}}>
                  <a
                    onClick={() => {
                      this.setState({
                        stepCount: 2,
                        disable_NextButton: false,
                        disable_BackButton: false,
                      });
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    Financial Assistance Requested{" "}
                    <span style={{ paddingLeft: "5px" }}> / </span>
                  </a>
                </li>
              </React.Fragment>
            ) : null}
            {this.state.component_Income === true ? (
              <React.Fragment>
                <li style={{backgroundColor: this.state.stepCount === 3 ? "rgb(217, 217, 214)" : null}}>
                  <a
                    onClick={() => {
                      this.setState({
                        stepCount: 3,
                        disable_NextButton: false,
                        disable_BackButton: false,
                      });
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    Household Income <span style={{ paddingLeft: "5px" }}> / </span>
                  </a>
                </li>
              </React.Fragment>
            ) : null}
            {this.state.component_HouseholdExpenses === true ? (
              <React.Fragment>
                <li style={{backgroundColor: this.state.stepCount === 4 ? "rgb(217, 217, 214)" : null}}>
                  <a
                    onClick={() => {
                      this.setState({
                        stepCount: 4,
                        disable_NextButton: false,
                        disable_BackButton: false,
                      });
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    Household Expenses{" "}
                    <span style={{ paddingLeft: "5px" }}> / </span>
                  </a>
                </li>
              </React.Fragment>
            ) : null}
            {this.state.component_RequiredDocumentation === true ? (
              <React.Fragment>
                <li style={{backgroundColor: this.state.stepCount === 5 ? "rgb(217, 217, 214)" : null}}>
                  <a
                    onClick={() => {
                      this.setState({
                        stepCount: 5,
                        disable_NextButton: false,
                        disable_BackButton: false,
                      });
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    Required Documentation{" "}
                    <span style={{ paddingLeft: "5px" }}> / </span>
                  </a>
                </li>
              </React.Fragment>
            ) : null}
            {this.state.component_SubmitApplication === true ? (
              <React.Fragment>
                <li style={{backgroundColor: this.state.stepCount === 6 ? "rgb(217, 217, 214)" : null}}>
                  <a
                    onClick={() => {
                      this.setState({
                        stepCount: 6,
                        disable_NextButton: true,
                        disable_BackButton: false,
                      });
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    Submit Application
                  </a>
                </li>
              </React.Fragment>
            ) : null}
          </ul>
        </div>
      </React.Fragment>
    );
    return _html;
  }

  public loadComponents = () => {
    let _html = (
      <React.Fragment>
        {this.state.stepCount === 0 ? (
          <React.Fragment>
            <AssociateInformation
              calledfromChild={this.calledfromChild.bind(this)}
            // props={{
            //   associateInformation_firstName:this.state.associateInformation_firstName
            // }}
            />
          </React.Fragment>
        ) : null}
        {this.state.stepCount === 1 ? (
          <React.Fragment>
            <DescriptionofHardship />
          </React.Fragment>
        ) : null}
        {this.state.stepCount === 2 ? (
          <React.Fragment>
            <FinancialAssistanceRequested />
          </React.Fragment>
        ) : null}
        {this.state.stepCount === 3 ? (
          <React.Fragment>
            <HouseholdIncome />
          </React.Fragment>
        ) : null}
        {this.state.stepCount === 4 ? (
          <React.Fragment>
            <HouseholdExpenses />
          </React.Fragment>
        ) : null}
        {this.state.stepCount === 5 ? (
          <React.Fragment>
            <RequiredDocumentation />
          </React.Fragment>
        ) : null}
        {this.state.stepCount === 6 ? (
          <React.Fragment>
            <SubmitApplication />
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
    return _html;
  }

  public stepper_Next = (step) => {
    switch (step) {
      case 0:
        this.setState({
          disable_NextButton: false,
          disable_BackButton: false,
          stepCount: step + 1,
          component_DescriptionofHardship: true,
        });
        break;
      case 1:
        this.setState({
          disable_NextButton: false,
          disable_BackButton: false,
          stepCount: step + 1,
          component_AssistanceRequested: true,
        });
        break;
      case 2:
        this.setState({
          disable_NextButton: false,
          disable_BackButton: false,
          stepCount: step + 1,
          component_Income: true,
        });
        break;
      case 3:
        this.setState({
          disable_NextButton: false,
          disable_BackButton: false,
          stepCount: step + 1,
          component_HouseholdExpenses: true,
        });
        break;
      case 4:
        this.setState({
          disable_NextButton: false,
          disable_BackButton: false,
          stepCount: step + 1,
          component_RequiredDocumentation: true,
        });
        break;
      case 5:
        this.setState({
          disable_BackButton: false,
          disable_NextButton: true,
          stepCount: step + 1,
          component_SubmitApplication: true,
        });
        break;
    }
  }

  public stepper_back = (step) => {
    if (step === 6) {
      this.setState({
        stepCount: step - 1,
        disable_NextButton: false,
        disable_BackButton: false,
      });
    } else if (step === 1) {
      this.setState({
        stepCount: step - 1,
        disable_NextButton: false,
        disable_BackButton: true,
      });
    } else {
      this.setState({
        stepCount: step - 1,
        disable_NextButton: false,
        disable_BackButton: false,
      });
    }
  }

  public stepper_HTML = () => {
    let _html = (
      <React.Fragment>
        <BackButton
          disabled={this.state.disable_BackButton}
          style={{ marginRight: "5px" }}
          onClick={(e) => {
            this.stepper_back(this.state.stepCount);
          }}
        >
          <NavigateBeforeIcon /> Back
        </BackButton>
        <NextButton
          disabled={this.state.disable_NextButton}
          onClick={(e) => {
            this.stepper_Next(this.state.stepCount);
          }}
        >
          Next <NavigateNextIcon />
        </NextButton>
      </React.Fragment>
    );
    return _html;
  }

  public disclaimers_HTML = () => {
    let _html = (
      <React.Fragment>
        <div
          className="col-md-12"
          style={{
            backgroundColor: "rgb(244, 245, 247)",
            color: "maroon",
            borderRadius: "5px",
          }}
        >
          <h4 style={{ padding: "10px" }}>Application Legal disclaimers</h4>
          <ul>
            <li>
              The Associates in Need Fund (AIN or the Fund) is a charity with a
              majority of its funding provided by Wawa associate contributions.
              There is no guarantee of assistance from the Fund and all
              decisions are made by the AIN Board, a separate 501(c)(3).
            </li>
            <li>
              By clicking “I Agree” on this page you certify that you understand
              that there is a three-month tenure requirement to be considered
              for financial assistance.
            </li>
            <li>
              By clicking “I Agree” on this page you certify that all of the
              information provided in this application is true and factual and
              understand that if anything contained within the AIN Fund
              application is found to be untrue, disciplinary action may result,
              up to and including termination.
            </li>
            <li>
              By clicking on “I Agree” on this page, you also agree that you are
              under a continuing obligation to inform the company if your
              circumstances change such that (1) you require less AIN Fund
              assistance than previously sought, or (2) you no longer require
              any AIN Fund assistance.
            </li>
            <li>Assistance is limited to housing, utilities, and funerals.</li>
            <li>
              All decisions are made by the AIN Board with the authorized
              assistance of the Internal Care Team Advocates.
            </li>
            <li>
              Restrictions may be placed on any associate who has received
              frequent or significant assistance that may include the inability
              to apply for further assistance from the Fund.
            </li>
          </ul>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-auto">
                <FormControl fullWidth style={{ margin: "10px" }}>
                  <NextButton
                    style={{ marginTop: "7px" }}
                    onClick={(e) => {
                      this.setState({
                        onAgree: true,
                      });
                    }}
                  >
                    <ThumbUpIcon style={{ paddingRight: "5px" }} />I Agree
                  </NextButton>
                </FormControl>
              </div>
            </div>
          </div>
          <React.Fragment>
            {this.state.onAgree !== false ? (
              <React.Fragment>
                <Zoom
                  key={1}
                  in={true}
                  timeout={1080}
                  style={{
                    transitionDelay: "360ms",
                  }}
                  unmountOnExit
                >
                  <div className="container">
                    <div className="row justify-content-md-center">
                      <div
                        className="col-md-auto"
                        style={{
                          backgroundColor: "rgb(244, 245, 247)",
                          color: "maroon",
                          borderRadius: "5px",
                        }}
                      >
                        <FormControl
                          fullWidth
                          style={{
                            margin: "10px",
                            textAlign: "center",
                            display: "block",
                          }}
                        >
                          <Fab style={{ background: "green" }}>
                            <CheckIcon style={{ color: "white" }} />
                          </Fab>

                          <div className="row">
                            <a
                              className="btn btn-link"
                              style={{
                                color: theme.themeSecondary,
                                cursor: "pointer",
                              }}
                              onClick={(e) => {
                                this.setState({
                                  disclaimers: true,
                                  onAgree: false,
                                });
                              }}
                            >
                              <ThumbUpIcon style={{ paddingRight: "5px" }} />
                              Click Here{" "}
                            </a>
                            <h5
                              style={{
                                padding: "7px 10px",
                                fontSize: "16px",
                                color: "black",
                              }}
                            >
                              to continue with your existing AIN Fund
                              Application started on 06/06/2020.
                            </h5>
                          </div>
                          <div className="row">
                            <a
                              className="btn btn-link"
                              style={{
                                color: theme.themeSecondary,
                                cursor: "pointer",
                              }}
                              onClick={(e) => {
                                this.setState({
                                  disclaimers: true,
                                  onAgree: false,
                                });
                              }}
                            >
                              <ThumbUpIcon style={{ paddingRight: "5px" }} />
                              Click Here{" "}
                            </a>
                            <h5
                              style={{
                                padding: "7px 10px",
                                fontSize: "16px",
                                color: "black",
                              }}
                            >
                              to continue to a new application.
                            </h5>
                          </div>
                        </FormControl>
                      </div>
                    </div>
                  </div>
                </Zoom>
              </React.Fragment>
            ) : null}
          </React.Fragment>
        </div>
      </React.Fragment>
    );
    return _html;
  }

  //internalCare

  // background: "#99cdd2",
  public render(): React.ReactElement<any> {
    return (
      <div className={styles.ainfunds}>
        <div
          className={`${theme.neutralPrimary} row`}
          style={{ padding: "15px", background: "#d9d9d6" }}
        >
          <h4 style={{ color: theme.black }}> AIN Funds </h4>
        </div>

        <React.Fragment>
          {this.state.disclaimers !== false ? (
            <React.Fragment>
              <div className="row">{this.breadCumbs()}</div>
              <div className="row" style={{ margin: "0" }}>
                {this.loadComponents()}
              </div>
              <div className="row" style={{ float: "right" }}>
                {this.stepper_HTML()}
              </div>
              <div className="row" style={{ clear: "both" }}>
                &nbsp;
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="row">{this.disclaimers_HTML()}</div>
            </React.Fragment>
          )}
        </React.Fragment>
      </div>
    );
  }
}

{
  /* <div style={{ background: theme.themeLighterAlt, padding: "10px" }}>
          themeLighterAlt
        </div>
        <div style={{ background: theme.themeLighter, padding: "10px" }}>
          themeLighter
        </div>{" "}
        <div style={{ background: theme.themeLight, padding: "10px" }}>
          themeLight
        </div>{" "}
        <div style={{ background: theme.themeTertiary, padding: "10px" }}>
          themeTertiary
        </div>{" "}
        <div style={{ background: theme.themeSecondary, padding: "10px" }}>
          themeSecondary
        </div>{" "}
        <div style={{ background: theme.themeDarkAlt, padding: "10px" }}>
          themeDarkAlt
        </div>{" "}
        <div style={{ background: theme.themeDark, padding: "10px" }}>
          themeDark
        </div>{" "}
        <div style={{ background: theme.themeDarker, padding: "10px" }}>
          themeDarker
        </div>{" "}
        <div style={{ background: theme.neutralLighterAlt, padding: "10px" }}>
          neutralLighterAlt
        </div>{" "}
        <div style={{ background: theme.neutralLighter, padding: "10px" }}>
          neutralLighter
        </div>{" "}
        <div style={{ background: theme.neutralLight, padding: "10px" }}>
          neutralLight
        </div>{" "}
        <div
          style={{ background: theme.neutralQuaternaryAlt, padding: "10px" }}
        >
          neutralQuaternaryAlt
        </div>{" "}
        <div style={{ background: theme.neutralQuaternary, padding: "10px" }}>
          neutralQuaternary
        </div>
        <div style={{ background: theme.neutralTertiaryAlt, padding: "10px" }}>
          neutralTertiaryAlt
        </div>
        <div style={{ background: theme.neutralTertiary, padding: "10px" }}>
          neutralTertiary
        </div>
        <div style={{ background: theme.neutralSecondary, padding: "10px" }}>
          neutralSecondary
        </div>
        <div style={{ background: theme.neutralPrimaryAlt, padding: "10px" }}>
          neutralPrimaryAlt
        </div>
        <div style={{ background: theme.neutralPrimary, padding: "10px" }}>
          neutralPrimary
        </div>
        <div style={{ background: theme.neutralDark, padding: "10px" }}>
          neutralDark
        </div> */
}
