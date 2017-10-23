import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpWrapperService } from './http.wrapper.service';
import { HttpParams } from './interfaces/httpParams.model';
import {Property} from "./mock/property.clone";
import { environment } from '../../../environments/environment';

@Injectable()
export class PropertiesService {

  initialPropertyUrl = 'http://dev1-sample.azurewebsites.net/properties.json';
  propertiesUrl = 'api/properties';  // URL to web api

  constructor(private httpWrapperService: HttpWrapperService) { }

  getProperties(ErrorActionType: string,
              SpecificErrorType: string,
              SuccessType: string ) {
    let getParams : HttpParams = {
      errorActionType: ErrorActionType,
      specificErrorType: SpecificErrorType,
      responseObject: 'properties',
      successActionType: SuccessType,
      uri: `${this.initialPropertyUrl}`
    };
    return this.httpWrapperService.get(getParams).map( (response) => {
        console.log('PropertiesService =response = ', response)
        return (this.checkForClientDev(response));
    });
  }

  getProperty(payload: {
                        id:number
                      },
             ErrorActionType:string,
             SpecificErrorType:string,
             SuccessType:string) {
    let getParams: HttpParams = {
      errorActionType: ErrorActionType,
      specificErrorType: SpecificErrorType,
      payload: payload,
      responseObject: 'property',
      successActionType: SuccessType,
      uri: `${this.propertiesUrl}/${payload.id}`
    };
    return this.httpWrapperService.post(getParams).map( (response)=>(this.checkForClientDev(response)));
  }

  addProperty( payload: {
                        name: string,
                        type: string,
                        price:number,
                        inventory:number,
                        thumbnail:string
                      },
              ErrorActionType:string,
              SpecificErrorType:string,
              SuccessType:string){

    let postParams: HttpParams = {
      errorActionType:ErrorActionType,
      specificErrorType: SpecificErrorType,
      payload: payload,
      responseObject: 'property',
      successActionType: SuccessType,
      uri:  `${this.propertiesUrl}/add`
    };
    return this.httpWrapperService.post(postParams).map( (response)=>this.checkForClientDev(response));
  }


  updateProperty(payload: {
                             property:Property
                         },
               ErrorActionType:string,
               SpecificErrorType:string,
               SuccessType:string){
    let postParams: HttpParams = {
      errorActionType: ErrorActionType,
      specificErrorType: SpecificErrorType,
      payload: payload,
      responseObject: 'property',
      successActionType: SuccessType,
      uri: `${this.propertiesUrl}/update`
    };
    return this.httpWrapperService.put(postParams).map( (response)=>this.checkForClientDev(response))
  }

  deleteGarment(payload: {
                             property:Property
                         },
               ErrorActionType:string,
               SpecificErrorType:string,
               SuccessType:string) {
    let postParams: HttpParams = {
      errorActionType: ErrorActionType,
      specificErrorType: SpecificErrorType,
      payload: payload,
      responseObject: 'property',
      successActionType: SuccessType,
      uri: `${this.propertiesUrl}/delete`
    };
    return this.httpWrapperService.post(postParams);
  }


  private checkForClientDev(response:any){
   // because I am using api in memory for a gh page I am commenting this out
     if(environment.production ) {
        return response;
        //return Object.assign(response,{payload: <Property[]> response.payload['data'] } );
     }else{
        return Object.assign(response,{payload: <Property[]> response.payload['data'] } );
     }

  }


}
