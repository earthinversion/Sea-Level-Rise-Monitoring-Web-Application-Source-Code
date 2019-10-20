document.addEventListener('DOMContentLoaded', function() {

    // Global salinity
    var urlprefix_sssgb = "https://raw.githubusercontent.com/nghia1991ad/nasa_photos/master/effect/";
    var urlList  = [];
    sss_gb_f = ['sss_gb_0.png', 'sss_gb_1.png', 'sss_gb_2.png', 'sss_gb_3.png', 'sss_gb_4.png', 'sss_gb_5.png', 'sss_gb_6.png', 'sss_gb_7.png', 'sss_gb_8.png', 'sss_gb_9.png', 'sss_gb_10.png', 'sss_gb_11.png', 'sss_gb_12.png', 'sss_gb_13.png', 'sss_gb_14.png', 'sss_gb_15.png', 'sss_gb_16.png', 'sss_gb_17.png', 'sss_gb_18.png', 'sss_gb_19.png', 'sss_gb_20.png', 'sss_gb_21.png', 'sss_gb_22.png', 'sss_gb_23.png', 'sss_gb_24.png', 'sss_gb_25.png', 'sss_gb_26.png', 'sss_gb_27.png', 'sss_gb_28.png', 'sss_gb_29.png', 'sss_gb_30.png', 'sss_gb_31.png', 'sss_gb_32.png', 'sss_gb_33.png', 'sss_gb_34.png', 'sss_gb_35.png', 'sss_gb_36.png', 'sss_gb_37.png', 'sss_gb_38.png', 'sss_gb_39.png', 'sss_gb_40.png', 'sss_gb_41.png', 'sss_gb_42.png', 'sss_gb_43.png', 'sss_gb_44.png', 'sss_gb_45.png', 'sss_gb_46.png', 'sss_gb_47.png', 'sss_gb_48.png', 'sss_gb_49.png', 'sss_gb_50.png', 'sss_gb_51.png', 'sss_gb_52.png', 'sss_gb_53.png'];
    var valuelist = [];
    time_vals = ['2015-04', '2015-05', '2015-06', '2015-07', '2015-08', '2015-09', '2015-10', '2015-11', '2015-12', '2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06', '2016-07', '2016-08', '2016-09', '2016-10', '2016-11', '2016-12', '2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12', '2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06', '2019-07', '2019-08', '2019-09'];
    for (var i=0; i<=time_vals.length - 1;i++) {
        urlList.push(urlprefix_sssgb+sss_gb_f[i])
        valuelist.push(time_vals[i])
    }
    console.log(urlList)
    
    $("#sssgb_mysliderid").attr({
        "max" : valuelist.length - 1,        // substitute your own
        "min" : 0          // values (or variables) here
     });

    // Taiwan salinity
    var urlprefix_ssstw = "https://raw.githubusercontent.com/nghia1991ad/nasa_photos/master/effect/";
    var urlList  = [];
    sss_tw_f = ['sss_tw_0.png', 'sss_tw_1.png', 'sss_tw_2.png', 'sss_tw_3.png', 'sss_tw_4.png', 'sss_tw_5.png', 'sss_tw_6.png', 'sss_tw_7.png', 'sss_tw_8.png', 'sss_tw_9.png', 'sss_tw_10.png', 'sss_tw_11.png', 'sss_tw_12.png', 'sss_tw_13.png', 'sss_tw_14.png', 'sss_tw_15.png', 'sss_tw_16.png', 'sss_tw_17.png', 'sss_tw_18.png', 'sss_tw_19.png', 'sss_tw_20.png', 'sss_tw_21.png', 'sss_tw_22.png', 'sss_tw_23.png', 'sss_tw_24.png', 'sss_tw_25.png', 'sss_tw_26.png', 'sss_tw_27.png', 'sss_tw_28.png', 'sss_tw_29.png', 'sss_tw_30.png', 'sss_tw_31.png', 'sss_tw_32.png', 'sss_tw_33.png', 'sss_tw_34.png', 'sss_tw_35.png', 'sss_tw_36.png', 'sss_tw_37.png', 'sss_tw_38.png', 'sss_tw_39.png', 'sss_tw_40.png', 'sss_tw_41.png', 'sss_tw_42.png', 'sss_tw_43.png', 'sss_tw_44.png', 'sss_tw_45.png', 'sss_tw_46.png', 'sss_tw_47.png', 'sss_tw_48.png', 'sss_tw_49.png', 'sss_tw_50.png', 'sss_tw_51.png', 'sss_tw_52.png', 'sss_tw_53.png'];
    var valuelist = [];
    time_vals = ['2015-04', '2015-05', '2015-06', '2015-07', '2015-08', '2015-09', '2015-10', '2015-11', '2015-12', '2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06', '2016-07', '2016-08', '2016-09', '2016-10', '2016-11', '2016-12', '2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12', '2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06', '2019-07', '2019-08', '2019-09'];
    for (var i=0; i<=time_vals.length - 1;i++) {
        urlList.push(urlprefix_ssstw+sss_tw_f[i])
        valuelist.push(time_vals[i])
    }
    console.log(urlList)
    $("#ssstw_mysliderid").attr({
        "max" : valuelist.length - 1,        // substitute your own
        "min" : 0          // values (or variables) here
     });




    // Chlorophyll
    var urlprefix_chloro = "https://raw.githubusercontent.com/earthinversion/logoStore/master/";
    var urlList = [];
    var valuelist = [];
    for (var year=2002; year<=2018;year++) {
        urlList.push(urlprefix_chloro+"CHLOR_"+year+"_Taiwan.png")
        valuelist.push(year)
    }
    console.log(urlList)
    
    $("#chloro_mysliderid").attr({
        "max" : valuelist.length - 1,        // substitute your own
        "min" : 0          // values (or variables) here
     });


    var chloro_slider = document.getElementById("chloro_mysliderid");
    var chloro_slidervalue = document.getElementById("chloro_slidervalue");
    
    chloro_slidervalue.innerHTML = valuelist[chloro_slider.value];
    var chloro_imageid = document.getElementById("chloro_imageid");
    chloro_imageid.src =  urlList[chloro_slider.value];

    // sea water thickness
    var urlprefix_wthick = "https://raw.githubusercontent.com/earthinversion/logoStore/master/";
    var urlList = [];
    var valuelist = [];
    for (var year=2002; year<=2018;year++) {
        urlList.push(urlprefix_wthick+"SWET_"+year+"_GRNLND.png")
        valuelist.push(year)
    }
    console.log(urlList)
    
    $("#wthick_mysliderid").attr({
        "max" : valuelist.length - 1,        // substitute your own
        "min" : 0          // values (or variables) here
     });

    var wthick_slider = document.getElementById("wthick_mysliderid");
    var wthick_slidervalue = document.getElementById("wthick_slidervalue");
    
    wthick_slidervalue.innerHTML = valuelist[wthick_slider.value];
    var wthick_imageid = document.getElementById("wthick_imageid");
    wthick_imageid.src =  urlList[wthick_slider.value];


     /// define functions
    var sssgb_slider = document.getElementById("sssgb_mysliderid");
    sssgb_slider.oninput = dosssgb;

    var ssstw_slider = document.getElementById("ssstw_mysliderid");
    ssstw_slider.oninput = dossstw;

    var chloro_mysliderid = document.getElementById("chloro_mysliderid");
    chloro_mysliderid.oninput = dochloro;

    var wthick_mysliderid = document.getElementById("wthick_mysliderid");
    wthick_mysliderid.oninput = dowthick;
    // // Salinity
    // var urlprefix_sssgb = "https://raw.githubusercontent.com/nghia1991ad/nasa_photos/master/effect/";
    // var urlList  = [];
    // sss_gb_f = ['sss_gb_0.png', 'sss_gb_1.png', 'sss_gb_2.png', 'sss_gb_3.png', 'sss_gb_4.png', 'sss_gb_5.png', 'sss_gb_6.png', 'sss_gb_7.png', 'sss_gb_8.png', 'sss_gb_9.png', 'sss_gb_10.png', 'sss_gb_11.png', 'sss_gb_12.png', 'sss_gb_13.png', 'sss_gb_14.png', 'sss_gb_15.png', 'sss_gb_16.png', 'sss_gb_17.png', 'sss_gb_18.png', 'sss_gb_19.png', 'sss_gb_20.png', 'sss_gb_21.png', 'sss_gb_22.png', 'sss_gb_23.png', 'sss_gb_24.png', 'sss_gb_25.png', 'sss_gb_26.png', 'sss_gb_27.png', 'sss_gb_28.png', 'sss_gb_29.png', 'sss_gb_30.png', 'sss_gb_31.png', 'sss_gb_32.png', 'sss_gb_33.png', 'sss_gb_34.png', 'sss_gb_35.png', 'sss_gb_36.png', 'sss_gb_37.png', 'sss_gb_38.png', 'sss_gb_39.png', 'sss_gb_40.png', 'sss_gb_41.png', 'sss_gb_42.png', 'sss_gb_43.png', 'sss_gb_44.png', 'sss_gb_45.png', 'sss_gb_46.png', 'sss_gb_47.png', 'sss_gb_48.png', 'sss_gb_49.png', 'sss_gb_50.png', 'sss_gb_51.png', 'sss_gb_52.png', 'sss_gb_53.png'];
    // var valuelist = [];
    // time_vals = ['2015-04', '2015-05', '2015-06', '2015-07', '2015-08', '2015-09', '2015-10', '2015-11', '2015-12', '2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06', '2016-07', '2016-08', '2016-09', '2016-10', '2016-11', '2016-12', '2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12', '2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06', '2019-07', '2019-08', '2019-09'];
    // for (var i=0; i<=time_vals.length - 1;i++) {
    //     urlList.push(urlprefix_sssgb+sss_gb_f[i])
    //     valuelist.push(time_vals[i])
    // }
    // console.log(urlList)
    
    // $("#sssgb_mysliderid").attr({
    //     "max" : valuelist.length - 1,        // substitute your own
    //     "min" : 0          // values (or variables) here
    //  });
    // var sssgb_slider = document.getElementById("sssgb_mysliderid");
    // var sssgb_slidervalue = document.getElementById("sssgb_slidervalue");
    
    // sssgb_slidervalue.innerHTML = valuelist[sssgb_slider.value];
    // var sssgb_imageid = document.getElementById("sssgb_imageid");
    // sssgb_imageid.src =  urlList[sssgb_slider.value];

    // sssgb_slider.oninput = function() {
    //     console.log(urlList[this.value]);
    //     sssgb_slidervalue.innerHTML = valuelist[this.value];
    //     // console.log(this.value)
    //     document.getElementById("sssgb_imageid").src =  urlList[this.value];
    // }


    // Chlorophyll
    // var urlprefix_chloro = "https://raw.githubusercontent.com/earthinversion/logoStore/master/";
    // var urlList = [];
    // var valuelist = [];
    // for (var year=2002; year<=2018;year++) {
    //     urlList.push(urlprefix_chloro+"CHLOR_"+year+"_Taiwan.png")
    //     valuelist.push(year)
    // }
    // console.log(urlList)
    
    // $("#chloro_mysliderid").attr({
    //     "max" : valuelist.length - 1,        // substitute your own
    //     "min" : 0          // values (or variables) here
    //  });
    // var chloro_slider = document.getElementById("chloro_mysliderid");
    // var chloro_slidervalue = document.getElementById("chloro_slidervalue");
    
    // chloro_slidervalue.innerHTML = valuelist[chloro_slider.value];
    // var chloro_imageid = document.getElementById("chloro_imageid");
    // chloro_imageid.src =  urlList[chloro_slider.value];

    // chloro_slider.oninput = function() {
    //     chloro_slidervalue.innerHTML = valuelist[this.value];
    //     // console.log(this.value)
    //     document.getElementById("chloro_imageid").src =  urlList[this.value];
    // }

});

