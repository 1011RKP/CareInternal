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
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  // Alert,
  // AlertTitle
} from "@material-ui/core";
//import { Alert, AlertTitle } from '@material-ui/lab';
import EventIcon from "@material-ui/icons/Event";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import * as moment from "moment";
import * as React from "react";
import styles from "../AINFunds_Main.module.scss";
import {
  CustomRadio,
  CustomTextField,
  state_DD,
  NextButton,
  BackButton,
} from "../../common/Common";
import Moment from "react-moment";
import { ITheme } from "spfx-js-theme";
import { AdminAction } from "./Action_admin";
const theme: ITheme = window.__themeState__.theme;

export class AdminHouseholdIncome extends React.Component<any, any> {
  public statesDD = state_DD;
  public constructor(props: any, state: any) {
    super(props);
    this.state = {
      addPersontoMyHousehold_Falg: false,
      anyoneliveinyourhousehold: "no",
      anyoneliveinyourhousehold_Message: null,
      iraOR401k: "no",
      cash: false,
      creditCard: false,
      moneyOrder: false,
      debitCard: false,
      personalCheck: false,
      check: false,
      bill_OtherCheck: false,
      bill_Other: "",
      wic: false,
      liheap: false,
      utilityPaymentPlan: false,
      tanf: false,
      catholicCharities: false,
      governmentSubsidyChildCare: false,
      housingAssistance: false,
      unitedWay: false,
      household_OtherCheck: false,
      household_Other: "",

      firstName: "",
      lastName: "",
      relationship: "NA",
      age: "",
      employmentStatus: "NA",
      checkingAccountBalance: "",
      savingsAccountBalance: "",
      balance_401K: "",
      other_Financial: "",

      regularWages:"",
      otherWages_Tips:"",
      childSupport:"",
      socialSecurity:"",
      unemployment:"",
      rentAssistance:"",
      foodStamps:"",
      disability:"",
      alimony:"",
      pension:"",
      otherIncome:""
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

  public Income_HTML = () => {
    let _html = (
      <React.Fragment>
        <div className="col-md-6">
          <FormControl fullWidth style={{ margin: "10px" }}>
            <FormLabel component="legend" style={{ color: theme.themeSecondary }}>
              Does anyone else live in your household?
            </FormLabel>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="none"
              value={this.state.anyoneliveinyourhousehold}
              onChange={(e) => {
                if (e.target.value === "yes") {
                  this.setState({
                    anyoneliveinyourhousehold: e.target.value,
                    anyoneliveinyourhousehold_Message: true,
                  });
                } else {
                  this.setState({
                    anyoneliveinyourhousehold: e.target.value,
                    anyoneliveinyourhousehold_Message: true,
                  });
                }
              }}
            >
              <FormControlLabel
                value="yes"
                control={<CustomRadio />}
                label="Yes"
                labelPlacement="end"
              />
              <FormControlLabel
                value="no"
                control={<CustomRadio />}
                label="No"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>
          <React.Fragment>
            {this.state.anyoneliveinyourhousehold_Message === true ? (
              <React.Fragment>
                <FormControl fullWidth style={{ marginTop: "-10px" }}>
                  <FormLabel
                    style={{
                      color: "white",
                      backgroundColor: "rgb(220, 53, 69)",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                  >
                    You have noted that there are no additional people living in
                    your household. Please click the Details link to enter
                    income information for yourself.
                  </FormLabel>
                </FormControl>
              </React.Fragment>
            ) : null}
          </React.Fragment>
          <React.Fragment>
            {this.state.anyoneliveinyourhousehold_Message === false ? (
              <React.Fragment>
                <FormControl fullWidth style={{ margin: "10px" }}>
                  <FormLabel
                    style={{
                      color: "white",
                      backgroundColor: "rgb(220, 53, 69)",
                      borderRadius: "5px",
                    }}
                  >
                    You have noted that additional people live in your
                    household. Please click the Details link to enter income
                    information for yourself, then click Add a Person to My
                    Household to enter income information for each person.
                  </FormLabel>
                </FormControl>
              </React.Fragment>
            ) : null}
          </React.Fragment>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <FormLabel component="legend" style={{ color: theme.themeSecondary }}>
              Do you or any member of your household or family have other
              insurance coverage or any other financial resources to assist with
              the hardship? (ie: 401K or IRA)
            </FormLabel>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="none"
              value={this.state.iraOR401k}
              onChange={(e) => {
                this.setState({
                  iraOR401k: e.target.value,
                });
              }}
            >
              <FormControlLabel
                value="yes"
                control={<CustomRadio />}
                label="Yes"
                labelPlacement="end"
              />
              <FormControlLabel
                value="no"
                control={<CustomRadio />}
                label="No"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>
          <React.Fragment>
            {this.state.iraOR401k === "yes" ? (
              <React.Fragment>
                <FormControl fullWidth style={{ margin: "10px" }}>
                  <FormLabel style={{ color: theme.themeSecondary }}>
                    If yes, please explain below *
                  </FormLabel>
                  <TextareaAutosize
                    rows={6}
                    rowsMax={6}
                    onChange={(e) => {
                      this.setState({
                        yes_Household: e.target.value,
                      });
                    }}
                    name="yes_Household"
                    value={this.state.yes_Household}
                  />
                </FormControl>
              </React.Fragment>
            ) : null}
          </React.Fragment>
          <FormControl fullWidth>
            <InputLabel
              style={{
                color: theme.themeSecondary,
                marginLeft: "10px",
                marginBottom: "20px",
                marginTop: "-20px",
              }}
            >
              How do you pay your bills? Check all that apply
            </InputLabel>
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.cash}
                  onChange={(e) => {
                    this.setState({
                      cash: !this.state.cash,
                    });
                  }}
                  name="cash"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="Cash"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.creditCard}
                  onChange={(e) => {
                    this.setState({
                      creditCard: !this.state.creditCard,
                    });
                  }}
                  name="creditCard"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="Credit Card"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.moneyOrder}
                  onChange={(e) => {
                    this.setState({
                      moneyOrder: !this.state.moneyOrder,
                    });
                  }}
                  name="moneyOrder"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="Money Order"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.debitCard}
                  onChange={(e) => {
                    this.setState({
                      debitCard: !this.state.debitCard,
                    });
                  }}
                  name="debitCard"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="Debit Card"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.personalCheck}
                  onChange={(e) => {
                    this.setState({
                      personalCheck: !this.state.personalCheck,
                    });
                  }}
                  name="personalCheck"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="Personal Check"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.check}
                  onChange={(e) => {
                    this.setState({
                      check: !this.state.check,
                    });
                  }}
                  name="check"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="Check"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.bill_OtherCheck}
                  onChange={(e) => {
                    this.setState({
                      bill_OtherCheck: !this.state.bill_OtherCheck,
                    });
                  }}
                  name="bill_OtherCheck"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="Other"
            />
            <React.Fragment>
              {this.state.bill_OtherCheck !== false ? (
                <React.Fragment>
                  <CustomTextField
                    label="Other"
                    onChange={(e) => {
                      this.setState({
                        bill_Other: e.target.value,
                      });
                    }}
                    name="bill_Other"
                    value={this.state.bill_Other}
                  />
                </React.Fragment>
              ) : null}
            </React.Fragment>
          </FormControl>
        </div>
        <div className="col-md-6">
          <FormControl fullWidth>
            <InputLabel
              style={{
                color: theme.themeSecondary,
                marginLeft: "10px",
                marginBottom: "20px",
                marginTop: "-20px",
              }}
            >
              Please check all that apply to you or someone in your household
            </InputLabel>
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.wic}
                  onChange={(e) => {
                    this.setState({
                      wic: !this.state.wic,
                    });
                  }}
                  name="wic"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="WIC"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.liheap}
                  onChange={(e) => {
                    this.setState({
                      liheap: !this.state.liheap,
                    });
                  }}
                  name="liheap"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="LIHEAP"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.utilityPaymentPlan}
                  onChange={(e) => {
                    this.setState({
                      utilityPaymentPlan: !this.state.utilityPaymentPlan,
                    });
                  }}
                  name="utilityPaymentPlan"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="Utility Payment Plan"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.tanf}
                  onChange={(e) => {
                    this.setState({
                      tanf: !this.state.tanf,
                    });
                  }}
                  name="tanf"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="TANF"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.catholicCharities}
                  onChange={(e) => {
                    this.setState({
                      catholicCharities: !this.state.catholicCharities,
                    });
                  }}
                  name="catholicCharities"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="Catholic Charities"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.governmentSubsidyChildCare}
                  onChange={(e) => {
                    this.setState({
                      governmentSubsidyChildCare: !this.state
                        .governmentSubsidyChildCare,
                    });
                  }}
                  name="governmentSubsidyChildCare"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="Government Subsidy - Child Care"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.housingAssistance}
                  onChange={(e) => {
                    this.setState({
                      housingAssistance: !this.state.housingAssistance,
                    });
                  }}
                  name="housingAssistance"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="Housing Assistance"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.unitedWay}
                  onChange={(e) => {
                    this.setState({
                      unitedWay: !this.state.unitedWay,
                    });
                  }}
                  name="unitedWay"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="United Way"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.household_OtherCheck}
                  onChange={(e) => {
                    this.setState({
                      household_OtherCheck: !this.state.household_OtherCheck,
                    });
                  }}
                  name="household_OtherCheck"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="Other"
            />
            <React.Fragment>
              {this.state.household_OtherCheck !== false ? (
                <React.Fragment>
                  <CustomTextField
                    label="Other"
                    onChange={(e) => {
                      this.setState({
                        household_Other: e.target.value,
                      });
                    }}
                    name="household_Other"
                    value={this.state.household_Other}
                  />
                </React.Fragment>
              ) : null}
            </React.Fragment>
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <NextButton
              style={{ float: "right" }}
              onClick={(e) => {
                this.setState({
                  addPersontoMyHousehold_Falg: !this.state
                    .addPersontoMyHousehold_Falg,
                });
                //this.stepper_Next(this.state.stepCount);
              }}
            >
              <AddCircleOutlineIcon style={{ paddingRight: "5px" }} /> Add a
              Person to My Household
            </NextButton>
          </FormControl>
        </div>
        <div className="col-md-12">
          <TableContainer component={Paper}>
            <Table className={styles.table} aria-label="customized table">
              <TableHead style={{ backgroundColor: "#000" }}>
                <TableRow>
                  <TableCell style={{ color: "white" }}>Name</TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                    Relationship
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                    Age
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                    Employment Status
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                    Income
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                    $ Resources
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                    <EditIcon style={{ paddingRight: "5px" }} />
                    Edit
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                    <DeleteIcon style={{ paddingRight: "5px" }} /> Delete
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell style={{ color: "black" }}>Ratna Paleru</TableCell>
                  <TableCell style={{ color: "black" }} align="left">
                    Associate
                  </TableCell>
                  <TableCell style={{ color: "black" }} align="left">
                    &nbsp;
                  </TableCell>
                  <TableCell style={{ color: "black" }} align="left">
                    &nbsp;
                  </TableCell>
                  <TableCell style={{ color: "black" }} align="left">
                    0.00
                  </TableCell>
                  <TableCell style={{ color: "black" }} align="left">
                    0.00
                  </TableCell>
                  <TableCell style={{ color: "black" }} align="left">
                    <EditIcon style={{ paddingRight: "5px" }} />
                    Edit
                  </TableCell>
                  <TableCell style={{ color: "black" }} align="left">
                    <DeleteIcon style={{ paddingRight: "5px" }} /> Delete
                  </TableCell>
                </TableRow>
                {/* {this.state.assistanceRequested_Info.length > 0 ? (
                      <React.Fragment>
                        {this.state.assistanceRequested_Info.map((row) => (
                          <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                              <React.Fragment>
                                <Moment format="MM/DD/YYYY">
                                  {this.state.currentDate}
                                </Moment>
                              </React.Fragment>
                            </TableCell>
                            <TableCell align="left">
                              {row.financialAssistanceType}
                            </TableCell>
                            <TableCell align="left">
                              {row.amountRequested}
                            </TableCell>
                            <TableCell align="left">
                              {row.companyName}
                            </TableCell>
                            <TableCell align="left">
                              {row.checkNumber}
                            </TableCell>
                            <TableCell align="center">
                              <a
                                onClick={() => {
                                 this.onEdit_Click({row});
                                }}
                              >
                                <EditIcon style={{ paddingRight: "5px" }} />
                              </a>
                            </TableCell>
                            <TableCell align="center">
                              <a
                                onClick={() => {
                                  this.onDelete_Click({row});
                                }}
                              >
                                <DeleteIcon style={{ paddingRight: "5px" }} />
                              </a>
                            </TableCell>
                          </TableRow>
                        ))}
                      </React.Fragment>
                    ) : null} */}
              </TableBody>
            </Table>
          </TableContainer>
          <div style={{clear:"both"}}>&nbsp;</div>
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

  public addPersontoMyHousehold = () => {
    let _html = (
      <React.Fragment>
        <div className="col-md-12" style={{ width: "100%", padding: "0px" }}>
          <div
            className="alert alert-dark"
            style={{ textAlign: "justify", width: "100%" }}
          >
            <strong>Info!</strong>Please complete each line below. If there is
            no income or the income source does not apply to you, please enter a
            zero.
          </div>
        </div>
        <div className="col-md-5">
          <div className="card bg-light text-dark">
            <div className="card-header">
              <h5 className="card-title" style={{ color: "maroon" }}>
                Details
              </h5>
            </div>
            <div className="card-body">
              <FormControl
                fullWidth
                style={{ margin: "10px", marginTop: "-10px" }}
              >
                <CustomTextField
                  label="First Name"
                  onChange={(e) => {
                    this.setState({
                      firstName: e.target.value,
                    });
                  }}
                  name="firstName"
                  value={this.state.firstName}
                />
              </FormControl>
              <FormControl fullWidth style={{ margin: "10px" }}>
                <CustomTextField
                  label="Last Name"
                  onChange={(e) => {
                    this.setState({
                      lastName: e.target.value,
                    });
                  }}
                  name="lastName"
                  value={this.state.lastName}
                />
              </FormControl>
              <FormControl fullWidth style={{ margin: "10px" }}>
                <InputLabel style={{ color: theme.themeSecondary }}>
                  Relationship
                </InputLabel>
                <Select
                  fullWidth
                  name="Relationship"
                  style={{ marginTop: "16px" }}
                  value={this.state.relationship}
                  onChange={(e) => {
                    this.setState({
                      relationship: e.target.value,
                    });
                  }}
                >
                  <MenuItem value="NA">-- Please Select --</MenuItem>
                  <MenuItem value="Child">Child</MenuItem>
                  <MenuItem value="Domestic partner">Domestic partner</MenuItem>
                  <MenuItem value="Grandchild">Grandchild</MenuItem>
                  <MenuItem value="Grandparent">Grandparent</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                  <MenuItem value="Parent">Parent</MenuItem>
                  <MenuItem value="Sibling">Sibling</MenuItem>
                  <MenuItem value="Spouse">Spouse</MenuItem>
                  <MenuItem value="Step-parent">Step-parent</MenuItem>
                  <MenuItem value="Great-grandchild">Great-grandchild</MenuItem>
                  <MenuItem value="Great-grandparent">
                    Great-grandparent
                  </MenuItem>
                  <MenuItem value="Aunt">Aunt</MenuItem>
                  <MenuItem value="Uncle">Uncle</MenuItem>
                  <MenuItem value="Cousin">Cousin</MenuItem>
                  <MenuItem value="Niece">Niece</MenuItem>
                  <MenuItem value="Nephew">Nephew</MenuItem>
                  <MenuItem value="Roommate">Roommate</MenuItem>
                  <MenuItem value="Not Specified">Not Specified</MenuItem>
                  <MenuItem value="Associate">Associate</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth style={{ margin: "10px" }}>
                <CustomTextField
                  label="Age"
                  onChange={(e) => {
                    this.setState({
                      age: e.target.value,
                    });
                  }}
                  name="age"
                  value={this.state.age}
                />
              </FormControl>
              <FormControl fullWidth style={{ margin: "10px" }}>
                <InputLabel style={{ color: theme.themeSecondary }}>
                  Employment Status
                </InputLabel>
                <Select
                  fullWidth
                  name="Employment Status"
                  style={{ marginTop: "16px" }}
                  value={this.state.employmentStatus}
                  onChange={(e) => {
                    this.setState({
                      employmentStatus: e.target.value,
                    });
                  }}
                >
                  <MenuItem value="NA">-- Please Select --</MenuItem>
                  <MenuItem value="Disabled">Disabled</MenuItem>
                  <MenuItem value="Full Time">Full Time</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                  <MenuItem value="Part Time">Part Time</MenuItem>
                  <MenuItem value="Retired">Retired</MenuItem>
                  <MenuItem value="Student">Student</MenuItem>
                  <MenuItem value="Child">Child</MenuItem>
                  <MenuItem value="Unemployed">Unemployed</MenuItem>
                  <MenuItem value="Not Specified">Not Specified</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="row" style={{ clear: "both" }}>
            &nbsp;
          </div>
        </div>
        <div className="col-md-7">
          <div className="card bg-light text-dark">
            <div className="card-header">
              <h5 className="card-title" style={{ color: "maroon" }}>
                Please list all sources of income
              </h5>
            </div>
            <div className="card-body">
              <div
                className="row"
                style={{
                  color: "#1b1e21",
                  backgroundColor: "#d6d8d9",
                  borderColor: "#c6c8ca",
                  marginLeft: "-20px",
                  marginRight: "-20px",
                  marginTop: "-20px",
                  padding: "5px",
                }}
              >
                <div className="col-md-4">
                  <h5 style={{ paddingLeft:"15px", fontSize: "14px" }}>
                    Financial Resource
                  </h5>
                </div>
                <div className="col-md-8">
                  <h5 style={{  fontSize: "14px" }}>
                    Monthly Amount
                  </h5>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <FormControl fullWidth style={{ margin: "10px" }}>
                    <FormLabel component="legend"  style={{ margin: "20px 0px", color: theme.themeSecondary}}>
                      Checking Account Balance
                    </FormLabel>
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px" }}>
                    <FormLabel component="legend" style={{ margin: "20px 0px", color: theme.themeSecondary}}>
                      {" "}
                      Savings Account Balance
                    </FormLabel>
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px" }}>
                    <FormLabel component="legend"  style={{ margin: "20px 0px", color: theme.themeSecondary}}> 401K Balance</FormLabel>
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px" }}>
                    <FormLabel component="legend"  style={{ margin: "20px 0px", color: theme.themeSecondary}}> Other</FormLabel>
                  </FormControl>
                </div>
                <div className="col-md-8">
                  <FormControl fullWidth style={{ margin: "10px" }}>
                    <CustomTextField
                      label="Checking Account Balance"
                      onChange={(e) => {
                        this.setState({
                          checkingAccountBalance: e.target.value,
                        });
                      }}
                      name="checkingAccountBalance"
                      value={this.state.checkingAccountBalance}
                    />
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px" }}>
                    <CustomTextField
                      label="Savings Account Balance"
                      onChange={(e) => {
                        this.setState({
                          savingsAccountBalance: e.target.value,
                        });
                      }}
                      name="savingsAccountBalance"
                      value={this.state.savingsAccountBalance}
                    />
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px" }}>
                    <CustomTextField
                      label="401K Balance"
                      onChange={(e) => {
                        this.setState({
                          balance_401K: e.target.value,
                        });
                      }}
                      name="balance_401K"
                      value={this.state.balance_401K}
                    />
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px" }}>
                    <CustomTextField
                      label="Other"
                      onChange={(e) => {
                        this.setState({
                          other_Financial: e.target.value,
                        });
                      }}
                      name="other_Financial"
                      value={this.state.other_Financial}
                    />
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="card bg-light text-dark">
            <div className="card-header">
              <h5 className="card-title" style={{ color: "maroon" }}>
                Please list total balances available of this person's financial
                resources
              </h5>
            </div>
            <div className="card-body">
            <div
                className="row"
                style={{
                  color: "#1b1e21",
                  backgroundColor: "#d6d8d9",
                  borderColor: "#c6c8ca",
                  marginLeft: "-20px",
                  marginRight: "-20px",
                  marginTop: "-20px",
                  padding: "5px",
                }}
              >
                <div className="col-md-4">
                  <h5 style={{ paddingLeft:"15px", fontSize: "14px" }}>
                    Source of Income
                  </h5>
                </div>
                <div className="col-md-8">
                  <h5 style={{ fontSize: "14px" }}>
                    Monthly Amount
                  </h5>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <FormControl fullWidth style={{ margin: "10px" }}>
                    <FormLabel component="legend"  style={{ margin: "20px 0px", color: theme.themeSecondary}}>
                    Regular Wages/Tips (After Taxes)
                    </FormLabel>
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px" }}>
                    <FormLabel component="legend" style={{ margin: "20px 0px", color: theme.themeSecondary}}>
                    Other Wages/Tips (after taxes)
                    </FormLabel>
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px" }}>
                    <FormLabel component="legend"  style={{ margin: "20px 0px", color: theme.themeSecondary}}> Child Support</FormLabel>
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px" }}>
                    <FormLabel component="legend"  style={{ margin: "10px 0px", color: theme.themeSecondary}}> Social Security (including disability)</FormLabel>
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px" }}>
                    <FormLabel component="legend"  style={{ margin: "20px 0px", color: theme.themeSecondary}}> Unemployment</FormLabel>
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px" }}>
                    <FormLabel component="legend"  style={{ margin: "10px 0px", color: theme.themeSecondary}}> Rent Assistance</FormLabel>
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px" }}>
                    <FormLabel component="legend"  style={{ margin: "20px 0px", color: theme.themeSecondary}}> Food Stamps</FormLabel>
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px" }}>
                    <FormLabel component="legend"  style={{ margin: "10px 0px", color: theme.themeSecondary}}> Disability</FormLabel>
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px" }}>
                    <FormLabel component="legend"  style={{ margin: "20px 0px", color: theme.themeSecondary}}> Alimony</FormLabel>
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px" }}>
                    <FormLabel component="legend"  style={{ margin: "20px 0px", color: theme.themeSecondary}}> Pension</FormLabel>
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px" }}>
                    <FormLabel component="legend"  style={{ margin: "10px 0px", color: theme.themeSecondary}}> Other Income</FormLabel>
                  </FormControl>
                </div>
                <div className="col-md-8">
                  <FormControl fullWidth style={{ margin: "10px 0px" }}>
                    <CustomTextField
                      label="Regular Wages/Tips (After Taxes)"
                      onChange={(e) => {
                        this.setState({
                          regularWages: e.target.value,
                        });
                      }}
                      name="regularWages"
                      value={this.state.regularWages}
                    />
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px 0px" }}>
                    <CustomTextField
                      label="Other Wages/Tips (after taxes)"
                      onChange={(e) => {
                        this.setState({
                          otherWages_Tips: e.target.value,
                        });
                      }}
                      name="otherWages_Tips"
                      value={this.state.otherWages_Tips}
                    />
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px 0px" }}>
                    <CustomTextField
                      label="Child Support"
                      onChange={(e) => {
                        this.setState({
                          childSupport: e.target.value,
                        });
                      }}
                      name="childSupport"
                      value={this.state.childSupport}
                    />
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px 0px" }}>
                    <CustomTextField
                      label="Social Security (including disability)"
                      onChange={(e) => {
                        this.setState({
                          socialSecurity: e.target.value,
                        });
                      }}
                      name="socialSecurity"
                      value={this.state.socialSecurity}
                    />
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px 0px" }}>
                    <CustomTextField
                      label="Unemployment"
                      onChange={(e) => {
                        this.setState({
                          unemployment: e.target.value,
                        });
                      }}
                      name="unemployment"
                      value={this.state.unemployment}
                    />
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px 0px" }}>
                    <CustomTextField
                      label="Rent Assistance"
                      onChange={(e) => {
                        this.setState({
                          rentAssistance: e.target.value,
                        });
                      }}
                      name="rentAssistance"
                      value={this.state.rentAssistance}
                    />
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px 0px" }}>
                    <CustomTextField
                      label="Food Stamps"
                      onChange={(e) => {
                        this.setState({
                          foodStamps: e.target.value,
                        });
                      }}
                      name="foodStamps"
                      value={this.state.foodStamps}
                    />
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px 0px" }}>
                    <CustomTextField
                      label="Disability"
                      onChange={(e) => {
                        this.setState({
                          disability: e.target.value,
                        });
                      }}
                      name="disability"
                      value={this.state.disability}
                    />
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px 0px" }}>
                    <CustomTextField
                      label="Alimony"
                      onChange={(e) => {
                        this.setState({
                          alimony: e.target.value,
                        });
                      }}
                      name="alimony"
                      value={this.state.alimony}
                    />
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px 0px" }}>
                    <CustomTextField
                      label="Pension"
                      onChange={(e) => {
                        this.setState({
                          pension: e.target.value,
                        });
                      }}
                      name="pension"
                      value={this.state.pension}
                    />
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px 0px" }}>
                    <CustomTextField
                      label="Other Income"
                      onChange={(e) => {
                        this.setState({
                          otherIncome: e.target.value,
                        });
                      }}
                      name="otherIncome"
                      value={this.state.otherIncome}
                    />
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <Button
            variant="outlined"
            style={{ marginTop: "7px", marginRight: "5px" }}
            onClick={(e) => {
              this.setState({
                addPersontoMyHousehold_Falg: !this.state
                  .addPersontoMyHousehold_Falg,
              });
            }}
          >
            <SkipPreviousIcon style={{ paddingRight: "5px" }} />
            Cancle
          </Button>
          <NextButton
            style={{ marginTop: "7px" }}
            onClick={(e) => {
              console.log(e);
            }}
          >
            <SaveIcon style={{ paddingRight: "5px" }} />
            Save
          </NextButton>
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
            <h5>Household Income</h5>
          </div>
        </div>

        <div className="row">
          <br />
          <div
            className="alert alert-info"
            style={{ textAlign: "justify", width: "100%", backgroundColor:theme.themeLighter }}
          >
            <strong>Info!</strong> Please "Add new record" for each infant,
            child, or adult living in the household, including yourself. Select
            "Details" to populate your income details.
          </div>
        </div>
        <div className="row">
          {this.state.addPersontoMyHousehold_Falg !== true ? (
            <React.Fragment>{this.Income_HTML()}</React.Fragment>
          ) : (
            <React.Fragment>{this.addPersontoMyHousehold()}</React.Fragment>
          )}
        </div>
      </div>
    );
  }
}
