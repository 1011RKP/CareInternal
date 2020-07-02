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
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
//import PickyDateTime from "react-picky-date-time";
import * as moment from "moment";
import * as React from "react";
import SaveIcon from "@material-ui/icons/Save";
import styles from "../AINFunds_Main.module.scss";
import {
  CustomRadio,
  CustomTextField,
  state_DD,
  NextButton,
} from "../../common/Common";
import { ITheme } from "spfx-js-theme";
import { AdminAction } from "./Action_admin";
const theme: ITheme = window.__themeState__.theme;

export class AdminRequiredDocumentation extends React.Component<any, any> {
  public statesDD = state_DD;
  public constructor(props: any, state: any) {
    super(props);
    this.state = {
      fileName: "",
      document_Name: "",
      document_Obj : []
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

  public deletePerson = (e) => {
    this.setState((prevState) => ({
      document_Obj: prevState.document_Obj.filter(
        (name) => name.document_Name !== e
      ),
    }));
  }

  public RequiredDocumentation_HTML = () => {
    let _html = (
      <React.Fragment>
        <div className="col-md-12">
          <div className="alert alert-secondary">
            <FormLabel
              component="legend"
              style={{
                color: "maroon",
                fontSize: "0.90rem",
                textDecoration: "underline",
              }}
            >
              Critical Information for Payment of Bills(No bills will be paid
              without current documentation)
            </FormLabel>
            <ul>
              <li>Current copy of any bills you are requesting to be paid.</li>
              <li> Any shut off, eviction or foreclosure notices.</li>
            </ul>
            <br />
            <FormLabel
              component="legend"
              style={{
                color: "maroon",
                fontSize: "0.90rem",
                textDecoration: "underline",
              }}
            >
              Income Verification
            </FormLabel>
            <ul>
              <li>
                Copy of year to date pay stub for associate requesting
                assistance and all residents of household.
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-8">
          <div className="row">
            <FormLabel
              component="legend"
              style={{
                color: "maroon",
                fontSize: "0.95rem",
                padding: "0px 25px",
                marginBottom: "-8px",
              }}
            >
              Please select a file to upload:
            </FormLabel>
            <div className="container mt-3">
              <div className="custom-file mb-3">
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFile"
                  name={this.state.fileName}
                  onChange={(e) => {
                    if (e.target.files.length > 0) {
                      this.setState({
                        fileName: e.target.files[0].name,
                      });
                    }
                  }}
                  style={{ cursor: "pointer" }}
                />
                <label
                  style={{ cursor: "pointer" }}
                  className="custom-file-label"
                >
                  {this.state.fileName}
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <FormControl fullWidth>
                <CustomTextField
                  label="Please name this document (Utility bill, Lease, etc.):"
                  onChange={(e) => {
                    this.setState({
                      document_Name: e.target.value,
                    });
                  }}
                  name="document_Name"
                  value={this.state.document_Name}
                />
              </FormControl>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <NextButton
                style={{ margin: "20px 0px" }}
                onClick={(e) => {
                  let document_Name = this.state.document_Name;
                  let fileName = this.state.fileName;
                  this.setState((prevState) => ({
                    document_Obj: [
                      ...prevState.document_Obj,
                      { fileName, document_Name },
                    ],
                  }));

                  // let obj = [...this.state.document_Obj];
                  // let info = {
                  //   id: obj.length,
                  //   fileName: this.state.fileName,
                  //   document_Name: this.state.document_Name,
                  // };
                  // obj.push(info);
                  // this.setState({
                  //   document_Obj: obj,
                  // });
                }}
              >
                <SaveIcon style={{ paddingRight: "5px" }} />
                Save
              </NextButton>
            </div>
          </div>
          <div className="row">
            <React.Fragment>
              {this.state.document_Obj.length > 0 ? (
                <React.Fragment>
                  <div className="col-md-12">
                    <table className="table table-striped">
                      <thead
                        style={{
                          backgroundColor: "#212529",
                          color: "white",
                          fontSize: "16px",
                        }}
                      >
                        <tr>
                          <th>Document Name </th>
                          <th>File Name</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.document_Obj.map((d, index) => (
                          <tr>
                            <td>{d.fileName}</td>
                            <td>{d.document_Name}</td>
                            <td>
                              <a
                                onClick={() => {
                                 this.deletePerson(d.document_Name)
                                }}
                              >
                                <DeleteIcon style={{marginRight:"3px"}}/>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </React.Fragment>
              ) : null}
            </React.Fragment>
          </div>
        </div>
        <div className="col-md-4">
          <div className="alert alert-secondary">
            <FormLabel
              component="legend"
              style={{
                color: "maroon",
                fontSize: "0.95rem",
                textDecoration: "underline",
              }}
            >
              Request Reason
            </FormLabel>
            <ul>
              <li>Rent/Mortgage</li>
              <li>Utility</li>
              <li>Funeral</li>
              <li>Other</li>
            </ul>
            <FormLabel
              component="legend"
              style={{
                color: "maroon",
                fontSize: "0.90rem",
                textDecoration: "underline",
              }}
            >
              Required Documentation
            </FormLabel>
            <ul>
              <li>Late notice, lease if renting</li>
              <li>Current utility bill</li>
              <li>Funeral bill</li>
              <li>Proof of debt</li>
            </ul>
          </div>
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
            <h5>Required Documentation</h5>
          </div>
        </div>
        <div className="row">
          <br />
          <div
            className="alert alert-info"
            style={{ textAlign: "justify", width: "100%", backgroundColor:theme.themeLighter}}
          >
            <strong>Info!</strong> Please attach supporting documentation below
            by clicking on the "Browse.../Upload File" buttons. If you don't
            have the required documentation at this time, please continue to the
            next page.
          </div>
        </div>
        <div className="row">{this.RequiredDocumentation_HTML()}</div>
      </div>
    );
  }
}
