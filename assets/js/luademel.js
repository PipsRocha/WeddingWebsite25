$(document).ready(function() {
    var $form = $('form#test-form'),
        url = 'https://script.google.com/macros/s/AKfycbxFOgL_3kK8TSTUNxgUlAQ0I0MwJD571zbSLdB7xS4_OIMdI7s/exec',
        sent = false;

    $('#submit-form').on('click', function(e) {
      e.preventDefault();
      var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject()
      }).done(
        //console.log("success") //optional
        sent = true
      );
        if (sent) {
            //window.location.replace("index.html")
             alert("Obrigada! 😊 ");
            document.getElementById("test-form").reset();
        }
    });
});