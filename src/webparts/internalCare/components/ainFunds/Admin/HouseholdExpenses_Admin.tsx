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
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextareaAutosize,
} from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import * as moment from "moment";
import * as React from "react";
import styles from "../AINFunds_Main.module.scss";
import SaveIcon from "@material-ui/icons/Save";
import {
  CustomRadio,
  CustomTextField,
  state_DD,
  NextButton,
} from "../../common/Common";
import { ITheme } from "spfx-js-theme";
import { AdminAction } from "./Action_admin";
const theme: ITheme = window.__themeState__.theme;
//export const loadingImage: any = require("../images/loading.gif");

export class AdminHouseholdExpenses extends React.Component<any, any> {
  public statesDD = state_DD;
  public constructor(props: any, state: any) {
    super(props);
    this.state = {
      loadIcon: true,

      textpay_rentMortgage: "",
      textMoney_rentMortgage: "",
      radioDel_rentMortgage: "none",

      textpay_utilitiesElectric: "",
      textMoney_utilitiesElectric: "",
      radioDel_utilitiesElectric: "none",

      textpay_utilitiesGas: "",
      textMoney_utilitiesGas: "",
      radioDel_utilitiesGas: "none",

      textpay_utilitiesWater: "",
      textMoney_utilitiesWater: "",
      radioDel_utilitiesWater: "none",

      textpay_utilitiesPropane: "",
      textMoney_utilitiesPropane: "",
      radioDel_utilitiesPropane: "none",

      textpay_utilitiesOil: "",
      textMoney_utilitiesOil: "",
      radioDel_utilitiesOil: "none",

      textpay_utilitiesTrashSewer: "",
      textMoney_utilitiesTrashSewer: "",
      radioDel_utilitiesTrashSewer: "none",

      textpay_Foodstampsyoureceive: "",
      textMoney_Foodstampsyoureceive: "",
      radioDel_Foodstampsyoureceive: "none",

      textpay_Foodgrocery: "",
      textMoney_Foodgrocery: "",
      radioDel_Foodgrocery: "none",

      textpay_AutoInsurance: "",
      textMoney_AutoInsurance: "",
      radioDel_AutoInsurance: "none",

      textpay_AutoPayment: "",
      textMoney_AutoPayment: "",
      radioDel_AutoPayment: "none",

      textpay_Gasautomobiles: "",
      textMoney_Gasautomobiles: "",
      radioDel_Gasautomobiles: "none",

      textpay_Transportationcost: "",
      textMoney_Transportationcost: "",
      radioDel_Transportationcost: "none",

      textpay_Childcare: "",
      textMoney_Childcare: "",
      radioDel_Childcare: "none",

      textpay_Extracurricularactivity: "",
      textMoney_Extracurricularactivity: "",
      radioDel_Extracurricularactivity: "none",

      textpay_ChildcareSupport: "",
      textMoney_ChildcareSupport: "",
      radioDel_ChildcareSupport: "none",

      textpay_CableInternet: "",
      textMoney_CableInternet: "",
      radioDel_CableInternet: "none",

      textpay_Internet: "",
      textMoney_Internet: "",
      radioDel_Internet: "none",

      textpay_Subscriptionservices: "",
      textMoney_Subscriptionservices: "",
      radioDel_Subscriptionservices: "none",

      textpay_Membershipgym: "",
      textMoney_Membershipgym: "",
      radioDel_Membershipgym: "none",

      textpay_HomePhone: "",
      textMoney_HomePhone: "",
      radioDel_HomePhone: "none",

      textpay_CellPhone: "",
      textMoney_CellPhone: "",
      radioDel_CellPhone: "none",

      textpay_CreditCardPayment: "",
      textMoney_CreditCardPayment: "",
      radioDel_CreditCardPayment: "none",

      textpay_AnyDebtPayments: "",
      textMoney_AnyDebtPayments: "",
      radioDel_AnyDebtPayments: "none",

      textpay_HouseholdNecessities: "",
      textMoney_HouseholdNecessities: "",
      radioDel_HouseholdNecessities: "none",

      textpay_Schoolloans: "",
      textMoney_Schoolloans: "",
      radioDel_Schoolloans: "none",

      textpay_SchoolLoans: "",
      textMoney_SchoolLoans: "",
      radioDel_SchoolLoans: "none",

      textpay_Medical: "",
      textMoney_Medical: "",
      radioDel_Medical: "none",

      textpay_PetCare: "",
      textMoney_PetCare: "",
      radioDel_PetCare: "none",

      textpay_Other: "",
      textMoney_Other: "",
      radioDel_Other: "none",

      other_Expense: "",
      garnishment_Remain: "",
    };
  }

