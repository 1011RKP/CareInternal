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
  Grid,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  Zoom,
  Fab,
} from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";
//import PickyDateTime from "react-picky-date-time";
import * as moment from "moment";
import * as React from "react";
import styles from "../AINFunds_Main.module.scss";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import BlockIcon from '@material-ui/icons/Block';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from '@material-ui/icons/Delete';
import {
  CustomRadio,
  CustomTextField,
  state_DD,
  NextButton,
  BackButton
} from "../../common/Common";
import { ITheme } from "spfx-js-theme";
import { green } from "@material-ui/core/colors";
import { AdminAction } from "./Action_admin";
const theme: ITheme = window.__themeState__.theme;

export class AdminAssociateInformation extends React.Component<any, any> {
  public statesDD = state_DD;
  public constructor(props: any, state: any) {
    super(props);
    this.state = {
      // associateInformation_firstName:this.props.props.associateInformation_firstName,


      addFamilyMembers_ModelOpen: false,
      editFamilyMembers_ModelOpen: false,

      firstName: "",//this.props.props.associateInformation_firstName,
      firstName_Error: false,
      lastName: "",
      lastName_Error: false,
      currentAddress: "",
      currentAddress_Error: false,
      city: "",
      city_Error: false,
      state: "NA",
      state_Error: false,
      zipCode: "",
      zipCode_Error: false,
      hrStatus: "",
      absenceinSixMonths: "NA",
      primaryWawaschedule: "",
      pickUpShifts: "",
      whichStore: "",
      exploredOption: "none",
      vehiclesAttheHousehold: "none",
      entercarInformation: "",
      transportation: "",
      farfromStore: "",

      check_CellPhone: false,
      check_HomePhone: false,
      check_WorkPhone: false,
      check_AlternatePhone: false,
      cellPhone: "",
      homePhone: "",
      workPhone: "",
      alternatePhone: "",

      appliedAINfundbefore: "none",
      priorassistance: "",

      birthdate: "",
      personID: "",
      position: "",
      storeDept: "",
      hireDate: "",
      email: "",
      secondaryEmail: "",

      anypets: "none",
      kindofPets: "",
      howmanyPets: "",

      leaseMortgage: "",
      calendarDialog: false,

      primaryShift: "none",
      ownorrentHome: "none",
      ownorrentHome_other: "",

      family_ID:null,
      family_FirstName: "",
      family_LastName: "",
      family_Age: "",

      family_FirstName_Error: false,
      family_LastName_Error: false,
      family_Age_Error: false,

      family_Info : [],
      family_InfoEdit_Flag:[],

      progressBar:0
    };
  }

