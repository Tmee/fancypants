$(document).ready(function(){

});

function getInstagramPics(keyword){
  $.ajax({
    method: 'GET',
    url: "https://api.instagram.com/v1/tags/" + keyword + "/media/recent?client_id="+instagramKey
  }).done(function(response){
    var pics = JSON.parse(response.data.body).data;
    return pics;
  });
}