  public componentDidMount() {
    this.setState({
      loadIcon: false,
    });
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

  public HouseholdExpenses_HTML = () => {
    let _html = (
      <React.Fragment>
        <div className="col-md-12">
          <Paper elevation={3}>
            <table className="table table-striped">
              {/* <colgroup className="row">
                <col className="col-md-4"/>
                <col className="col-md-4"/>
                <col className="col-md-4"/>
                <col className="col-md-4"/>
              </colgroup> */}
              <thead
                style={{
                  backgroundColor: "#212529",
                  color: "white",
                  fontSize: "16px",
                }}
              >
                <tr>
                  <th scope="col">Expense</th>
                  <th scope="col">Who do you pay?</th>
                  <th scope="col">Monthly Amount</th>
                  <th scope="col">Delinquent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Rent/Mortgage
                    </FormLabel>
                  </td>
                  <td>
                    {" "}
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_rentMortgage: e.target.value,
                          });
                        }}
                        name="textpay_rentMortgage"
                        value={this.state.textpay_rentMortgage}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_rentMortgage: e.target.value,
                          });
                        }}
                        name="textMoney_rentMortgage"
                        value={this.state.textMoney_rentMortgage}
                      />
                    </FormControl>
                  </td>
                  <td>
                    {" "}
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_rentMortgage}
                        onChange={(e) => {
                          this.setState({
                            radioDel_rentMortgage: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Electric
                    </FormLabel>
                  </td>
                  <td>
                    {" "}
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_utilitiesElectric: e.target.value,
                          });
                        }}
                        name="textpay_utilitiesElectric"
                        value={this.state.textpay_utilitiesElectric}
                      />
                    </FormControl>
                  </td>
                  <td>
                    {" "}
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_utilitiesElectric: e.target.value,
                          });
                        }}
                        name="textMoney_utilitiesElectric"
                        value={this.state.textMoney_utilitiesElectric}
                      />
                    </FormControl>
                  </td>
                  <td>
                    {" "}
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_utilitiesElectric}
                        onChange={(e) => {
                          this.setState({
                            radioDel_utilitiesElectric: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Utilitites: Gas
                    </FormLabel>
                  </td>
                  <td>
                    {" "}
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_utilitiesGas: e.target.value,
                          });
                        }}
                        name="textpay_utilitiesGas"
                        value={this.state.textpay_utilitiesGas}
                      />
                    </FormControl>
                  </td>
                  <td>
                    {" "}
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_utilitiesGas: e.target.value,
                          });
                        }}
                        name="textMoney_utilitiesGas"
                        value={this.state.textMoney_utilitiesGas}
                      />
                    </FormControl>
                  </td>
                  <td>
                    {" "}
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_utilitiesGas}
                        onChange={(e) => {
                          this.setState({
                            radioDel_utilitiesGas: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Water
                    </FormLabel>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_utilitiesWater: e.target.value,
                          });
                        }}
                        name="textpay_utilitiesWater"
                        value={this.state.textpay_utilitiesWater}
                      />
                    </FormControl>
                  </td>
                  <td>
                    {" "}
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_utilitiesWater: e.target.value,
                          });
                        }}
                        name="textMoney_utilitiesWater"
                        value={this.state.textMoney_utilitiesWater}
                      />
                    </FormControl>
                  </td>
                  <td>
                    {" "}
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_utilitiesWater}
                        onChange={(e) => {
                          this.setState({
                            radioDel_utilitiesWater: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Oil
                    </FormLabel>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_utilitiesOil: e.target.value,
                          });
                        }}
                        name="textpay_utilitiesOil"
                        value={this.state.textpay_utilitiesOil}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_utilitiesOil: e.target.value,
                          });
                        }}
                        name="textMoney_utilitiesOil"
                        value={this.state.textMoney_utilitiesOil}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_utilitiesOil}
                        onChange={(e) => {
                          this.setState({
                            radioDel_utilitiesOil: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Propane
                    </FormLabel>
                  </td>
                  <td>
                    {" "}
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_utilitiesPropane: e.target.value,
                          });
                        }}
                        name="textpay_utilitiesPropane"
                        value={this.state.textpay_utilitiesPropane}
                      />
                    </FormControl>
                  </td>
                  <td>
                    {" "}
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_utilitiesPropane: e.target.value,
                          });
                        }}
                        name="textMoney_utilitiesPropane"
                        value={this.state.textMoney_utilitiesPropane}
                      />
                    </FormControl>
                  </td>
                  <td>
                    {" "}
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_utilitiesPropane}
                        onChange={(e) => {
                          this.setState({
                            radioDel_utilitiesPropane: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Trash & Sewer
                    </FormLabel>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_utilitiesTrashSewer: e.target.value,
                          });
                        }}
                        name="textpay_utilitiesTrashSewer"
                        value={this.state.textpay_utilitiesTrashSewer}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_utilitiesTrashSewer: e.target.value,
                          });
                        }}
                        name="textMoney_utilitiesTrashSewer"
                        value={this.state.textMoney_utilitiesTrashSewer}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_utilitiesTrashSewer}
                        onChange={(e) => {
                          this.setState({
                            radioDel_utilitiesTrashSewer: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Food stamps you receive (not included in total on admin or
                      Board view for informational purpose only)
                    </FormLabel>
                  </td>
                  <td>
                    {" "}
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_Foodstampsyoureceive: e.target.value,
                          });
                        }}
                        name="textpay_Foodstampsyoureceive"
                        value={this.state.textpay_Foodstampsyoureceive}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_Foodstampsyoureceive: e.target.value,
                          });
                        }}
                        name="textMoney_Foodstampsyoureceive"
                        value={this.state.textMoney_Foodstampsyoureceive}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_Foodstampsyoureceive}
                        onChange={(e) => {
                          this.setState({
                            radioDel_Foodstampsyoureceive: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Food (grocery, eating out, meal kit subscriptions)
                    </FormLabel>
                  </td>
                  <td>
                    {" "}
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_Foodgrocery: e.target.value,
                          });
                        }}
                        name="textpay_Foodgrocery"
                        value={this.state.textpay_Foodgrocery}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_Foodgrocery: e.target.value,
                          });
                        }}
                        name="textMoney_Foodgrocery"
                        value={this.state.textMoney_Foodgrocery}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_Foodgrocery}
                        onChange={(e) => {
                          this.setState({
                            radioDel_Foodgrocery: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Auto Insurance
                    </FormLabel>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_AutoInsurance: e.target.value,
                          });
                        }}
                        name="textpay_AutoInsurance"
                        value={this.state.textpay_AutoInsurance}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_AutoInsurance: e.target.value,
                          });
                        }}
                        name="textMoney_AutoInsurance"
                        value={this.state.textMoney_AutoInsurance}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_AutoInsurance}
                        onChange={(e) => {
                          this.setState({
                            radioDel_AutoInsurance: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Auto Payment(s)
                    </FormLabel>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_AutoPayment: e.target.value,
                          });
                        }}
                        name="textpay_AutoPayment"
                        value={this.state.textpay_AutoPayment}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_AutoPayment: e.target.value,
                          });
                        }}
                        name="textMoney_AutoPayment"
                        value={this.state.textMoney_AutoPayment}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_AutoPayment}
                        onChange={(e) => {
                          this.setState({
                            radioDel_AutoPayment: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Gas (for automobiles)
                    </FormLabel>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_Gasautomobiles: e.target.value,
                          });
                        }}
                        name="textpay_Gasautomobiles"
                        value={this.state.textpay_Gasautomobiles}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_Gasautomobiles: e.target.value,
                          });
                        }}
                        name="textMoney_Gasautomobiles"
                        value={this.state.textMoney_Gasautomobiles}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_Gasautomobiles}
                        onChange={(e) => {
                          this.setState({
                            radioDel_Gasautomobiles: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Transportation cost (UBER, LYFT, ride share, Bus pass,
                      etc.)
                    </FormLabel>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_Transportationcost: e.target.value,
                          });
                        }}
                        name="textpay_Transportationcost"
                        value={this.state.textpay_Transportationcost}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_Transportationcost: e.target.value,
                          });
                        }}
                        name="textMoney_Transportationcost"
                        value={this.state.textMoney_Transportationcost}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_Transportationcost}
                        onChange={(e) => {
                          this.setState({
                            radioDel_Transportationcost: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Childcare/tuition
                    </FormLabel>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_Childcare: e.target.value,
                          });
                        }}
                        name="textpay_Childcare"
                        value={this.state.textpay_Childcare}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_Childcare: e.target.value,
                          });
                        }}
                        name="textMoney_Childcare"
                        value={this.state.textMoney_Childcare}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_Childcare}
                        onChange={(e) => {
                          this.setState({
                            radioDel_Childcare: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Extracurricular activity costs
                    </FormLabel>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_Extracurricularactivity: e.target.value,
                          });
                        }}
                        name="textpay_Extracurricularactivity"
                        value={this.state.textpay_Extracurricularactivity}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_Extracurricularactivity: e.target.value,
                          });
                        }}
                        name="textMoney_Extracurricularactivity"
                        value={this.state.textMoney_Extracurricularactivity}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_Extracurricularactivity}
                        onChange={(e) => {
                          this.setState({
                            radioDel_Extracurricularactivity: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Child Support (that does not automatically deduct out of
                      your pay check)
                    </FormLabel>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_ChildcareSupport: e.target.value,
                          });
                        }}
                        name="textpay_ChildcareSupport"
                        value={this.state.textpay_ChildcareSupport}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_ChildcareSupport: e.target.value,
                          });
                        }}
                        name="textMoney_ChildcareSupport"
                        value={this.state.textMoney_ChildcareSupport}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_ChildcareSupport}
                        onChange={(e) => {
                          this.setState({
                            radioDel_ChildcareSupport: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Cable/Netflix, HULU, etc./streaming services
                    </FormLabel>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_CableInternet: e.target.value,
                          });
                        }}
                        name="textpay_CableInternet"
                        value={this.state.textpay_CableInternet}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_CableInternet: e.target.value,
                          });
                        }}
                        name="textMoney_CableInternet"
                        value={this.state.textMoney_CableInternet}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_CableInternet}
                        onChange={(e) => {
                          this.setState({
                            radioDel_CableInternet: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Internet
                    </FormLabel>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_Internet: e.target.value,
                          });
                        }}
                        name="textpay_Internet"
                        value={this.state.textpay_Internet}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_Internet: e.target.value,
                          });
                        }}
                        name="textMoney_Internet"
                        value={this.state.textMoney_Internet}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_Internet}
                        onChange={(e) => {
                          this.setState({
                            radioDel_Internet: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td  scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Subscription services
                    </FormLabel>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_Subscriptionservices: e.target.value,
                          });
                        }}
                        name="textpay_Subscriptionservices"
                        value={this.state.textpay_Subscriptionservices}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_Subscriptionservices: e.target.value,
                          });
                        }}
                        name="textMoney_Subscriptionservices"
                        value={this.state.textMoney_Subscriptionservices}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_Subscriptionservices}
                        onChange={(e) => {
                          this.setState({
                            radioDel_Subscriptionservices: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td  scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Membership (gym, etc.)
                    </FormLabel>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_Membershipgym: e.target.value,
                          });
                        }}
                        name="textpay_Membershipgym"
                        value={this.state.textpay_Membershipgym}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_Membershipgym: e.target.value,
                          });
                        }}
                        name="textMoney_Membershipgym"
                        value={this.state.textMoney_Membershipgym}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_Membershipgym}
                        onChange={(e) => {
                          this.setState({
                            radioDel_Membershipgym: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td  scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Home Phone
                    </FormLabel>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_HomePhone: e.target.value,
                          });
                        }}
                        name="textpay_HomePhone"
                        value={this.state.textpay_HomePhone}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_HomePhone: e.target.value,
                          });
                        }}
                        name="textMoney_HomePhone"
                        value={this.state.textMoney_HomePhone}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_HomePhone}
                        onChange={(e) => {
                          this.setState({
                            radioDel_HomePhone: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td  scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Cell Phone(s)
                    </FormLabel>
                  </td>
                  <td>
                    {" "}
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_CellPhone: e.target.value,
                          });
                        }}
                        name="textpay_CellPhone"
                        value={this.state.textpay_CellPhone}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_CellPhone: e.target.value,
                          });
                        }}
                        name="textMoney_CellPhone"
                        value={this.state.textMoney_CellPhone}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_CellPhone}
                        onChange={(e) => {
                          this.setState({
                            radioDel_CellPhone: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td  scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Credit Card(s) Payment
                    </FormLabel>
                  </td>
                  <td>
                    {" "}
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_CreditCardPayment: e.target.value,
                          });
                        }}
                        name="textpay_CreditCardPayment"
                        value={this.state.textpay_CreditCardPayment}
                      />
                    </FormControl>
                  </td>
                  <td>
                    {" "}
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_CreditCardPayment: e.target.value,
                          });
                        }}
                        name="textMoney_CreditCardPayment"
                        value={this.state.textMoney_CreditCardPayment}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_CreditCardPayment}
                        onChange={(e) => {
                          this.setState({
                            radioDel_CreditCardPayment: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Short Debt Payments (Pay day loan, title loan, etc.)
                    </FormLabel>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_AnyDebtPayments: e.target.value,
                          });
                        }}
                        name="textpay_AnyDebtPayments"
                        value={this.state.textpay_AnyDebtPayments}
                      />
                    </FormControl>
                  </td>
                  <td>
                    {" "}
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_AnyDebtPayments: e.target.value,
                          });
                        }}
                        name="textMoney_AnyDebtPayments"
                        value={this.state.textMoney_AnyDebtPayments}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_AnyDebtPayments}
                        onChange={(e) => {
                          this.setState({
                            radioDel_AnyDebtPayments: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Household Necessities (toiletries, feminine hygiene, paper
                      products, cleaning supplies, etc.)
                    </FormLabel>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_HouseholdNecessities: e.target.value,
                          });
                        }}
                        name="textpay_HouseholdNecessities"
                        value={this.state.textpay_HouseholdNecessities}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_HouseholdNecessities: e.target.value,
                          });
                        }}
                        name="textMoney_HouseholdNecessities"
                        value={this.state.textMoney_HouseholdNecessities}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_HouseholdNecessities}
                        onChange={(e) => {
                          this.setState({
                            radioDel_HouseholdNecessities: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      School Loan(s)
                    </FormLabel>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_SchoolLoans: e.target.value,
                          });
                        }}
                        name="textpay_SchoolLoans"
                        value={this.state.textpay_SchoolLoans}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_SchoolLoans: e.target.value,
                          });
                        }}
                        name="textMoney_SchoolLoans"
                        value={this.state.textMoney_SchoolLoans}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_SchoolLoans}
                        onChange={(e) => {
                          this.setState({
                            radioDel_SchoolLoans: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Medical Insurance (not automatically deducted from your
                      pay check)
                    </FormLabel>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_Medical: e.target.value,
                          });
                        }}
                        name="textpay_Medical"
                        value={this.state.textpay_Medical}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_Medical: e.target.value,
                          });
                        }}
                        name="textMoney_Medical"
                        value={this.state.textMoney_Medical}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_Medical}
                        onChange={(e) => {
                          this.setState({
                            radioDel_Medical: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Other Recurring expenses (pet care, prescriptions, car
                      maintenance, cigarettes, etc.)
                    </FormLabel>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_PetCare: e.target.value,
                          });
                        }}
                        name="textpay_PetCare"
                        value={this.state.textpay_PetCare}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_PetCare: e.target.value,
                          });
                        }}
                        name="textMoney_PetCare"
                        value={this.state.textMoney_PetCare}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_PetCare}
                        onChange={(e) => {
                          this.setState({
                            radioDel_PetCare: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <FormLabel
                      component="legend"
                      style={{
                        margin: "20px 0px",
                        color: "#275458",
                        fontSize: "0.90rem",
                      }}
                    >
                      Other
                    </FormLabel>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Who do you pay?"
                        onChange={(e) => {
                          this.setState({
                            textpay_Other: e.target.value,
                          });
                        }}
                        name="textpay_Other"
                        value={this.state.textpay_Other}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <CustomTextField
                        label="Monthly Amount"
                        onChange={(e) => {
                          this.setState({
                            textMoney_Other: e.target.value,
                          });
                        }}
                        name="textMoney_Other"
                        value={this.state.textMoney_Other}
                      />
                    </FormControl>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="none"
                        value={this.state.radioDel_Other}
                        onChange={(e) => {
                          this.setState({
                            radioDel_Other: e.target.value,
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
                  </td>
                </tr>
                <tr>
                  <td colSpan={5}>
                    <FormControl fullWidth style={{ margin: "10px" }}>
                      <FormLabel style={{ color: "#275458" }}>
                        Please describe the 'Other' expense?
                      </FormLabel>
                      <TextareaAutosize
                        rows={6}
                        rowsMax={6}
                        onChange={(e) => {
                          this.setState({
                            other_Expense: e.target.value,
                          });
                        }}
                        name="other_Expense"
                        value={this.state.other_Expense}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td colSpan={5}>
                    <FormControl fullWidth style={{ margin: "10px" }}>
                      <FormLabel style={{ color: "#275458" }}>
                        What is the garnishment for and how long will it remain?
                      </FormLabel>
                      <TextareaAutosize
                        rows={3}
                        rowsMax={3}
                        onChange={(e) => {
                          this.setState({
                            garnishment_Remain: e.target.value,
                          });
                        }}
                        name="garnishment_Remain"
                        value={this.state.garnishment_Remain}
                      />
                    </FormControl>
                  </td>
                </tr>
              </tbody>
            </table>
          </Paper>
        </div>
        <div className="col-md-12">
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
        <div className="col-md-12">
          <div className="row">
            <AdminAction />
          </div>
        </div>
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
            <h5>Household Expenses</h5>
          </div>
        </div>
        <div className="row">
          <br />
          <div
            className="alert alert-info"
            style={{
              textAlign: "justify",
              width: "100%",
              backgroundColor: theme.themeLighter,
            }}
          >
            <strong>Info!</strong> Please enter your household monthly expenses
            in the lines below. If any line does not apply to you, please enter
            a zero.
          </div>
        </div>
        <div className="row">
          <React.Fragment>
            {this.state.loadIcon !== false ? (
              <React.Fragment>
                {/* <img
                  src={loadingImage}
                  style={{
                    margin: "auto",
                    textAlign: "center",
                    display: "block",
                  }}
                  className="img-fluid"
                  alt="Responsive image"
                /> */}
              </React.Fragment>
            ) : (
              this.HouseholdExpenses_HTML()
            )}
          </React.Fragment>
        </div>
      </div>
    );
  }
}
