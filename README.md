### TODO node

* [x] Setup Server
   * [x] Install Dependecies
    -express
    -cors
    -morgan
    -helmet
    -dotenv
    -nodemon
   * [x] Install /Setup Linter
    - npm i -D eslint /install
    - setup: "lint": "eslint src/"
    - initialize lint: npx eslint --init 
   * [x] Setup express 
   * [x] Setup Not Found and Error Middlewares (routes)
#### Technician
* [x] Model DB
   * [] What data will we store? (Technician Schema)
* [x] Setup Mongoose model(s)
* [x] POST /technician
* [x] Create a new technician entry
* [x] GET /technician
* [x] UPDATE /id
* [x] DELETE /id
   * List all technician entries

* [x] Setup Client 
* [x] Create Form to add a new technician
* [x] Setup Map SDK on Client
* [x] List all technician entries on map

#### Customer
   * [x] Model DB
   * [x] What data will we store? (Customer Schema)
* [x] Setup Mongoose model(s)
* [x] POST /customer
* [x] Create a new customer entry
* [x] GET /customer
* [x] UPDATE /id
* [x] DELETE /id
   * List all customer entries


* [x] Fix security threats/issues with npm audit fix

* [] Setup Client 
* [] Create Form to add a new technician
* [] Setup Map SDK on Client
* [] List all customer entries on map

## ENDPOINTS/URLS/API calls

#### Query all the Technicians in the Database
* on local machine     http://localhost:1337/meko/api/v1/technicianendpoints

#### Query all the customers in the Database
* on local machine     http://localhost:1337/meko/api/v1/customerendpoints