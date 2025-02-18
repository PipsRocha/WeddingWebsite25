$(document).ready(function() {
    var $form = $('form#test-form'),
        url = 'https://script.google.com/macros/s/AKfycbwrAe87bKqZgo3kJi7JND6MtMHZOi4VRNm9LnYvjx8SI30kaMPa/exec',
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
