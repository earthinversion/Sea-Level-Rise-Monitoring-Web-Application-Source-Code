document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('montanaBtn').onclick = showmontana;
    document.getElementById('PatagonianBtn').onclick = showpatagonia;
    let wrapper = document.getElementById('wrapper');
    let wrapper2 = document.getElementById('wrapper2');

    wrapper2.style.display = "none";

    let topLayer = wrapper.querySelector('.top');
    let handle = wrapper.querySelector('.handle');
    let skew = 0;
    let delta = 0;
    
    wrapper.addEventListener('mousemove', function(e){
      delta = (e.clientX - window.innerWidth / 2) * 0.5;
    
      handle.style.left = e.clientX + delta + 'px';
  
      topLayer.style.width= e.clientX + skew + delta + 'px';
    });

    let topLayer2 = wrapper2.querySelector('.top2');
    let handle2 = wrapper2.querySelector('.handle2');
    let skew2 = 0;
    let delta2 = 0;
    wrapper2.addEventListener('mousemove', function(e){
      delta2 = (e.clientX - window.innerWidth / 2) * 0.5;
    
      handle2.style.left = e.clientX + delta2 + 'px';
  
      topLayer2.style.width= e.clientX + skew2 + delta2 + 'px';
    });
  });

  function showmontana() {
    console.log("montana clicked")
      document.querySelector("#wrapper2").style.display = "none";
      document.querySelector("#wrapper").style.display = "block";
      if ( document.getElementById("PatagonianBtn").classList.contains('activebtn') ){
        document.getElementById("PatagonianBtn").classList.remove('activebtn');
        document.getElementById("montanaBtn").classList.add('activebtn');
    }
  }
  function showpatagonia() {
    console.log("patangonia clicked")
      document.querySelector("#wrapper").style.display = "none";
      document.querySelector("#wrapper2").style.display = "block";
      if ( document.getElementById("montanaBtn").classList.contains('activebtn') ){
        document.getElementById("montanaBtn").classList.remove('activebtn');
        document.getElementById("PatagonianBtn").classList.add('activebtn');
    }
  }