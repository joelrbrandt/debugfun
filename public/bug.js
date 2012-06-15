//bug.js

function doAjaxRequests() {
    var i;
    function successFunctionMaker(i) {
        return function (data) {
            $("#content").append("<p>sent: " + i + "<br />received: " + data + "</p>");
        };
    }
    for (i = 0; i < 5; i++) {
        $.ajax("/echo", {data: String(i),
                     success: successFunctionMaker(i),
                     contentType: "text/plain",
                     type: "POST"
                     });
    }
}

$(function () {
    $("#btn-go").click(function () {
        doAjaxRequests();
    });
});