function dosssgb() {
    // Salinity
    var urlprefix_sssgb = "https://raw.githubusercontent.com/nghia1991ad/nasa_photos/master/effect/";
    var urlList  = [];
    sss_gb_f = ['sss_gb_0.png', 'sss_gb_1.png', 'sss_gb_2.png', 'sss_gb_3.png', 'sss_gb_4.png', 'sss_gb_5.png', 'sss_gb_6.png', 'sss_gb_7.png', 'sss_gb_8.png', 'sss_gb_9.png', 'sss_gb_10.png', 'sss_gb_11.png', 'sss_gb_12.png', 'sss_gb_13.png', 'sss_gb_14.png', 'sss_gb_15.png', 'sss_gb_16.png', 'sss_gb_17.png', 'sss_gb_18.png', 'sss_gb_19.png', 'sss_gb_20.png', 'sss_gb_21.png', 'sss_gb_22.png', 'sss_gb_23.png', 'sss_gb_24.png', 'sss_gb_25.png', 'sss_gb_26.png', 'sss_gb_27.png', 'sss_gb_28.png', 'sss_gb_29.png', 'sss_gb_30.png', 'sss_gb_31.png', 'sss_gb_32.png', 'sss_gb_33.png', 'sss_gb_34.png', 'sss_gb_35.png', 'sss_gb_36.png', 'sss_gb_37.png', 'sss_gb_38.png', 'sss_gb_39.png', 'sss_gb_40.png', 'sss_gb_41.png', 'sss_gb_42.png', 'sss_gb_43.png', 'sss_gb_44.png', 'sss_gb_45.png', 'sss_gb_46.png', 'sss_gb_47.png', 'sss_gb_48.png', 'sss_gb_49.png', 'sss_gb_50.png', 'sss_gb_51.png', 'sss_gb_52.png', 'sss_gb_53.png'];
    var valuelist = [];
    time_vals = ['2015-04', '2015-05', '2015-06', '2015-07', '2015-08', '2015-09', '2015-10', '2015-11', '2015-12', '2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06', '2016-07', '2016-08', '2016-09', '2016-10', '2016-11', '2016-12', '2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12', '2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06', '2019-07', '2019-08', '2019-09'];
    for (var i=0; i<=time_vals.length - 1;i++) {
        urlList.push(urlprefix_sssgb+sss_gb_f[i])
        valuelist.push(time_vals[i])
    }
    console.log(urlList)
    
    $("#sssgb_mysliderid").attr({
        "max" : valuelist.length - 1,        // substitute your own
        "min" : 0          // values (or variables) here
     });
    var sssgb_slider = document.getElementById("sssgb_mysliderid");
    var sssgb_slidervalue = document.getElementById("sssgb_slidervalue");
    
    sssgb_slidervalue.innerHTML = valuelist[sssgb_slider.value];
    var sssgb_imageid = document.getElementById("sssgb_imageid");
    sssgb_imageid.src =  urlList[sssgb_slider.value];

    sssgb_slider.oninput = function() {
        console.log(urlList[this.value]);
        sssgb_slidervalue.innerHTML = valuelist[this.value];
        // console.log(this.value)
        document.getElementById("sssgb_imageid").src =  urlList[this.value];
    }

}

