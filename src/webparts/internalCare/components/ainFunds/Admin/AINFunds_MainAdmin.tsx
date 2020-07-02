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
import styles from "../AINFunds_Main.module.scss";
import {
  NextButton,
  BackButton,
  CustomTextField,
  state_DD,
} from "../../common/Common";
import { InternalCareSubmissionSearch } from "./InternalCareSubmissionSearch_Admin";
import { AdminInternalCareSubmission } from "./InternalCareSubmission_Admin";
import { AdminAssociateInformation } from "./AssociateInformation_Admin";
import { AdminDescriptionofHardship } from "./DescriptionofHardship_Admin";
import { AdminFinancialAssistanceRequested } from "./FinancialAssistanceRequested_Admin";
import { AdminHouseholdIncome } from "./HouseholdIncome_Admin";
import { AdminHouseholdExpenses } from "./HouseholdExpenses_Admin";
import { AdminRequiredDocumentation } from "./RequiredDocumentation_Admin";
import CheckIcon from "@material-ui/icons/Check";
import { AdminSubmitApplication } from "./SubmitApplication_Admin";
import { Admin401k } from "./401k_Admin";
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

export class AdminAINFundsMain extends React.Component<any, any> {
  public statesDD = state_DD;
  public constructor(props: any, state: any) {
    super(props);
    this.state = {
      context:this.props.properties.context,
      internalCareSubmissionSearch: false,
      internalCareSubmission:false,
      onAgree: false,
      stepCount: 0,
      component_AssociateInformation: true,
      component_DescriptionofHardship: true,
      component_AssistanceRequested: true,
      component_Income: true,
      component_HouseholdExpenses: true,
      component_RequiredDocumentation: true,
      component_401k: true,
      component_SubmitApplication: true,
      disable_NextButton: false,
      disable_BackButton: true,
      previous_Data:[]
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
  }

  public calledfromChild = (data) => {
   let info = data.d;
   if(data.d.SubmissionID){
     this.setState({
      internalCareSubmissionSearch: true,
      previous_Data:info
     },()=>{
       console.log(info);
     })
   }
  }

  // public calledfrominternalCareSubmission = (data) =>{
  //   if(data.SubmissionID){
  //     this.setState({
  //       internalCareSubmission: true
  //     },()=>{
  //       //console.log(info);
  //     })
  //   }
  // }

  // public directCall = (data) =>{
  //   if(data.d.SubmissionID){
  //     this.setState({
  //       internalCareSubmissionSearch:null,
  //       internalCareSubmission: true
  //     },()=>{
  //       //console.log(info);
  //     })
  //   }
  // }

  public breadCumbs = () => {
    let _html = (
      <React.Fragment>
        <div style={{ backgroundColor: "#f4f5f7", width: "100%" }}>
          <ul className={styles.breadcrumbs}>
            {this.state.component_AssociateInformation === true ? (
              <React.Fragment>
                <li
                  style={{
                    backgroundColor:
                      this.state.stepCount === 0 ? "rgb(217, 217, 214)" : null,
                  }}
                >
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
                <li
                  style={{
                    backgroundColor:
                      this.state.stepCount === 1 ? "rgb(217, 217, 214)" : null,
                  }}
                >
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
                <li
                  style={{
                    backgroundColor:
                      this.state.stepCount === 2 ? "rgb(217, 217, 214)" : null,
                  }}
                >
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
                <li
                  style={{
                    backgroundColor:
                      this.state.stepCount === 3 ? "rgb(217, 217, 214)" : null,
                  }}
                >
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
                    Household Income{" "}
                    <span style={{ paddingLeft: "5px" }}> / </span>
                  </a>
                </li>
              </React.Fragment>
            ) : null}
            {this.state.component_HouseholdExpenses === true ? (
              <React.Fragment>
                <li
                  style={{
                    backgroundColor:
                      this.state.stepCount === 4 ? "rgb(217, 217, 214)" : null,
                  }}
                >
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
                <li
                  style={{
                    backgroundColor:
                      this.state.stepCount === 5 ? "rgb(217, 217, 214)" : null,
                  }}
                >
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
            {this.state.component_401k === true ? (
              <React.Fragment>
                <li
                  style={{
                    backgroundColor:
                      this.state.stepCount === 6 ? "rgb(217, 217, 214)" : null,
                  }}
                >
                  <a
                    onClick={() => {
                      this.setState({
                        stepCount: 6,
                        disable_NextButton: false,
                        disable_BackButton: false,
                      });
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    401K <span style={{ paddingLeft: "5px" }}> / </span>
                  </a>
                </li>
              </React.Fragment>
            ) : null}
            {this.state.component_SubmitApplication === true ? (
              <React.Fragment>
                <li
                  style={{
                    backgroundColor:
                      this.state.stepCount === 7 ? "rgb(217, 217, 214)" : null,
                  }}
                >
                  <a
                    onClick={() => {
                      this.setState({
                        stepCount: 7,
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
            <AdminAssociateInformation
               properties={{
                context: this.state.context,
                calledfromChild:this.calledfromChild.bind(this)
              }}
              //calledfromChild={this.calledfromChild.bind(this)}
              // props={{
              //   associateInformation_firstName:this.state.associateInformation_firstName
              // }}
            />
          </React.Fragment>
        ) : null}
        {this.state.stepCount === 1 ? (
          <React.Fragment>
            <AdminDescriptionofHardship />
          </React.Fragment>
        ) : null}
        {this.state.stepCount === 2 ? (
          <React.Fragment>
            <AdminFinancialAssistanceRequested />
          </React.Fragment>
        ) : null}
        {this.state.stepCount === 3 ? (
          <React.Fragment>
            <AdminHouseholdIncome />
          </React.Fragment>
        ) : null}
        {this.state.stepCount === 4 ? (
          <React.Fragment>
            <AdminHouseholdExpenses />
          </React.Fragment>
        ) : null}
        {this.state.stepCount === 5 ? (
          <React.Fragment>
            <AdminRequiredDocumentation />
          </React.Fragment>
        ) : null}
        {this.state.stepCount === 6 ? (
          <React.Fragment>
            <Admin401k />
          </React.Fragment>
        ) : null}
        {this.state.stepCount === 7 ? (
          <React.Fragment>
            <AdminSubmitApplication />
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
          disable_NextButton: false,
          stepCount: step + 1,
          component_401k: true,
        });
      case 6:
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
    if (step === 7) {
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

  public internalCareSubmissionSearch_HTML = () => {
    let _html = (
      <React.Fragment>
        <div className="col-md-12">
          <InternalCareSubmissionSearch
          //={this.calledfromChild.bind(this)}
            properties={{
              context: this.state.context,
              // calledfromChild:this.calledfromChild.bind(this),
              // directCall:this.directCall.bind(this)
            }}
          />
        </div>
      </React.Fragment>
    );
    return _html;
  }

  public internalCareSubmission_HTML = () => {
    let _html = (
      <React.Fragment>
        <div className="col-md-12">
          <AdminInternalCareSubmission
          //={this.calledfromChild.bind(this)}
            properties={{
              context: this.state.context,
              // previous_Data:this.state.previous_Data,
              // calledfrominternalCareSubmission:this.calledfrominternalCareSubmission.bind(this)
            }}
          />
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
          <h4 style={{ color: theme.black }}> AIN Funds for Admins</h4>
        </div>

        <React.Fragment>
          <div className="row">{this.breadCumbs()}</div>
          <div className="row" style={{ margin: "0" }}>
            {this.loadComponents()}
          </div>
          <div className="row" style={{ float: "right" }}>
            {this.stepper_HTML()}
          </div>
          <div className="row" style={{ clear: "both" }}></div>
        </React.Fragment>

        {/* <React.Fragment>
          {this.state.internalCareSubmissionSearch === true ? (
            <React.Fragment>
              <div className="row">{this.internalCareSubmission_HTML()}</div>
            </React.Fragment>
          ) : null}
        </React.Fragment>
        <React.Fragment>
          {this.state.internalCareSubmissionSearch === false ? null : (
            <React.Fragment>
              <div className="row">
                {this.internalCareSubmissionSearch_HTML()}
              </div>
            </React.Fragment>
          )}
        </React.Fragment> */}
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
