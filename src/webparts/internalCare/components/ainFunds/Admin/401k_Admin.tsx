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
import styles from "../AINFunds_Main.module.scss";
import SaveIcon from "@material-ui/icons/Save";
import ErrorIcon from "@material-ui/icons/Error";
import {
  CustomRadio,
  CustomTextField,
  state_DD,
  NextButton,
} from "../../common/Common";
import { AdminAction } from "./Action_admin";
import { ITheme } from "spfx-js-theme";
const theme: ITheme = window.__themeState__.theme;

//"@microsoft/rush-stack-compiler-3.1": "^0.11.1",
//"@microsoft/rush-stack-compiler-2.9": "0.7.16",

export class Admin401k extends React.Component<any, any> {
  public statesDD = state_DD;
  public constructor(props: any, state: any) {
    super(props);
    this.state = {
      check_hardshipWithdraw: false,
      check_hardshipWithdraw_disable:false,
      check_loan_disable: false,
      check_loan: false,
      check_wd: false,
      check_wd_disable: false,
      check_afterTaxWD: false,
      check_afterTaxWD_disable: false,
      check_noFundsAvailable: false,
      check_noFundsAvailable_disable: false,
      check_no401kParticipation: false,
      check_no401kParticipation_disable: false,
      check_401kParticipant: false,
      check_401kParticipant_disable: false,
      onCondition: false,
      dollarAmount: "",
      currentLoans: "0",
      loan1_PaymentAmount: "",
      loan1_OutstandingAmount: "",
      loan2_PaymentAmount: "",
      loan2_OutstandingAmount: "",
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

  public mina_HTML = () => {
    let _html = (
      <React.Fragment>
        <div className="col-12">
          <div>{this.k401_HTML()}</div>
        </div>
        <div className="col-md-12">
          <div className="row">
            <AdminAction />
          </div>
        </div>
      </React.Fragment>
    );
    return _html;
  }

  public k401_HTML = () => {
    let _html = (
      <React.Fragment>
        <div
          className="card"
          style={{ margin: "10px 0px", borderColor: "#d9d9d6" }}
        >
          <div
            className="card-header"
            style={{ backgroundColor: "#d9d9d6", borderColor: "#d9d9d6" }}
          >
            <h5>401k</h5>
          </div>
          <div className="card-body">
            <FormControl style={{ margin: "10px", display: "block" }}>
              <FormLabel
                component="legend"
                style={{ color: "maroon", fontWeight: "bold" }}
              >
                401k Availability
              </FormLabel>
              <FormControlLabel
                control={
                  <Checkbox
                    disabled={this.state.check_hardshipWithdraw_disable}
                    checked={this.state.check_hardshipWithdraw}
                    onChange={(e) => {
                      if (e.target.checked !== false) {
                        this.setState({
                          check_hardshipWithdraw: !this.state
                            .check_hardshipWithdraw,
                          onCondition: true,
                          check_loan_disable: true,
                          check_wd_disable: true,
                          check_afterTaxWD_disable: true,
                          check_noFundsAvailable_disable: true,
                          check_no401kParticipation_disable: true,
                          check_401kParticipant_disable: true,
                        });
                      } else {
                        this.setState({
                          check_hardshipWithdraw: !this.state
                            .check_hardshipWithdraw,
                          onCondition: false,
                          check_loan_disable: false,
                          check_wd_disable: false,
                          check_afterTaxWD_disable: false,
                          check_noFundsAvailable_disable: false,
                          check_no401kParticipation_disable: false,
                          check_401kParticipant_disable: false,
                        });
                      }
                    }}
                    name="check_hardshipWithdraw"
                    style={{ color: theme.themeSecondary }}
                  />
                }
                label="Hardship Withdraw"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    disabled={this.state.check_loan_disable}
                    checked={this.state.check_loan}
                    onChange={(e) => {
                      if (e.target.checked !== false) {
                        this.setState({
                          check_loan: !this.state.check_loan,
                          onCondition: true,
                          check_hardshipWithdraw_disable: true,
                          check_wd_disable: true,
                          check_afterTaxWD_disable: true,
                          check_noFundsAvailable_disable: true,
                          check_no401kParticipation_disable: true,
                          check_401kParticipant_disable: true,
                        });
                      } else {
                        this.setState({
                          check_loan: !this.state.check_loan,
                          onCondition: false,
                          check_hardshipWithdraw_disable: false,
                          check_wd_disable: false,
                          check_afterTaxWD_disable: false,
                          check_noFundsAvailable_disable: false,
                          check_no401kParticipation_disable: false,
                          check_401kParticipant_disable: false,
                        });
                      }
                    }}
                    name="check_loan"
                    style={{ color: theme.themeSecondary }}
                  />
                }
                label="Loan"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    disabled={this.state.check_wd_disable}
                    checked={this.state.check_wd}
                    onChange={(e) => {
                      if (e.target.checked !== false) {
                        this.setState({
                          check_wd: !this.state.check_wd,
                          onCondition: true,
                          check_hardshipWithdraw_disable: true,
                          check_loan_disable: true,
                          check_afterTaxWD_disable: true,
                          check_noFundsAvailable_disable: true,
                          check_no401kParticipation_disable: true,
                          check_401kParticipant_disable: true,
                        });
                      } else {
                        this.setState({
                          check_wd: !this.state.check_wd,
                          onCondition: false,
                          check_hardshipWithdraw_disable: false,
                          check_loan_disable: false,
                          check_afterTaxWD_disable: false,
                          check_noFundsAvailable_disable: false,
                          check_no401kParticipation_disable: false,
                          check_401kParticipant_disable: false,
                        });
                      }
                    }}
                    name="check_wd"
                    style={{ color: theme.themeSecondary }}
                  />
                }
                label="59 1/2 WD"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    disabled={this.state.check_afterTaxWD_disable}
                    checked={this.state.check_afterTaxWD}
                    onChange={(e) => {
                      if (e.target.checked !== false) {
                        this.setState({
                          check_afterTaxWD: !this.state.check_afterTaxWD,
                          onCondition: true,
                          check_hardshipWithdraw_disable: true,
                          check_loan_disable: true,
                          check_wd_disable: true,
                          check_noFundsAvailable_disable: true,
                          check_no401kParticipation_disable: true,
                          check_401kParticipant_disable: true,
                        });
                      } else {
                        this.setState({
                          check_afterTaxWD: !this.state.check_afterTaxWD,
                          onCondition: false,
                          check_hardshipWithdraw_disable: false,
                          check_loan_disable: false,
                          check_wd_disable: false,
                          check_noFundsAvailable_disable: false,
                          check_no401kParticipation_disable: false,
                          check_401kParticipant_disable: false,
                        });
                      }
                    }}
                    name="check_wd"
                    style={{ color: theme.themeSecondary }}
                  />
                }
                label="Aftertax WD"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    disabled={this.state.check_noFundsAvailable_disable}
                    checked={this.state.check_noFundsAvailable}
                    onChange={(e) => {
                      if (e.target.checked !== false) {
                        this.setState({
                          check_noFundsAvailable: !this.state
                            .check_noFundsAvailable,
                          onCondition: true,
                          check_hardshipWithdraw_disable: true,
                          check_loan_disable: true,
                          check_wd_disable: true,
                          check_afterTaxWD_disable: true,
                          check_no401kParticipation_disable: true,
                          check_401kParticipant_disable: true,
                        });
                      } else {
                        this.setState({
                          check_noFundsAvailable: !this.state
                            .check_noFundsAvailable,
                          onCondition: false,
                          check_hardshipWithdraw_disable: false,
                          check_loan_disable: false,
                          check_wd_disable: false,
                          check_afterTaxWD_disable: false,
                          check_no401kParticipation_disable: false,
                          check_401kParticipant_disable: false,
                        });
                      }
                    }}
                    name="check_wd"
                    style={{ color: theme.themeSecondary }}
                  />
                }
                label="No funds available"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    disabled={this.state.check_no401kParticipation_disable}
                    checked={this.state.check_no401kParticipation}
                    onChange={(e) => {
                      if (e.target.checked !== false) {
                        this.setState({
                          check_no401kParticipation: !this.state
                            .check_no401kParticipation,
                          onCondition: true,
                          check_hardshipWithdraw_disable: true,
                          check_loan_disable: true,
                          check_wd_disable: true,
                          check_afterTaxWD_disable: true,
                          check_noFundsAvailable_disable: true,
                          check_401kParticipant_disable: true,
                        });
                      } else {
                        this.setState({
                          check_no401kParticipation: !this.state
                            .check_no401kParticipation,
                          onCondition: false,
                          check_hardshipWithdraw_disable: false,
                          check_loan_disable: false,
                          check_wd_disable: false,
                          check_afterTaxWD_disable: false,
                          check_noFundsAvailable_disable: false,
                          check_401kParticipant_disable: false,
                        });
                      }
                    }}
                    name="check_wd"
                    style={{ color: theme.themeSecondary }}
                  />
                }
                label="No 401k Participation"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    disabled={this.state.check_401kParticipant_disable}
                    checked={this.state.check_401kParticipant}
                    onChange={(e) => {
                      if (e.target.checked !== false) {
                        this.setState({
                          check_401kParticipant: !this.state
                            .check_401kParticipant,
                          onCondition: true,
                          check_hardshipWithdraw_disable: true,
                          check_loan_disable: true,
                          check_wd_disable: true,
                          check_afterTaxWD_disable: true,
                          check_noFundsAvailable_disable: true,
                          check_no401kParticipation_disable: true,
                        });
                      } else {
                        this.setState({
                          check_401kParticipant: !this.state
                            .check_401kParticipant,
                          onCondition: false,
                          check_hardshipWithdraw_disable: false,
                          check_loan_disable: false,
                          check_wd_disable: false,
                          check_afterTaxWD_disable: false,
                          check_noFundsAvailable_disable: false,
                          check_no401kParticipation_disable: false,
                        });
                      }
                    }}
                    name="check_wd"
                    style={{ color: theme.themeSecondary }}
                  />
                }
                label="401k Participant"
              />
            </FormControl>
            <React.Fragment>
              {this.state.onCondition !== false ? (
                <React.Fragment>
                  <div className="row">
                    <div className="col-md-6">
                      <FormControl fullWidth style={{ margin: "10px" }}>
                        <CustomTextField
                          label="Dollar Amount"
                          onChange={(e) => {
                            this.setState({
                              dollarAmount: e.target.value,
                            });
                          }}
                          name="dollarAmount"
                          value={this.state.dollarAmount}
                        />
                      </FormControl>
                    </div>
                    <div className="col-md-6">
                      <FormControl fullWidth style={{ margin: "10px" }}>
                        <InputLabel style={{ color: theme.themeSecondary }}>
                          Current Loans
                        </InputLabel>
                        <Select
                          fullWidth
                          name="currentLoans"
                          style={{ marginTop: "16px" }}
                          value={this.state.currentLoans}
                          onChange={(e) => {
                            this.setState({
                              currentLoans: e.target.value,
                            });
                          }}
                        >
                          <MenuItem value="0">0</MenuItem>
                          <MenuItem value="1">1</MenuItem>
                          <MenuItem value="2">2</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="row" style={{ backgroundColor: "#d9d9d6" }}>
                    <div
                      className="col-md-12"
                      style={{ backgroundColor: "black" }}
                    >
                      <h5
                        style={{
                          fontSize: "16px",
                          color: "white",
                          padding: "5px",
                        }}
                      >
                        Loan One
                      </h5>
                    </div>
                    <div className="col-md-6">
                      <FormControl fullWidth style={{ margin: "10px" }}>
                        <CustomTextField
                          label="Payment Amount"
                          onChange={(e) => {
                            this.setState({
                              loan1_PaymentAmount: e.target.value,
                            });
                          }}
                          name="loan1_PaymentAmount"
                          value={this.state.loan1_PaymentAmount}
                        />
                      </FormControl>
                    </div>
                    <div className="col-md-6">
                      <FormControl fullWidth style={{ margin: "10px" }}>
                        <CustomTextField
                          label="Outstanding Amount"
                          onChange={(e) => {
                            this.setState({
                              loan1_OutstandingAmount: e.target.value,
                            });
                          }}
                          name="loan1_OutstandingAmount"
                          value={this.state.loan1_OutstandingAmount}
                        />
                      </FormControl>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{ backgroundColor: "#d9d9d6", marginTop: "5px" }}
                  >
                    <div
                      className="col-md-12"
                      style={{ backgroundColor: "black" }}
                    >
                      <h5
                        style={{
                          fontSize: "16px",
                          color: "white",
                          padding: "5px",
                        }}
                      >
                        Loan Two
                      </h5>
                    </div>
                    <div className="col-md-6">
                      <FormControl fullWidth style={{ margin: "10px" }}>
                        <CustomTextField
                          label="Payment Amount"
                          onChange={(e) => {
                            this.setState({
                              loan2_PaymentAmount: e.target.value,
                            });
                          }}
                          name="loan2_PaymentAmount"
                          value={this.state.loan2_PaymentAmount}
                        />
                      </FormControl>
                    </div>
                    <div className="col-md-6">
                      <FormControl fullWidth style={{ margin: "10px" }}>
                        <CustomTextField
                          label="Outstanding Amount"
                          onChange={(e) => {
                            this.setState({
                              loan2_OutstandingAmount: e.target.value,
                            });
                          }}
                          name="loan2_OutstandingAmount"
                          value={this.state.loan2_OutstandingAmount}
                        />
                      </FormControl>
                    </div>
                  </div>
                </React.Fragment>
              ) : null}
            </React.Fragment>
          </div>
        </div>
      </React.Fragment>
    );
    return _html;
  }

  public actionSteps_HTML = () => {
    let _html = (
      <React.Fragment>
        <div
          className="card"
          style={{ margin: "10px 0px", borderColor: "#d9d9d6" }}
        >
          <div
            className="card-header"
            style={{ backgroundColor: "#d9d9d6", borderColor: "#d9d9d6" }}
          >
            Action Steps
          </div>
          <div className="card-body">Action Steps Body</div>
        </div>
      </React.Fragment>
    );
    return _html;
  }

  public uploadDocument_HTML = () => {
    let _html = (
      <React.Fragment>
        <div
          className="card"
          style={{ margin: "10px 0px", borderColor: "#d9d9d6" }}
        >
          <div
            className="card-header"
            style={{ backgroundColor: "#d9d9d6", borderColor: "#d9d9d6" }}
          >
            Uploaded Document Management
          </div>
          <div className="card-body">Uploaded Document Management body</div>
        </div>
      </React.Fragment>
    );
    return _html;
  }

  public ainCoverLetter_HTML = () => {
    let _html = (
      <React.Fragment>
        <div
          className="card"
          style={{ margin: "10px 0px", borderColor: "#d9d9d6" }}
        >
          <div
            className="card-header"
            style={{ backgroundColor: "#d9d9d6", borderColor: "#d9d9d6" }}
          >
            AIN Cover Letter Information
          </div>
          <div className="card-body">AIN Cover Letter Information body</div>
        </div>
      </React.Fragment>
    );
    return _html;
  }

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
            <h5>401K</h5>
          </div>
        </div>
        <div>
          <br />
        </div>
        <div className="row"> {this.mina_HTML()}</div>
        <div className="row justify-content-center" style={{ clear: "both" }}>
          &nbsp;
        </div>

      </div>
    );
  }
}
