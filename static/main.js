$(document).ready(function(){
  console.log("jQuery loaded, main.js loaded.")
  $('form').submit(function(event){
    event.preventDefault();
    var data=$(this).serialize();
    console.log(data)
    $.post('/results2',data,function(json,error){
      console.log('json here', json,error);
      console.dir(json);
      $('#table').html(`<p>Name:${json.name}</p>`)
    });
  });
});
