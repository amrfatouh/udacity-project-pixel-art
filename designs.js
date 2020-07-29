var spans = [];

function makeGrid() {
  event.preventDefault();

  if(spans != []) {
    
  }

  var height = document.getElementById("inputHeight").value;
  var width = document.getElementById("inputWidth").value;

  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      var span = document.createElement('span');
      span.onclick = handleClick;
      document.body.appendChild(span);
      spans.push(span);
    }
    document.body.appendChild(document.createElement('br'));
  }
}

function handleClick() {
  var color = document.getElementById("colorPicker").value;
  event.target.style.backgroundColor = color;
}