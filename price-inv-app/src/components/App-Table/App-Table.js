import React, { Component } from 'react';
import './App-Table.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-bootstrap.css';
import "ag-grid-enterprise";
import * as moment from "moment";
import DateComponent from './../Date-Component/Date-Component';

class AppTable extends Component {
  constructor (props) {
    super(props);
    
    // Define  initial state of the grid columns and rows 
    this.state = {
      columnDefs: [
        {
          headerName: "Target",
          field: "target",
          sortable: true, 
          filter: true,
          editable: true,
          cellEditor: "agSelectCellEditor",
          cellEditorParams: {
            values: [
              "IP",
              "LP",
              "OP",
              "ZP",
            ] 
          },
          maxWidth:70
        },
        {
          headerName: "Status Code",
          field: "statusCode",
          sortable: true, 
          filter: true,
          editable: true,
          filter: "agSetColumnFilter",
          cellEditor: "agSelectCellEditor",
          cellEditorParams: {
            values: [
              "L101",
              "L105",
              "L110",
            ]  
          }
        },
        {
          headerName: "Start Date",
          field: "startDate",
          sortable: true, 
          editable: true,
          filter: "agDateColumnFilter",
          filterParams: {
            comparator: function(filterLocalDateAtMidnight, cellValue) {
              var dateAsString = cellValue;
              var dateParts = dateAsString.split("/");
              var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
              if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
                return 0;
              }
              if (cellDate < filterLocalDateAtMidnight) {
                return -1;
              }
              if (cellDate > filterLocalDateAtMidnight) {
                return 1;
              }
            }
          }
        },
        {
          headerName: "End Date",
          field: "endDate",
          sortable: true, 
          editable: true, 
          filter: "agDateColumnFilter",
          filterParams: {
            comparator: function(filterLocalDateAtMidnight, cellValue) {
              var dateAsString = cellValue;
              var dateParts = dateAsString.split("/");
              var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
              if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
                return 0;
              }
              if (cellDate < filterLocalDateAtMidnight) {
                return -1;
              }
              if (cellDate > filterLocalDateAtMidnight) {
                return 1;
              }
            }
          },
        },
        {
          headerName: "YTD Amount",
          field: "ytdAmt", 
          sortable: true, 
          filter: true,
          editable: true, 
          valueFormatter: currencyFormatter,
          cellClass: "number-cell",
        },
        {
          headerName: "Update TimeStamp",
          field: "updatedTimeStamp",
          sortable: true, 
          editable: true, 
          filter: "agDateColumnFilter",
          filterParams: {
            comparator: function(filterLocalDateAtMidnight, cellValue) {
              var dateAsString = cellValue;
              var dateParts = dateAsString.split("/");
              var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
              if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
                return 0;
              }
              if (cellDate < filterLocalDateAtMidnight) {
                return -1;
              }
              if (cellDate > filterLocalDateAtMidnight) {
                return 1;
              }
            }
          },
          valueFormatter: dateFormatter,
        },
      ],
      defaultColDef: { 
        filter: true,
      },
      paginationPageSize: 15, 
      
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

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    /*const httpRequest = new XMLHttpRequest();
    const updateData = data => {
      this.setState({ rowData: data });
    };*/
  }

  onBtExport() {
    var params = {
      fileName: document.querySelector("#fileName").value,
      sheetName: document.querySelector("#sheetName").value,
      exportMode: document.querySelector('input[name="mode"]:checked').value
    };
   this.gridApi.exportDataAsExcel(params);
  }

  getRowData() {
    var rowData = [];
    this.gridApi.forEachNode(function(node) {
      rowData.push(node.data);
    });
    console.log("Row Data:");
    console.log(rowData);
  }
  clearData() {
    this.gridApi.setRowData([]);
  }
  onAddRow() {
    var newItem = createNewRowData();
    var res = this.gridApi.updateRowData({ add: [newItem] });
    printResult(res);
  }
  addItems() {
    var newItems = [createNewRowData(), createNewRowData(), createNewRowData()];
    var res = this.gridApi.updateRowData({ add: newItems });
    printResult(res);
  }
  addItemsAtIndex() {
    var newItems = [createNewRowData(), createNewRowData(), createNewRowData()];
    var res = this.gridApi.updateRowData({
      add: newItems,
      addIndex: 2
    });
    printResult(res);
  }
  updateItems() {
    var itemsToUpdate = [];
    this.gridApi.forEachNodeAfterFilterAndSort(function(rowNode, index) {
      if (index >= 5) {
        return;
      }
      var data = rowNode.data;
      data.price = Math.floor(Math.random() * 20000 + 20000);
      itemsToUpdate.push(data);
    });
    var res = this.gridApi.updateRowData({ update: itemsToUpdate });
    printResult(res);
  }
  onInsertRowAt2() {
    var newItem = createNewRowData();
    var res = this.gridApi.updateRowData({
      add: [newItem],
      addIndex: 0
    });
    printResult(res);
  }
  onRemoveSelected() {
    var selectedData = this.gridApi.getSelectedRows();
    var res = this.gridApi.updateRowData({ remove: selectedData });
    printResult(res);
  }

  refreshData() {
    window.location.reload();
  }

  render() {
    return (
      <div style={{ maxWidth: "100%", maxHeight: "100%" }}>
        <div className="topContainer">
          <label>
            <input type="text" id="fileName" placeholder="export" />
          </label>
          <label>
            <input type="text" id="sheetName" placeholder="ag-grid" maxLength="31" />
          </label>
          
          <label className="xlsMode">
            <input type="radio" name="mode" value="xlsx" id="xlsxMode" checked="true" />
            <label for="xlsx">.xlsx</label>
            <input type="radio" name="mode" id="xmlMode" value="xml" />
            <label for="xml">.xml</label>
          </label>
          <label>
            <button className="btnClass" onClick={this.onBtExport.bind(this)}>Export to Excel</button>
          </label>
            <button className="btnClass" onClick={this.onInsertRowAt2.bind(this)}>Insert Row</button>
            <button className="btnClass" onClick={this.updateItems.bind(this)}>Update First 5</button>
            <button className="btnClass" onClick={this.onRemoveSelected.bind(this)}>Remove Selected</button>
            <button className="btnClass" onClick={this.getRowData.bind(this)}>Get Row Data</button>
            <button className="btnClass" onClick={this.clearData.bind(this)}>Clear Data</button>
            <button className="btnClass" onClick={this.refreshData.bind(this)}>Refresh</button>
        </div>
        <div 
          className="ag-theme-bootstrap"
          style={{ 
          height: '75vh', 
          width: '90vw',
          marginLeft: '5vw' }} 
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            onGridReady={this.onGridReady}
            animateRows={true}
            defaultColDef={this.state.defaultColDef}
            floatingFilter={true}
            pagination={true}
            paginationPageSize={this.state.paginationPageSize}
            >
          </AgGridReact>
        </div>
        </div>
    );
  }
}
function getBooleanValue(cssSelector) {
  return document.querySelector(cssSelector).checked === true;
}

var newCount = 1;
function createNewRowData() {
  var newData = {
    target: "",
    statusCode: "",
    startDate: moment().format('L'),
    endDate: moment().format('L'),
    ytdAmt: 0,
    updatedTimeStamp: moment().format('LLLL')
  };
  newCount++;
  return newData;
}
function printResult(res) {
  console.log("---------------------------------------");
  if (res.add) {
    res.add.forEach(function(rowNode) {
      console.log("Added Row Node", rowNode);
    });
  }
  if (res.remove) {
    res.remove.forEach(function(rowNode) {
      console.log("Removed Row Node", rowNode);
    });
  }
  if (res.update) {
    res.update.forEach(function(rowNode) {
      console.log("Updated Row Node", rowNode);
    });
  }
} 
function currencyFormatter(params) {
  return "\xA3" + formatNumber(params.value);
}
function formatNumber(number) {
  return Math.floor(number)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

function dateFormatter(params) {
  return moment(params.value).format('LLLL');
}

export default AppTable;
