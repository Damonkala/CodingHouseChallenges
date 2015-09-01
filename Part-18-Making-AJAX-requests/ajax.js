
$(document).ready(init);


function init(){
  $("#addCard").click(addCardHandeler);
}

function addCardHandeler(){
$.get("http://api.github.com/users/damonkala")
  //$.ajax("http://httpbin.org/post",{
  //       type: "POST",
 //        data: {thing: "something"}
 //        })
  .done(function(data, status){
    console.log("data",data);
    console.log("status",status);
  })
  .fail(function(data, status){
    console.log("data",data);
    console.log("status",status);
  });

}

function makeCard(data) {
  var $card = $('<div>').addClass('card');
  var $avatar = $('<img>').attr('src', data.avatar_url);
  var $name = $('div').text(data.name);
  $card.append($avatar).append($name);
  return($card);
}
