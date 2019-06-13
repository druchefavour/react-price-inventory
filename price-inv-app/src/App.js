import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-bootstrap.css';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class App extends Component {
  constructor (props) {
    super(props);
    
    // Define  initial state of the grid columns and rows 
    this.state = {
      columnDefs: [
        {
          headerName: "Target",
          field: "target",
          sortable: true, 
          filter: true 
        },
        {
          headerName: "Status Code",
          field: "statusCode",
          sortable: true, 
          filter: true 
        },
        {
          headerName: "Start Date",
          field: "startDate",
          sortable: true, 
          filter: true 
        },
        {
          headerName: "End Date",
          field: "endDate",
          sortable: true, 
          filter: true 
        },
        {
          headerName: "YTD Amount ($)",
          field: "ytdAmt", 
          sortable: true, 
          filter: true 
        },
        {
          headerName: "Update TimeStamp",
          field: "updatedTimeStamp",
          sortable: true, 
          filter: true 
        },
      ],
      rowData: [
        {
          target:"OP", statusCode: "L101", startDate: "05/11/2011", endDate: "12/31/2022", ytdAmt: 230000, updatedTimeStamp:"05/11/2011"
        },
        {
          target:"LP", statusCode: "L105", startDate: "06/11/2011", endDate: "12/31/2022", ytdAmt: 530000, updatedTimeStamp:"06/11/2011"
        },
        {
          target:"OP", statusCode: "L110", startDate: "06/16/2011", endDate: "12/31/2022", ytdAmt: 640000, updatedTimeStamp:"06/16/2011"
        },
        {
          target:"IP", statusCode: "L105", startDate: "05/11/2012", endDate: "12/31/2022", ytdAmt: 1230000, updatedTimeStamp:"05/11/2012"
        },
        {
          target:"OP", statusCode: "L101", startDate: "05/19/2012", endDate: "12/31/2022", ytdAmt: 120000, updatedTimeStamp:"05/19/2012"
        },
        {
          target:"OP", statusCode: "L101", startDate: "10/11/2012", endDate: "12/31/2022", ytdAmt: 240000, updatedTimeStamp:"10/11/2012"
        },
        {
          target:"LP", statusCode: "L105", startDate: "01/01/2013", endDate: "12/31/2022", ytdAmt: 270000, updatedTimeStamp:"01/01/2013"
        },
        {
          target:"LP", statusCode: "L110", startDate: "02/11/2013", endDate: "12/31/2022", ytdAmt: 650000, updatedTimeStamp:"02/11/2013"
        },
        {
          target:"ZP", statusCode: "L105", startDate: "04/05/2013", endDate: "12/31/2022", ytdAmt: 740000, updatedTimeStamp:"04/05/2013"
        },
        {
          target:"IP", statusCode: "L101", startDate: "02/11/2017", endDate: "12/31/2022", ytdAmt: 830000, updatedTimeStamp:"02/11/2017"
        },
        {
          target:"LP", statusCode: "L101", startDate: "05/08/2017", endDate: "12/31/2022", ytdAmt: 810000, updatedTimeStamp:"05/08/2017"
        },
        {
          target:"OP", statusCode: "L101", startDate: "05/11/2017", endDate: "12/31/2022", ytdAmt: 970000, updatedTimeStamp:"05/11/2017"
        },
        {
          target:"LP", statusCode: "L110", startDate: "12/11/2017", endDate: "12/31/2022", ytdAmt: 410000, updatedTimeStamp:"12/11/2017"
        },
        {
          target:"IP", statusCode: "L110", startDate: "12/31/2017", endDate: "12/31/2022", ytdAmt: 300000, updatedTimeStamp:"12/31/2017"
        },
        {
          target:"IP", statusCode: "L105", startDate: "01/01/2018", endDate: "12/31/2022", ytdAmt: 360000, updatedTimeStamp:"01/01/2018"
        },
        {
          target:"OP", statusCode: "L101", startDate: "02/11/2018", endDate: "12/31/2022", ytdAmt: 260000, updatedTimeStamp:"02/11/2018"
        },
        {
          target:"ZP", statusCode: "L101", startDate: "03/11/2018", endDate: "12/31/2022", ytdAmt: 150000, updatedTimeStamp:"03/11/2018"
        },
        {
          target:"ZP", statusCode: "L105", startDate: "05/12/2018", endDate: "12/31/2022", ytdAmt: 540000, updatedTimeStamp:"03/11/2018"
        },
        {
          target:"ZP", statusCode: "L105", startDate: "01/11/2019", endDate: "12/31/2022", ytdAmt: 860000, updatedTimeStamp:"01/11/2019"
        },
        {
          target:"IP", statusCode: "L101", startDate: "01/30/2019", endDate: "12/31/2022", ytdAmt: 730000, updatedTimeStamp:"01/30/2019"
        },
        {
          target:"OP", statusCode: "L105", startDate: "03/11/2019", endDate: "12/31/2022", ytdAmt: 430000, updatedTimeStamp:"03/11/2019"
        },
        {
          target:"LP", statusCode: "L101", startDate: "05/10/2019", endDate: "12/31/2022", ytdAmt: 1400000, updatedTimeStamp:"05/10/2019"
        },
        {
          target:"OP", statusCode: "L101", startDate: "05/20/2019", endDate: "12/31/2022", ytdAmt: 290000, updatedTimeStamp:"05/20/2019"
        },
        {
          target:"LP", statusCode: "L101", startDate: "06/01/2019", endDate: "12/31/2022", ytdAmt: 560000, updatedTimeStamp:"06/01/2019"
        },
        {
          target:"ZP", statusCode: "L110", startDate: "06/11/2019", endDate: "12/31/2022", ytdAmt: 1530000, updatedTimeStamp:"06/11/2019"
        }

      ]
    }
  }
  render() {
    return (
      <div>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div 
          className="ag-theme-bootstrap"
          style={{ 
          height: '500px', 
          width: '600px' }} 
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}>
          </AgGridReact>
        </div>
      </div>
      
    );
  }
}

export default App;
