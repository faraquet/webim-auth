function friendsGet(uid){
	$.ajax({
    url: 'http://api.vk.com/method/friends.get',
  	data: { user_id: uid, count: 5, fields: 'photo_200' },
    type: 'GET',
    dataType: 'jsonp',
    crossDomain: true,
    success: function(data){
	    var e = data.response;
		    $.each(e, function(index, value) {
				  var img=document.createElement("img");
				  console.log(value);
    			img.src=value.photo_200;
		    	img.id="friend" + index;
		    	img.class="img-rounded";
		    	document.getElementById("friends-list").appendChild(img);
				}); 
    }
});
}

function userGet(uid){
	$.ajax({
    url: 'http://api.vk.com/method/users.get',
  	data: { user_id: uid, fields: 'photo_200' },
    type: 'GET',
    dataType: 'jsonp',
    crossDomain: true,
    success: function(data){

	    var e = data.response;
			var img=document.createElement("img");
    	img.src=e[0].photo_200;
		  img.class="img-rounded";
		  document.getElementById("avatar").appendChild(img);
		  friendsGet(uid);
    }
});

}

$(document).ready(function(){

});