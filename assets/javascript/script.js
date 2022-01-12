var btns = $(".nav-link, .navbar-brand");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");

        current[0].className = current[0].className.replace(" active", "");

        if(this.className == "navbar-brand"){
            $(".nav-link")[0].className += " active";
        }else{
            this.className += " active";
        }

    });
}

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

$('#myForm').on('submit', function(event) {
    console.log("haloo");
    event.preventDefault(); // prevent reload
    
    var formData = new FormData(this);
    formData.append('service_id', 'service_7attje3');
    formData.append('template_id', 'template_co97eti');
    formData.append('user_id', 'user_oG8C6FbU9wevHZR1n1y2P');

    $(':button[type="submit"]').prop('disabled', true);

    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
        console.log('Your mail is sent!');
        alert('Your mail is sent!');
        reset();
    }).fail(function(error) {
        console.log('Oops... ' + JSON.stringify(error));
        alert('Oops... ' + JSON.stringify(error));
        reset();
    });
    
});

let reset = function() {
    $("button[type='submit']").prop('disabled', false);
    $("input").val("");
    $("textarea").val("");
}