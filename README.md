# rs-property-work
#### A simple Grid showing housing stock


## Architecture:

###  From src/app/

####  app-stage
Contains the main bootstrapping process (intializing and aggregation of modules)

####  business-layer
 Here is where cross cutting servies and proces are store. ( I take CrossCutting to be servies share by both
 the  **view-layer** and  **data-layer** or by components with in the visual layer (Not for communicating
 between components only for DRY process)

##### PubSub-broker / brokerage:
 use to seed view-components with an observable to the redux/store

##### share-types & models & helpers:
schemas shared between veiw and data layers
##### validators:
validation of view component inputs


####  data-layer

##### api-services:
http wrapper around basic CRUD ( GET POST PUT DELETE), Implemented by particular
app models ( in this case properties)

 **Of note:**  To Keep things from getting to funky I have created a **Mock** set up
 using angular ** in.memory.data.service**. While I have set up a call to the url,
 it does not actually pull date from server, but grabs the properties data from

 **src/app/data-layer/api-services/mock/property.in.mem.data.service.ts**
      local property urlReturnData

 This services access as a proxy to live  backend. It allows for basic implementation
 of model manipulation as if it is on the server. ( Really just maintaining it in
 Local Storage).

##### ngrx-data:
 implements redux pattern around state model properties

####  view-layer

##### common-views:
     resusable components visual components containing html/css/js(TypeScript) could be
     packaged across multiple bundles with WebPack

##### modules-by-routes:
      views that may or may not aggregate visual compoents for a defined view. These represnet
       sinlgle purposeful view off the domain (sometimes called page views)
      html/css/js(TypeScript) could be   packaged across multiple bundles with WebPack





###  Code
   **Frame Work**
      Angular 4.3x
   **3rd party libraries**
      sass/angular material2 ui
   **node**
      v7.8.0

### How to build  and run locally


```
       $> git clone https://github.com/WillStreeter/rs-property-worrk.git

       $> npm install

       $> npm start
```

   By default angular app use port 4200 [http://localhost:4200](http://localhost:4200)