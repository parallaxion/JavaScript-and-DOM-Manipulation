//from 'data.js'

var tableData = data;

function render(){
    event.preventDefault()
    
}

function fupdate(){
   // i = 0
    var oldlen = document.getElementById("ufo-table").rows.length;
    console.log("oldlen = " + oldlen)
   // document.getElementById("tablebod").innerHTML = ""
    //for (j = 0; j < oldlen; j++){
        //console.log(j)
        //console.log(document.getElementById("ufo-table").rows[j].innerHTM)
        //document.getElementById("ufo-table").deleteRow(j);
    //}
    var Parent = document.getElementById('ufo-table');

    while(Parent.hasChildNodes())
    {
        Parent.removeChild(Parent.firstChild);

    }
    Parent.innerHTML = `<thead>
    <tr>
      <th >Date</th>
      <th >City</th>
      <th >State</th>
      <th>Country</th>
      <th >Shape</th>
      <th >Duration</th>
      <th >Comments</th>
    </tr>
  </thead>
  <tbody ></tbody>`
    filch = document.getElementById("datetime").value;
 //location.reload();
    //alert(filch)
    maketable(filch);

}



function maketable(filch='') {
    //alert(filch)
    i = 0
for (record in tableData) {
    i++
    // Find a <table> element with id="myTable":
    var table = document.getElementById("ufo-table");

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(1);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    
    console.log("Item " + filch)
    if (tableData[record].datetime == filch || filch == ''){
   console.log(tableData[record].datetime)
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
   // console.log(record)
    // Add some text to the new cells:

    cell1.innerHTML = tableData[record].datetime
    cell2.innerHTML = tableData[record].city
    cell3.innerHTML = tableData[record].state
    cell4.innerHTML = tableData[record].country
    cell5.innerHTML = tableData[record].shape
    cell6.innerHTML = tableData[record].durationMinutes
    cell7.innerHTML = tableData[record].comments
    }
    // YOUR CODE HERE!
}

}
maketable()