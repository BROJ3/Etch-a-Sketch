function addElement() {

  const workingSpace = document.getElementById("container");
  workingSpace.style.paddingInline = "10%"


  // loop to make 16 rows
  for (let i=0;i < 15; i++) {

    //define each row
    const row = document.createElement("div");
    row.className = "row"
    row.style.height = "20px";
    row.style.width = "20px";

    //define flex
    row.style.display = "flex"
    row.style.flexWrap = "wrap"
    row.style.flexDirection = "column"

    //for each row, define 16 columns
    for (let j=0;j<15;j++) {
        const pixel = document.createElement("div")
        pixel.className = "gridSquare"
        pixel.style.height = "20px";
        pixel.style.width = "20px";
        pixel.style.border = "1px solid black"

        //append the column to row
        row.appendChild(pixel)

    }
    //create the row
    workingSpace.appendChild(row);

   

  }

}

document.body.onload = addElement;

function genDivs(v){ 
    var e = document.body; // whatever you want to append the rows to: 
    for(var i = 0; i < v; i++){ 
      var row = document.createElement("div"); 
      row.className = "row"; 
      for(var x = 1; x <= v; x++){ 
          var cell = document.createElement("div"); 
          cell.className = "gridsquare"; 
          cell.innerText = (i * v) + x;
          row.appendChild(cell); 
      } 
      e.appendChild(row); 
    } 
    document.getElementById("code").innerText = e.innerHTML;

  }