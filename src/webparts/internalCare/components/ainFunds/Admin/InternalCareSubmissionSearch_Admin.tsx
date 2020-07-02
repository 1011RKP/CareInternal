import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  TablePagination,
} from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
//import { AdminAINBoardVote } from "../../AINBoardVote/AINBoardVote";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import * as moment from "moment";
import * as React from "react";
import { ITheme } from "spfx-js-theme";
import {
  BackButton,
  CustomTextField,
  NextButton,
  state_DD,
} from "../../common/Common";
import {
  faExternalLinkSquareAlt,
 } from "@fortawesome/free-solid-svg-icons";
import { getAssociateByPersonID, getSearchSubmissions,getMeetingDates } from "../../common/WawaHttpService";
import styles from "../AINFunds_Main.module.scss";
import Moment from "react-moment";
import * as _ from "lodash";
import { AdminInternalCareSubmission } from "./InternalCareSubmission_Admin";
import { AdminAINFundsMain } from "./AINFunds_MainAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const theme: ITheme = window.__themeState__.theme;
const data = [
  {
    SubmissionID: "160173",
    "Associate Person ID": "353849",
    "Associate First Name": "Jasmine a",
    "Associate Last Name": "Pollard",
    Status: "Waiting for Info",
    Advocate: "Kira Toner",
    "Submission Type": "AIN Fund Application",
    "Submitter Last Name": "Roman",
    "Date Time Created": new Date("6/1/2020"),
  },
  {
    SubmissionID: "168973",
    "Associate Person ID": "353059",
    "Associate First Name": "Roman",
    "Associate Last Name": "pAUL",
    Status: "Waiting for Info",
    Advocate: "Kira Toner",
    "Submission Type": "AIN Fund Application",
    "Submitter Last Name": "Jasmine",
    "Date Time Created": new Date("6/2/2020"),
  },
  {
    SubmissionID: "168191",
    "Associate Person ID": "453859",
    "Associate First Name": "Jack",
    "Associate Last Name": "Hovis",
    Status: "Waiting for Info",
    Advocate: "Kira Toner",
    "Submission Type": "AIN Fund Application",
    "Submitter Last Name": "Peat",
    "Date Time Created": new Date("6/2/2020"),
  },
  {
    SubmissionID: "268173",
    "Associate Person ID": "363859",
    "Associate First Name": "Eddy",
    "Associate Last Name": "Aristil",
    Status: "Waiting for Info",
    Advocate: "Kira Toner",
    "Submission Type": "AIN Fund Application",
    "Submitter Last Name": "Meen",
    "Date Time Created": new Date("6/3/2020"),
  },
  {
    SubmissionID: "968173",
    "Associate Person ID": "113859",
    "Associate First Name": "Peet",
    "Associate Last Name": "Pollerd",
    Status: "Waiting for Info",
    Advocate: "Kira Toner",
    "Submission Type": "AIN Fund Application",
    "Submitter Last Name": "Romain",
    "Date Time Created": new Date("6/4/2020"),
  },
  {
    SubmissionID: "168173",
    "Associate Person ID": "353859",
    "Associate First Name": "Jasmine",
    "Associate Last Name": "Pollard",
    Status: "Waiting for Info",
    Advocate: "Kira Toner",
    "Submission Type": "AIN Fund Application",
    "Submitter Last Name": "Roman",
    "Date Time Created": new Date("6/5/2020"),
  },
  {
    SubmissionID: "168173",
    "Associate Person ID": "353859",
    "Associate First Name": "Jasmine",
    "Associate Last Name": "Pollard",
    Status: "Waiting for Info",
    Advocate: "Kira Toner",
    "Submission Type": "AIN Fund Application",
    "Submitter Last Name": "Roman",
    "Date Time Created": new Date("6/6/2020"),
  },
  {
    SubmissionID: "168173",
    "Associate Person ID": "353859",
    "Associate First Name": "Jasmine",
    "Associate Last Name": "Pollard",
    Status: "Waiting for Info",
    Advocate: "Kira Toner",
    "Submission Type": "AIN Fund Application",
    "Submitter Last Name": "Roman",
    "Date Time Created": new Date("6/7/2020"),
  },
  {
    SubmissionID: "168173",
    "Associate Person ID": "353859",
    "Associate First Name": "Jasmine",
    "Associate Last Name": "Pollard",
    Status: "Waiting for Info",
    Advocate: "Kira Toner",
    "Submission Type": "AIN Fund Application",
    "Submitter Last Name": "Roman",
    "Date Time Created": new Date("6/8/2020"),
  },
  {
    SubmissionID: "168173",
    "Associate Person ID": "353859",
    "Associate First Name": "Jasmine",
    "Associate Last Name": "Pollard",
    Status: "Waiting for Info",
    Advocate: "Kira Toner",
    "Submission Type": "AIN Fund Application",
    "Submitter Last Name": "Roman",
    "Date Time Created": new Date("6/9/2020"),
  },
  {
    SubmissionID: "168173",
    "Associate Person ID": "353859",
    "Associate First Name": "Jasmine",
    "Associate Last Name": "Pollard",
    Status: "Waiting for Info",
    Advocate: "Kira Toner",
    "Submission Type": "AIN Fund Application",
    "Submitter Last Name": "Roman",
    "Date Time Created": new Date("6/10/2020"),
  },
  {
    SubmissionID: "168173",
    "Associate Person ID": "353859",
    "Associate First Name": "Jasmine",
    "Associate Last Name": "Pollard",
    Status: "Waiting for Info",
    Advocate: "Kira Toner",
    "Submission Type": "AIN Fund Application",
    "Submitter Last Name": "Roman",
    "Date Time Created": new Date("6/11/2020"),
  },
  {
    SubmissionID: "168173",
    "Associate Person ID": "353859",
    "Associate First Name": "Jasmine",
    "Associate Last Name": "Pollard",
    Status: "Waiting for Info",
    Advocate: "Kira Toner",
    "Submission Type": "AIN Fund Application",
    "Submitter Last Name": "Roman",
    "Date Time Created": new Date("6/12/2020"),
  },
]

