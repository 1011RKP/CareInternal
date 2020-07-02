import {
  faBirthdayCake,
  faGraduationCap,
  faMedkit,
  faSmile,
  faTint,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CategoryIcon from "@material-ui/icons/Category";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import MenuIcon from "@material-ui/icons/Menu";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import AssessmentIcon from '@material-ui/icons/Assessment';
import PersonPinIcon from "@material-ui/icons/PersonPin";
import { Panel } from "office-ui-fabric-react/lib/Panel";
import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./InternalCare.module.scss";
import { NextButton } from "./common/Common";
import { ITheme } from 'spfx-js-theme';
const theme: ITheme = window.__themeState__.theme;

export class SideNav extends React.Component<any, any> {
  public constructor(props: any, state: any) {
    super(props);
    this.state = {
      setIsOpen: false,
      userType:this.props.properties.userType
    };
  }

  public openPanel = () => {
    this.setState({
      setIsOpen: true,
    });
  }

  public dismissPanel = () => {
    this.setState({
      setIsOpen: false,
    });
  }

  public endUserPanel_html = () => {
    let _html = (
      <React.Fragment>
        {this.state.setIsOpen !== false ? (
          <React.Fragment>
            <Panel
              isOpen={this.state.setIsOpen}
              onDismiss={this.dismissPanel}
              isLightDismiss={true}
              headerText="Internal Care"
            >
              <List component="nav">
                <ListItem>
                  <ListItemIcon>
                    <Link
                      style={{color:theme.themeSecondary}}
                      onClick={this.dismissPanel}
                      to={{
                        pathname: `/`,
                      }}
                    >
                      <GroupWorkIcon
                         style={{color:theme.themeSecondary, fontSize:"17px", marginBottom:"1px"}}
                      />
                      Internal Care Team
                    </Link>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link
                      style={{color:theme.themeSecondary}}
                      onClick={this.dismissPanel}
                      to={{
                        pathname: `/aINFund`,
                      }}
                    >
                      <MonetizationOnIcon
                       style={{color:theme.themeSecondary, fontSize:"17px", marginBottom:"1px"}}
                      />
                      AIN Fund
                    </Link>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link
                      style={{color:theme.themeSecondary}}
                      onClick={this.dismissPanel}
                      to={{
                        pathname: `/generalCareConcern`,
                      }}
                    >
                      <MenuBookIcon
                        style={{color:theme.themeSecondary, fontSize:"17px", marginBottom:"2px", marginRight:"2px"}}
                      />
                      General Care and Concern
                    </Link>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link
                      style={{color:theme.themeSecondary}}
                      onClick={this.dismissPanel}
                      to={{
                        pathname: `/personalorFamily`,
                      }}
                    >
                      <PersonPinIcon
                        style={{color:theme.themeSecondary, fontSize:"17px", marginBottom:"2px"}}
                      />
                      Personal or Family
                    </Link>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link
                      style={{color:theme.themeSecondary}}
                      onClick={this.dismissPanel}
                      to={{
                        pathname: `/crisis`,
                      }}
                    >
                      <FontAwesomeIcon
                        style={{color:theme.themeSecondary, fontSize:"17px", marginBottom:"-1px", marginRight:"2px"}}
                        icon={faTint}
                      />
                      Crisis
                    </Link>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link
                     style={{color:theme.themeSecondary}}
                      onClick={this.dismissPanel}
                      to={{
                        pathname: `/health`,
                      }}
                    >
                      <FontAwesomeIcon
                        style={{color:theme.themeSecondary, fontSize:"17px", marginBottom:"-1px", marginRight:"2px"}}
                        icon={faMedkit}
                      />
                      Health
                    </Link>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link
                     style={{color:theme.themeSecondary}}
                      onClick={this.dismissPanel}
                      to={{
                        pathname: `/sympathy`,
                      }}
                    >
                      <CategoryIcon
                      style={{color:theme.themeSecondary, fontSize:"17px", marginBottom:"2px", marginRight:"2px"}} />
                      Sympathy
                    </Link>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link
                     style={{color:theme.themeSecondary}}
                      onClick={this.dismissPanel}
                      to={{
                        pathname: `/graduation`,
                      }}
                    >
                      <FontAwesomeIcon
                        style={{color:theme.themeSecondary, fontSize:"17px", marginBottom:"-1px", marginRight:"2px"}}
                        icon={faGraduationCap}
                      />
                      Graduation
                    </Link>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link
                      style={{color:theme.themeSecondary}}
                      onClick={this.dismissPanel}
                      to={{
                        pathname: `/weddingEngagement`,
                      }}
                    >
                      <FontAwesomeIcon
                        style={{color:theme.themeSecondary, fontSize:"17px", marginBottom:"-1px", marginRight:"2px"}}
                        icon={faSmile}
                      />
                      Wedding/Engagement
                    </Link>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link
                      style={{color:theme.themeSecondary}}
                      onClick={this.dismissPanel}
                      to={{
                        pathname: `/newBirthorAdoption`,
                      }}
                    >
                      <FontAwesomeIcon
                         style={{color:theme.themeSecondary, fontSize:"17px", marginBottom:"2px", marginRight:"2px"}}
                        icon={faBirthdayCake}
                      />
                      New Birth or Adoption
                    </Link>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link
                      style={{color:theme.themeSecondary}}
                      onClick={this.dismissPanel}
                      to={{
                        pathname: `/military`,
                      }}
                    >
                      <FontAwesomeIcon
                         style={{color:theme.themeSecondary, fontSize:"17px", marginBottom:"2px", marginRight:"2px"}}
                        icon={faUserSecret}
                      />
                      Military
                    </Link>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link
                      style={{color:theme.themeSecondary}}
                      onClick={this.dismissPanel}
                      to={{
                        pathname: `/ainBoardVote`,
                      }}
                    >
                      <AssessmentIcon
                       style={{color:theme.themeSecondary, fontSize:"17px", marginBottom:"2px", marginRight:"2px"}} />
                      AIN Board Vote
                    </Link>
                  </ListItemIcon>
                </ListItem>
              </List>
            </Panel>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
    return _html;
  }

  public adminPanel_html = () =>{
    let _html = (
      <React.Fragment>
        {this.state.setIsOpen !== false ? (
          <React.Fragment>
            <Panel
              isOpen={this.state.setIsOpen}
              onDismiss={this.dismissPanel}
              isLightDismiss={true}
              headerText="Internal Care"
            >
              <List component="nav">
                <ListItem>
                  <ListItemIcon>
                    <Link
                      style={{color:theme.themeSecondary}}
                      onClick={this.dismissPanel}
                      to={{
                        pathname: `/`,
                      }}
                    >
                      <GroupWorkIcon
                         style={{color:theme.themeSecondary, fontSize:"17px", marginBottom:"1px"}}
                      />
                      Internal Care Team
                    </Link>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link
                      style={{color:theme.themeSecondary}}
                      onClick={this.dismissPanel}
                      to={{
                        pathname: `/internalCareSubmissionSearch`,
                      }}
                    >
                      <MonetizationOnIcon
                       style={{color:theme.themeSecondary, fontSize:"17px", marginBottom:"1px"}}
                      />
                      AIN Fund
                    </Link>
                    {/* <Link
                      style={{color:theme.themeSecondary}}
                      onClick={this.dismissPanel}
                      to={{
                        pathname: `/aINFund`,
                      }}
                    >
                      <MonetizationOnIcon
                       style={{color:theme.themeSecondary, fontSize:"17px", marginBottom:"1px"}}
                      />
                      AIN Fund
                    </Link> */}
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link
                      style={{color:theme.themeSecondary}}
                      onClick={this.dismissPanel}
                      to={{
                        pathname: `/generalCareConcern`,
                      }}
                    >
                      <MenuBookIcon
                        style={{color:theme.themeSecondary, fontSize:"17px", marginBottom:"2px", marginRight:"2px"}}
                      />
                      General Care and Concern
                    </Link>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link
                      style={{color:theme.themeSecondary}}
                      onClick={this.dismissPanel}
                      to={{
                        pathname: `/personalorFamily`,
                      }}
                    >
                      <PersonPinIcon
                        style={{color:theme.themeSecondary, fontSize:"17px", marginBottom:"2px"}}
                      />
                      Personal or Family
                    </Link>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link
                      style={{color:theme.themeSecondary}}
                      onClick={this.dismissPanel}
                      to={{
                        pathname: `/crisis`,
                      }}
                    >
                      <FontAwesomeIcon
                        style={{color:theme.themeSecondary, fontSize:"17px", marginBottom:"-1px", marginRight:"2px"}}
                        icon={faTint}
                      />
                      Crisis
                    </Link>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link
                     style={{color:theme.themeSecondary}}
                      onClick={this.dismissPanel}
                      to={{
                        pathname: `/health`,
                      }}
                    >
                      <FontAwesomeIcon
                        style={{color:theme.themeSecondary, fontSize:"17px", marginBottom:"-1px", marginRight:"2px"}}
                        icon={faMedkit}
                      />
                      Health
                    </Link>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link
                     style={{color:theme.themeSecondary}}
                      onClick={this.dismissPanel}
                      to={{
                        pathname: `/sympathy`,
                      }}
                    >
                      <CategoryIcon
                      style={{color:theme.themeSecondary, fontSize:"17px", marginBottom:"2px", marginRight:"2px"}} />
                      Sympathy
                    </Link>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link
                     style={{color:theme.themeSecondary}}
                      onClick={this.dismissPanel}
                      to={{
                        pathname: `/graduation`,
                      }}
                    >
                      <FontAwesomeIcon
                        style={{color:theme.themeSecondary, fontSize:"17px", marginBottom:"-1px", marginRight:"2px"}}
                        icon={faGraduationCap}
                      />
                      Graduation
                    </Link>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link
                      style={{color:theme.themeSecondary}}
                      onClick={this.dismissPanel}
                      to={{
                        pathname: `/weddingEngagement`,
                      }}
                    >
                      <FontAwesomeIcon
                        style={{color:theme.themeSecondary, fontSize:"17px", marginBottom:"-1px", marginRight:"2px"}}
                        icon={faSmile}
                      />
                      Wedding/Engagement
                    </Link>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link
                      style={{color:theme.themeSecondary}}
                      onClick={this.dismissPanel}
                      to={{
                        pathname: `/newBirthorAdoption`,
                      }}
                    >
                      <FontAwesomeIcon
                         style={{color:theme.themeSecondary, fontSize:"17px", marginBottom:"2px", marginRight:"2px"}}
                        icon={faBirthdayCake}
                      />
                      New Birth or Adoption
                    </Link>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link
                      style={{color:theme.themeSecondary}}
                      onClick={this.dismissPanel}
                      to={{
                        pathname: `/military`,
                      }}
                    >
                      <FontAwesomeIcon
                         style={{color:theme.themeSecondary, fontSize:"17px", marginBottom:"2px", marginRight:"2px"}}
                        icon={faUserSecret}
                      />
                      Military
                    </Link>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link
                      style={{color:theme.themeSecondary}}
                      onClick={this.dismissPanel}
                      to={{
                        pathname: `/ainBoardVote`,
                      }}
                    >
                      <AssessmentIcon
                       style={{color:theme.themeSecondary, fontSize:"17px", marginBottom:"2px", marginRight:"2px"}} />
                      AIN Board Vote
                    </Link>
                  </ListItemIcon>
                </ListItem>
              </List>
            </Panel>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
    return _html;
  }

  public render(): React.ReactElement<any> {
    return (
      <div className={styles.internalCare}>
        <div className="row">
          <NextButton
            style={{ minWidth: "25px" }}
            onClick={(e) => {
              this.openPanel();
            }}
          >
            <MenuIcon style={{ fontSize: "28px" }} />
          </NextButton>
        </div>
        {this.state.userType === "EndUser" ? (
          <React.Fragment>
            <div className="row">{this.endUserPanel_html()}</div>
          </React.Fragment>
        ) : null}
        {this.state.userType === "ADMINBOARD" ? (
          <React.Fragment>
            <div className="row">{this.adminPanel_html()}</div>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}
