import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import BlockIcon from "@material-ui/icons/Block";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import * as React from "react";
import { ITheme } from "spfx-js-theme";
import {
  BackButton,
  CustomTextField,
  ErrorButton,
  NextButton,
  state_DD,
  SucessButton,
} from "../common/Common";
import styles from "./AINBoardVote.module.scss";
import AssessmentIcon from '@material-ui/icons/Assessment';
import { getMeetingDates,getAINBoardReviewCases } from "../common/WawaHttpService";

const theme: ITheme = window.__themeState__.theme;
const data = [
  {
    "Submission ID": "160173",
    "Person ID": "353849",
    "First Name": "Jasmine a",
    "Last Name": "Pollard",
    Payee: "Sample User",
    "Amount Requested": "1150",
    Vote: "AIN Fund Application",
    "Amount Approved": "Roman",
    Comment: "",
  },
  {
    "Submission ID": "168973",
    "Person ID": "353059",
    "First Name": "Roman",
    "Last Name": "pAUL",
    Payee: "Sample User",
    "Amount Requested": "1150",
    Vote: "AIN Fund Application",
    "Amount Approved": "Jasmine",
    Comment: "",
  },
  {
    "Submission ID": "168191",
    "Person ID": "453859",
    "First Name": "Jack",
    "Last Name": "Hovis",
    Payee: "Sample User",
    "Amount Requested": "1150",
    Vote: "AIN Fund Application",
    "Amount Approved": "Peat",
    Comment: "",
  },
  {
    "Submission ID": "268173",
    "Person ID": "363859",
    "First Name": "Eddy",
    "Last Name": "Aristil",
    Payee: "Sample User",
    "Amount Requested": "1150",
    Vote: "AIN Fund Application",
    "Amount Approved": "Meen",
    Comment: "",
  },
  {
    "Submission ID": "968173",
    "Person ID": "113859",
    "First Name": "Peet",
    "Last Name": "Pollerd",
    Payee: "Sample User",
    "Amount Requested": "1150",
    Vote: "AIN Fund Application",
    "Amount Approved": "Romain",
    Comment: "",
  },
  {
    "Submission ID": "168173",
    "Person ID": "353859",
    "First Name": "Jasmine",
    "Last Name": "Pollard",
    Payee: "Sample User",
    "Amount Requested": "1150",
    Vote: "AIN Fund Application",
    "Amount Approved": "Roman",
    Comment: "",
  },
  {
    "Submission ID": "168173",
    "Person ID": "353859",
    "First Name": "Jasmine",
    "Last Name": "Pollard",
    Payee: "Sample User",
    "Amount Requested": "1150",
    Vote: "AIN Fund Application",
    "Amount Approved": "Roman",
    Comment: "",
  },
  {
    "Submission ID": "168173",
    "Person ID": "353859",
    "First Name": "Jasmine",
    "Last Name": "Pollard",
    Payee: "Sample User",
    "Amount Requested": "1150",
    Vote: "AIN Fund Application",
    "Amount Approved": "Roman",
    Comment: "",
  },
  {
    "Submission ID": "168173",
    "Person ID": "353859",
    "First Name": "Jasmine",
    "Last Name": "Pollard",
    Payee: "Sample User",
    "Amount Requested": "1150",
    Vote: "AIN Fund Application",
    "Amount Approved": "Roman",
    Comment: "",
  },
  {
    "Submission ID": "168173",
    "Person ID": "353859",
    "First Name": "Jasmine",
    "Last Name": "Pollard",
    Payee: "Sample User",
    "Amount Requested": "1150",
    Vote: "AIN Fund Application",
    "Amount Approved": "Roman",
    Comment: "",
  },
  {
    "Submission ID": "168173",
    "Person ID": "353859",
    "First Name": "Jasmine",
    "Last Name": "Pollard",
    Payee: "Sample User",
    "Amount Requested": "1150",
    Vote: "AIN Fund Application",
    "Amount Approved": "Roman",
    Comment: "",
  },
  {
    "Submission ID": "168173",
    "Person ID": "353859",
    "First Name": "Jasmine",
    "Last Name": "Pollard",
    Payee: "Sample User",
    "Amount Requested": "1150",
    Vote: "AIN Fund Application",
    "Amount Approved": "Roman",
    Comment: "",
  },
  {
    "Submission ID": "168173",
    "Person ID": "353859",
    "First Name": "Jasmine",
    "Last Name": "Pollard",
    Payee: "Sample User",
    "Amount Requested": "1150",
    Vote: "AIN Fund Application",
    "Amount Approved": "Roman",
    Comment: "",
  },
];