export class InternalCareSubmissionSearch extends React.Component<any, any> {
  public statesDD = state_DD;
  public constructor(props: any, state: any) {
    super(props);
    this.state = {
      context: this.props.properties.context,
      submitterFirstName: "",
      submitterLastName: "",
      submitterLocation: "",
      submitterID: "",
      submitterSummary: "",
      associateFirstName: "",
      associateLastName: "",
      associateLocation: "",
      associateID: "",
      associateRegion: "NA",
      action: "NA",
      keyword: "",
      status: "88",
      confidential: "NA",
      submissionType: "NA",
      assignedtoAdvocate: "NA",
      fromDate: "",
      toDate: "",

      searchResults: [],
      searchGrid_Condition: false,
      page: 0,
      rowsPerPage: 10,

      submissionID_flag: "NA",
      associatePersonID_flag:"NA",
      associateFirstName_flag:"NA",
      associateLastName_flag:"NA",
      status_flag:"NA",
      advocate_flag: "NA",
      submissionType_flag:"NA",
      submitterLastName_flag:"NA",
      dateTimeCreated_flag:"NA",
    };
  }

  public componentDidMount() {
    getAssociateByPersonID(this.state.context, null).then((e)=>{
      console.log(e);
    });
    getSearchSubmissions(this.state.context, null).then((e) => {
      this.setState({ searchResults: e.Table }, () => {
        console.log(this.state.searchResults);
      });
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
  }

  public searchSubmission_HTML = () => {
    let _html = (
      <React.Fragment>
        <div className="col-md-6">
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Submitter First Name"
              onChange={(e) => {
                this.setState({
                  submitterFirstName: e.target.value,
                });
              }}
              name="submitterFirstName"
              value={this.state.submitterFirstName}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Submitter Last Name"
              onChange={(e) => {
                this.setState({
                  submitterLastName: e.target.value,
                });
              }}
              name="submitterLastName"
              value={this.state.submitterLastName}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Submitter Location"
              onChange={(e) => {
                this.setState({
                  submitterLocation: e.target.value,
                });
              }}
              name="submitterLocation"
              value={this.state.submitterLocation}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Submitter ID"
              onChange={(e) => {
                this.setState({
                  submitterID: e.target.value,
                });
              }}
              name="submitterID"
              value={this.state.submitterID}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Submitter Summary"
              onChange={(e) => {
                this.setState({
                  submitterSummary: e.target.value,
                });
              }}
              name="submitterSummary"
              value={this.state.submitterSummary}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Associate First Name"
              onChange={(e) => {
                this.setState({
                  associateFirstName: e.target.value,
                });
              }}
              name="associateFirstName"
              value={this.state.associateFirstName}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Associate Last Name"
              onChange={(e) => {
                this.setState({
                  associateLastName: e.target.value,
                });
              }}
              name="associateLastName"
              value={this.state.associateLastName}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Associate Location"
              onChange={(e) => {
                this.setState({
                  associateLocation: e.target.value,
                });
              }}
              name="associateLocation"
              value={this.state.associateLocation}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <InputLabel style={{ color: theme.themeSecondary }}>
              Associate Region
            </InputLabel>
            <Select
              fullWidth
              name="associateRegion"
              style={{ marginTop: "16px" }}
              value={this.state.associateRegion}
              onChange={(e) => {
                this.setState({
                  associateRegion: e.target.value,
                });
              }}
            >
              <MenuItem value="NA">-- Please Select --</MenuItem>
              <MenuItem value="Corporate">Corporate</MenuItem>
              <MenuItem value="REG00001">
                Region 01 (Jason Read (286688))
              </MenuItem>
              <MenuItem value="REG00002">
                Region 02 (Gina DePaolo (8411))
              </MenuItem>
              <MenuItem value="REG00003">
                Region 03 (Marc Maiolino (37066))
              </MenuItem>
              <MenuItem value="REG00004">
                Region 04 (Rebecca Altemus (3795))
              </MenuItem>
              <MenuItem value="REG00005">
                Region 05 (Marian Weiser (19026))
              </MenuItem>
              <MenuItem value="REG00006">
                Region 06 (Amanda Wynne (42608))
              </MenuItem>
              <MenuItem value="REG00007">
                Region 07 (Robert Yeatts (322571))
              </MenuItem>
              <MenuItem value="REG00009">
                Region 09 (David Filano (36666))
              </MenuItem>
              <MenuItem value="REG00010">
                Region 10 (Steven Hasher (13818))
              </MenuItem>
              <MenuItem value="REG00011">
                Region 11 (David Prevost (107578))
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="col-md-6">
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="Associate ID"
              onChange={(e) => {
                this.setState({
                  associateID: e.target.value,
                });
              }}
              name="associateID"
              value={this.state.associateID}
            />
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <InputLabel style={{ color: theme.themeSecondary }}>
              Action
            </InputLabel>
            <Select
              fullWidth
              name="action"
              style={{ marginTop: "16px" }}
              value={this.state.action}
              onChange={(e) => {
                this.setState({
                  action: e.target.value,
                });
              }}
            >
              <MenuItem value="NA">-- Please Select --</MenuItem>
              <MenuItem value="62">401K Email Sent</MenuItem>
              <MenuItem value="102">AAF Mailed</MenuItem>
              <MenuItem value="42">Add Comment</MenuItem>
              <MenuItem value="118">
                After Care- Associate loss- follow up
              </MenuItem>
              <MenuItem value="50">After Care - Loss - Completed</MenuItem>
              <MenuItem value="47">After Care - Loss - Follow Up</MenuItem>
              <MenuItem value="123">Angel Wings</MenuItem>
              <MenuItem value="107">AIN Board Decision Changed</MenuItem>
              <MenuItem value="111">AIN Fund Affadavit:Loss</MenuItem>
              <MenuItem value="110">AIN Fund Affadavit:Non Recpt</MenuItem>
              <MenuItem value="75">AIN Fund App Board Letter </MenuItem>
              <MenuItem value="69">AIN Fund App Mailed to Assoc</MenuItem>
              <MenuItem value="67">AIN Fund App Received</MenuItem>
              <MenuItem value="73">AIN Fund No Future Assistance</MenuItem>
              <MenuItem value="74">AIN Fund Promise of Payment</MenuItem>
              <MenuItem value="90">AIN Fund Result Letter Sent</MenuItem>
              <MenuItem value="82">AIN Fund Unable to Reach </MenuItem>
              <MenuItem value="40">Baby Goods</MenuItem>
              <MenuItem value="8">Basket</MenuItem>
              <MenuItem value="38">Blanket</MenuItem>
              <MenuItem value="65">Budget Assistance</MenuItem>
              <MenuItem value="3">Card</MenuItem>
              <MenuItem value="100">E-Approval</MenuItem>
              <MenuItem value="10">E-mail</MenuItem>
              <MenuItem value="66">ECCL Report Follow Up</MenuItem>
              <MenuItem value="117">Edible Arrangement</MenuItem>
              <MenuItem value="77">Emergency</MenuItem>
              <MenuItem value="95">Fax</MenuItem>
              <MenuItem value="61">Flower Confirmation Email Sent</MenuItem>
              <MenuItem value="4">Flowers</MenuItem>
              <MenuItem value="80">Food Box</MenuItem>
              <MenuItem value="70">Forfeit</MenuItem>
              <MenuItem value="116">Honeybaked Ham</MenuItem>
              <MenuItem value="76">Hotline</MenuItem>
              <MenuItem value="119">Hurricane Florence</MenuItem>
              <MenuItem value="112">Item Returned</MenuItem>
              <MenuItem value="18">Left Voice Mail Message</MenuItem>
              <MenuItem value="109">Operation Brotherly Love</MenuItem>
              <MenuItem value="106">Orlando Tragedy</MenuItem>
              <MenuItem value="85">Peco-Universal Services</MenuItem>
              <MenuItem value="2">Phone Call</MenuItem>
              <MenuItem value="86">Phone Number</MenuItem>
              <MenuItem value="72">Previous Assistance Received</MenuItem>
              <MenuItem value="71">Repeat Submission</MenuItem>
              <MenuItem value="32">Resolved</MenuItem>
              <MenuItem value="103">Seasonal Address</MenuItem>
              <MenuItem value="121">Sympathy - Cat Book</MenuItem>
              <MenuItem value="120">Sympathy - Dog Book</MenuItem>
              <MenuItem value="122">Teddy Bear</MenuItem>
              <MenuItem value="17">Spoke to Associate</MenuItem>
              <MenuItem value="81">Text Msg</MenuItem>
              <MenuItem value="91">Thank You</MenuItem>
              <MenuItem value="101">Thanksgiving Mailed</MenuItem>
              <MenuItem value="108">TOY Jar</MenuItem>
              <MenuItem value="113">Tracking</MenuItem>
              <MenuItem value="97">Unlocked AIN Application</MenuItem>
              <MenuItem value="99">Upload Additional Documents</MenuItem>
              <MenuItem value="78">Visited</MenuItem>
              <MenuItem value="87">Wawa Wellness</MenuItem>
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
            <InputLabel style={{ color: theme.themeSecondary }}>
              Status
            </InputLabel>
            <Select
              fullWidth
              name="status"
              style={{ marginTop: "16px" }}
              value={this.state.status}
              onChange={(e) => {
                this.setState({
                  status: e.target.value,
                });
              }}
            >
              <MenuItem value="88">All except Resolved</MenuItem>
              <MenuItem value="99">All including Resolved</MenuItem>
              <MenuItem value="9">Baby Goods Needed</MenuItem>
              <MenuItem value="17">Blanket Needed</MenuItem>
              <MenuItem value="14">Card Needed</MenuItem>
              <MenuItem value="8">Flowers Needed</MenuItem>
              <MenuItem value="19">Denied AIN</MenuItem>
              <MenuItem value="6">Forfeit</MenuItem>
              <MenuItem value="15">Gift Card Needed</MenuItem>
              <MenuItem value="3">In Progress</MenuItem>
              <MenuItem value="18">Info Received</MenuItem>
              <MenuItem value="11">Left VM</MenuItem>
              <MenuItem value="1">New</MenuItem>
              <MenuItem value="2">On hold</MenuItem>
              <MenuItem value="4">Pending</MenuItem>
              <MenuItem value="13">Prepare for Meeting</MenuItem>
              <MenuItem value="5">Resolved</MenuItem>
              <MenuItem value="7">Sent to Board</MenuItem>
              <MenuItem value="12">Spoke to Assoc</MenuItem>
              <MenuItem value="16">Unable to Reach</MenuItem>
              <MenuItem value="20">Uncertain</MenuItem>
              <MenuItem value="10">Waiting for Info</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <InputLabel style={{ color: theme.themeSecondary }}>
              Confidential
            </InputLabel>
            <Select
              fullWidth
              name="confidential"
              style={{ marginTop: "16px" }}
              value={this.state.confidential}
              onChange={(e) => {
                this.setState({
                  confidential: e.target.value,
                });
              }}
            >
              <MenuItem value="NA">-- Please Select --</MenuItem>
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <InputLabel style={{ color: theme.themeSecondary }}>
              Submission Type
            </InputLabel>
            <Select
              fullWidth
              name="submissionType"
              style={{ marginTop: "16px" }}
              value={this.state.submissionType}
              onChange={(e) => {
                this.setState({
                  submissionType: e.target.value,
                });
              }}
            >
              <MenuItem value="NA">-- Please Select --</MenuItem>
              <MenuItem value="24">AIN Fund Application</MenuItem>
              <MenuItem value="3">
                Crisis (Accident, Major Catastrophe)
              </MenuItem>
              <MenuItem value="13">Engagement</MenuItem>
              <MenuItem value="1">General Care and Concern</MenuItem>
              <MenuItem value="8">Graduation</MenuItem>
              <MenuItem value="4">
                Health (Trauma, Surgery, Serious Illness)
              </MenuItem>
              <MenuItem value="18">Military</MenuItem>
              <MenuItem value="27">New Home Owner</MenuItem>
              <MenuItem value="14">New Birth or AdMenuItem</MenuItem>
              <MenuItem value="2">Personal or Family</MenuItem>
              <MenuItem value="5">Sympathy and/or Funeral</MenuItem>
              <MenuItem value="12">Wedding</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <InputLabel style={{ color: theme.themeSecondary }}>
              Assigned to Advocate
            </InputLabel>
            <Select
              fullWidth
              name="assignedtoAdvocate"
              style={{ marginTop: "16px" }}
              value={this.state.assignedtoAdvocate}
              onChange={(e) => {
                this.setState({
                  assignedtoAdvocate: e.target.value,
                });
              }}
            >
              <MenuItem value="NA">-- Please Select --</MenuItem>
              <MenuItem value="198031">Manjit Jagtap</MenuItem>
              <MenuItem value="325004">Ratna Paleru</MenuItem>
              <MenuItem value="319556">Jack Hovis</MenuItem>
              <MenuItem value="888889">Adopt a Family</MenuItem>
              <MenuItem value="888887">AIN Approval Needed</MenuItem>
              <MenuItem value="777777">Birthday Cards</MenuItem>
              <MenuItem value="154264">Anna Burnside</MenuItem>
              <MenuItem value="36566">Patti Carrow</MenuItem>
              <MenuItem value="21089">Tom DiStefano</MenuItem>
              <MenuItem value="70695">Danielle Dortone</MenuItem>
              <MenuItem value="36793">Barbara Ennis</MenuItem>
              <MenuItem value="1">Case Unassigned</MenuItem>
              <MenuItem value="125766">John Gardener</MenuItem>
              <MenuItem value="36988">Mandy Lain</MenuItem>
              <MenuItem value="36950">Pat Lofland</MenuItem>
              <MenuItem value="300321">Nicole Smith</MenuItem>
              <MenuItem value="63317">Kristen Stauffer</MenuItem>
              <MenuItem value="213616">Kira Toner</MenuItem>
              <MenuItem value="37257">Marlyn Watson</MenuItem>
              <MenuItem value="189956">Tom McNeill</MenuItem>
              <MenuItem value="288481">Eric Marchetti</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth style={{ margin: "10px" }}>
            <CustomTextField
              label="From Date"
              name="fromDate"
              value={this.state.fromDate}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EventIcon
                      className={styles.eventIconStyles}
                      // onClick={e => {
                      //   this.setState({
                      //     calendarDialog: true,
                      //     calendarInput: "fromDate"
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
              label="To Date"
              name="toDate"
              value={this.state.toDate}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EventIcon
                      className={styles.eventIconStyles}
                      // onClick={e => {
                      //   this.setState({
                      //     calendarDialog: true,
                      //     calendarInput: "toDate"
                      //   });
                      // }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </div>
        <div
          className="col-md-12"
          style={{ margin: "auto", textAlign: "center" }}
        >
          <BackButton
            style={{ marginRight: "5px" }}
            onClick={(e) => {
              this.setState({
                submitterFirstName: "",
                submitterLastName: "",
                submitterLocation: "",
                submitterID: "",
                submitterSummary: "",
                associateFirstName: "",
                associateLastName: "",
                associateLocation: "",
                associateID: "",
                associateRegion: "NA",
                keyword: "",
                status: "88",
                confidential: "NA",
                submissionType: "NA",
                assignedtoAdvocate: "NA",
                fromDate: "",
                toDate: "",
              });
            }}
          >
            <HighlightOffIcon style={{ paddingRight: "5px" }} /> Clear
          </BackButton>
          <NextButton
            onClick={(e) => {
              this.setState({
                searchGrid_Condition: true,
              });
            }}
          >
            <SearchIcon style={{ paddingRight: "5px" }} /> Search
          </NextButton>
        </div>
      </React.Fragment>
    );
    return _html;
  }

  public searchGrid_Table = () => {
    let _html = (
      <React.Fragment>
        <br />
        <br />
        <Table style={{ border: "1px solid #e0e0e0" }}>
          {/* <colgroup>
            {this.state.isOptionsExist.length !== 0 ? (
              <React.Fragment>
                <col width="60%" />
                <col width="20%" />
                <col width="20%" />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <col width="55%" />
                <col width="15%" />
                <col width="15%" />
                <col width="15%" />
              </React.Fragment>
            )}
          </colgroup> */}
          <TableHead style={{ background: "#e0e0e0" }}>
            <TableRow>
              <TableCell>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    if (
                      this.state.submissionID_flag === "asc" ||
                      this.state.submissionID_flag === "NA"
                    ) {
                      let col = this.state.searchResults;
                      let sortCol = _.orderBy(col, ["SubmissionID"], "asc");
                      this.setState({
                        searchResults: sortCol,
                        submissionID_flag: "desc",
                      });
                    } else {
                      let col = this.state.searchResults;
                      let sortCol = _.orderBy(col, ["SubmissionID"], "desc");
                      this.setState({
                        searchResults: sortCol,
                        submissionID_flag: "asc",
                      });
                    }
                  }}
                >
                  {this.state.submissionID_flag === "asc" ? (
                    <ArrowDownwardIcon />
                  ) : null}
                  {this.state.submissionID_flag === "desc" ? (
                    <ArrowUpwardIcon />
                  ) : null}
                  Submission ID
                </a>
              </TableCell>
              <TableCell align="center">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    if (
                      this.state.associatePersonID_flag === "asc" ||
                      this.state.associatePersonID_flag === "NA"
                    ) {
                      let col = this.state.searchResults;
                      let sortCol = _.orderBy(
                        col,
                        ["PersonIDRecipient"],
                        "asc"
                      );
                      this.setState({
                        searchResults: sortCol,
                        associatePersonID_flag: "desc",
                      });
                    } else {
                      let col = this.state.searchResults;
                      let sortCol = _.orderBy(
                        col,
                        ["PersonIDRecipient"],
                        "desc"
                      );
                      this.setState({
                        searchResults: sortCol,
                        associatePersonID_flag: "asc",
                      });
                    }
                  }}
                >
                  {this.state.associatePersonID_flag === "asc" ? (
                    <ArrowDownwardIcon />
                  ) : null}
                  {this.state.associatePersonID_flag === "desc" ? (
                    <ArrowUpwardIcon />
                  ) : null}
                  Associate Person ID
                </a>
              </TableCell>
              <TableCell align="center">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    if (
                      this.state.associateFirstName_flag === "asc" ||
                      this.state.associateFirstName_flag === "NA"
                    ) {
                      let col = this.state.searchResults;
                      let sortCol = _.orderBy(
                        col,
                        ["FirstNameRecipient"],
                        "asc"
                      );
                      this.setState({
                        searchResults: sortCol,
                        associateFirstName_flag: "desc",
                      });
                    } else {
                      let col = this.state.searchResults;
                      let sortCol = _.orderBy(
                        col,
                        ["FirstNameRecipient"],
                        "desc"
                      );
                      this.setState({
                        searchResults: sortCol,
                        associateFirstName_flag: "asc",
                      });
                    }
                  }}
                >
                  {this.state.associateFirstName_flag === "asc" ? (
                    <ArrowDownwardIcon />
                  ) : null}
                  {this.state.associateFirstName_flag === "desc" ? (
                    <ArrowUpwardIcon />
                  ) : null}
                  Associate First Name
                </a>
              </TableCell>
              <TableCell align="center">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    if (
                      this.state.associateLastName_flag === "asc" ||
                      this.state.associateLastName_flag === "NA"
                    ) {
                      let col = this.state.searchResults;
                      let sortCol = _.orderBy(
                        col,
                        ["LastNameRecipient"],
                        "asc"
                      );
                      this.setState({
                        searchResults: sortCol,
                        associateLastName_flag: "desc",
                      });
                    } else {
                      let col = this.state.searchResults;
                      let sortCol = _.orderBy(
                        col,
                        ["LastNameRecipient"],
                        "desc"
                      );
                      this.setState({
                        searchResults: sortCol,
                        associateLastName_flag: "asc",
                      });
                    }
                  }}
                >
                  {this.state.associateLastName_flag === "asc" ? (
                    <ArrowDownwardIcon />
                  ) : null}
                  {this.state.associateLastName_flag === "desc" ? (
                    <ArrowUpwardIcon />
                  ) : null}
                  Associate Last Name
                </a>
              </TableCell>
              <TableCell align="center">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    if (
                      this.state.status_flag === "asc" ||
                      this.state.status_flag === "NA"
                    ) {
                      let col = this.state.searchResults;
                      let sortCol = _.orderBy(
                        col,
                        ["ReviewStatusTypeDescription"],
                        "asc"
                      );
                      this.setState({
                        searchResults: sortCol,
                        status_flag: "desc",
                      });
                    } else {
                      let col = this.state.searchResults;
                      let sortCol = _.orderBy(
                        col,
                        ["ReviewStatusTypeDescription"],
                        "desc"
                      );
                      this.setState({
                        searchResults: sortCol,
                        status_flag: "asc",
                      });
                    }
                  }}
                >
                  {this.state.status_flag === "asc" ? (
                    <ArrowDownwardIcon />
                  ) : null}
                  {this.state.status_flag === "desc" ? (
                    <ArrowUpwardIcon />
                  ) : null}
                  Status
                </a>
              </TableCell>
              <TableCell align="center">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    if (
                      this.state.advocate_flag === "asc" ||
                      this.state.advocate_flag === "NA"
                    ) {
                      let col = this.state.searchResults;
                      let sortCol = _.orderBy(col, ["LastNameAdvocate"], "asc");
                      this.setState({
                        searchResults: sortCol,
                        advocate_flag: "desc",
                      });
                    } else {
                      let col = this.state.searchResults;
                      let sortCol = _.orderBy(
                        col,
                        ["LastNameAdvocate"],
                        "desc"
                      );
                      this.setState({
                        searchResults: sortCol,
                        advocate_flag: "asc",
                      });
                    }
                  }}
                >
                  {this.state.advocate_flag === "asc" ? (
                    <ArrowDownwardIcon />
                  ) : null}
                  {this.state.advocate_flag === "desc" ? (
                    <ArrowUpwardIcon />
                  ) : null}
                  Advocate
                </a>
              </TableCell>
              <TableCell align="center">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    if (
                      this.state.submissionType_flag === "asc" ||
                      this.state.submissionType_flag === "NA"
                    ) {
                      let col = this.state.searchResults;
                      let sortCol = _.orderBy(
                        col,
                        ["SubmissionTypeDescription"],
                        "asc"
                      );
                      this.setState({
                        searchResults: sortCol,
                        submissionType_flag: "desc",
                      });
                    } else {
                      let col = this.state.searchResults;
                      let sortCol = _.orderBy(
                        col,
                        ["SubmissionTypeDescription"],
                        "desc"
                      );
                      this.setState({
                        searchResults: sortCol,
                        submissionType_flag: "asc",
                      });
                    }
                  }}
                >
                  {this.state.submissionType_flag === "asc" ? (
                    <ArrowDownwardIcon />
                  ) : null}
                  {this.state.submissionType_flag === "desc" ? (
                    <ArrowUpwardIcon />
                  ) : null}
                  Submission Type
                </a>
              </TableCell>
              <TableCell align="center">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    if (
                      this.state.submitterLastName_flag === "asc" ||
                      this.state.submitterLastName_flag === "NA"
                    ) {
                      let col = this.state.searchResults;
                      let sortCol = _.orderBy(col, ["LastNameSender"], "asc");
                      this.setState({
                        searchResults: sortCol,
                        submitterLastName_flag: "desc",
                      });
                    } else {
                      let col = this.state.searchResults;
                      let sortCol = _.orderBy(col, ["LastNameSender"], "desc");
                      this.setState({
                        searchResults: sortCol,
                        submitterLastName_flag: "asc",
                      });
                    }
                  }}
                >
                  {this.state.submitterLastName_flag === "asc" ? (
                    <ArrowDownwardIcon />
                  ) : null}
                  {this.state.submitterLastName_flag === "desc" ? (
                    <ArrowUpwardIcon />
                  ) : null}
                  Submitter Last Name
                </a>
              </TableCell>
              <TableCell align="center">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    if (
                      this.state.dateTimeCreated_flag === "asc" ||
                      this.state.dateTimeCreated_flag === "NA"
                    ) {
                      let col = this.state.searchResults;
                      let sortCol = _.orderBy(col, ["CreatedDateTime"], "asc");
                      this.setState({
                        searchResults: sortCol,
                        dateTimeCreated_flag: "desc",
                      });
                    } else {
                      let col = this.state.searchResults;
                      let sortCol = _.orderBy(col, ["CreatedDateTime"], "desc");
                      this.setState({
                        searchResults: sortCol,
                        dateTimeCreated_flag: "asc",
                      });
                    }
                  }}
                >
                  {this.state.dateTimeCreated_flag === "asc" ? (
                    <ArrowDownwardIcon />
                  ) : null}
                  {this.state.dateTimeCreated_flag === "desc" ? (
                    <ArrowUpwardIcon />
                  ) : null}
                  Date Time Created
                </a>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(this.state.rowsPerPage > 0
              ? this.state.searchResults.slice(
                  this.state.page * this.state.rowsPerPage,
                  this.state.page * this.state.rowsPerPage +
                    this.state.rowsPerPage
                )
              : this.state.searchResults
            ).map((d, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  <Link
                    style={{
                      color: "maroon",
                      cursor: "pointer",
                      padding: "5px;",
                    }}
                    to={`/internalCareSubmission/${d.SubmissionID}`}
                    target={"_blank"}
                  >
                    <FontAwesomeIcon
                      style={{ marginBottom: "2px", marginRight: "2px" }}
                      icon={faExternalLinkSquareAlt}
                    />
                    {d["SubmissionID"]}
                  </Link>
                </TableCell>
                <TableCell align="center">{d["PersonIDRecipient"]}</TableCell>
                <TableCell align="center">{d["FirstNameRecipient"]}</TableCell>
                <TableCell align="center">{d["LastNameRecipient"]}</TableCell>
                <TableCell align="center">
                  {d["ReviewStatusTypeDescription"]}
                </TableCell>
                <TableCell align="center">{d["LastNameAdvocate"]}</TableCell>
                <TableCell align="center">
                  {d["SubmissionTypeDescription"] === "AIN Fund Application" ? (
                    <React.Fragment>
                      <Link
                        style={{
                          color: "maroon",
                          cursor: "pointer",
                          padding: "5px;",
                        }}
                        to={`/aINFundAdmin/${d.SubmissionID}`}
                        target={"_blank"}
                      >
                        <FontAwesomeIcon
                          style={{ marginBottom: "2px", marginRight: "2px" }}
                          icon={faExternalLinkSquareAlt}
                        />
                        {d["SubmissionTypeDescription"]}
                      </Link>
                    </React.Fragment>
                  ) : (
                    d["SubmissionTypeDescription"]
                  )}
                </TableCell>
                <TableCell align="center">{d["LastNameSender"]}</TableCell>
                <TableCell align="center">
                  <Moment format="MM/DD/YYYY">{d["CreatedDateTime"]}</Moment>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, { label: "All", value: -1 }]}
                colSpan={9}
                count={this.state.searchResults.length}
                rowsPerPage={this.state.rowsPerPage}
                page={this.state.page}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </React.Fragment>
    );
    return _html;
  }

  // public callParent = (e) => {
  //   this.props.properties.calledfromChild(e);
  // }

  public directCall = (e) => {
    this.props.properties.directCall(e);
  }

  public handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    this.setState({
      page: newPage
    });
  }

  public handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    this.setState({
      rowsPerPage: parseInt(event.target.value)
    });
  }

  public render(): React.ReactElement<any> {
    return (
      <div className={styles.ainfunds}>
        {/* <div
          className={`${theme.neutralPrimary} row`}
          style={{ padding: "15px", background: "#d9d9d6" }}
        >
          <h4 style={{ color: theme.black }}> AIN Funds for Admins</h4>
        </div> */}
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
              borderTop: "1px solid white",
            }}
          >
            <h5>Search Submission</h5>
          </div>
        </div>
        <Router>
          <div className="row" style={{ padding: "5px" }}>
            {this.searchSubmission_HTML()}
          </div>
          <div className="row">
            <React.Fragment>
              {this.state.searchGrid_Condition !== false ? (
                <React.Fragment>{this.searchGrid_Table()}</React.Fragment>
              ) : null}
            </React.Fragment>
          </div>
          <Switch>
            <Route
              exact
              path="/internalCareSubmission/:submissionID"
              render={(props) => (
                <AdminInternalCareSubmission
                  properties={{
                    context: this.state.context,
                  }}
                />
              )}
            />
             <Route
              exact
              path="/aINFundAdmin/:submissionID"
              render={(props) => (
                <AdminAINFundsMain
                  properties={{
                    context: this.state.context,
                  }}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