  public componentDidMount() {
    //this.props.calledfromChild(this.state);
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

  public AssociateInformation_HTML = () => {
    let _html = (
      <React.Fragment>
        <div className="col-md-6">
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="First Name*"
              onChange={(e) => {
                if (e.target.value === "") {
                  this.setState({
                    firstName: e.target.value,
                    firstName_Error: true,
                  });
                } else {
                  this.setState({
                    firstName: e.target.value,
                    firstName_Error: false,
                  });
                }
              }}
              onBlur={(e) => {
                if (e.target.value !== "") {
                  this.setState(
                    {
                      progressBar: this.state.progressBar + 2,
                      //*(10/100)
                    },
                    () => {
                      console.log(this.state.progressBar);
                    }
                  );
                }
              }}
              helperText={
                this.state.firstName_Error === true
                  ? "First Name Cannot be Empty"
                  : null
              }
              error={this.state.firstName_Error}
              name="firstName"
              value={this.state.firstName}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Last Name*"
              onChange={(e) => {
                if (e.target.value === "") {
                  this.setState({
                    lastName: e.target.value,
                    lastName_Error: true,
                  });
                } else {
                  this.setState({
                    lastName: e.target.value,
                    lastName_Error: false,
                  });
                }
              }}
              onBlur={(e) => {
                if (e.target.value !== "") {
                  this.setState(
                    {
                      progressBar: this.state.progressBar + 2,
                      //*(10/100)
                    },
                    () => {
                      console.log(this.state.progressBar);
                    }
                  );
                }
              }}
              helperText={
                this.state.lastName_Error === true
                  ? "Last Name Cannot be Empty"
                  : null
              }
              error={this.state.lastName_Error}
              name="lastName"
              value={this.state.lastName}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="currentAddress*"
              onChange={(e) => {
                if (e.target.value === "") {
                  this.setState({
                    currentAddress: e.target.value,
                    currentAddress_Error: true,
                  });
                } else {
                  this.setState({
                    currentAddress: e.target.value,
                    streer_Error: false,
                  });
                }
              }}
              onBlur={(e) => {
                if (e.target.value !== "") {
                  this.setState(
                    {
                      progressBar: this.state.progressBar + 2,
                      //*(10/100)
                    },
                    () => {
                      console.log(this.state.progressBar);
                    }
                  );
                }
              }}
              helperText={
                this.state.currentAddress_Error === true
                  ? "currentAddress Cannot be Empty"
                  : null
              }
              error={this.state.currentAddress_Error}
              name="currentAddress"
              value={this.state.currentAddress}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="City*"
              onChange={(e) => {
                if (e.target.value === "") {
                  this.setState({
                    city: e.target.value,
                    city_Error: true,
                  });
                } else {
                  this.setState({
                    city: e.target.value,
                    streer_Error: false,
                  });
                }
              }}
              onBlur={(e) => {
                if (e.target.value !== "") {
                  this.setState(
                    {
                      progressBar: this.state.progressBar + 2,
                      //*(10/100)
                    },
                    () => {
                      console.log(this.state.progressBar);
                    }
                  );
                }
              }}
              helperText={
                this.state.city_Error === true ? "city Cannot be Empty" : null
              }
              error={this.state.city_Error}
              name="city"
              value={this.state.city}
            />
          </FormControl>
          <FormControl
            fullWidth
            style={{ margin: "10px" }}
            error={this.state.state_Error}
          >
            <InputLabel style={{ color: theme.themeSecondary }}>
              State*
            </InputLabel>
            <Select
              name="state"
              defaultValue={{
                key: "NA",
                text: "-- Please Select State --",
              }}
              onBlur={(e) => {
                if (e.target.value !== "NA") {
                  this.setState(
                    {
                      progressBar: this.state.progressBar + 2,
                      //*(10/100)
                    },
                    () => {
                      console.log(this.state.progressBar);
                    }
                  );
                }
              }}
              onChange={(event) => {
                if (event.target.value === "NA") {
                  this.setState({
                    state: event.target.value,
                    state_Error: true,
                  });
                } else {
                  this.setState({
                    state: event.target.value,
                    state_Error: false,
                  });
                }
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
            {this.state.state_Error !== false ? (
              <FormHelperText>State Cannot be Empty</FormHelperText>
            ) : (
              false
            )}
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Zip Code*"
              onChange={(e) => {
                if (e.target.value === "") {
                  this.setState({
                    zipCode: e.target.value,
                    zipCode_Error: true,
                  });
                } else {
                  this.setState({
                    zipCode: e.target.value,
                    zipCode_Error: false,
                  });
                }
              }}
              onBlur={(e) => {
                if (e.target.value !== "") {
                  this.setState(
                    {
                      progressBar: this.state.progressBar + 2,
                      //*(10/100)
                    },
                    () => {
                      console.log(this.state.progressBar);
                    }
                  );
                }
              }}
              helperText={
                this.state.zipCode_Error === true
                  ? "zipCode Cannot be Empty"
                  : null
              }
              error={this.state.zipCode_Error}
              name="zipCode"
              value={this.state.zipCode}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="HR Status"
              onChange={(e) => {
                this.setState({
                  hrStatus: e.target.value,
                });
              }}
              onBlur={(e) => {
                if (e.target.value !== "") {
                  this.setState(
                    {
                      progressBar: this.state.progressBar + 2,
                      //*(10/100)
                    },
                    () => {
                      console.log(this.state.progressBar);
                    }
                  );
                }
              }}
              name="hrStatus"
              value={this.state.hrStatus}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "0px 10px 10px 10px" }}>
            <CustomTextField
              label="Primary Wawa schedule"
              onChange={(e) => {
                this.setState({
                  primaryWawaschedule: e.target.value,
                });
              }}
              onBlur={(e) => {
                if (e.target.value !== "") {
                  this.setState(
                    {
                      progressBar: this.state.progressBar + 2,
                      //*(10/100)
                    },
                    () => {
                      console.log(this.state.progressBar);
                    }
                  );
                }
              }}
              name="primaryWawaschedule"
              value={this.state.primaryWawaschedule}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px 10px 0px 10px" }}>
            <FormLabel
              component="legend"
              style={{ color: theme.themeSecondary }}
            >
              Are you or have you been on an approved leave of absence in the
              last six months?
            </FormLabel>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="none"
              value={this.state.absenceinSixMonths}
              onChange={(e) => {
                this.setState({
                  absenceinSixMonths: e.target.value,
                });
              }}
              onBlur={(e) => {
                // if (e.target.checked !== "none") {
                  this.setState(
                    {
                      progressBar: this.state.progressBar + 2,
                      //*(10/100)
                    },
                    () => {
                      console.log(this.state.progressBar);
                    }
                  );
                }
              }
            //}
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
          <FormControl fullWidth style={{ margin: "10px 10px 0px 10px" }}>
            <FormLabel
              component="legend"
              style={{ color: theme.themeSecondary }}
            >
              Primary shift
            </FormLabel>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="none"
              value={this.state.primaryShift}
              onChange={(e) => {
                this.setState({
                  primaryShift: e.target.value,
                });
              }}
              onBlur={(e) => {
                //if (e.target.checked !== "none") {
                  this.setState(
                    {
                      progressBar: this.state.progressBar + 2,
                      //*(10/100)
                    },
                    () => {
                      console.log(this.state.progressBar);
                    }
                  );
                }
              }//}
            >
              <FormControlLabel
                value="first"
                control={<CustomRadio />}
                label="1st"
                labelPlacement="end"
              />
              <FormControlLabel
                value="secound"
                control={<CustomRadio />}
                label="2nd"
                labelPlacement="end"
              />
              <FormControlLabel
                value="third"
                control={<CustomRadio />}
                label="3rd"
                labelPlacement="end"
              />
              <FormControlLabel
                value="nonStore"
                control={<CustomRadio />}
                label="Non-Store"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>

          <FormControl fullWidth style={{ margin: "10px 10px 0px 10px" }}>
            <FormLabel
              component="legend"
              style={{ color: theme.themeSecondary }}
            >
              Do you ever pick up shifts in any other Wawa store?
            </FormLabel>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="none"
              value={this.state.pickUpShifts}
              onChange={(e) => {
                this.setState({
                  pickUpShifts: e.target.value,
                });
              }}
              onBlur={(e) => {
                //if (e.target.checked !== "") {
                  this.setState(
                    {
                      progressBar: this.state.progressBar + 2,
                      //*(10/100)
                    },
                    () => {
                      console.log(this.state.progressBar);
                    }
                  );
                }
              }//}
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
            {this.state.pickUpShifts === "yes" ? (
              <React.Fragment>
                <FormControl fullWidth style={{ margin: "0px 10px 10px 10px" }}>
                  <CustomTextField
                    label="which store?"
                    onChange={(e) => {
                      this.setState({
                        whichStore: e.target.value,
                      });
                    }}
                    onBlur={(e) => {
                      if (e.target.value !== "") {
                        this.setState(
                          {
                            progressBar: this.state.progressBar + 2,
                            //*(10/100)
                          },
                          () => {
                            console.log(this.state.progressBar);
                          }
                        );
                      }
                    }}
                    name="whichStore"
                    value={this.state.whichStore}
                  />
                </FormControl>
              </React.Fragment>
            ) : null}
            {this.state.pickUpShifts === "no" ? (
              <React.Fragment>
                <FormControl fullWidth style={{ margin: "10px 10px 0px 10px" }}>
                  <FormLabel
                    component="legend"
                    style={{ color: theme.themeSecondary }}
                  >
                    Have you explored this option?
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-label="position"
                    name="position"
                    defaultValue="none"
                    value={this.state.exploredOption}
                    onChange={(e) => {
                      this.setState({
                        exploredOption: e.target.value,
                      });
                    }}
                    onBlur={(e) => {
                      //if (e.target.checked !== "") {
                        this.setState(
                          {
                            progressBar: this.state.progressBar + 2,
                            //*(10/100)
                          },
                          () => {
                            console.log(this.state.progressBar);
                          }
                        );
                      }
                    }//}
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
              </React.Fragment>
            ) : null}
          </React.Fragment>
          <FormControl fullWidth style={{ margin: "10px 10px 0px 10px" }}>
            <FormLabel
              component="legend"
              style={{ color: theme.themeSecondary }}
            >
              Do you own or rent your home?
            </FormLabel>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="none"
              value={this.state.ownorrentHome}
              onChange={(e) => {
                this.setState({
                  ownorrentHome: e.target.value,
                });
              }}
            >
              <FormControlLabel
                value="own"
                control={<CustomRadio />}
                label="Own"
                labelPlacement="end"
              />
              <FormControlLabel
                value="rent"
                control={<CustomRadio />}
                label="Rent"
                labelPlacement="end"
              />
              <FormControlLabel
                value="other"
                control={<CustomRadio />}
                label="Other"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>
          <React.Fragment>
            {this.state.ownorrentHome === "other" ? (
              <React.Fragment>
                <FormControl fullWidth style={{ margin: "0px 10px 10px 10px" }}>
                  <CustomTextField
                    label="Prior Assistance"
                    onChange={(e) => {
                      this.setState({
                        ownorrentHome_other: e.target.value,
                      });
                    }}
                    name="ownorrentHome_other"
                    value={this.state.ownorrentHome_other}
                  />
                </FormControl>
              </React.Fragment>
            ) : null}
          </React.Fragment>
          <FormControl fullWidth style={{ margin: "10px", display: "block" }}>
            <FormLabel
              component="legend"
              style={{ color: "#dc3545", fontWeight: "bold" }}
            >
              At least one phone number field is required any additional will be
              optional:
            </FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.check_CellPhone}
                  onChange={(e) => {
                    this.setState({
                      check_CellPhone: !this.state.check_CellPhone,
                    });
                  }}
                  name="check_CellPhone"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="Cell Phone"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.check_HomePhone}
                  onChange={(e) => {
                    this.setState({
                      check_HomePhone: !this.state.check_HomePhone,
                    });
                  }}
                  name="check_HomePhone"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="Home Phone"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.check_WorkPhone}
                  onChange={(e) => {
                    this.setState({
                      check_WorkPhone: !this.state.check_WorkPhone,
                    });
                  }}
                  name="check_WorkPhone"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="Work Phone"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.check_AlternatePhone}
                  onChange={(e) => {
                    this.setState({
                      check_AlternatePhone: !this.state.check_AlternatePhone,
                    });
                  }}
                  name="check_AlternatePhone"
                  style={{ color: theme.themeSecondary }}
                />
              }
              label="Alternate Phone"
            />
          </FormControl>
          <React.Fragment>
            {this.state.check_CellPhone !== false ? (
              <React.Fragment>
                <FormControl fullWidth style={{ margin: "10px" }}>
                  <CustomTextField
                    label="Cell Phone"
                    onChange={(e) => {
                      this.setState({
                        cellPhone: e.target.value,
                      });
                    }}
                    name="cellPhone"
                    value={this.state.cellPhone}
                  />
                </FormControl>
              </React.Fragment>
            ) : null}
          </React.Fragment>
          <React.Fragment>
            {this.state.check_HomePhone !== false ? (
              <React.Fragment>
                <FormControl fullWidth style={{ margin: "10px" }}>
                  <CustomTextField
                    label="Home Phone"
                    onChange={(e) => {
                      this.setState({
                        homePhone: e.target.value,
                      });
                    }}
                    name="homePhone"
                    value={this.state.homePhone}
                  />
                </FormControl>
              </React.Fragment>
            ) : null}
          </React.Fragment>
          <React.Fragment>
            {this.state.check_WorkPhone !== false ? (
              <React.Fragment>
                <FormControl fullWidth style={{ margin: "10px" }}>
                  <CustomTextField
                    label="Work Phone"
                    onChange={(e) => {
                      this.setState({
                        workPhone: e.target.value,
                      });
                    }}
                    name="workPhone"
                    value={this.state.workPhone}
                  />
                </FormControl>
              </React.Fragment>
            ) : null}
          </React.Fragment>
          <React.Fragment>
            {this.state.check_AlternatePhone !== false ? (
              <React.Fragment>
                <FormControl fullWidth style={{ margin: "10px" }}>
                  <CustomTextField
                    label="Alternate Phone"
                    onChange={(e) => {
                      this.setState({
                        alternatePhone: e.target.value,
                      });
                    }}
                    name="alternatePhone"
                    value={this.state.alternatePhone}
                  />
                </FormControl>
              </React.Fragment>
            ) : null}
          </React.Fragment>

          <FormControl fullWidth style={{ margin: "10px 10px 0px 10px" }}>
            <FormLabel
              component="legend"
              style={{ color: theme.themeSecondary }}
            >
              Have you ever applied to the AIN fund before?
            </FormLabel>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="none"
              value={this.state.appliedAINfundbefore}
              onChange={(e) => {
                this.setState({
                  appliedAINfundbefore: e.target.value,
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
            {this.state.appliedAINfundbefore === "yes" ? (
              <React.Fragment>
                <FormControl fullWidth style={{ margin: "0px 10px 10px 10px" }}>
                  <CustomTextField
                    label="Prior Assistance"
                    onChange={(e) => {
                      this.setState({
                        priorassistance: e.target.value,
                      });
                    }}
                    name="priorassistance"
                    value={this.state.priorassistance}
                  />
                </FormControl>
              </React.Fragment>
            ) : null}
          </React.Fragment>
        </div>
        <div className="col-md-6">
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Birth date"
              name="birthdate"
              value={this.state.birthdate}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EventIcon className={styles.eventIconStyles} />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Person Id"
              onChange={(e) => {
                this.setState({
                  personID: e.target.value,
                });
              }}
              name="personID"
              value={this.state.personID}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Position"
              onChange={(e) => {
                this.setState({
                  position: e.target.value,
                });
              }}
              name="position"
              value={this.state.position}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Store/Dept"
              onChange={(e) => {
                this.setState({
                  storeDept: e.target.value,
                });
              }}
              name="storeDept"
              value={this.state.storeDept}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Hire Date"
              name="hireDate"
              value={this.state.hireDate}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EventIcon
                      className={styles.eventIconStyles}
                      // onClick={e => {
                      //   this.setState({
                      //     calendarDialog: true,
                      //     calendarInput: "hireDate"
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
              label="Email"
              onChange={(e) => {
                this.setState({
                  email: e.target.value,
                });
              }}
              name="email"
              value={this.state.email}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Secondary Email"
              onChange={(e) => {
                this.setState({
                  secondaryEmail: e.target.value,
                });
              }}
              name="secondaryEmail"
              value={this.state.secondaryEmail}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px 10px 0 10px" }}>
            <FormLabel
              component="legend"
              style={{ color: theme.themeSecondary }}
            >
              Are there any vehicles at the household?
            </FormLabel>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="none"
              value={this.state.vehiclesAttheHousehold}
              onChange={(e) => {
                this.setState({
                  vehiclesAttheHousehold: e.target.value,
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
            {this.state.vehiclesAttheHousehold === "yes" ? (
              <React.Fragment>
                <FormControl fullWidth style={{ margin: "0px 10px 10px 10px" }}>
                  <CustomTextField
                    label="Enter car information"
                    onChange={(e) => {
                      this.setState({
                        entercarInformation: e.target.value,
                      });
                    }}
                    name="entercarInformation"
                    value={this.state.entercarInformation}
                  />
                </FormControl>
              </React.Fragment>
            ) : null}
            {this.state.vehiclesAttheHousehold === "no" ? (
              <React.Fragment>
                <FormControl fullWidth style={{ margin: "10px" }}>
                  <CustomTextField
                    label="How you get transportation"
                    onChange={(e) => {
                      this.setState({
                        transportation: e.target.value,
                      });
                    }}
                    name="transportation"
                    value={this.state.transportation}
                  />
                </FormControl>
                <FormControl fullWidth style={{ margin: "10px" }}>
                  <CustomTextField
                    label="How far do you live from the store"
                    onChange={(e) => {
                      this.setState({
                        farfromStore: e.target.value,
                      });
                    }}
                    name="farfromStore"
                    value={this.state.farfromStore}
                  />
                </FormControl>
              </React.Fragment>
            ) : null}
          </React.Fragment>
          <FormControl fullWidth style={{ margin: "10px 10px 0px 10px" }}>
            <FormLabel
              component="legend"
              style={{ color: theme.themeSecondary }}
            >
              Any pets in your home?
            </FormLabel>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="none"
              value={this.state.anypets}
              onChange={(e) => {
                this.setState({
                  anypets: e.target.value,
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
          {this.state.anypets === "yes" ? (
            <React.Fragment>
              <FormControl fullWidth style={{ margin: "0px 10px 10px 10px" }}>
                <CustomTextField
                  label="What kind of pets"
                  onChange={(e) => {
                    this.setState({
                      kindofPets: e.target.value,
                    });
                  }}
                  name="kindofPets"
                  value={this.state.kindofPets}
                />
              </FormControl>
              <FormControl fullWidth style={{ margin: "10px" }}>
                <CustomTextField
                  label="How many pets"
                  onChange={(e) => {
                    this.setState({
                      howmanyPets: e.target.value,
                    });
                  }}
                  name="howmanyPets"
                  value={this.state.howmanyPets}
                />
              </FormControl>
            </React.Fragment>
          ) : null}
          <React.Fragment>
            {this.state.family_Info.length > 0 ? (
              <React.Fragment>{this.addFamilyMembers_Table()}</React.Fragment>
            ) : null}
          </React.Fragment>
          <FormControl fullWidth>
            <NextButton
              style={{ float: "right" }}
              onClick={(e) => {
                this.setState({
                  addFamilyMembers_ModelOpen: true,
                });
              }}
            >
              <AddCircleOutlineIcon style={{ paddingRight: "5px" }} /> List
              names of all people (adults and children) who live in the
              household
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

  // public addFamilyMembers_condition = (e) => {
  //   if (e !== null) {
  //     this.setState({
  //       family_FirstName: e.d.family_FirstName,
  //       family_LastName:  e.d.family_LastName,
  //       family_Age:  e.d.family_Age
  //     },()=>{
  //       {
  //         this.editFamilyMembers_Model({e});
  //         this.setState({
  //           editFamilyMembers_ModelOpen:true
  //         })
  //       }
  //     })
  //   }
  //   else{
  //     {this.addFamilyMembers_Model()}
  //   }
  // }

  public addFamilyMembers_Model = () => {
    let _html = (
      <React.Fragment>
        <Dialog
          open={this.state.addFamilyMembers_ModelOpen}
          aria-labelledby="addFamilyMembers-title"
          aria-describedby="addFamilyMembers-description"
        >
          <DialogTitle
            id="addFamilyMembers-title"
            style={{ backgroundColor: "rgb(217, 217, 214)", color: "black" }}
          >
            Add all people (adults and children) who live in the household with
            you
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="addFamilyMembers-description">
              <FormControl fullWidth style={{ margin: "10px" }}>
                <CustomTextField
                  label="First Name"
                  onChange={(e) => {
                    if (e.target.value === "") {
                      this.setState({
                        family_FirstName: e.target.value,
                        family_FirstName_Error: true,
                      });
                    } else {
                      this.setState({
                        family_FirstName: e.target.value,
                        family_FirstName_Error: false,
                      });
                    }
                  }}
                  helperText={
                    this.state.family_FirstName_Error === true
                      ? "First Name Cannot be Empty"
                      : null
                  }
                  error={this.state.family_FirstName_Error}
                  name="family_FirstName"
                  value={this.state.family_FirstName}
                />
              </FormControl>
              <FormControl fullWidth style={{ margin: "10px" }}>
                <CustomTextField
                  label="Last Name"
                  onChange={(e) => {
                    if (e.target.value === "") {
                      this.setState({
                        family_LastName: e.target.value,
                        family_LastName_Error: true,
                      });
                    } else {
                      this.setState({
                        family_LastName: e.target.value,
                        family_LastName_Error: false,
                      });
                    }
                  }}
                  helperText={
                    this.state.family_LastName_Error === true
                      ? "Last Name Cannot be Empty"
                      : null
                  }
                  error={this.state.family_LastName_Error}
                  name="family_LastName"
                  value={this.state.family_LastName}
                />
              </FormControl>
              <FormControl fullWidth style={{ margin: "10px" }}>
                <CustomTextField
                  label="Age"
                  onChange={(e) => {
                    if (e.target.value === "") {
                      this.setState({
                        family_Age: e.target.value,
                        family_Age_Error: true,
                      });
                    } else {
                      this.setState({
                        family_Age: e.target.value,
                        family_Age_Error: false,
                      });
                    }
                  }}
                  helperText={
                    this.state.family_Age_Error === true
                      ? "First Name Cannot be Empty"
                      : null
                  }
                  error={this.state.family_Age_Error}
                  name="family_Age"
                  value={this.state.family_Age}
                />
              </FormControl>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <BackButton
              onClick={(e) => {
                this.setState({
                  addFamilyMembers_ModelOpen: false,
                });
              }}
            >
              <BlockIcon style={{ marginRight: "3px" }} />
              Cancel
            </BackButton>
            <NextButton
              onClick={(e) => {
                  //let family_ID  = this.state.family_Info.length;
                  let family_FirstName = this.state.family_FirstName;
                  let family_LastName = this.state.family_LastName;
                  let family_Age = this.state.family_Age;

                let document_Name = this.state.document_Name;
                let fileName = this.state.fileName;
                this.setState((prevState) => ({
                  family_Info: [
                    ...prevState.family_Info,
                    { family_FirstName, family_LastName, family_Age },
                  ],
                  addFamilyMembers_ModelOpen:false,
                  family_FirstName:"",
                  family_LastName:"",
                  family_Age:""
                }))
              }}
              autoFocus
            >
              <AddCircleOutlineIcon style={{ marginRight: "3px" }} />
              Add
            </NextButton>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
    return _html;
  }

  public editFamilyMembers_Model = (data) => {
    let _html = (
      <React.Fragment>
        <Dialog
          open={this.state.editFamilyMembers_ModelOpen}
          //onClose={!(this.state.addFamilyMembers_ModelOpen)}
          aria-labelledby="editFamilyMembers-title"
          aria-describedby="editFamilyMembers-description"
        >
          <DialogTitle
            id="editFamilyMembers-title"
            style={{ backgroundColor: "rgb(217, 217, 214)", color: "black" }}
          >
            Edit{" "}
            <React.Fragment>
              {data === null ? null : (
                <React.Fragment>{data.family_FirstName}</React.Fragment>
              )}{" "}
            </React.Fragment>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="addFamilyMembers-description">
              <FormControl fullWidth style={{ margin: "10px" }}>
                <CustomTextField
                  label="First Name"
                  onChange={(e) => {
                    if (e.target.value === "") {
                      this.setState({
                        family_FirstName: e.target.value,
                        family_FirstName_Error: true,
                      });
                    } else {
                      this.setState({
                        family_FirstName: e.target.value,
                        family_FirstName_Error: false,
                      });
                    }
                  }}
                  helperText={
                    this.state.family_FirstName_Error === true
                      ? "First Name Cannot be Empty"
                      : null
                  }
                  error={this.state.family_FirstName_Error}
                  name="family_FirstName"
                  value={this.state.family_FirstName}
                />
              </FormControl>
              <FormControl fullWidth style={{ margin: "10px" }}>
                <CustomTextField
                  label="Last Name"
                  onChange={(e) => {
                    if (e.target.value === "") {
                      this.setState({
                        family_LastName: e.target.value,
                        family_LastName_Error: true,
                      });
                    } else {
                      this.setState({
                        family_LastName: e.target.value,
                        family_LastName_Error: false,
                      });
                    }
                  }}
                  helperText={
                    this.state.family_LastName_Error === true
                      ? "Last Name Cannot be Empty"
                      : null
                  }
                  error={this.state.family_LastName_Error}
                  name="family_LastName"
                  value={this.state.family_LastName}
                />
              </FormControl>
              <FormControl fullWidth style={{ margin: "10px" }}>
                <CustomTextField
                  label="Age"
                  onChange={(e) => {
                    if (e.target.value === "") {
                      this.setState({
                        family_Age: e.target.value,
                        family_Age_Error: true,
                      });
                    } else {
                      this.setState({
                        family_Age: e.target.value,
                        family_Age_Error: false,
                      });
                    }
                  }}
                  helperText={
                    this.state.family_Age_Error === true
                      ? "First Name Cannot be Empty"
                      : null
                  }
                  error={this.state.family_Age_Error}
                  name="family_Age"
                  value={this.state.family_Age}
                />
              </FormControl>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <BackButton
              onClick={(e) => {
                this.setState({
                  editFamilyMembers_ModelOpen: false,
                });
              }}
            >
              <BlockIcon style={{ marginRight: "3px" }} />
              Cancel
            </BackButton>
            <NextButton
              onClick={() => {
                let flag = this.state.family_InfoEdit_Flag[0].family_FirstName;
                let family_FirstName = this.state.family_FirstName;
                let family_LastName = this.state.family_LastName;
                let family_Age = this.state.family_Age;
                console.log(flag);
                this.setState(
                  (prevState) => ({
                    family_Info: prevState.family_Info.filter(
                      (name) => name.family_FirstName !== flag
                    ),
                  }),
                  () => {
                    this.setState((prevState) => ({
                      family_Info: [
                        ...prevState.family_Info,
                        { family_FirstName, family_LastName, family_Age },
                      ],
                      editFamilyMembers_ModelOpen: false,
                      family_InfoEdit_Flag:[],
                      family_FirstName:"",
                      family_LastName:"",
                      family_Age:""
                    }));
                  }
                );
              }}
              autoFocus
            >
              <EditIcon style={{ marginRight: "3px" }} />
              Edit
            </NextButton>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
    return _html;
  }

  public addFamilyMembers_Table = () => {
    let _html = (
      <React.Fragment>
        <table className="table table-striped">
          <thead style={{ backgroundColor: "#000", color: "white" }}>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.family_Info.map((d) => (
              <tr key={d.index}>
                <td>{d.family_FirstName}</td>
                <td>{d.family_LastName}</td>
                <td>{d.family_Age}</td>
                <td>
                  <a
                    onClick={(e) => {
                      {
                        this.editPerson(d);
                      }
                    }}
                  >
                    <EditIcon style={{ color: theme.themeSecondary }} />
                  </a>
                </td>
                <td>
                  <a
                    onClick={(e) => {
                      this.deletePerson(d.family_FirstName);
                    }}
                  >
                    <DeleteIcon style={{ color: theme.themeSecondary }} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
    return _html;
  }

  public deletePerson = (e) => {
    this.setState((prevState) => ({
      family_Info: prevState.family_Info.filter(
        (name) => name.family_FirstName !== e
      ),
    }));
  }

  public editPerson = (e) =>{
    let info = [
      {
        family_Age: e.family_Age,
        family_LastName: e.family_LastName,
        family_FirstName: e.family_FirstName,
      },
    ];
       this.setState(
         {
           editFamilyMembers_ModelOpen: true,
           family_Age: e.family_Age,
           family_LastName: e.family_LastName,
           family_FirstName: e.family_FirstName,
           family_InfoEdit_Flag: info
         },
         () => {
           this.editFamilyMembers_Model(e);
         }
       );
  }

  public render(): React.ReactElement<any> {
    return (
      <div className={styles.ainfunds}>
        <div className="row">
          <div
            style={{
              textAlign: "justify",
              width: "100%",
              border: "none",
              borderRadius: "0",
              marginBottom: "0",
            }}
          >
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                style={{backgroundColor:theme.themeSecondary, width:this.state.progressBar + "%"}}
              ></div>
            </div>
          </div>
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
            <h5>Associate Information</h5>
          </div>
          <div
            className="alert alert-info"
            style={{
              textAlign: "justify",
              backgroundColor: theme.themeLighter,
              borderRadius: "0",
            }}
          >
            <strong>Info!</strong> All Wawa associates are eligible for
            assistance from the AIN Fund provided that they complete the
            application. Associates must demonstrate how they have been impacted
            by a qualifying event, substantiate their expenses, and prove the
            lack of financial resources. Additionally, the associate must have
            been an associate of the Company when the event occurred, not before
            his or her employment with the Company began. The associate must be
            active at the time of disbursement.
          </div>
        </div>

        <div className="row" style={{ padding: "5px" }}>
          {this.AssociateInformation_HTML()}
        </div>
        <div className="row">
          {this.addFamilyMembers_Model()}
          {this.editFamilyMembers_Model(null)}
        </div>
      </div>
    );
  }
}