export class AINBoardVote extends React.Component<any, any> {
  public statesDD = state_DD;
  public constructor(props: any, state: any) {
    super(props);
    this.state = {
      context:this.props.properties.context,
      ainBoardPersonID:this.props.properties.ainBoardPersonID,
      modelOpen_flag: false,
      page: 0,
      rowsPerPage: 20,
      employees: [],
      anchorEl: false,
      onShowContextualMenu: false,
      curid_flag: null,
      comment: "",
      amountApproved: "",
      vote: "NA",
      boardMeetingDate:"NA",
      boardMeetingData:[],
      AINBoardMeetingID:"",
      onSelectedID:[]
    };
  }

  public componentDidMount() {
    console.log(this.state.ainBoardPersonID);
    getMeetingDates(this.state.context).then((e) => {
     this.setState({
      boardMeetingData:e.Table
     })
    });
  }

  public gridTable_HTML = () => {
    let _html = (
      <React.Fragment>
        {this.state.employees.length > 0 ? (
          <React.Fragment>
            <Table style={{ border: "1px solid #e0e0e0" }}>
              <TableHead style={{ background: "#e0e0e0" }}>
                <TableRow>
                  <TableCell>Action</TableCell>
                  <TableCell align="center">Submission ID</TableCell>
                  <TableCell align="center">Person ID</TableCell>
                  <TableCell align="center">First Name</TableCell>
                  <TableCell align="center">Last Name</TableCell>
                  <TableCell align="center">Payee</TableCell>
                  <TableCell align="center">Amount Requested</TableCell>
                  <TableCell align="center">Vote</TableCell>
                  <TableCell align="center">Amount Approved</TableCell>
                  <TableCell align="center">Comment</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(this.state.rowsPerPage > 0
                  ? this.state.employees.slice(
                      this.state.page * this.state.rowsPerPage,
                      this.state.page * this.state.rowsPerPage +
                        this.state.rowsPerPage
                    )
                  : this.state.employees
                ).map((d, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <a
                        onClick={(e) => {
                          this.setState({
                            modelOpen_flag: true,
                            onSelectedID:d
                          });
                        }}
                      >
                        <MoreHorizIcon
                          style={{
                            marginRight: "5px",
                            cursor: "pointer",
                          }}
                        />
                      </a>
                    </TableCell>
                    <TableCell align="center">{d["SubmissionID"]}</TableCell>
                    <TableCell align="center">{d["PersonIDRecipient"]}</TableCell>
                    <TableCell align="center">{d["FirstNameRecipient"]}</TableCell>
                    <TableCell align="center">{d["LastNameRecipient"]}</TableCell>
                    <TableCell align="center">{d["PayeeDescription"]}</TableCell>
                    <TableCell align="center">{d["AmountRequested"]}</TableCell>
                    <TableCell align="center">{d["VoteFinalized"]}</TableCell>
                    <TableCell align="center">{d["AmountApproved"]}</TableCell>
                    <TableCell align="center">{d["Comment"]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, { label: "All", value: -1 }]}
                    colSpan={10}
                    count={this.state.employees.length}
                    rowsPerPage={this.state.rowsPerPage}
                    page={this.state.page}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </React.Fragment>
        ) : null}
        <br />
      </React.Fragment>
    );
    return _html;
  }

  public voteModel_HTML = () => {
    let _html = (
      <React.Fragment>
        <Dialog
          open={this.state.modelOpen_flag}
          aria-labelledby="edit"
          aria-describedby="edit"
        >
          <DialogTitle
            id="edit"
            style={{
              backgroundColor: "rgb(217, 217, 214)",
              color: "black",
            }}
          >
            {this.state.curid_flag === "Edit" ? (
              <React.Fragment>
                <EditIcon style={{ marginBottom: "5px" }} /> Edit Case
              </React.Fragment>
            ) : null}
            {this.state.curid_flag === "Delete" ? (
              <React.Fragment>
                <DeleteIcon style={{ marginBottom: "5px" }} /> Delete Case
              </React.Fragment>
            ) : null}
            {this.state.curid_flag === null ? (
              <React.Fragment>Please Select your choice</React.Fragment>
            ) : null}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <div
                className="row-fluid"
                style={{
                  margin: "auto",
                  textAlign: "end",
                  minWidth: "350px",
                }}
              >
                <SucessButton
                  style={{ marginRight: "5px" }}
                  onClick={(e) => {
                    this.setState({
                      curid_flag: "Edit",
                      vote:this.state.onSelectedID.VoteFinalized,
                      amountApproved:this.state.onSelectedID.AmountApproved,
                      comment:this.state.onSelectedID.Comment,
                    });
                  }}
                >
                  <EditIcon style={{ marginRight: "3px" }} />
                  Edit
                </SucessButton>
                <ErrorButton
                  onClick={(e) => {
                    this.setState({
                      curid_flag: "Delete",
                    });
                  }}
                >
                  <DeleteIcon style={{ marginRight: "3px" }} />
                  Delete
                </ErrorButton>
              </div>
              <React.Fragment>
                {this.state.curid_flag === "Edit" ? (
                  <React.Fragment>
                    <FormControl fullWidth style={{ margin: "10px" }}>
                      <InputLabel style={{ color: theme.themeSecondary }}>
                        Vote
                      </InputLabel>
                      <Select
                        fullWidth
                        name="vote"
                        style={{ marginTop: "16px" }}
                        value={this.state.vote}
                        onChange={(e) => {
                          this.setState({
                            vote: e.target.value,
                          });
                        }}
                      >
                        <MenuItem value="NA">-- Please Select --</MenuItem>
                        <MenuItem value="Yes">Yes</MenuItem>
                        <MenuItem value="No">No</MenuItem>
                        <MenuItem value="Yes with modification">
                          Yes with modification
                        </MenuItem>
                        <MenuItem value="Abstain">Abstain</MenuItem>
                        <MenuItem value="Yes-NFA">Yes-NFA</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth style={{ margin: "10px" }}>
                      <CustomTextField
                        label="Amount Approved"
                        onChange={(e) => {
                          this.setState({
                            amountApproved: e.target.value,
                          });
                        }}
                        name="amountApproved"
                        value={this.state.amountApproved}
                      />
                    </FormControl>
                    <FormControl fullWidth style={{ margin: "10px" }}>
                      <CustomTextField
                        label="Comment"
                        onChange={(e) => {
                          this.setState({
                            comment: e.target.value,
                          });
                        }}
                        name="comment"
                        value={this.state.comment}
                      />
                    </FormControl>
                  </React.Fragment>
                ) : null}
              </React.Fragment>
              <React.Fragment>
                {this.state.curid_flag === "Delete" ? (
                  <React.Fragment>
                    <FormControl fullWidth style={{ margin: "10px" }}>
                      <h5 style={{ width: "300px" }}>Comming Soon</h5>
                    </FormControl>
                  </React.Fragment>
                ) : null}
              </React.Fragment>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <React.Fragment>
              {this.state.curid_flag !== null ? (
                <React.Fragment>
                  <BackButton
                    onClick={(e) => {
                      this.setState({
                        modelOpen_flag: false,
                        curid_flag: null,
                      });
                    }}
                  >
                    <BlockIcon style={{ marginRight: "3px" }} />
                    Cancel
                  </BackButton>
                  <NextButton
                    onClick={() => {
                      this.setState({
                        modelOpen_flag: false,
                        curid_flag: null,
                      });
                    }}
                  >
                    {this.state.curid_flag === "Edit" ? (
                      <React.Fragment>
                        <EditIcon style={{ marginRight: "3px" }} /> Edit
                      </React.Fragment>
                    ) : null}
                    {this.state.curid_flag === "Delete" ? (
                      <React.Fragment>
                        <DeleteIcon style={{ marginBottom: "5px" }} /> Delete
                      </React.Fragment>
                    ) : null}
                  </NextButton>
                </React.Fragment>
              ) : null}
            </React.Fragment>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
    return _html;
  }

  public handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    this.setState({
      page: newPage,
    });
  }

  public handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    this.setState({
      rowsPerPage: parseInt(event.target.value),
    });
  }

