$(document).ready(function() {
    var $form = $('form#test-form'),
        url = 'https://script.google.com/macros/s/AKfycbzYDi1OM7UuQzRgj-O0XJYGxaKoaJut_NK81jBcccsNyvcXWmGH/exec',
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
            var elt = document.getElementById("demo-category");
            document.getElementById("txtPst").value = elt.options[elt.selectedIndex].text;
        }
    });
});