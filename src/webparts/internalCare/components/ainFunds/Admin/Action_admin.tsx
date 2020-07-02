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
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  Paper,
} from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";
//import PickyDateTime from "react-picky-date-time";
import * as moment from "moment";
import * as React from "react";
import styles from "../AINFunds_Main.module.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ErrorIcon from "@material-ui/icons/Error";
import {
  CustomRadio,
  CustomTextField,
  state_DD,
  NextButton,
} from "../../common/Common";
import { ITheme } from "spfx-js-theme";
const theme: ITheme = window.__themeState__.theme;

//"@microsoft/rush-stack-compiler-3.1": "^0.11.1",
//"@microsoft/rush-stack-compiler-2.9": "0.7.16",

export class AdminAction extends React.Component<any, any> {
  public statesDD = state_DD;
  public constructor(props: any, state: any) {
    super(props);
    this.state = {
      actionTaken:"NA",
      keyword:"",
      dateTime:"",
      comment:"",
      actionSteps_panel: false,
      uploadedDocumentManagement_panel: false,
      ainCoverLetterInformation_panel: false,
    };
  }

  public mina_HTML = () => {
    let _html = (
      <React.Fragment>
        <div className="col-md-12">
        <Paper elevation={3}  style={{ marginLeft: "15px" }}>
          <FormControl fullWidth>
              <ExpansionPanel
                expanded={this.state.actionSteps_panel === true}
                onChange={(e) => {
                  this.setState({
                    actionSteps_panel: !this.state.actionSteps_panel,
                  });
                }}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <h5 style={{color:"maroon", fontSize:"16px"}}>Action Steps</h5>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {this.actionSteps_HTML()}
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                expanded={this.state.uploadedDocumentManagement_panel === true}
                onChange={(e) => {
                  this.setState({
                    uploadedDocumentManagement_panel: !this.state
                      .uploadedDocumentManagement_panel,
                  });
                }}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <h5 style={{color:"maroon", fontSize:"16px"}}>Uploaded Document Management</h5>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {this.uploadDocument_HTML()}
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                expanded={this.state.ainCoverLetterInformation_panel === true}
                onChange={(e) => {
                  this.setState({
                    ainCoverLetterInformation_panel: !this.state
                      .ainCoverLetterInformation_panel,
                  });
                }}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <h5 style={{color:"maroon", fontSize:"16px"}}>AIN Cover Letter Information</h5>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {this.ainCoverLetter_HTML()}
                </ExpansionPanelDetails>
              </ExpansionPanel>
          </FormControl>
          </Paper>
        </div>
      </React.Fragment>
    );
    return _html;
  }

