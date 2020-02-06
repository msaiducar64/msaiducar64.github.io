$(document).ready(function(){
      $(window).scroll(function() {
        $(".slideanim").each(function(){
          var pos = $(this).offset().top;
          var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
          $(this).addClass("slide");
          }
        });
      });
      $(".navbar a[href='#ustbilgi']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 900, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
      $(".navbar a[href='#hakkimizda']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 900, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
      $(".navbar a[href='#aktiviteler']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 900, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
      $(".navbar a[href='#tanitim']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 900, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
      $(".navbar a[href='#hizmetler']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 900, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
      $(".navbar a[href='#iletisim']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 900, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });


  $("#hakkimizdapc").mouseover(function(){
    $('#welcome1').css("position", "sticky");
    $('#welcome1').css("top", "174px");
   });
   $("#kazanimlarpc").mouseover(function(){
     $('#kazanimimg').css("position", "sticky");
     $('#kazanimimg').css("top", "174px");
    });

      $("#tanitimpc").mouseover(function(){
      $('#tanitimimg').css("position", "sticky");
      $('#tanitimimg').css("top", "174px");
     });

});



window.setInterval(function(){
  var d = new Date();
  if(d.getHours()<10){
    document.getElementById("saat").innerHTML = "0" + d.getHours();
    document.getElementById("saat1").innerHTML = "0" + d.getHours();
  }
  else{
    document.getElementById("saat").innerHTML = d.getHours();
    document.getElementById("saat1").innerHTML = d.getHours();
  }
  if(d.getMinutes()<10){
    document.getElementById("dakika").innerHTML = "0"+ d.getMinutes();
    document.getElementById("dakika1").innerHTML = "0"+ d.getMinutes();
  }
  else{
    document.getElementById("dakika").innerHTML = d.getMinutes();
    document.getElementById("dakika1").innerHTML = d.getMinutes();
  }
  if (d.getHours() == 9){
					if (d.getMinutes() > 30){
                      document.getElementById("acikdurum").style.color = "#00fe00";
                      document.getElementById("acikdurum").innerHTML = "Açık";
                      document.getElementById("acikdurum1").style.color = "#00fe00";
                      document.getElementById("acikdurum1").innerHTML = "Açık";
											}
					else{
          document.getElementById("acikdurum").style.color = "red";
          document.getElementById("acikdurum").innerHTML = "Kapalı";
          document.getElementById("acikdurum1").style.color = "red";
          document.getElementById("acikdurum1").innerHTML = "Kapalı";
					}
	}
	else if (d.getHours() > 9 && d.getHours() < 19) {
    document.getElementById("acikdurum").style.color = "#00fe00";
    document.getElementById("acikdurum").innerHTML = "Açık";
    document.getElementById("acikdurum1").style.color = "#00fe00";
    document.getElementById("acikdurum1").innerHTML = "Açık";
												}
	else{
    document.getElementById("acikdurum").style.color = "red";
    document.getElementById("acikdurum").innerHTML = "Kapalı";
    document.getElementById("acikdurum1").style.color = "red";
    document.getElementById("acikdurum1").innerHTML = "Kapalı";
	}

}, 1000);
