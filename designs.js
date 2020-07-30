function makeGrid() {
  event.preventDefault();

  var height = document.getElementById("inputHeight").value;
  var width = document.getElementById("inputWidth").value;
  var table = document.getElementById('pixelCanvas');

  table.innerHTML = null;

  for (var i = 0; i < height; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < width; j++) {
      var td = document.createElement('td');
      td.onclick = handleClick;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

function handleClick() {
  var color = document.getElementById("colorPicker").value;
  event.target.style.backgroundColor = color;
}