  public actionSteps_HTML = () => {
    let _html = (
      <React.Fragment>
        <div className="col-md-12">
          <FormControl fullWidth style={{ margin: "10px" }}>
            <InputLabel style={{ color: theme.themeSecondary }}>
              Action Taken
            </InputLabel>
            <Select
              fullWidth
              name="actionTaken"
              style={{ marginTop: "16px" }}
              value={this.state.actionTaken}
              onChange={(e) => {
                this.setState({
                  actionTaken: e.target.value,
                });
              }}
            >
              <MenuItem value="NA">-- Please Select --</MenuItem>
              <MenuItem value="401K Email Sent">401K Email Sent</MenuItem>
              <MenuItem value="AAF Mailed">AAF Mailed</MenuItem>
              <MenuItem value="Add Comment">Add Comment</MenuItem>
              <MenuItem value="After Care- Associate loss- follow up">
                After Care- Associate loss- follow up
              </MenuItem>
              <MenuItem value="After Care - Loss - Completed">
                After Care - Loss - Completed
              </MenuItem>
              <MenuItem value="After Care - Loss - Follow Up">
                After Care - Loss - Follow Up
              </MenuItem>
              <MenuItem value="Angel Wings">Angel Wings</MenuItem>
              <MenuItem value="AIN Board Decision Changed">
                AIN Board Decision Changed
              </MenuItem>
              <MenuItem value="AIN Fund Affadavit:Loss">
                AIN Fund Affadavit:Loss
              </MenuItem>
              <MenuItem value="AIN Fund Affadavit:Non Recpt">
                AIN Fund Affadavit:Non Recpt
              </MenuItem>
              <MenuItem value="AIN Fund App Board Letter">
                AIN Fund App Board Letter{" "}
              </MenuItem>
              <MenuItem value="AIN Fund App Mailed to Assoc">
                AIN Fund App Mailed to Assoc
              </MenuItem>
              <MenuItem value="AIN Fund App Received">
                AIN Fund App Received
              </MenuItem>
              <MenuItem value="AIN Fund No Future Assistance">
                AIN Fund No Future Assistance
              </MenuItem>
              <MenuItem value="AIN Fund Promise of Payment">
                AIN Fund Promise of Payment
              </MenuItem>
              <MenuItem value="AIN Fund Result Letter Sent">
                AIN Fund Result Letter Sent
              </MenuItem>
              <MenuItem value="AIN Fund Unable to Reach">
                AIN Fund Unable to Reach{" "}
              </MenuItem>
              <MenuItem value="Baby Goods">Baby Goods</MenuItem>
              <MenuItem value="Basket">Basket</MenuItem>
              <MenuItem value="Blanket">Blanket</MenuItem>
              <MenuItem value="Budget Assistance">Budget Assistance</MenuItem>
              <MenuItem value="Card">Card</MenuItem>
              <MenuItem value="E-Approval">E-Approval</MenuItem>
              <MenuItem value="E-mail">E-mail</MenuItem>
              <MenuItem value="ECCL Report Follow Up">
                ECCL Report Follow Up
              </MenuItem>
              <MenuItem value="Edible Arrangement">Edible Arrangement</MenuItem>
              <MenuItem value="Emergency">Emergency</MenuItem>
              <MenuItem value="Fax">Fax</MenuItem>
              <MenuItem value="Flower Confirmation Email Sent">
                Flower Confirmation Email Sent
              </MenuItem>
              <MenuItem value="Flowers">Flowers</MenuItem>
              <MenuItem value="Food Box">Food Box</MenuItem>
              <MenuItem value="Forfeit">Forfeit</MenuItem>
              <MenuItem value="Honeybaked Ham">Honeybaked Ham</MenuItem>
              <MenuItem value="Hotline">Hotline</MenuItem>
              <MenuItem value="Hurricane Florence">Hurricane Florence</MenuItem>
              <MenuItem value="Item Returned">Item Returned</MenuItem>
              <MenuItem value="Left Voice Mail Message">
                Left Voice Mail Message
              </MenuItem>
              <MenuItem value="Operation Brotherly Love">
                Operation Brotherly Love
              </MenuItem>
              <MenuItem value="Orlando Tragedy">Orlando Tragedy</MenuItem>
              <MenuItem value="Peco-Universal Services">
                Peco-Universal Services
              </MenuItem>
              <MenuItem value="Phone Call">Phone Call</MenuItem>
              <MenuItem value="Phone Number">Phone Number</MenuItem>
              <MenuItem value="Previous Assistance Received">
                Previous Assistance Received
              </MenuItem>
              <MenuItem value="Repeat Submission">Repeat Submission</MenuItem>
              <MenuItem value="Resolved">Resolved</MenuItem>
              <MenuItem value="Seasonal Address">Seasonal Address</MenuItem>
              <MenuItem value="Sympathy - Cat Book">
                Sympathy - Cat Book
              </MenuItem>
              <MenuItem value="Sympathy - Dog Book">
                Sympathy - Dog Book
              </MenuItem>
              <MenuItem value="Teddy Bear">Teddy Bear</MenuItem>
              <MenuItem value="Spoke to Associate">Spoke to Associate</MenuItem>
              <MenuItem value="Text Msg">Text Msg</MenuItem>
              <MenuItem value="Thank You">Thank You</MenuItem>
              <MenuItem value="Thanksgiving Mailed">
                Thanksgiving Mailed
              </MenuItem>
              <MenuItem value="TOY Jar">TOY Jar</MenuItem>
              <MenuItem value="Tracking">Tracking</MenuItem>
              <MenuItem value="Unlocked AIN Application">
                Unlocked AIN Application
              </MenuItem>
              <MenuItem value="Upload Additional Documents">
                Upload Additional Documents
              </MenuItem>
              <MenuItem value="Visited">Visited</MenuItem>
              <MenuItem value="Wawa Wellness">Wawa Wellness</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Keyword"
              onChange={(e) => {
                this.setState({
                  keyword: e.target.value,
                });
              }}
              name="keyword"
              value={this.state.keyword}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Date Time"
              onChange={(e) => {
                this.setState({
                  dateTime: e.target.value,
                });
              }}
              name="dateTime"
              value={this.state.dateTime}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <FormLabel
              style={{
                color: theme.themeSecondary,
              }}
            >
              Comment
            </FormLabel>
            <TextareaAutosize
              rows={6}
              rowsMax={6}
              onChange={(e) => {
                this.setState({
                  comment: e.target.value
                });
              }}
              name="comment"
              value={this.state.comment}
            />
          </FormControl>
        </div>
      </React.Fragment>
    );
    return _html;
  }

  public uploadDocument_HTML = () => {
    let _html = (
      <React.Fragment>
        <table className="table table-striped">
          <thead style={{border: "1px solid #f2f2f2"}}>
            <tr style={{background: "black", color: "white"}}>
              <th>#</th>
              <th>Document Title</th>
              <th>File Name</th>
              <th>Send To Board</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4}>There are no uploaded documents.</td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
    return _html;
  }

  public ainCoverLetter_HTML = () => {
    let _html = (
      <React.Fragment>
         <table className="table table-striped">
          <thead style={{border: "1px solid #f2f2f2"}}>
            <tr style={{background: "black", color: "white"}}>
              <th>#</th>
              <th>Salutation</th>
              <th>Body</th>
              <th>	Closing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4}>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
    return _html;
  }

  public render(): React.ReactElement<any> {
    return (
      <div className={styles.ainfunds} style={{ width: "99%" }}>
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
