function friendsGet(uid) {
    $.ajax({
        url: 'http://api.vk.com/method/friends.get',
        data: {user_id: uid, count: 5, fields: 'photo_200', order: 'random'},
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        success: function (data) {
            var e = data.response;
            $.each(e, function (index, value) {
                var div = document.createElement("div");
                div.className = "friend";
                var span = document.createElement("span");
                var img = document.createElement("img");
                span.textContent = value.first_name + " " + value.last_name;
                if (typeof value.photo_200 !== "undefined") {
                    img.src = value.photo_200;
                } else {
                    img.src = "/assets/images/no-avatar.png";
                }
                img.width = 200;
                img.height = 200;
                img.id = "friend" + index;
                img.className = "img-rounded";
                div.appendChild(img);
                div.appendChild(span);
                document.getElementById("friends-list").appendChild(div);
            });
        }
    });
}

function userGet(uid) {
    $.ajax({
        url: 'http://api.vk.com/method/users.get',
        data: {user_id: uid, fields: 'photo_200'},
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        success: function (data) {
            var e = data.response;
            var img = document.createElement("img");
            if (typeof e[0].photo_200 !== "undefined") {
                img.src = e[0].photo_200;
            } else {
                img.src = "/assets/images/no-avatar.png";
            }
            img.id = "user-avatar";
            img.className = "img-thumbnail";
            img.width = 200;
            document.getElementById("avatar").appendChild(img);
            friendsGet(uid);
        }
    });

}

$(document).ready(function () {
});
