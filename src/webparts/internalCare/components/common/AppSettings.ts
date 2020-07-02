declare var _WebServiceHost_:string;
declare var _AzureAppId_:string;
declare var _SiteAssets_:string;
declare var _InternalCareSubmission_:string;
declare var _BigSixValuesSiteUrl_: string;

import { Environment, EnvironmentType, DisplayMode } from '@microsoft/sp-core-library';
export class AppSettings {

    public static get WebServiceHost(): string {
        return _WebServiceHost_;
    }

    public static get AzureAppId(): string {
        return _AzureAppId_;
    }

    public static get SiteAssets(): string {
        return _SiteAssets_;
    }

    public static get InternalCareSubmission(): string {
        return _InternalCareSubmission_;
    }

    public static get BigSixValuesSiteUrl(): string {
        return _BigSixValuesSiteUrl_;
    }

    // public static devSiteAssets: string = "/SiteAssets";
     // ! public static devInternalCareSiteUrl: string = "/departments/InternalCare/";
    // public static Config_AIMAccountFormLink = "https://mywawa.wawa.com/departments/InformationTechnology/AIM%20Team/Documents/Account_Request_FormV84.xls";
    // public static currentWebUrl: string ='';

    // public static readonly sitePages: string = "/SitePages";
    // ! public static readonly thankYouPage: string = AppSettings.sitePages + "/IC_SubmissionThankyou.aspx";

    // public static List_EmailTemplate = "Life Experience Email Templates";
    // public static SubmissionThankYou = AppSettings.sitePages + "/IC_SubmissionThankyou.aspx";
    // public static AINSubmissionURL = ""; //AppSettings.sitePages + "/AINSubmissionForm.aspx";
    // public static ValuesDataPage = AppSettings.BigSixValuesSiteUrl + AppSettings.sitePages + "/ValuesData.aspx";
    // public static InternalCareSubmissionPage = AppSettings.sitePages + "/InternalCareSubmissionform.aspx";


    // public static AINRejectTemplateFile = "/Shared%20Documents/AINDenialLetter.docx";
    // public static AINUnableTemplateFile = "/Shared%20Documents/AINUnableLetter.docx";

    // public static SubmissionType = {
    //     General_Care_and_Concern : "General Care and Concern",
    //     Personal_Or_Family : "Personal or Family",
    //     Crisis_Accident_Major_Catastrophe : "Crisis (Accident, Major Catastrophe)",
    //     Health_Trauma_Surgery_Serious_Illness : "Health (Trauma, Surgery, Serious Illness)",
    //     Sympathy_AndOr_Funeral : "Sympathy and/or Funeral",
    //     Special_Award : "Special Award",
    //     Graduation: "Graduation",
    //     Achievement: "Achievement",
    //     Celebration: "Celebration",
    //     Retirement: "Retirement",
    //     Wedding: "Wedding",
    //     Seasonal_Suggestion : "Seasonal Suggestion",
    //     Seasonal_Volunteer : "Seasonal Volunteer",
    //     Engagement:"Engagement",
    //     New_Birth_Or_Adoption: "New Birth or Adoption",
    //     Other_Ceremony:"Other (Ceremony)",
    //     Milestones_Birthday_Wawa_Anniversary : "Milestones (Birthday, Wawa Anniversary)",
    //     Good_Luck_Good_Bye_Proud_Of_You : "Good Luck, Good Bye, Proud of You",
    //     Military:"Military",
    //     Thank_You: "Thank You",
    //     AIN_Fund_Application: "AIN Fund Application",
    //     Wellness: "Wellness",
    //     New_Home_Owner: "New Home Owner"

    // };




}
