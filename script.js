// Select color input
let inputHeight, inputWidth, colorInput, table, tr, td;

// Select size input
 
// When size is submitted by the user, call makeGrid()

function makeGrid(evt) {
    // Your code goes here!
    
    evt.preventDefault();
    inputHeight = $('#input_height').val();

    inputWidth = $('#input_width').val();

    table = $('#pixel_canvas');
    console.log(inputHeight, inputWidth, colorInput);
     for(let x = 0; x <= inputHeight; x++){
        tr = $("<tr></tr>");
         for(let y = 0; y <= inputWidth; y++){ 
            tr.append("<td></td>");
         }
         table.append(tr)
     }
  }

  table = $('#pixel_canvas').on('click', 'td', function(e){
    colorInput = $('#colorPicker').val();
    e.preventDefault();
    $(this).css('background-color', colorInput);
  })


const sizePicker = document.getElementById('sizePicker');

sizePicker.addEventListener('submit', makeGrid);
