//Make connection

var socket=io.connect("http://localhost:3000");

//Query Dom

var message=document.getElementById('message');
    btn=document.getElementById('send'),
    handle=document.getElementById('handle'),
	feedback=document.getElementById("feedback");
    
//Event Emitter
  btn.addEventListener('click',function(){
	  var name = document.cookie.replace(/(?:(?:^|.*;\s*)user\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	 
	socket.emit('chat',{
		message:message.value,
		name:name
	});  
  });

  message.addEventListener('keypress',function(){
	  var name=$("#user-name").val()
	  var user=(name)?name:"testUser"
	  socket.emit('typing',user);
  })
  
  //Event listener
  
  socket.on('chat',function(data){
	  $("#user-name").val("");
	  $("#message").val("");
	  $("#feedback").html("")
	  var user=(data.name)?data.name:"testUser"
	  $(".messages-content").append("<p><strong>"+user+"</strong>: "+data.message +"</p></br>"); 
	  
  })
  
  socket.on('typing',function(data){
	  $("#feedback").html("<p><em>"+data+"</em> is typing</p>");
  })