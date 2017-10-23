/**
 * Created by willstreeter on 9/19/17.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InMemoryDbService,
         ParsedRequestUrl,
         RequestInfo,
         RequestInfoUtilities,
         ResponseOptions } from 'angular-in-memory-web-api/interfaces';

import { getStatusText, STATUS } from 'angular-in-memory-web-api/http-status-codes';

// tslint:disable:no-unused-variable
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import { PropertyModel} from '../../../business-layer/models';
import { Property } from './property.clone';



@Injectable()
export class PropertyInMemDataService implements InMemoryDbService {

  resultProperties: any;


  get(reqInfo: RequestInfo) {
      console.log('PropertyInMemDataService  get for reqInfo', reqInfo.resourceUrl);
      let callback = this.createDb;
      let xmlHttp = new XMLHttpRequest();
       xmlHttp.onreadystatechange = () => {
                       if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      console.log('PropertyInMemDataService  get for xmlHttp', xmlHttp);
                            this.resultProperties = JSON.parse(xmlHttp.response);
                              console.log('FROM JSON this.resultProperties', this.resultProperties);
                              callback(this.resultProperties)
                       }
       }
       xmlHttp.open("GET", 'http://dev1-sample.azurewebsites.net/properties.json', true); // true for asynchronous
       xmlHttp.send(null);
      // this.resultProperties =  fetch('http://dev1-sample.azurewebsites.net/properties.json')
      //  .then(data => {
      //     console.log('data', data);
      //          return  data['properties'];
      //  });
      setTimeout( function() {
          console.log('this.resultProperties', this.resultProperties);
        }, 3000);
  }

  put(reqInfo: RequestInfo) {
    let options:ResponseOptions;
    switch(reqInfo.id){
        case "update":
            const updateItem:Property  = new Property(reqInfo.req['body']);
            this.updateLocalStorageName('update', 'properties', updateItem );
            const data = updateItem;
            options = { body: { data }, status: STATUS.OK }
        break;
    }
     return reqInfo.utils.createResponse$(() => {
           return this.finishOptions(options, reqInfo)
     });
  }

  post(reqInfo: RequestInfo) {
    let options:ResponseOptions;
    switch(reqInfo.id){
      case "add":
          const newItem:any = Object.assign({},reqInfo.req['body'], {id:this.getLocalStorage('poperties').length,
                                                                     thumbnail:'/assets/images/mock-thumbs/bowtie-thumb.jpeg' } );
          const updateItem:Property  = new Property(newItem);
          this.updateLocalStorageName('add', 'properties', updateItem );
          const data = updateItem;
          options = { body: { data }, status: STATUS.OK }
      break;
    }
    return reqInfo.utils.createResponse$(() => {
         return this.finishOptions(options, reqInfo)
    });
  }



  createDb(reqInfo?: RequestInfo) {
      console.log('PropertyInMemDataService  createDb', this.resultProperties);

    const properties:Property[] =[
                  {
                      id: 1,
                      name: "Snapback Hat",
                      type: "Physical",
                      price: 20.99,
                      inventory: 12,
                      thumbnail: "/assets/images/mock-thumbs/snapback-hat.png"
                  },
                  {
                      id: 2,
                      name: "Maxi Dress - Floral",
                      type: "Physical",
                      price: 40.00,
                      inventory: 24,
                      thumbnail: "/assets/images/mock-thumbs/maxi-dress-floral.png"
                  },
                  {
                      id: 3,
                      name: "Maxi Dress - Vibrant",
                      type: "Physical",
                      price: 40.00,
                      inventory: 17,
                      thumbnail: "/assets/images/mock-thumbs/maxi-dress-vibrant.png"
                  },
                  {
                      id: 4,
                      name: "High Waist Jeans",
                      type: "Physical",
                      price: 45.99,
                      inventory: 9,
                      thumbnail: "/assets/images/mock-thumbs/super-highwasted.png"
                  },
                  {
                      id: 5,
                      name: "Grey Silk Blouse",
                      type: "Physical",
                      price: 35.00,
                      inventory: 33,
                      thumbnail: "/assets/images/mock-thumbs/grey-silk-blouse.png"
                  },
                  {
                      id: 6,
                      name: "White Silk Blouse",
                      type: "Physical",
                      price: 35.00,
                      inventory: 48,
                      thumbnail: "/assets/images/mock-thumbs/white-silk-blouse.png"
                  },
                  {
                      id: 7,
                      name: "Ribbed V-Neck Sweater",
                      type: "Physical",
                      price: 52.50,
                      inventory: 8,
                      thumbnail: "/assets/images/mock-thumbs/ribbed-crew-neck-sweater.png"
                  },
                  {
                      id: 8,
                      name: "Ribbed Crew Neck Sweater",
                      type: "Physical",
                      price: 52.50,
                      inventory: 9,
                      thumbnail: "/assets/images/mock-thumbs/ribbed-v-neck-sweater.png"
                  },
                  {
                      id: 9,
                      name: "Boat Neck Tee",
                      type: "Physical",
                      price: 25.80,
                      inventory: 53,
                      thumbnail: "/assets/images/mock-thumbs/ribbed-v-neck-sweater.png"
                  },
                  {
                      id: 10,
                      name: "Striped Crew Neck Tee",
                      type: "Physical",
                      price: 27.15,
                      inventory: 41,
                      thumbnail: "/assets/images/mock-thumbs/stripe-crew-neck-tee.png"
                  },
                  {
                      id: 11,
                      name: "Floral Striped Button Down Shirt",
                      type: "Physical",
                      price: 50.99,
                      inventory: 16,
                      thumbnail: "/assets/images/mock-thumbs/stripe-crew-neck-tee.png"
                  },
                  {
                      id: 12,
                      name: "Denim Jacket",
                      type: "Physical",
                      price: 80.80,
                      inventory: 4,
                      thumbnail: "/assets/images/mock-thumbs/denim-jacket.png"
                  }
              ];


      this.setLocalStorage('properties', properties)
      return {properties} ;
  }

  private finishOptions(options: ResponseOptions, {headers, url}: RequestInfo) {
    options.statusText = getStatusText(options.status);
    options.headers = headers;
    options.url = url;
    return options;
  }




  private updateLocalStorageName(type:string, collectionName:string , itemUpdate:any){
        let localCollection  = this.getLocalStorage(collectionName);
          if(type ==='update'){
              const updateCollection = localCollection.map(item => {
                                          if(item.id === itemUpdate.id){
                                              item = Object.assign({}, item, itemUpdate);
                                          }
                                   });
              this.setLocalStorage(collectionName, updateCollection)
          }else{

            localCollection = [...localCollection, itemUpdate]
             this.setLocalStorage(collectionName, localCollection)
          }

  }

  private setLocalStorage(itemName:string, colleciton:any){
     localStorage.setItem(itemName,  JSON.stringify(colleciton));
  }

  private getLocalStorage(itemName:string){
    return JSON.parse(localStorage.getItem(itemName)) || [];
  }
}