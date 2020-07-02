import { AadTokenProvider } from "@microsoft/sp-http";
import { AppSettings } from "./AppSettings";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import {
  HttpClient,
  SPHttpClient,
  HttpClientConfiguration,
  HttpClientResponse,
  ODataVersion,
  IHttpClientConfiguration,
  IHttpClientOptions,
  ISPHttpClientOptions,
} from "@microsoft/sp-http";
import { escape } from "@microsoft/sp-lodash-subset";

export class TokenProvider {
    constructor() {}
    public static getRequestHeader = (props: any, context:WebPartContext): Promise<any> => {
        let requestHeaders: Headers = new Headers();
        //requestHeaders.append('Content-type','application/json');
        return context.aadTokenProviderFactory
            .getTokenProvider()
            .then((tokenProvider: AadTokenProvider): Promise<string> => {
                return tokenProvider.getToken( AppSettings.AzureAppId );
            })
            .then((accessToken:string):Headers => {
                // Request header with Bearer Token
                //console.log('access token-'+accessToken);
                requestHeaders.append('Access-Control-Allow-Credentials', 'true');
                requestHeaders.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
                requestHeaders.append('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin,Access-Control-Allow-Headers,Access-Control-Expose-Headers,Authorization,Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
                requestHeaders.append('Content-type','application/json; charset=utf-8');
                requestHeaders.append('Authorization', 'Bearer '+ accessToken);
                requestHeaders.append('accept','application/json');
                return requestHeaders;
            })
            .catch((error:any) => {
                console.log("Token hasn't been obtained");
                return null;
            });
    }
}

export const getAssociateByPersonID = (props: any, personId:string) : Promise<any> => {
  let restAPI = AppSettings.WebServiceHost + '/InternalCare/Service.svc/GetRepresentative';
  //const requestHeaders: Headers = getReqHeaders();
  let associateName:string = '';//349139
  let metadata = { "PersonId": "189956"};
  let jsonMetadata = { "JsonString": JSON.stringify(metadata) };
    return new Promise<any> ((resolve: (json:string) => void, reject: (error:any) => void): void => {
      TokenProvider.getRequestHeader(props, props).then((requestHeaders) => {
        const requestOptions: IHttpClientOptions = {
          headers: requestHeaders,
          body: JSON.stringify(jsonMetadata)
        };
        props.httpClient.post(restAPI, SPHttpClient.configurations.v1, requestOptions)
        .then(response => {
          return response.json();
        })
        .then(json => {
            var associate = JSON.parse(json);
            //console.log(associate);
            resolve( associate );
        })
        .catch( error => {
          console.log('Error - '+ error);
          reject('');
        });
      });
    });
}

export const getSearchSubmissions = (props: any, metadataObj:string) : Promise<any> => {
  let restAPI = AppSettings.WebServiceHost + '/InternalCare/Service.svc/SearchSubmissions';
  let metadata = { "PersonIDRecipient": "189956"};
  let jsonMetadata = { "JsonString": JSON.stringify(metadata) };
    return new Promise<any> ((resolve: (json:string) => void, reject: (error:any) => void): void => {
      TokenProvider.getRequestHeader(props, props).then((requestHeaders) => {
        const requestOptions: IHttpClientOptions = {
          headers: requestHeaders,
          body: JSON.stringify(jsonMetadata)
        };
        props.httpClient.post(restAPI, SPHttpClient.configurations.v1, requestOptions)
        .then(response => {
          return response.json();
        })
        .then(json => {
            var associate = JSON.parse(json);
            resolve( associate );
        })
        .catch( error => {
          console.log('Error - '+ error);
          reject('');
        });
      });
    });
}

export const getAINBoardReviewCases = (props: any, boardMeetingDate:string,ainBoardPersonID:string) : Promise<any> => {
  let restAPI = AppSettings.WebServiceHost + '/InternalCare/Service.svc/GetAINBoardReviewCases';
  let metadata = { "AINBoardMeetingID": boardMeetingDate, "AINBoardPersonID":ainBoardPersonID};
  let jsonMetadata = { "JsonString": JSON.stringify(metadata) };
    return new Promise<any> ((resolve: (json:string) => void, reject: (error:any) => void): void => {
      TokenProvider.getRequestHeader(props, props).then((requestHeaders) => {
        const requestOptions: IHttpClientOptions = {
          headers: requestHeaders,
          body: JSON.stringify(jsonMetadata)
        };
        props.httpClient.post(restAPI, SPHttpClient.configurations.v1, requestOptions)
        .then(response => {
          return response.json();
        })
        .then(json => {
            var associate = JSON.parse(json);
            resolve( associate );
        })
        .catch( error => {
          console.log('Error - '+ error);
          reject('');
        });
      });
    });
}

export const getMeetingDates = (props: any) : Promise<any> => {
  let restAPI = AppSettings.WebServiceHost + '/InternalCare/Service.svc/GetMeetingDates';
  // let metadata = { "SubmissionID": "189956"};
   let jsonMetadata = { "JsonString": JSON.stringify({}) };
    return new Promise<any> ((resolve: (json:string) => void, reject: (error:any) => void): void => {
      TokenProvider.getRequestHeader(props, props).then((requestHeaders) => {
        const requestOptions: IHttpClientOptions = {
          headers: requestHeaders,
          body: JSON.stringify(jsonMetadata)
        };
        props.httpClient.post(restAPI, SPHttpClient.configurations.v1, requestOptions)
        .then(response => {
          return response.json();
        })
        .then(json => {
          if (json !== "") {
            var associate = JSON.parse(json);
            resolve(associate);
          } else {
            resolve(json);
          }
        })
        .catch( error => {
          console.log('Error - '+ error);
          reject('');
        });
      });
    });
}

export const getUser = (props: any, fullName:string) : Promise<any> => {
  let restAPI = AppSettings.WebServiceHost + '/MyWawaInfo/Service.svc/GetAssociateByUserName';
  let associateName:string = '';
  let metadata = { "Username": fullName};
  let jsonMetadata = { "JsonString": JSON.stringify(metadata) };
    return new Promise<any> ((resolve: (json:string) => void, reject: (error:any) => void): void => {
      TokenProvider.getRequestHeader(props, props).then((requestHeaders) => {
        const requestOptions: IHttpClientOptions = {
          headers: requestHeaders,
          body: JSON.stringify(jsonMetadata)
        };
        props.httpClient.post(restAPI, SPHttpClient.configurations.v1, requestOptions)
        .then(response => {
          return response.json();
        })
        .then(json => {
            var associate = JSON.parse(json);
            resolve( associate );
        })
        .catch( error => {
          console.log('Error - '+ error);
          reject('');
        });
      });
    });
}

export const getAINBoardSubmissionVote = (
  props: any,
  submissionID: string,
  submissionFinancialAssistanceID: string,
  ainBoardVoteID: string,
  ainBoardPersonID: string,
  comment: string,
  amountApproved: string
): Promise<any> => {
  let restAPI =
    AppSettings.WebServiceHost +
    "/InternalCare/Service.svc/AINBoardSubmissionVote";
  let metadata = {
    SubmissionID: submissionID,
    SubmissionFinancialAssistanceID: submissionFinancialAssistanceID,
    AINBoardVoteID: ainBoardVoteID,
    AINBoardPersonID: ainBoardPersonID,
    Comment: comment,
    AmountApproved: amountApproved,
  };
  let jsonMetadata = { JsonString: JSON.stringify(metadata) };
  return new Promise<any>(
    (resolve: (json: string) => void, reject: (error: any) => void): void => {
      TokenProvider.getRequestHeader(props, props).then((requestHeaders) => {
        const requestOptions: IHttpClientOptions = {
          headers: requestHeaders,
          body: JSON.stringify(jsonMetadata),
        };
        props.httpClient
          .post(restAPI, SPHttpClient.configurations.v1, requestOptions)
          .then((response) => {
            return response.json();
          })
          .then((json) => {
            var associate = JSON.parse(json);
            resolve(associate);
          })
          .catch((error) => {
            console.log("Error - " + error);
            reject("");
          });
      });
    }
  );
}

//let restAPI = AppSettings.WebServiceHost + '/MyWawaInfo/Service.svc/AssociateGetByLastName';
//let restAPI = AppSettings.WebServiceHost + '/InternalCare/Service.svc/SearchSubmissions';
//export const getSearchSubmissions = (props: any, metadataObj:string[]) : Promise<any> => {
// export const getUser = (props: any, fullName:string) : Promise<any> => {
//   let restAPI = AppSettings.WebServiceHost + '/NewStoreRemodelWebServices/Service1.svc/GetByLastFirstName';
//   let associateName:string = '';
//   let metadata = { "LastFirstName": fullName, "Wildcard":true};
//   let jsonMetadata = { "JsonString": JSON.stringify(metadata) };
//     return new Promise<any> ((resolve: (json:string) => void, reject: (error:any) => void): void => {
//       TokenProvider.getRequestHeader(props, props).then((requestHeaders) => {
//         const requestOptions: IHttpClientOptions = {
//           headers: requestHeaders,
//           body: JSON.stringify(jsonMetadata)
//         };
//         props.httpClient.post(restAPI, SPHttpClient.configurations.v1, requestOptions)
//         .then(response => {
//           return response.json();
//         })
//         .then(json => {
//             var associate = JSON.parse(json);
//             resolve( associate );
//         })
//         .catch( error => {
//           console.log('Error - '+ error);
//           reject('');
//         });
//       });
//     });
// };



