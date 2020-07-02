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
  TextareaAutosize,
} from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";
//import PickyDateTime from "react-picky-date-time";
import * as moment from "moment";
import * as React from "react";
import styles from "../ainFunds/AINFunds_Main.module.scss";
import { CustomRadio, CustomTextField, state_DD } from "../common/Common";
import { ITheme } from "spfx-js-theme";
const theme: ITheme = window.__themeState__.theme;

export class DescriptionofHardship extends React.Component<any, any> {
  public statesDD = state_DD;
  public constructor(props: any, state: any) {
    super(props);
    this.state = {
      disasterDate:"",
      triggerEvent: "",
      triggerEvent_Error: false,
      descriptionHardship: "",
      descriptionHardship_Error: false
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

  public DescriptionofHardship_HTML = () => {
    let _html = (
      <React.Fragment>
        <div className="col-md-8">
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Date of Disaster/Financial Hardship*"
              name="disasterDate"
              value={this.state.disasterDate}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EventIcon
                      className={styles.eventIconStyles}
                      // onClick={e => {
                      //   this.setState({
                      //     calendarDialog: true,
                      //     calendarInput: "disasterDate"
                      //   });
                      // }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <FormLabel
              style={{
                color: theme.themeSecondary,
              }}
            >
              What triggered this event? (Financial need must be triggered by an unavoidable event)*
            </FormLabel>
            <TextareaAutosize
              rows={6}
              rowsMax={6}
              onChange={(e) => {
                if (e.target.value !== null) {
                  this.setState({
                    triggerEvent: e.target.value,
                    triggerEvent_Error: false,
                  });
                } else {
                  this.setState({
                    triggerEvent: e.target.value,
                    triggerEvent_Error: true,
                  });
                }
              }}
              name="triggerEvent"
              value={this.state.triggerEvent}
            />
            {this.state.triggerEvent_Error !== false ? (
              <FormHelperText style={{ color: "#f44336" }}>
                Trigger Event Cannot be Empty
              </FormHelperText>
            ) : (
              false
            )}
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <FormLabel
              style={{
                color: theme.themeSecondary,
              }}
            >
              Description of your hardship*
            </FormLabel>
            <TextareaAutosize
              rows={10}
              rowsMax={10}
              onChange={(e) => {
                if (e.target.value !== null) {
                  this.setState({
                    descriptionHardship: e.target.value,
                    descriptionHardship_Error: false,
                  });
                } else {
                  this.setState({
                    descriptionHardship: e.target.value,
                    descriptionHardship_Error: true,
                  });
                }
              }}
              name="descriptionHardship"
              value={this.state.descriptionHardship}
              //className={this.state.descriptionHardship_Error ? styles.errorTextarea : null}
            />
            {this.state.descriptionHardship_Error !== false ? (
              <FormHelperText style={{ color: "#f44336" }}>
                Description Hardship Cannot be Empty
              </FormHelperText>
            ) : (
              false
            )}
          </FormControl>
        </div>
        <div
          className="col-md-4"
          style={{
            backgroundColor: "rgb(244, 245, 247)",
            color: "maroon",
            borderRadius: "5px",
          }}
        >
          <h4 style={{ padding: "10px" }}>
            Financial Hardships that cannot be granted include{" "}
          </h4>
          <ul>
            <li>Lost Wages due to missed time from work</li>
            <li>
              Lost wages due to seasonality, availability and/or performance
            </li>
            <li>Items covered by insurance or governmental assistance</li>
            <li>Bad debt from ongoing financial problems</li>
            <li>Funding for future or anticipated hardships</li>
            <li>Bankruptcy and any fees related to bankruptcy</li>
            <li>Car insurance, car payments, or car repairs</li>
            <li>Elective, routine or ongoing medical expenses</li>
            <li>
              Circumstances within the associate's control (such as traffic
              violations, budget, etc.)
            </li>
            <li>Legal fees & expenses</li>
            <li>Taxes</li>
          </ul>
        </div>
      </React.Fragment>
    );
    return _html;
  }

  public financialHardships_HTML = () => {
    let _html = <React.Fragment></React.Fragment>;
    return _html;
  }

  public render(): React.ReactElement<any> {
    return (
      <div className={styles.ainfunds}>
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
            <h5>Description of Hardship</h5>
          </div>
        </div>
        <div className="row">
          <div
            className="alert alert-info"
            style={{
              textAlign: "justify",
              width: "100%",
              backgroundColor: theme.themeLighter,
            }}
          >
            <strong>Info!</strong> You are requesting assistance for yourself
            because of an unexpected financial hardship which is not covered by
            insurance or other sources. You have attempted assistance elsewhere
            prior to completing this application. .
          </div>
        </div>
        <div className="row" style={{ padding: "5px" }}>
          {this.DescriptionofHardship_HTML()}
        </div>
      </div>
    );
  }
}
