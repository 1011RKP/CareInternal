import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  InputAdornment,
  FormLabel,
  Select,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
//import PickyDateTime from "react-picky-date-time";
import EventIcon from "@material-ui/icons/Event";
import * as moment from "moment";
import Moment from "react-moment";
import * as React from "react";
import styles from "../AINFunds_Main.module.scss";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  state_DD,
  SucessButton,
  CustomTextField,
  CustomRadio,
  NextButton,
} from "../../common/Common";
import SaveIcon from "@material-ui/icons/Save";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { ITheme } from 'spfx-js-theme';
import { AdminAction } from "./Action_admin";
const theme: ITheme = window.__themeState__.theme;

export class AdminFinancialAssistanceRequested extends React.Component<any, any> {
  public statesDD = state_DD;
  public constructor(props: any, state: any) {
    super(props);
    this.state = {
      assistanceRequested_Info: [],
      is_BillInformationAvilable: false,
      billInformation: false,
      companyName: "",
      attention: "",
      address: "",
      addressLine2: "",
      city: "",
      state: "NA",
      setState: "",
      phoneNumber: "",
      amountRequested: "",
      financialAssistanceType: "Energy/Utility Bills",
      accountNumber: "",
      checkNumber: "",
      dateCheckMailed: "",
      amountPaid: "",
      approvedByTheBoard: "NA",
      dateApprovedByBoard: "",
      methodofMailing: "NA",
      trackingnumber:"",
      currentDate: new Date(),
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

  public dummySpace_HTML = () => {
    let _html = (
      <React.Fragment>
        <div className="row" style={{ height: "150px" }}>
          &nbsp;
        </div>
      </React.Fragment>
    );
    return _html;
  }

  public save_BillInformationAvilable = () => {
    let objMain = [];
    const obj = {
      id: this.state.assistanceRequested_Info.length + 1,
      companyName: this.state.companyName,
      attention: this.state.attention,
      address: this.state.address,
      addressLine2: this.state.addressLine2,
      city: this.state.city,
      state: this.state.state,
      setState: this.state.setState,
      phoneNumber: this.state.phoneNumber,
      amountRequested: this.state.amountRequested,
      financialAssistanceType: this.state.financialAssistanceType,
      accountNumber: this.state.accountNumber,
      checkNumber: this.state.checkNumber,
      dateCheckMailed: this.state.dateCheckMailed,
      amountPaid: this.state.amountPaid,
      approvedByTheBoard: this.state.approvedByTheBoard,
      dateApprovedByBoard: this.state.dateApprovedByBoard,
      emergency: this.state.emergency,
    };
    objMain.push(obj);
    this.setState({
      assistanceRequested_Info: objMain,
      is_BillInformationAvilable: true,
    });
  }

  public billInformation_HTML = () => {
    let _html = (
      <React.Fragment>
        <div className="col-md-6">
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Company Name"
              onChange={(e) => {
                this.setState({
                  companyName: e.target.value,
                });
              }}
              name="companyName"
              value={this.state.companyName}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Attention"
              onChange={(e) => {
                this.setState({
                  attention: e.target.value,
                });
              }}
              name="attention"
              value={this.state.attention}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Address"
              onChange={(e) => {
                this.setState({
                  address: e.target.value,
                });
              }}
              name="address"
              value={this.state.address}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Address Line 2"
              onChange={(e) => {
                this.setState({
                  addressLine2: e.target.value,
                });
              }}
              name="addressLine2"
              value={this.state.addressLine2}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="City"
              onChange={(e) => {
                this.setState({
                  city: e.target.value,
                });
              }}
              name="city"
              value={this.state.city}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <InputLabel style={{ color: theme.themeSecondary }}>State</InputLabel>
            <Select
              name="state"
              defaultValue={{
                key: "NA",
                text: "-- Please Select State --",
              }}
              onChange={(event) => {
                this.setState({
                  state: event.target.value,
                });
              }}
              value={this.state.state}
            >
              {this.statesDD.map((item, i) => {
                return (
                  <MenuItem key={i} value={item.key}>
                    {item.text}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Zip Code"
              onChange={(e) => {
                this.setState({
                  zipCode: e.target.value,
                });
              }}
              name="zipCode"
              value={this.state.zipCode}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Phone Number"
              onChange={(e) => {
                this.setState({
                  phoneNumber: e.target.value,
                });
              }}
              name="phoneNumber"
              value={this.state.phoneNumber}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Amount Requested"
              onChange={(e) => {
                this.setState({
                  amountRequested: e.target.value,
                });
              }}
              name="amountRequested"
              value={this.state.amountRequested}
            />
          </FormControl>
        </div>
        <div className="col-md-6">
          <FormControl fullWidth style={{ margin: "10px" }}>
            <InputLabel style={{ color: theme.themeSecondary }}>
              Financial Assistance Type
            </InputLabel>
            <Select
              fullWidth
              name="financialAssistanceType"
              style={{ marginTop: "16px" }}
              value={this.state.financialAssistanceType}
              onChange={(e) => {
                this.setState({
                  financialAssistanceType: e.target.value,
                });
              }}
            >
              <MenuItem value="Energy/Utility Bills">
                Energy/Utility Bills
              </MenuItem>
              <MenuItem value="Funeral Assistance">Funeral Assistance</MenuItem>
              <MenuItem value="Housing Assistance">Housing Assistance</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Account Number"
              onChange={(e) => {
                this.setState({
                  accountNumber: e.target.value,
                });
              }}
              name="accountNumber"
              value={this.state.accountNumber}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Check Number"
              onChange={(e) => {
                this.setState({
                  checkNumber: e.target.value,
                });
              }}
              name="checkNumber"
              value={this.state.checkNumber}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Date Check Mailed"
              name="dateCheckMailed"
              value={this.state.dateCheckMailed}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EventIcon
                      className={styles.eventIconStyles}
                      // onClick={e => {
                      //   this.setState({
                      //     calendarDialog: true,
                      //     calendarInput: "dateCheckMailed"
                      //   });
                      // }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Amount Paid"
              onChange={(e) => {
                this.setState({
                  amountPaid: e.target.value,
                });
              }}
              name="amountPaid"
              value={this.state.amountPaid}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <InputLabel style={{ color: theme.themeSecondary }}>
              Approved By The Board
            </InputLabel>
            <Select
              fullWidth
              name="approvedByTheBoard"
              style={{ marginTop: "16px" }}
              value={this.state.approvedByTheBoard}
              onChange={(e) => {
                this.setState({
                  approvedByTheBoard: e.target.value,
                });
              }}
            >
              <MenuItem value="NA">-- Please Select --</MenuItem>
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Date Approved By Board"
              name="dateApprovedByBoard"
              value={this.state.dateApprovedByBoard}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EventIcon
                      className={styles.eventIconStyles}
                      // onClick={e => {
                      //   this.setState({
                      //     calendarDialog: true,
                      //     calendarInput: "dateApprovedByBoard"
                      //   });
                      // }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <InputLabel style={{ color: theme.themeSecondary }}>Method of mailing</InputLabel>
            <Select
              fullWidth
              name="methodofMailing"
              style={{ marginTop: "16px" }}
              value={this.state.methodofMailing}
              onChange={(e) => {
                this.setState({
                  methodofMailing: e.target.value,
                });
              }}
            >
              <MenuItem value="NA">-- Please Select --</MenuItem>
              <MenuItem value="UPS">UPS</MenuItem>
              <MenuItem value="USPS">USPS</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Tracking number"
              onChange={(e) => {
                this.setState({
                  trackingnumber: e.target.value,
                });
              }}
              name="trackingnumber"
              value={this.state.trackingnumber}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <NextButton
              style={{ marginTop: "7px" }}
              onClick={(e) => {
                this.save_BillInformationAvilable();
              }}
            >
              <SaveIcon style={{ paddingRight: "5px" }} />
              Save
            </NextButton>
          </FormControl>
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

  public onEdit_Click = (e) =>{
    console.log(e);
  }

  public onDelete_Click = (e) =>{
    console.log(e);
  }

  public AssistanceRequested_HTML = () => {
    let _html = (
      <React.Fragment>
        <div className="col-md-12">
          <SucessButton
            onClick={(e) => {
              this.setState({
                billInformation: !this.state.billInformation,
              });
            }}
          >
            {" "}
            <AddCircleOutlineIcon style={{ paddingLeft: "3px" }} />
            Add Bill Information
          </SucessButton>
          <div style={{ clear: "both" }}>&nbsp;</div>
        </div>
        {this.state.billInformation !== false ? (
          <React.Fragment>{this.billInformation_HTML()}</React.Fragment>
        ) : // <React.Fragment>{this.dummySpace_HTML()}</React.Fragment>
        null}
        {this.state.is_BillInformationAvilable !== false ? (
          <React.Fragment>
            <div className="col-md-12">
              <TableContainer component={Paper}>
                <Table className={styles.table} aria-label="customized table">
                  <TableHead style={{ backgroundColor: "#000" }}>
                    <TableRow>
                      <TableCell style={{ color: "white" }}>
                        Request Date{" "}
                      </TableCell>
                      <TableCell style={{ color: "white" }} align="left">
                        Financial Asst Reason
                      </TableCell>
                      <TableCell style={{ color: "white" }} align="left">
                        Amount Requested
                      </TableCell>
                      <TableCell style={{ color: "white" }} align="left">
                        Payee
                      </TableCell>
                      <TableCell style={{ color: "white" }} align="left">
                        AIN Check Number
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
                    {this.state.assistanceRequested_Info.length > 0 ? (
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
                    ) : null}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </React.Fragment>
        ) : // <React.Fragment>{this.dummySpace_HTML()}</React.Fragment>
        null}
      </React.Fragment>
    );
    return _html;
  }

  public render(): React.ReactElement<any> {
    return (
      <div className={styles.ainfunds} style={{ width: "100%" }}>
        <div className="row">
          <br />
          <div
            //className="alert alert-info"
            className={`${theme.themeSecondary} alert`}
            style={{ textAlign: "justify", width: "100%", backgroundColor:theme.themeLighter }}
          >
            <strong>Info!</strong> Here, you will request what financial
            assistance you hope the AIN Fund Board will consider. Please "Add
            new record" for each individual bill. You must enter at least one
            record.
          </div>
        </div>
        <div className="row" style={{ padding: "5px" }}>
          {this.AssistanceRequested_HTML()}
        </div>
      </div>
    );
  }
}
