import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CategoryIcon from "@material-ui/icons/Category";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import * as React from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import { MuiThemeProvider, ThemeProvider } from "@material-ui/core/styles";
import styles from './InternalCare.module.scss';
import { IInternalCareProps } from './IInternalCareProps';
import { escape } from "@microsoft/sp-lodash-subset";
import { SPComponentLoader } from "@microsoft/sp-loader";
import * as jQuery from "jquery";
import * as _ from "lodash";
import { shareholderInputTheam } from "./common/Common";
import { AINFundsMain } from "./ainFunds/AINFunds_Main";
import { AdminAINFundsMain } from "./ainFunds/Admin/AINFunds_MainAdmin";
import { CrisisMain } from "./crisis/Crisis_Main";
import { GeneralCareConcernMain } from "./generalCareConcern/GeneralCareConcern_Main";
import { GraduationMain } from "./graduation/Graduation_Main";
import { HealthMain } from "./health/Health_Main";
import { InternalCareTeamMain } from "./InternalCareTeam/InternalCareTeam_Main";
import { InternalCareSubmissionSearch } from "./ainFunds/Admin/InternalCareSubmissionSearch_Admin";
import { MilitaryMain } from "./military/Military_Main";
import { AINBoardVote } from "./AINBoardVote/AINBoardVote";
import { NewBirthorAdoptionMain } from "./newBirthorAdoption/NewBirthorAdoption_Main";
import { PersonalorFamilyMain } from "./personalorFamily/PersonalorFamily_Main";
import { SympathyMain } from "./sympathy/Sympathy_Main";
import { WeddingEngagementMain } from "./weddingEngagement/WeddingEngagement_Main";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import { SideNav } from "./SideNav";
import AssessmentIcon from '@material-ui/icons/Assessment';
import {
  faBirthdayCake,
  faGraduationCap,
  faMedkit,
  faSmile,
  faTint,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Hidden } from "@material-ui/core";
SPComponentLoader.loadCss(
  "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
);
import { ITheme } from 'spfx-js-theme';
import { getUser,getAssociateByPersonID } from "./common/WawaHttpService";
import { AdminInternalCareSubmission } from "./ainFunds/Admin/InternalCareSubmission_Admin";
const theme: ITheme = window.__themeState__.theme;
// export const WorkUnderProgress: any = require("./images/WorkUnder.jpg");
// export const ICtree: any = require("./images/IC tree.jpg");
// export const AINLogo: any = require("./images/AINLogo.jpg");


export default class InternalCare extends React.Component<IInternalCareProps, any> {
  public constructor(props: any, state: any) {
    super(props);
    this.state = {
      setTrue: false,
      context:this.props.context,
      siteURL:this.props.context.pageContext.web.absoluteUrl,
      personID:"",
      userType:""
    };
  }


  public componentDidMount() {
    this.loggedInUserFullName();
    // let data = getUser(this.state.context, null);
    // console.log(data);
     //this.props.calledfromChild(this.state);
   }