  public render(): React.ReactElement<any> {
    return (
      <div className={styles.ainBoardVote} style={{ width: "100%" }}>
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
            <h5>AIN Board Vote</h5>
          </div>
        </div>
        <div>
          <br />
        </div>
        {this.state.boardMeetingData.length > 0 ? (
          <React.Fragment>
            <div className="row">
              <div className="col-md-3">
                <FormControl fullWidth style={{ margin: "10px" }}>
                  <InputLabel style={{ color: theme.themeSecondary }}>
                    Board Meeting Date*
                  </InputLabel>
                  <Select
                    name="boardMeetingDate"
                    defaultValue={{
                      key: "NA",
                      value: "-- Please Select State --",
                    }}
                    onChange={(event) => {
                      this.setState({
                        boardMeetingDate: event.target.value,
                        //AINBoardMeetingID:event.target.
                      });
                    }}
                    value={this.state.boardMeetingDate}
                  >
                    {this.state.boardMeetingData.map((item, i) => {
                      return (
                        <MenuItem key={item.AINBoardMeetingID} value={item.AINBoardMeetingID}>
                          {item.AINBoardMeetingDate}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>
              <div className="col-md-4">
                <FormControl style={{ margin: "15px 10px 0px 10px" }}>
                  <NextButton
                    onClick={() => {
                      //getAINBoardReviewCases(this.state.context, this.state.boardMeetingDate, this.state.ainBoardPersonID).then((e) => {
                      getAINBoardReviewCases(this.state.context, this.state.boardMeetingDate, "189956").then((e) => {
                        this.setState({
                          employees:e.Table
                        })
                       });
                    }}
                  >
                    <AssessmentIcon style={{ marginRight: "3px" }} /> Retrieve
                    Case for Selected Mtg
                  </NextButton>
                </FormControl>
              </div>
              <div className="col-md-5">
                {/* <FormControl style={{ margin: "15px 10px 0px 10px" }}>
                <InputLabel style={{ color: theme.themeSecondary }}>
                    Board Meeting Date*
                  </InputLabel>
                  <InputLabel style={{ color: "maroon" }}>
                    Case Unassigned
                  </InputLabel>
                  <NextButton
                  style={{float:"right"}}
                    onClick={() => {

                    }}
                  >
                      Designate myself Secretary
                  </NextButton>
                </FormControl> */}
              </div>
            </div>
          </React.Fragment>
        ) : null}
        <div className="row" style={{ margin: "0" }}>
          <br />
          {this.gridTable_HTML()}
        </div>
        <div className="row" style={{ margin: "0" }}>
          {this.voteModel_HTML()}
        </div>
      </div>
    );
  }
}
