function hidefields(fields) {
    for (i = 0; i < fields.length; i++) {
        $(fields[i]).hide();
    }
}

//function renderResponse(i, len, data) {
//    setTimeout(function () {
//        count = i + 1;
//        total = len - 1;
//        message = data.name;
//        value = data.status;
//        if (i != len - 1) {
//            $("#progress-msg").html($("#progress-msg").html() + 'Step ' + count.toString() + ' of ' + total.toString() + "... " + message + '</span>');
//        }
//        setTimeout(function () {
//            if (i == len - 1) {
//                if (value == "passed" || value == "done") {
//                    $("#progress-msg").html($("#progress-msg").html() + "Success! The certificate has been verified.");
//                    $("#verified").show();
//                }
//                else {
//                    $("#progress-msg").html($("#progress-msg").html() + "Oops! The certificate could not be verified.");
//                    $("#not-verified").show();
//                }
//            }
//            else {
//                $("#progress-msg").html($("#progress-msg").html() + ' [' + markMappings[value] + ']<br>')
//            }
//        }, 1000);
//    }, timeDelay * i);
//}
function renderResponse(i, len, data,progress) {
    return new Promise(resolve=>{
        setTimeout(function () {
        count = i + 1;
        total = len - 1;
        message = data.name;
        value = data.status;
        if (i != len - 1) {
            $("#progress-msg").html($("#progress-msg").html() + 'Step ' + count.toString() + ' of ' + total.toString() + "... " + message + '</span>');
        }
        setTimeout(function () {
            if (i == len - 1) {
                if (value == "passed" || value == "done") {
                    $("#progress-msg").html($("#progress-msg").html() + "Success! The certificate has been verified.");
                    $("#verified").show();
                }
                else {
                    $("#progress-msg").html($("#progress-msg").html() + "Oops! The certificate could not be verified.");
                    $("#not-verified").show();
                }
            }
            else {
                $("#progress-msg").html($("#progress-msg").html() + ' [' + markMappings[value] + ']<br>')
            }
            var updateP = (i+1)*(1/len);
            console.log("updateP "+updateP);
            resolve(updateP);//return progress time//previous pos of resolve
        }, 100);//1000
//    resolve(progress);//return progress time
    }, timeDelay * i);
    });
}

timeDelay = 100;//2000
markMappings = {"passed": "PASS", "failed": "FAIL", "done": "DONE", "not_started": "NOT STARTED"};

//$(document).ready(function () {
//    $("#verify-button").click(function () {
//        hidefields(["#not-verified", "#verified"]);
//        $("#progress-msg").html("");
//        var data = $(this).attr('value');
//        var uid = JSON.parse(data.replace(/'/g, '"')).uid;
//        $.get("/verify/" + uid, function (res) {
//            res = JSON.parse(res);
//            $("#progress-msg").show();
//            if (res == null) {
//                $("#progress-msg").html($("#progress-msg").html() + "Oops! There was an issue connecting to the Blockchain.info API")
//            }
//            else {
//                for (i = 0; i < res.length; i++) {
//                    renderResponse(i, res.length, res[i])//print one step at a time
//                }
//            }
//        });
//    });
//});