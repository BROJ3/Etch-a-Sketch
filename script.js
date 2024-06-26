function addElement() {

  const workingSpace = document.getElementById("container");
  workingSpace.style.paddingInline = "10%"
  const inputValue = document.querySelector('#item');
  const btn = document.querySelector('#grid')

  //mark rows existing after DOm loads
  demoRow = document.getElementsByClassName('row')


  btn.addEventListener('click', function (e) {
    const listValue = inputValue.value;

    console.log(listValue);
    console.log(demoRow)

    /* STRATEGY
    
    We have a grid of rows with units created at loading
    
    ONLY AFTER THAT
    
    create new grid
    
    */

    if (parseInt(inputValue.value) >= 10 && parseInt(inputValue.value) <= 50) {

      //after the button with input is pressed we want

      //for each row that exists AKA while a row exists
      while (demoRow.length > 0) {

        // delete row
        demoRow[0].remove();

      }


      //following code will create the new grid


      // loop to make new rows


      for (let i = 0; i < inputValue.value; i++) {

        let temporaryInput = 16;
        //define each row
        const row = document.createElement("div");
        row.className = "row"
        row.style.height = 450 / parseInt(inputValue.value) + "px"
        row.style.width = "450px"

        //define flex
        row.style.display = "flex"
        row.style.flexWrap = "wrap"
        row.style.flexDirection = "column"

        //for each row, define 16 columns
        for (let j = 0; j < inputValue.value; j++) {

          const pixel = document.createElement("div")

          pixel.className = "gridSquare"

          //pixel.style.width = row.style.width/pixel.style.width; maybe unnecessary
          pixel.style.height = row.style.height;
          pixel.style.border = "1px solid black"

          //append the column to row
          row.appendChild(pixel)


          // Add a mouseover event listener
          pixel.addEventListener('mouseover', () => {
            // Change the button's background color
            pixel.style.backgroundColor = 'black';
          });

          const clearButton = document.getElementById("clearMe");
          clearButton.addEventListener('click', () => {
            // Change the button's background color
            pixel.style.backgroundColor = 'white';
          });


        }
        //create the row

        workingSpace.appendChild(row);

      }

    } else {
      alert("Select number between 10 and 50")
      console.log(inputValue.value)

    }
    inputValue.value = '';

    inputValue.focus();

  });

  let temporaryInput = 16;

  for (let i = 0; i < temporaryInput; i++) {


    //define each row
    const row = document.createElement("div");
    row.className = "row"
    row.style.height = 450 / temporaryInput + "px"
    row.style.width = "450px"

    //define flex
    row.style.display = "flex"
    row.style.flexWrap = "wrap"
    row.style.flexDirection = "column"

    //for each row, define 16 columns
    for (let j = 0; j < temporaryInput; j++) {
      const pixel = document.createElement("div")
      pixel.className = "gridSquare"
      //pixel.style.width = row.style.width/pixel.style.width;
      pixel.style.height = row.style.height;
      pixel.style.border = "1px solid black"

      //append the column to row
      row.appendChild(pixel)


      // Add a mouseover event listener
      pixel.addEventListener('mouseover', () => {
        // Change the button's background color
        pixel.style.backgroundColor = 'black';
      });

      const clearButton = document.getElementById("clearMe");
      clearButton.addEventListener('click', () => {
        // Change the button's background color
        pixel.style.backgroundColor = 'white';
      });


    }
    //create the row
    workingSpace.appendChild(row);



  }


}


document.body.onload = addElement;

