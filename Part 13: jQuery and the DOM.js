$(document).ready(function () {
  var back = ["#ff0000","#008000","#0000ff"];
  var color = back[Math.floor(Math.random() * back.length)];
  color = color.substring(1);           
  color = parseInt(color, 16);          
  color = 0xFFFFFF ^ color;             
  color = color.toString(16);           
  color = ("000000" + color).slice(-6);
  color = "#" + color;     
  $('div').css('background',color);
});

