document.addEventListener('DOMContentLoaded', function() {
    // document.querySelector("#bangladesh_region").onclick = dobangladesh;
    // document.querySelector("#mekong_region").onclick = domekong;
    // document.querySelector("#taipei_region").onclick = dotaipei;

    
    var urlprefix = "https://raw.githubusercontent.com/nghia1991ad/nasa_photos/master/image_ready/";
    var urlList = [];
    var valuelist = [];
    index_vals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    time_vals = ['2011/07/15 08:49:27', '2011/07/15 08:59:10', '2011/07/15 09:08:27', '2011/07/15 11:09:14', '2011/07/15 14:49:00', '2011/07/25 15:52:03', '2011/07/25 17:29:43', '2011/07/25 21:37:30', '2011/07/27 21:21:58', '2011/07/27 21:25:05', '2014/07/29 23:13:46', '2015/06/28 20:27:37', '2015/08/28 16:29:06', '2015/11/22 20:19:52', '2015/12/12 05:51:28', '2016/01/30 07:49:20', '2016/03/21 16:02:52', '2016/06/01 14:02:01', '2016/06/17 08:24:31', '2016/06/20 06:34:21', '2016/06/30 09:06:08', '2017/06/15 22:21:54'];
    for (var i=0; i<index_vals.length;i++) {
        var filename = "img_heping_c0_"+index_vals[i]+".jpg";
        urlList.push(urlprefix+filename)
        valuelist.push(time_vals[i])
    }
    // console.log(urlList)
    
    $("#mysliderid").attr({
        "max" : valuelist.length - 1,        // substitute your own
        "min" : 0          // values (or variables) here
     });
    var slider = document.getElementById("mysliderid");
    var slidervalue = document.getElementById("slidervalue");
    
    slidervalue.innerHTML = valuelist[slider.value];
    var imageid = document.getElementById("imageid");
    imageid.src =  urlList[slider.value];

    slider.oninput = function() {
        slidervalue.innerHTML = valuelist[this.value];
        // console.log(this.value)
        document.getElementById("imageid").src =  urlList[this.value];
    }

    // Heping cluster 2
    var hep2_urlList = [];
    var hep2_valuelist = [];
    index_vals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    time_vals = ['2012/03/06 14:58:58', '2015/08/03 15:31:08', '2015/08/03 15:41:51', '2015/08/03 15:43:13', '2016/01/17 18:39:03', '2018/06/07 15:37:30', '2018/06/07 22:22:55', '2018/06/07 22:23:53', '2018/06/07 22:24:27', '2018/06/07 22:33:53', '2018/08/12 17:07:03', '2018/08/12 17:07:04', '2019/06/28 17:10:23'];
    for (var i=0; i<index_vals.length;i++) {
        var filename = "img_heping_c1_"+index_vals[i]+".jpg";
        hep2_urlList.push(urlprefix+filename)
        hep2_valuelist.push(time_vals[i])
    }

    $("#hep2_mysliderid").attr({
        "max" : hep2_valuelist.length - 1,        // substitute your own
        "min" : 0          // values (or variables) here
     });
    var hep2_slider = document.getElementById("hep2_mysliderid");
    var hep2_slidervalue = document.getElementById("hep2_slidervalue");
    
    hep2_slidervalue.innerHTML = hep2_valuelist[hep2_slider.value];
    var hep2_imageid = document.getElementById("hep2_imageid");
    hep2_imageid.src =  hep2_urlList[hep2_slider.value];

    hep2_slider.oninput = function() {
        hep2_slidervalue.innerHTML = hep2_valuelist[this.value];
        // console.log(this.value)
        document.getElementById("hep2_imageid").src =  hep2_urlList[this.value];
    }

    // Kenting cluster 1
    var ken1_urlList = [];
    var ken1_valuelist = [];
    index_vals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    time_vals = ['2012/02/02 06:58:28', '2012/02/02 07:25:52', '2012/02/02 07:40:45', '2012/10/19 07:50:33', '2012/10/19 07:52:11', '2012/10/19 08:00:49', '2012/10/19 08:00:49', '2012/10/19 08:04:34', '2017/11/13 22:52:20', '2017/11/23 21:06:39', '2017/11/23 21:06:49', '2017/11/23 21:21:17', '2017/11/23 21:21:35', '2017/11/23 21:22:52', '2017/12/27 10:54:26'];
    for (var i=0; i<index_vals.length;i++) {
        var filename = "img_kenting_c0_"+index_vals[i]+".jpg";
        ken1_urlList.push(urlprefix+filename)
        ken1_valuelist.push(time_vals[i])
    }

    $("#ken1_mysliderid").attr({
        "max" : ken1_valuelist.length - 1,        // substitute your own
        "min" : 0          // values (or variables) here
     });
    var ken1_slider = document.getElementById("ken1_mysliderid");
    var ken1_slidervalue = document.getElementById("ken1_slidervalue");
    
    ken1_slidervalue.innerHTML = ken1_valuelist[ken1_slider.value];
    var ken1_imageid = document.getElementById("ken1_imageid");
    ken1_imageid.src =  ken1_urlList[ken1_slider.value];

    ken1_slider.oninput = function() {
        ken1_slidervalue.innerHTML = ken1_valuelist[this.value];
        // console.log(this.value)
        document.getElementById("ken1_imageid").src =  ken1_urlList[this.value];
    }


    // Kenting cluster 2
    var ken2_urlList = [];
    var ken2_valuelist = [];
    index_vals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
    time_vals = ['2010/01/07 16:41:07', '2014/09/15 23:50:03', '2017/10/06 10:50:59', '2017/11/03 16:44:38', '2017/11/03 16:44:42', '2017/11/03 22:18:17', '2017/11/03 22:31:33', '2017/11/03 22:31:35', '2017/11/13 22:52:26', '2017/11/13 23:04:07', '2017/11/13 23:04:15', '2017/11/23 21:23:26', '2018/09/02 11:26:23', '2019/03/16 15:19:39', '2019/03/16 15:19:42', '2019/03/16 15:19:45', '2019/03/16 15:19:50', '2019/03/16 15:19:52', '2019/03/16 15:20:08', '2019/03/16 15:20:10', '2019/03/16 15:20:13', '2019/03/16 15:20:15', '2019/03/16 15:21:37', '2019/03/16 15:21:40', '2019/03/16 15:21:44', '2019/03/16 15:21:46', '2019/03/16 15:21:49'];
    for (var i=0; i<index_vals.length;i++) {
        var filename = "img_kenting_c1_"+index_vals[i]+".jpg";
        ken2_urlList.push(urlprefix+filename)
        ken2_valuelist.push(time_vals[i])
    }

    $("#ken2_mysliderid").attr({
        "max" : ken2_valuelist.length - 1,        // substitute your own
        "min" : 0          // values (or variables) here
     });
    var ken2_slider = document.getElementById("ken2_mysliderid");
    var ken2_slidervalue = document.getElementById("ken2_slidervalue");
    
    ken2_slidervalue.innerHTML = ken2_valuelist[ken2_slider.value];
    var ken2_imageid = document.getElementById("ken2_imageid");
    ken2_imageid.src =  ken2_urlList[ken2_slider.value];

    ken2_slider.oninput = function() {
        ken2_slidervalue.innerHTML = ken2_valuelist[this.value];
        // console.log(this.value)
        document.getElementById("ken2_imageid").src =  ken2_urlList[this.value];
    }


    // yehliu cluster 1
    var yeh1_urlList = [];
    var yeh1_valuelist = [];
    index_vals = [0, 1, 2, 3, 4, 5, 6, 7];
    time_vals = ['2012/02/14 22:17:15', '2015/11/05 10:47:37', '2018/01/16 19:38:13', '2018/04/03 11:19:31', '2018/05/15 16:24:00', '2018/08/12 00:59:58', '2018/10/22 21:22:47', '2018/12/29 07:09:19'];
    for (var i=0; i<index_vals.length;i++) {
        var filename = "img_yehliu_c0_"+index_vals[i]+".jpg";
        yeh1_urlList.push(urlprefix+filename)
        yeh1_valuelist.push(time_vals[i])
    }

    $("#yeh1_mysliderid").attr({
        "max" : yeh1_valuelist.length - 1,        // substitute your own
        "min" : 0          // values (or variables) here
     });
    var yeh1_slider = document.getElementById("yeh1_mysliderid");
    var yeh1_slidervalue = document.getElementById("yeh1_slidervalue");
    
    yeh1_slidervalue.innerHTML = yeh1_valuelist[yeh1_slider.value];
    var yeh1_imageid = document.getElementById("yeh1_imageid");
    yeh1_imageid.src =  yeh1_urlList[yeh1_slider.value];

    yeh1_slider.oninput = function() {
        yeh1_slidervalue.innerHTML = yeh1_valuelist[this.value];
        // console.log(this.value)
        document.getElementById("yeh1_imageid").src =  yeh1_urlList[this.value];
    }


    // yehliu cluster 2
    var yeh2_urlList = [];
    var yeh2_valuelist = [];
    index_vals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    time_vals = ['2012/07/08 10:56:57', '2012/11/24 22:55:38', '2013/10/26 14:28:11', '2014/02/06 16:02:25', '2014/12/25 03:23:44', '2015/10/16 19:13:35', '2016/11/16 01:09:09', '2016/12/30 11:33:08', '2017/03/22 00:30:18', '2017/03/22 00:30:18', '2017/04/04 16:03:34', '2017/05/30 00:26:05', '2017/07/11 12:33:56', '2017/09/09 00:18:26', '2017/11/27 17:54:59', '2017/12/25 17:08:05', '2018/03/08 15:29:46', '2018/04/03 13:30:05', '2018/04/03 13:30:25', '2018/04/03 13:30:34', '2018/10/19 19:18:10', '2018/10/23 11:07:32', '2018/10/23 11:09:33', '2018/12/29 22:45:15', '2019/03/23 10:06:58'];
    for (var i=0; i<index_vals.length;i++) {
        var filename = "img_yehliu_c1_"+index_vals[i]+".jpg";
        yeh2_urlList.push(urlprefix+filename)
        yeh2_valuelist.push(time_vals[i])
    }

    $("#yeh2_mysliderid").attr({
        "max" : yeh2_valuelist.length - 1,        // substitute your own
        "min" : 0          // values (or variables) here
     });
    var yeh2_slider = document.getElementById("yeh2_mysliderid");
    var yeh2_slidervalue = document.getElementById("yeh2_slidervalue");
    
    yeh2_slidervalue.innerHTML = yeh2_valuelist[yeh2_slider.value];
    var yeh2_imageid = document.getElementById("yeh2_imageid");
    yeh2_imageid.src =  yeh2_urlList[yeh2_slider.value];

    yeh2_slider.oninput = function() {
        yeh2_slidervalue.innerHTML = yeh2_valuelist[this.value];
        // console.log(this.value)
        document.getElementById("yeh2_imageid").src =  yeh2_urlList[this.value];
    }

});