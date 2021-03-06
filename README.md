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
   * [x] What data will we store? (Technician Schema)
* [x] Setup Mongoose model(s)
* [x] POST /technician
* [x] Create a new technician entry
* [x] GET /technician
* [x] UPDATE /id
* [x] DELETE /id
   * List all technician entries

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


* [] Setup Client 
* [] Create Form to add a new technician
* [] Setup Map SDK on Client
* [] List all technician entries on map

* [] Create project in Heroku
* [] Upload project to Heroku
* [] Publish project



## ENDPOINTS/URLS/API calls

# Technician

#### Create a technician
* on local machine     http://localhost:1337/meko/api/v1/technicianendpoints

#### Get all technicians
* on local machine     http://localhost:1337/meko/api/v1/technicianendpoints

#### Get a technician
* on local machine     http://localhost:1337/meko/api/v1/technicianendpoints/602d249ed5d67318a411022d

#### Update a technician
* on local machine     http://localhost:1337/meko/api/v1/technicianendpoints/602d249ed5d67318a411022d

#### Delete a technician
* on local machine     http://localhost:1337/meko/api/v1/technicianendpoints/602d249ed5d67318a411022d


# Customer

#### Create a customer
* on local machine     http://localhost:1337/meko/api/v1/customerendpoints

#### Get all customers
* on local machine     http://localhost:1337/meko/api/v1/customerendpoints

#### Get a customer
* on local machine     http://localhost:1337/meko/api/v1/customerendpoints/_id

#### Update a customer
* on local machine     http://localhost:1337/meko/api/v1/customerendpoints/_id

#### Delete a customer
* on local machine     http://localhost:1337/meko/api/v1/customerendpoints/_id