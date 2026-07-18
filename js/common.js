window.addEventListener("load", function () {

    var signup_form = document.getElementById("signup-form");

    if (signup_form) {

        signup_form.addEventListener("submit", function (event) {

            event.preventDefault();

            var XHR = new XMLHttpRequest();
            var form_data = new FormData(signup_form);

            XHR.addEventListener("load", signup_success);
            XHR.addEventListener("error", on_error);

            XHR.open("POST", "api/signup_submit.php");

            XHR.send(form_data);

            var loading = document.getElementById("loading");
            if (loading) {
                loading.style.display = "block";
            }

        });

    }



    var login_form = document.getElementById("login-form");

    if (login_form) {

        login_form.addEventListener("submit", function (event) {

            event.preventDefault();

            var XHR = new XMLHttpRequest();
            var form_data = new FormData(login_form);

            XHR.addEventListener("load", login_success);
            XHR.addEventListener("error", on_error);

            XHR.open("POST", "api/login_submit.php");

            XHR.send(form_data);

            var loading = document.getElementById("loading");
            if (loading) {
                loading.style.display = "block";
            }

        });

    }

});



var signup_success = function (event) {

    var loading = document.getElementById("loading");

    if (loading) {
        loading.style.display = "none";
    }


    var response = JSON.parse(event.target.responseText);


    if (response.success) {

        alert(response.message);

        window.location.href = "index.php";

    } else {

        alert(response.message);

    }

};



var login_success = function (event) {

    var loading = document.getElementById("loading");

    if (loading) {
        loading.style.display = "none";
    }


    var response = JSON.parse(event.target.responseText);


    if (response.success) {

        location.reload();

    } else {

        alert(response.message);

    }

};



var on_error = function () {

    var loading = document.getElementById("loading");

    if (loading) {
        loading.style.display = "none";
    }

    alert("Oops! Something went wrong.");

};





$(document).ready(function () {


    $(".is-interested-image").click(function () {


        var property_id = $(this).data("property-id");


        if (!property_id) {
            return;
        }


        var heart = $(this);



        $.ajax({

            url: "api/toggle_interested.php",

            type: "GET",

            dataType: "json",

            data: {
                property_id: property_id
            },


            success: function (response) {


                if (!response.is_logged_in) {


                    $("#login-modal").modal("show");

                    return;

                }



                if (response.success) {


                    if (response.is_interested) {


                        heart.removeClass("far");

                        heart.addClass("fas");


                        var count = parseInt($(".interested-user-count").text());

                        $(".interested-user-count").text(count + 1);



                    } else {


                        heart.removeClass("fas");

                        heart.addClass("far");


                        var count = parseInt($(".interested-user-count").text());

                        $(".interested-user-count").text(count - 1);


                    }


                }


            },


            error: function () {

                alert("Something went wrong.");

            }


        });


    });


});