document.addEventListener('DOMContentLoaded', function() {
     var count;
     var totData = document.getElementsByClassName('loadAbstract').length;
     for (count = 0; count < totData; count++) {
        document.querySelector("#user-req-abs-"+count).style.display = "none";
      }
    var newcount;
    $(".loadAbstract").click(function() {
        var myid = $(this).attr('id');
        newcount = document.querySelector("#"+myid).dataset.count;
        if (document.querySelector("#user-req-abs-"+newcount).style.display == "none") {
            loadAbstract(newcount)
            } else {
            hideAbstract(newcount)
            }
    });

    $("#restUploadState").click(function() {
        document.querySelector(".loader").style.display = "block";
    });
    $(".likeclick").click(function() {
        var myid = $(this).attr('id');
        newcount = document.querySelector("#"+myid).dataset.count;
        document.querySelector("#loader2-"+newcount).style.display = "block";
        document.querySelector("#"+myid).style.display = "none";
    });
    

});



function loadAbstract(count) {
    document.querySelector("#user-req-abs-"+count).style.display = "block";
}
function hideAbstract(count) {
    document.querySelector("#user-req-abs-"+count).style.display = "none";
}

