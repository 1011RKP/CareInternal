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
  Checkbox,
  TextareaAutosize,
} from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";
//import PickyDateTime from "react-picky-date-time";
import * as moment from "moment";
import * as React from "react";
import styles from "../ainFunds/AINFunds_Main.module.scss";
import SaveIcon from '@material-ui/icons/Save';
import ErrorIcon from '@material-ui/icons/Error';
import { CustomRadio, CustomTextField, state_DD, NextButton } from "../common/Common";
import { ITheme } from "spfx-js-theme";
const theme: ITheme = window.__themeState__.theme;


    //"@microsoft/rush-stack-compiler-3.1": "^0.11.1",
    //"@microsoft/rush-stack-compiler-2.9": "0.7.16",

export class SubmitApplication extends React.Component<any, any> {
  public statesDD = state_DD;
  public constructor(props: any, state: any) {
    super(props);
    this.state = {
      authorizeAIN: false,
      ain401K: false,
      ainLifeInsurance: false,
      ainFundBoard: "",
      ainFundBoard_Error: false,
      associateStated: false,
      associateFailure: false,
      associateResults: false,
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

  public SubmitApplication_HTML = () => {
    let _html = (
      <React.Fragment>
        <div className="col-md-12">
          <FormControl fullWidth>
            <FormLabel
              component="legend"
              style={{
                color: "maroon",
                fontSize: "0.95rem",
              }}
            >
              Please certify that you authorize Associates In Need (AIN) to
              obtain information from Wawa, Inc.
            </FormLabel>
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.authorizeAIN}
                  onChange={(e) => {
                    this.setState({
                      authorizeAIN: !this.state.authorizeAIN,
                    });
                  }}
                  name="authorizeAIN"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="*Check this box to authorize AIN to obtain pay-stub from Wawa, Inc."
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.ain401K}
                  onChange={(e) => {
                    this.setState({
                      ain401K: !this.state.ain401K,
                    });
                  }}
                  name="ain401K"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="*Check this box to authorize AIN to obtain 401K account information from Wawa Inc."
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.ainLifeInsurance}
                  onChange={(e) => {
                    this.setState({
                      ainLifeInsurance: !this.state.ainLifeInsurance,
                    });
                  }}
                  name="ainLifeInsurance"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="* Check this box to authorize AIN to obtain Life Insurance information from Wawa Inc."
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <FormLabel
              style={{
                color: theme.themeSecondary,
              }}
            >
              *Please list anything additional you would like the Internal Care
              Team or AIN Fund Board to know regarding your application:
            </FormLabel>
            <TextareaAutosize
              rows={6}
              rowsMax={6}
              onChange={(e) => {
                if (e.target.value !== null) {
                  this.setState({
                    ainFundBoard: e.target.value,
                    ainFundBoard_Error: false,
                  });
                } else {
                  this.setState({
                    ainFundBoard: e.target.value,
                    ainFundBoard_Error: true,
                  });
                }
              }}
              name="ainFundBoard"
              value={this.state.ainFundBoard}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.associateStated}
                  onChange={(e) => {
                    this.setState({
                      associateStated: !this.state.associateStated,
                    });
                  }}
                  name="associateStated"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="*By selecting this checkbox, I/Associate stated above have done everything possible to help myself/Associate before applying for this assistance. I/Associate certify that the information contained in the application is true, correct and complete and that I/Associate am requesting assistance for myself/Associate because of a severe financial hardship which is not covered by insurance or any other sources."
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.associateFailure}
                  onChange={(e) => {
                    this.setState({
                      associateFailure: !this.state.associateFailure,
                    });
                  }}
                  name="associateFailure"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="*By selecting this checkbox, I/Associate agree that failure to provide the requested information may result in denial."
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.associateResults}
                  onChange={(e) => {
                    this.setState({
                      associateResults: !this.state.associateResults,
                    });
                  }}
                  name="associateResults"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="*By selecting this checkbox, I/Associate agree that this application, its contents, results, and details will be kept confidential by all parties (associate applicant, internal care department, and the AIN Fund Board of Directors.)"
            />
          </FormControl>
        </div>
        <div className="col-md-12">
          <div
            className="alert alert-info"
            style={{ textAlign: "justify", width: "100%" }}
          >
            <strong>Info!</strong>You must check that all required fields are
            filled in and all acknowledgement checkboxes have been checked
            before submitting your application. Please press this button to
            check your application for errors.
          </div>
        </div>
        <div className="col-md-12">
          <NextButton
            style={{ marginRight: "10px" }}
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ErrorIcon style={{ paddingRight: "5px" }} /> Check for Errors
          </NextButton>
          <NextButton
            disabled={true}
            onClick={(e) => {
              console.log(e);
            }}
          >
            <SaveIcon style={{ paddingRight: "5px" }} />  Save
          </NextButton>
        </div>
        <div style={{clear:"both"}}>&nbsp;</div>
      </React.Fragment>
    );
    return _html;
  };

  public render(): React.ReactElement<any> {
    return (
      <div className={styles.ainfunds} style={{ width: "100%" }}>
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
            <h5>Submit Application</h5>
          </div>
        </div>
        <div className="row">
          <br />
          <div
            className="alert alert-info"
            style={{ textAlign: "justify", width: "100%", backgroundColor:theme.themeLighter }}
          >
            <strong>Info!</strong>Please certify below that you have read all
            information. If you do not have the required documentation at this
            time, please submit your application and contact Internal Care.
          </div>
        </div>
        <div className="row"> {this.SubmitApplication_HTML()}</div>
      </div>
    );
  }
}