function dochloro() {
    var urlprefix_chloro = "https://raw.githubusercontent.com/earthinversion/logoStore/master/";
    var urlList = [];
    var valuelist = [];
    for (var year=2002; year<=2018;year++) {
        urlList.push(urlprefix_chloro+"CHLOR_"+year+"_Taiwan.png")
        valuelist.push(year)
    }
    console.log(urlList)
    
    $("#chloro_mysliderid").attr({
        "max" : valuelist.length - 1,        // substitute your own
        "min" : 0          // values (or variables) here
     });
    var chloro_slider = document.getElementById("chloro_mysliderid");
    var chloro_slidervalue = document.getElementById("chloro_slidervalue");
    
    chloro_slidervalue.innerHTML = valuelist[chloro_slider.value];
    var chloro_imageid = document.getElementById("chloro_imageid");
    chloro_imageid.src =  urlList[chloro_slider.value];

    chloro_slider.oninput = function() {
        chloro_slidervalue.innerHTML = valuelist[this.value];
        // console.log(this.value)
        document.getElementById("chloro_imageid").src =  urlList[this.value];
    }

}

function dossstw() {
    // Salinity
    var urlprefix_ssstw = "https://raw.githubusercontent.com/nghia1991ad/nasa_photos/master/effect/";
    var urlList  = [];
    sss_tw_f = ['sss_tw_0.png', 'sss_tw_1.png', 'sss_tw_2.png', 'sss_tw_3.png', 'sss_tw_4.png', 'sss_tw_5.png', 'sss_tw_6.png', 'sss_tw_7.png', 'sss_tw_8.png', 'sss_tw_9.png', 'sss_tw_10.png', 'sss_tw_11.png', 'sss_tw_12.png', 'sss_tw_13.png', 'sss_tw_14.png', 'sss_tw_15.png', 'sss_tw_16.png', 'sss_tw_17.png', 'sss_tw_18.png', 'sss_tw_19.png', 'sss_tw_20.png', 'sss_tw_21.png', 'sss_tw_22.png', 'sss_tw_23.png', 'sss_tw_24.png', 'sss_tw_25.png', 'sss_tw_26.png', 'sss_tw_27.png', 'sss_tw_28.png', 'sss_tw_29.png', 'sss_tw_30.png', 'sss_tw_31.png', 'sss_tw_32.png', 'sss_tw_33.png', 'sss_tw_34.png', 'sss_tw_35.png', 'sss_tw_36.png', 'sss_tw_37.png', 'sss_tw_38.png', 'sss_tw_39.png', 'sss_tw_40.png', 'sss_tw_41.png', 'sss_tw_42.png', 'sss_tw_43.png', 'sss_tw_44.png', 'sss_tw_45.png', 'sss_tw_46.png', 'sss_tw_47.png', 'sss_tw_48.png', 'sss_tw_49.png', 'sss_tw_50.png', 'sss_tw_51.png', 'sss_tw_52.png', 'sss_tw_53.png'];
    var valuelist = [];
    time_vals = ['2015-04', '2015-05', '2015-06', '2015-07', '2015-08', '2015-09', '2015-10', '2015-11', '2015-12', '2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06', '2016-07', '2016-08', '2016-09', '2016-10', '2016-11', '2016-12', '2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12', '2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06', '2019-07', '2019-08', '2019-09'];
    for (var i=0; i<=time_vals.length - 1;i++) {
        urlList.push(urlprefix_ssstw+sss_tw_f[i])
        valuelist.push(time_vals[i])
    }
    console.log(urlList)
    $("#ssstw_mysliderid").attr({
        "max" : valuelist.length - 1,        // substitute your own
        "min" : 0          // values (or variables) here
     });

    var ssstw_slider = document.getElementById("ssstw_mysliderid");
    var ssstw_slidervalue = document.getElementById("ssstw_slidervalue");
    
    ssstw_slidervalue.innerHTML = valuelist[ssstw_slider.value];
    var ssstw_imageid = document.getElementById("ssstw_imageid");
    ssstw_imageid.src =  urlList[ssstw_slider.value];

    ssstw_slider.oninput = function() {
        console.log(urlList[this.value]);
        ssstw_slidervalue.innerHTML = valuelist[this.value];
        // console.log(this.value)
        document.getElementById("ssstw_imageid").src =  urlList[this.value];
    }
}

function dowthick() {
    var urlprefix_wthick = "https://raw.githubusercontent.com/earthinversion/logoStore/master/";
    var urlList = [];
    var valuelist = [];
    for (var year=2002; year<=2018;year++) {
        urlList.push(urlprefix_wthick+"SWET_"+year+"_GRNLND.png")
        valuelist.push(year)
    }
    console.log(urlList)
    
    $("#wthick_mysliderid").attr({
        "max" : valuelist.length - 1,        // substitute your own
        "min" : 0          // values (or variables) here
     });

    var wthick_slider = document.getElementById("wthick_mysliderid");
    var wthick_slidervalue = document.getElementById("wthick_slidervalue");
    
    wthick_slidervalue.innerHTML = valuelist[wthick_slider.value];
    var wthick_imageid = document.getElementById("wthick_imageid");
    wthick_imageid.src =  urlList[wthick_slider.value];


    wthick_slider.oninput = function() {
        wthick_slidervalue.innerHTML = valuelist[this.value];
        // console.log(this.value)
        document.getElementById("wthick_imageid").src =  urlList[this.value];
    }
}