#   PRICE INVENTORY REACT APPLICATION
## OBJECTIVE
A simple react application that displays table of price inventory for a stationery store. 

## TECH STACK
1. ReactJS
2. ag-grid
3. npm
4. NodeJS
5. JSON
6. Twitter Bootstrap
7. HTML5
8. CSS3
9. ES5/ES6
10. Babel
11. Typescript
12. Git (Git Bash)
13. Github

## PROCESS
###  Step 1: 
Use npx create-react-app price-inv-app to scaffold a new app which is stored in the directory price-inv-app. 

### Step 2:
Add ag-Grid NPM packages to install ag-Grid and the React wrapper in the application. This will enable us create a table to display the price inventories.
[npm install --save ag-grid-community ag-grid-react]

### Step 3:
Create three children components (DefaultHeader: Containing the Navigation Functionalties. DateComponent: For filtering using Datepicker and AppTable: Containing the Grid Column Definition and the Grid Row Information). Render the view.

### Step 4:
Edit src/App.js. Import the three children components. Render the view.

## STYLING
Consume React Bootstrap via the npm package which you can install with npm. We also install vanilla bootstrap.
[npm install react-bootstrap bootstrap]

## Table Functionalties

1. Ability to display data from any database - Connection to database is disabled and row data is hardcoded
2. Ability to Add new data (New Rows)
3. Ability to edit rows
4. Ability to update rows
5. Ability to export data to excel.
6. Pagination
7. Filtering capability

The routing to Group, Support and Cart is disabled in this prototype.

## RUNNING THE SCRIPT
In the project directory, run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.