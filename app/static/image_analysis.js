// document.addEventListener('DOMContentLoaded', function() {
// // Slider
// var slider = document.getElementById("mysliderid");
// var slidervalue = document.getElementById("slidervalue");

// slidervalue.innerHTML = slider.value

// slider.oninput = function() {
//     slidervalue.innerHTML = this.value;
//     console.log(this.value)
//     document.getElementById("imageid").src = "/Users/utpalkumar50/Downloads/iphonePics/"+"iphone"+this.value+".jpeg";
// }
// });


document.addEventListener('DOMContentLoaded', function() {
    var map_fd64a4e2cbbe42cfac845504f2f3c621 = L.map(
        "map_fd64a4e2cbbe42cfac845504f2f3c621",
        {
            center: [24.0, 121.0],
            crs: L.CRS.EPSG3857,
            zoom: 7,
            zoomControl: true,
            preferCanvas: false,
        }
    );

    



    var tile_layer_1fc7c8e826784ce7bcad31891671355c = L.tileLayer(
        "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
        {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
    ).addTo(map_fd64a4e2cbbe42cfac845504f2f3c621);


    var marker_b7983646c4e64c0b97ac4ee67f462e28 = L.marker(
        [25.20657, 121.690427],
        {}
    ).addTo(map_fd64a4e2cbbe42cfac845504f2f3c621);


var popup_65964bc7ed3f4b61aac0b8774f588902 = L.popup({"maxWidth": 1000});


    var html_7f4c258eeb5e44279db7c066f2a986e8 = $(`<div id="html_7f4c258eeb5e44279db7c066f2a986e8" style="width: 100.0%; height: 100.0%;"><a href="https://www.google.com" target="_blank"> Yehliu </a> </div>`)[0];
    popup_65964bc7ed3f4b61aac0b8774f588902.setContent(html_7f4c258eeb5e44279db7c066f2a986e8);


marker_b7983646c4e64c0b97ac4ee67f462e28.bindPopup(popup_65964bc7ed3f4b61aac0b8774f588902)
;




    var marker_47c9a4f2d21541089ffbfbcfa61687a9 = L.marker(
        [21.948285, 120.779818],
        {}
    ).addTo(map_fd64a4e2cbbe42cfac845504f2f3c621);


var popup_5a61fdfcb2594fd9a400165baa30a49a = L.popup({"maxWidth": 1000});


    var html_702703ec85e44547aa075f364693548b = $(`<div id="html_702703ec85e44547aa075f364693548b" style="width: 100.0%; height: 100.0%;"><a href="https://www.google.com" target="_blank"> Kenting </a> </div>`)[0];
    popup_5a61fdfcb2594fd9a400165baa30a49a.setContent(html_702703ec85e44547aa075f364693548b);


marker_47c9a4f2d21541089ffbfbcfa61687a9.bindPopup(popup_5a61fdfcb2594fd9a400165baa30a49a)
;




    var marker_8af0d0ed46774fcba8a8e1c4d89959c3 = L.marker(
        [22.644694, 120.316335],
        {}
    ).addTo(map_fd64a4e2cbbe42cfac845504f2f3c621);


var popup_6e8d5739459f47d4a5b528aca6839f73 = L.popup({"maxWidth": 1000});


    var html_2007047184bd4007affeaa400db795d7 = $(`<div id="html_2007047184bd4007affeaa400db795d7" style="width: 100.0%; height: 100.0%;"><a href="https://www.google.com" target="_blank"> Kaohsiung </a> </div>`)[0];
    popup_6e8d5739459f47d4a5b528aca6839f73.setContent(html_2007047184bd4007affeaa400db795d7);


marker_8af0d0ed46774fcba8a8e1c4d89959c3.bindPopup(popup_6e8d5739459f47d4a5b528aca6839f73)
;

})