   public loggedInUserFullName = () => {
    //let restFullURL = this.props.context.pageContext.web.absoluteUrl + "/_api/web/currentuser";
    let restFullURL = this.props.context.pageContext.web.absoluteUrl + "/_api/SP.UserProfiles.PeopleManager/GetMyProperties";
    let userFullName;
    this.props.context.spHttpClient
      .get(restFullURL, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        response
          .json()
          .then((responseJSON: any) => {
            let userName =  _.filter(responseJSON.UserProfileProperties, (val) => {
              return val.Key === "UserName";
            });
            var loginName = ((userName[0].Value).toString()).split("@")[0];
            getUser(this.state.context, loginName).then((d)=>{
              this.setState(
                {
                  personID: d.Table[0].PersonID,
                },
                () => {
                  getAssociateByPersonID(
                    this.state.context,
                    this.state.personID
                  ).then((e) => {
                    this.setState({
                      userType: e.Table[0].AccesslevelCode,
                    },()=>{
                      console.log(this.state.userType);
                    });
                  });
                }
              );
            });
          })
          .catch((e) => {
            console.error(e);
          });
      });
  }

  public loadAPP = () => {
    let _html = (
      <React.Fragment>
        {this.state.userType !== "" ? (
          <React.Fragment>
            <div className="row" style={{ float: "right", margin: "0px" }}>
              <SideNav
                properties={{
                  userType: this.state.userType,
                }}
              />
            </div>
            <div className="row" style={{ height: "45px" }}>
              &nbsp;
            </div>
            <div className="row">
              <div className="col-sm-12">{this.ain_Template()}</div>
            </div>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
    return _html;
  }

  public largeScreen = () => {
    let _html = (
      <React.Fragment>
        <Hidden only={["md", "sm", "xs"]}>{this.ain_Template()}</Hidden>
      </React.Fragment>
    );
    return _html;
  }

  public ain_Template = () => {
    let _html = (
      <React.Fragment>
        <div className="row">
           {/* <div className="col-md-3">
            {/* <img
              src={AINLogo}
              style={{
                margin: "auto",
                textAlign: "center",
                display: "block",
              }}
              className="img-fluid"
              alt="Responsive image"
            />
          </div>*/}
          <div
            className="col-md-12"
            style={{ backgroundColor: theme.themeSecondary }}
          >
              <div className="row">
                <h2
                  style={{
                    display: "block",
                    margin: "auto",
                    textAlign: "center",
                    padding: "10px",
                    color: "white",
                  }}
                >
                  Internal Care
                </h2>
              </div>
              <div className="row">
                <h5
                  style={{
                    display: "block",
                    margin: "auto",
                    textAlign: "center",
                    padding: "10px",
                    color: "white",
                  }}
                >
                  Our Doors Are Always Open
                </h5>
              </div>
            </div>
        </div>
        <div className="row" style={{ border: "1px solid #d9d9d6" }}>
          <div className="col-md-12">
            <Switch>
              <React.Fragment>
                {this.state.userType === "ADMINBOARD" ? (
                  <React.Fragment>{this.adminRoutes()}</React.Fragment>
                ) : null}
              </React.Fragment>
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
    return _html;
  }

  public render(): React.ReactElement<IInternalCareProps> {

     jQuery("#workbenchPageContent").attr("style", "max-width:100%!important");
    jQuery(".SPCanvas-canvas").attr("style", "max-width:100%!important");
    jQuery(".CanvasZone").attr("style", "max-width:100%!important");

    return (
      <div className={ styles.internalCare } style={{margin:"5px"}}>
        <ThemeProvider theme={shareholderInputTheam}>
          <Router>
            <div className="container-fluid">
              {this.loadAPP()}
            </div>
          </Router>
        </ThemeProvider>
      </div>
    );
  }

 public adminRoutes = () => {
    let _html = (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={(props) => (
            <InternalCareTeamMain
            // properties={{
            //   tenentURL: this.state.tenentURL + this.siteURL,
            //   accountEmail: this.state.accountEmail,
            //   newWeb: this.state.newWeb,
            // }}
            />
          )}
        />
        <Route
          exact
          path="/internalCareSubmissionSearch"
          render={(props) => (
            <InternalCareSubmissionSearch
              properties={{
                context: this.state.context,
              }}
            />
          )}
        />
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
        <Route
          exact
          path="/aINFundAdmin/InternalCareSubmissionSearch"
          render={(props) => (
            <AdminAINFundsMain
              properties={{
                context: this.state.context,
              }}
            />
          )}
        />
        <Route
          exact
          path="/generalCareConcern"
          render={(props) => (
            <GeneralCareConcernMain
            // properties={{
            //   tenentURL: this.state.tenentURL + this.siteURL,
            //   accountEmail: this.state.accountEmail,
            //   newWeb: this.state.newWeb,
            // }}
            />
          )}
        />
        <Route
          exact
          path="/personalorFamily"
          render={(props) => (
            <PersonalorFamilyMain
            // properties={{
            //   tenentURL: this.state.tenentURL + this.siteURL,
            //   accountEmail: this.state.accountEmail,
            //   newWeb: this.state.newWeb,
            // }}
            />
          )}
        />
        <Route
          exact
          path="/crisis"
          render={(props) => (
            <CrisisMain
            // properties={{
            //   tenentURL: this.state.tenentURL + this.siteURL,
            //   accountEmail: this.state.accountEmail,
            //   newWeb: this.state.newWeb,
            // }}
            />
          )}
        />
        <Route
          exact
          path="/health"
          render={(props) => (
            <HealthMain
            // properties={{
            //   tenentURL: this.state.tenentURL + this.siteURL,
            //   accountEmail: this.state.accountEmail,
            //   newWeb: this.state.newWeb,
            // }}
            />
          )}
        />
        <Route
          exact
          path="/sympathy"
          render={(props) => (
            <SympathyMain
            // properties={{
            //   tenentURL: this.state.tenentURL + this.siteURL,
            //   accountEmail: this.state.accountEmail,
            //   newWeb: this.state.newWeb,
            // }}
            />
          )}
        />
        <Route
          exact
          path="/graduation"
          render={(props) => (
            <GraduationMain
            // properties={{
            //   tenentURL: this.state.tenentURL + this.siteURL,
            //   accountEmail: this.state.accountEmail,
            //   newWeb: this.state.newWeb,
            // }}
            />
          )}
        />
        <Route
          exact
          path="/weddingEngagement"
          render={(props) => (
            <WeddingEngagementMain
            // properties={{
            //   tenentURL: this.state.tenentURL + this.siteURL,
            //   accountEmail: this.state.accountEmail,
            //   newWeb: this.state.newWeb,
            // }}
            />
          )}
        />
        <Route
          exact
          path="/newBirthorAdoption"
          render={(props) => (
            <NewBirthorAdoptionMain
            // properties={{
            //   tenentURL: this.state.tenentURL + this.siteURL,
            //   accountEmail: this.state.accountEmail,
            //   newWeb: this.state.newWeb,
            // }}
            />
          )}
        />
        <Route
          exact
          path="/military"
          render={(props) => (
            <MilitaryMain
            // properties={{
            //   tenentURL: this.state.tenentURL + this.siteURL,
            //   accountEmail: this.state.accountEmail,
            //   newWeb: this.state.newWeb,
            // }}
            />
          )}
        />
        <Route
          exact
          path="/ainBoardVote"
          render={(props) => (
            <AINBoardVote
            properties={{
              context: this.state.context,
              ainBoardPersonID:this.state.personID
            }}
            />
          )}
        />
      </React.Fragment>
    );
    return _html;
  }

  public endUserRoutes = () => {
    let _html = (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={(props) => (
            <InternalCareTeamMain
            // properties={{
            //   tenentURL: this.state.tenentURL + this.siteURL,
            //   accountEmail: this.state.accountEmail,
            //   newWeb: this.state.newWeb,
            // }}
            />
          )}
        />
        <Route
          exact
          path="/aINFund"
          render={(props) => (
            <AINFundsMain
            // properties={{
            //   tenentURL: this.state.tenentURL + this.siteURL,
            //   accountEmail: this.state.accountEmail,
            //   newWeb: this.state.newWeb,
            // }}
            />
          )}
        />
        <Route
          exact
          path="/generalCareConcern"
          render={(props) => (
            <GeneralCareConcernMain
            // properties={{
            //   tenentURL: this.state.tenentURL + this.siteURL,
            //   accountEmail: this.state.accountEmail,
            //   newWeb: this.state.newWeb,
            // }}
            />
          )}
        />
        <Route
          exact
          path="/personalorFamily"
          render={(props) => (
            <PersonalorFamilyMain
            // properties={{
            //   tenentURL: this.state.tenentURL + this.siteURL,
            //   accountEmail: this.state.accountEmail,
            //   newWeb: this.state.newWeb,
            // }}
            />
          )}
        />
        <Route
          exact
          path="/crisis"
          render={(props) => (
            <CrisisMain
            // properties={{
            //   tenentURL: this.state.tenentURL + this.siteURL,
            //   accountEmail: this.state.accountEmail,
            //   newWeb: this.state.newWeb,
            // }}
            />
          )}
        />
        <Route
          exact
          path="/health"
          render={(props) => (
            <HealthMain
            // properties={{
            //   tenentURL: this.state.tenentURL + this.siteURL,
            //   accountEmail: this.state.accountEmail,
            //   newWeb: this.state.newWeb,
            // }}
            />
          )}
        />
        <Route
          exact
          path="/sympathy"
          render={(props) => (
            <SympathyMain
            // properties={{
            //   tenentURL: this.state.tenentURL + this.siteURL,
            //   accountEmail: this.state.accountEmail,
            //   newWeb: this.state.newWeb,
            // }}
            />
          )}
        />
        <Route
          exact
          path="/graduation"
          render={(props) => (
            <GraduationMain
            // properties={{
            //   tenentURL: this.state.tenentURL + this.siteURL,
            //   accountEmail: this.state.accountEmail,
            //   newWeb: this.state.newWeb,
            // }}
            />
          )}
        />
        <Route
          exact
          path="/weddingEngagement"
          render={(props) => (
            <WeddingEngagementMain
            // properties={{
            //   tenentURL: this.state.tenentURL + this.siteURL,
            //   accountEmail: this.state.accountEmail,
            //   newWeb: this.state.newWeb,
            // }}
            />
          )}
        />
        <Route
          exact
          path="/newBirthorAdoption"
          render={(props) => (
            <NewBirthorAdoptionMain
            // properties={{
            //   tenentURL: this.state.tenentURL + this.siteURL,
            //   accountEmail: this.state.accountEmail,
            //   newWeb: this.state.newWeb,
            // }}
            />
          )}
        />
        <Route
          exact
          path="/military"
          render={(props) => (
            <MilitaryMain
            // properties={{
            //   tenentURL: this.state.tenentURL + this.siteURL,
            //   accountEmail: this.state.accountEmail,
            //   newWeb: this.state.newWeb,
            // }}
            />
          )}
        />
      </React.Fragment>
    );
    return _html;
  }

}

// public web_SideNavigation = () => {
//   let _html = (
//     <List component="nav">
//       <ListItem>
//         <ListItemIcon>
//           <Link
//             className={styles.routeLinkSide}
//             // onClick={this.dismissPanel}
//             to={{
//               pathname: `/`,
//             }}
//           >
//             <GroupWorkIcon
//               fontSize="default"
//               className={styles.materialICon}
//             />
//             Internal Care Team
//           </Link>
//         </ListItemIcon>
//       </ListItem>
//       <ListItem>
//         <ListItemIcon>
//           <Link
//             className={styles.routeLinkSide}
//             // onClick={this.dismissPanel}
//             to={{
//               pathname: `/aINFund`,
//             }}
//           >
//             <MonetizationOnIcon
//               fontSize="default"
//               className={styles.materialICon}
//             />
//             AIN Fund
//           </Link>
//         </ListItemIcon>
//       </ListItem>
//       <ListItem>
//         <ListItemIcon>
//           <Link
//             className={styles.routeLinkSide}
//             // onClick={this.dismissPanel}
//             to={{
//               pathname: `/generalCareConcern`,
//             }}
//           >
//             <MenuBookIcon
//               fontSize="default"
//               className={styles.materialICon}
//             />
//             General Care and Concern
//           </Link>
//         </ListItemIcon>
//       </ListItem>
//       <ListItem>
//         <ListItemIcon>
//           <Link
//             className={styles.routeLinkSide}
//             // onClick={this.dismissPanel}
//             to={{
//               pathname: `/personalorFamily`,
//             }}
//           >
//             <PersonPinIcon
//               fontSize="default"
//               className={styles.materialICon}
//             />
//             Personal or Family
//           </Link>
//         </ListItemIcon>
//       </ListItem>
//       <ListItem>
//         <ListItemIcon>
//           <Link
//             className={styles.routeLinkSide}
//             // onClick={this.dismissPanel}
//             to={{
//               pathname: `/crisis`,
//             }}
//           >
//             <FontAwesomeIcon
//               className={styles.awesomeFontStyleSide}
//               icon={faTint}
//             />
//             Crisis
//           </Link>
//         </ListItemIcon>
//       </ListItem>
//       <ListItem>
//         <ListItemIcon>
//           <Link
//             className={styles.routeLinkSide}
//             // onClick={this.dismissPanel}
//             to={{
//               pathname: `/health`,
//             }}
//           >
//             <FontAwesomeIcon
//               className={styles.awesomeFontStyleSide}
//               icon={faMedkit}
//             />
//             Health
//           </Link>
//         </ListItemIcon>
//       </ListItem>
//       <ListItem>
//         <ListItemIcon>
//           <Link
//             className={styles.routeLinkSide}
//             // onClick={this.dismissPanel}
//             to={{
//               pathname: `/sympathy`,
//             }}
//           >
//             <CategoryIcon fontSize="default" />
//             Sympathy
//           </Link>
//         </ListItemIcon>
//       </ListItem>
//       <ListItem>
//         <ListItemIcon>
//           <Link
//             className={styles.routeLinkSide}
//             // onClick={this.dismissPanel}
//             to={{
//               pathname: `/graduation`,
//             }}
//           >
//             <FontAwesomeIcon
//               className={styles.awesomeFontStyleSide}
//               icon={faGraduationCap}
//             />
//             Graduation
//           </Link>
//         </ListItemIcon>
//       </ListItem>
//       <ListItem>
//         <ListItemIcon>
//           <Link
//             className={styles.routeLinkSide}
//             // onClick={this.dismissPanel}
//             to={{
//               pathname: `/weddingEngagement`,
//             }}
//           >
//             <FontAwesomeIcon
//               className={styles.awesomeFontStyleSide}
//               icon={faSmile}
//             />
//             Wedding/Engagement
//           </Link>
//         </ListItemIcon>
//       </ListItem>
//       <ListItem>
//         <ListItemIcon>
//           <Link
//             className={styles.routeLinkSide}
//             // onClick={this.dismissPanel}
//             to={{
//               pathname: `/newBirthorAdoption`,
//             }}
//           >
//             <FontAwesomeIcon
//               className={styles.awesomeFontStyleSide}
//               icon={faBirthdayCake}
//             />
//             New Birth or Adoption
//           </Link>
//         </ListItemIcon>
//       </ListItem>
//       <ListItem>
//         <ListItemIcon>
//           <Link
//             className={styles.routeLinkSide}
//             // onClick={this.dismissPanel}
//             to={{
//               pathname: `/military`,
//             }}
//           >
//             <FontAwesomeIcon
//               className={styles.awesomeFontStyleSide}
//               icon={faUserSecret}
//             />
//             Military
//           </Link>
//         </ListItemIcon>
//       </ListItem>
//       <ListItem>
//         <ListItemIcon>
//           <Link
//             fontSize="default"
//             className={styles.materialICon}
//             to={{
//               pathname: `/ainBoardVote`,
//             }}
//           >
//             <AssessmentIcon />
//             Military
//           </Link>
//         </ListItemIcon>
//       </ListItem>
//     </List>
//   );
//   return _html;
// }

// public mainBody = () => {
//   let _html = (
//     <React.Fragment>
//       <Route
//         exact
//         path="/"
//         render={(props) => (
//           <InternalCareTeamMain
//           // properties={{
//           //   tenentURL: this.state.tenentURL + this.siteURL,
//           //   accountEmail: this.state.accountEmail,
//           //   newWeb: this.state.newWeb,
//           // }}
//           />
//         )}
//       />
//       {/* <Route
//         exact
//         path="/aINFund"
//         render={(props) => (
//           <AINFundsMain
//           // properties={{
//           //   tenentURL: this.state.tenentURL + this.siteURL,
//           //   accountEmail: this.state.accountEmail,
//           //   newWeb: this.state.newWeb,
//           // }}
//           />
//         )}
//       />
//         <Route
//         exact
//         path="/myShareholdingsDetails/:accountID"
//         render={(props) => (
//           <InternalCareSubmissionSearch
//             properties={{
//               context: this.state.context,
//             }}
//           />
//         )}
//       />
//       */}
//       <Route
//         exact
//         path="/internalCareSubmissionSearch"
//         render={(props) => (
//           <InternalCareSubmissionSearch
//             properties={{
//               context: this.state.context,
//             }}
//           />
//         )}
//       />
//        <Route
//         exact
//         path="/internalCareSubmission/:submissionID"
//         render={(props) => (
//           <AdminInternalCareSubmission
//             properties={{
//               context: this.state.context,
//             }}
//           />
//         )}
//       />
//       <Route
//         exact
//         path="/aINFundAdmin/:submissionID"
//         render={(props) => (
//           <AdminAINFundsMain
//             properties={{
//               context: this.state.context,
//             }}
//           />
//         )}
//       />
//       <Route
//         exact
//         path="/aINFundAdmin/InternalCareSubmissionSearch"
//         render={(props) => (
//           <AdminAINFundsMain
//             properties={{
//               context: this.state.context,
//             }}
//           />
//         )}
//       />
//       <Route
//         exact
//         path="/generalCareConcern"
//         render={(props) => (
//           <GeneralCareConcernMain
//           // properties={{
//           //   tenentURL: this.state.tenentURL + this.siteURL,
//           //   accountEmail: this.state.accountEmail,
//           //   newWeb: this.state.newWeb,
//           // }}
//           />
//         )}
//       />
//       <Route
//         exact
//         path="/personalorFamily"
//         render={(props) => (
//           <PersonalorFamilyMain
//           // properties={{
//           //   tenentURL: this.state.tenentURL + this.siteURL,
//           //   accountEmail: this.state.accountEmail,
//           //   newWeb: this.state.newWeb,
//           // }}
//           />
//         )}
//       />
//       <Route
//         exact
//         path="/crisis"
//         render={(props) => (
//           <CrisisMain
//           // properties={{
//           //   tenentURL: this.state.tenentURL + this.siteURL,
//           //   accountEmail: this.state.accountEmail,
//           //   newWeb: this.state.newWeb,
//           // }}
//           />
//         )}
//       />
//       <Route
//         exact
//         path="/health"
//         render={(props) => (
//           <HealthMain
//           // properties={{
//           //   tenentURL: this.state.tenentURL + this.siteURL,
//           //   accountEmail: this.state.accountEmail,
//           //   newWeb: this.state.newWeb,
//           // }}
//           />
//         )}
//       />
//       <Route
//         exact
//         path="/sympathy"
//         render={(props) => (
//           <SympathyMain
//           // properties={{
//           //   tenentURL: this.state.tenentURL + this.siteURL,
//           //   accountEmail: this.state.accountEmail,
//           //   newWeb: this.state.newWeb,
//           // }}
//           />
//         )}
//       />
//       <Route
//         exact
//         path="/graduation"
//         render={(props) => (
//           <GraduationMain
//           // properties={{
//           //   tenentURL: this.state.tenentURL + this.siteURL,
//           //   accountEmail: this.state.accountEmail,
//           //   newWeb: this.state.newWeb,
//           // }}
//           />
//         )}
//       />
//       <Route
//         exact
//         path="/weddingEngagement"
//         render={(props) => (
//           <WeddingEngagementMain
//           // properties={{
//           //   tenentURL: this.state.tenentURL + this.siteURL,
//           //   accountEmail: this.state.accountEmail,
//           //   newWeb: this.state.newWeb,
//           // }}
//           />
//         )}
//       />
//       <Route
//         exact
//         path="/newBirthorAdoption"
//         render={(props) => (
//           <NewBirthorAdoptionMain
//           // properties={{
//           //   tenentURL: this.state.tenentURL + this.siteURL,
//           //   accountEmail: this.state.accountEmail,
//           //   newWeb: this.state.newWeb,
//           // }}
//           />
//         )}
//       />
//       <Route
//         exact
//         path="/military"
//         render={(props) => (
//           <MilitaryMain
//           // properties={{
//           //   tenentURL: this.state.tenentURL + this.siteURL,
//           //   accountEmail: this.state.accountEmail,
//           //   newWeb: this.state.newWeb,
//           // }}
//           />
//         )}
//       />
//       <Route
//         exact
//         path="/ainBoardVote"
//         render={(props) => (
//           <AINBoardVote
//           // properties={{
//           //   tenentURL: this.state.tenentURL + this.siteURL,
//           //   accountEmail: this.state.accountEmail,
//           //   newWeb: this.state.newWeb,
//           // }}
//           />
//         )}
//       />
//     </React.Fragment>
//   );
//   return _html;
// }
