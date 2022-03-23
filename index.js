var filter1 = document.getElementsByClassName("filter1");
var logo1 =  document.getElementsByClassName("logo-img1");
var btn1 = document.getElementsByClassName("btn13");
var input1 = document.getElementsByClassName("input1");
var table = document.getElementsByClassName("table");
var logo = document.getElementsByClassName("logo-div");
var filter = document.getElementsByClassName("filter");
var input = document.getElementsByClassName("input");
var btn = document.getElementsByClassName("btn1");

function fillTable(data) {
    myTable = document.getElementById("result-table");
    for (index in data) {
      currentRow = myTable.insertRow(-1);
      var currentCell = currentRow.insertCell(-1);
      currentCell.innerHTML = data[index]["business_name"]
      var currentCell = currentRow.insertCell(-1);
      currentCell.innerHTML = data[index]["manager_name"]
      var currentCell = currentRow.insertCell(-1);
      currentCell.innerHTML = data[index]["business_trade_name"]
      var currentCell = currentRow.insertCell(-1);
      currentCell.innerHTML = data[index]["paid_capital"]
    }
  }
  
  
  function deleteTable() {
    const table = document.createElement('table')
    table.setAttribute('id', 'myTable')
    const tableHead = document.createElement('thead')
    const tableHeadRow = document.createElement('tr')
    const tableHeadData1 = document.createElement('th')
    tableHeadData1.innerHTML="CompanyName"
    const tableHeadData2 = document.createElement('th')
    tableHeadData2.innerHTML="ManagerName"
    const tableHeadData3 = document.createElement('th')
    tableHeadData3.innerHTML="Trade Name"
    const tableHeadData4 = document.createElement('th')
    tableHeadData4.innerHTML="Capital(ETB)"
    tableHeadRow.appendChild(tableHeadData1)
    tableHeadRow.appendChild(tableHeadData2)
    tableHeadRow.appendChild(tableHeadData3)
    tableHeadRow.appendChild(tableHeadData4)
    tableHead.appendChild(tableHeadRow)
    table.appendChild(tableHead)
    var new_tbody = document.createElement('tbody');
    new_tbody.id = "new-result-table"
    var old_tbody = document.getElementById("result-table")
    old_tbody.parentNode.replaceChild(new_tbody, old_tbody)
    new_tbody.id = "result-table"
    document.getElementById('myTable').remove()
    table.append(new_tbody)
    document.getElementsByClassName('container')[0].appendChild(table)
    if(document.getElementsByClassName('dataTables_wrapper')[0]){
      document.getElementsByClassName('dataTables_wrapper')[0].remove()
    }
  };
  
  document.getElementById("search-btn").onclick = function () {
    if (document.getElementById("search-category").value == "") {
      alert("Category need to be selected");
      return;
    };
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        returnData = JSON.parse(this.responseText);
        console.log(returnData);
        fillTable(returnData['data']);
        var filter1 = document.getElementsByClassName("filter1");
        var logo1 =  document.getElementsByClassName("logo-img1");
        var btn1 = document.getElementsByClassName("btn13");
        var input1 = document.getElementsByClassName("input1");
        var table = document.getElementsByClassName("table");
        var logo = document.getElementsByClassName("logo-div");
        var filter = document.getElementsByClassName("filter");
        var input = document.getElementsByClassName("input");
        var btn = document.getElementsByClassName("btn1");
        var thead1 = document.getElementsByClassName("thead1");
        for (var i=0; i<filter.length; i+=1) {
            filter[i].style.display="none"
        }
        for (var i=0; i<input.length; i+=1) {
            input[i].style.display="none"
        }
        for (var i=0; i<btn.length; i+=1) {
            btn[i].style.display="none"
        }
        for (var i=0; i<logo.length; i+=1) {
            logo[i].style.display="none"
        }
        for (var i=0; i<table.length; i+=1) {
            table[i].style.display="block"
        }
        for (var i=0; i<input1.length; i+=1) {
            input1[i].style.display="block"
        }
        for (var i=0; i<logo1.length; i+=1) {
            logo1[i].style.display="block"
        }
        for (var i=0; i<filter1.length; i+=1) {
            filter1[i].style.display="block"
        }
        for (var i=0; i<btn1.length; i+=1) {
            btn1[i].style.display="block"
        }
        
        $(document).ready(function () {
          console.log('READY')
          $('#myTable').DataTable()
          console.log($('#myTable'))
        });
        for (var i=0; i<thead1.length; i+=1) {
            thead1[i].style.display="block"
        }
        document.getElementById("search-category").value = ""
        document.getElementById("search-val").value = ""
      }
    };
    xhttp.open("POST", "http://test.tin.et/api/searchData", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    var category = document.getElementById("search-category").value
    var search = document.getElementById("search-val").value
    var lang = "en"
    var data = { 'operation': 'search', 'category': category, 'text': search, 'language': lang };
    deleteTable();
    xhttp.send(JSON.stringify(data));
  };

  document.getElementById("search-btn1").onclick = function () {
    if (document.getElementById("search-category1").value == "") {
      alert("Category need to be selected");
      return;
    };
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        returnData = JSON.parse(this.responseText);
        console.log(returnData);
        fillTable(returnData['data']);
        $(document).ready(function () {
          console.log('READY')
          $('#myTable').DataTable()
          console.log($('#myTable'))
        });
        document.getElementById("search-category1").value = ""
        document.getElementById("search-val1").value = ""
      }
    };
    xhttp.open("POST", "http://test.tin.et/api/searchData", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    var category = document.getElementById("search-category1").value
    var search = document.getElementById("search-val1").value
    var lang = "en"
    var data = { 'operation': 'search', 'category': category, 'text': search, 'language': lang };
    deleteTable();
    xhttp.send(JSON.stringify(data));
  };


