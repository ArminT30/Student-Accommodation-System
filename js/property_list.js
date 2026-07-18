window.addEventListener("load", function () {

    var apply_filter = document.getElementById("apply-filter");

    if (apply_filter) {

        apply_filter.addEventListener("click", function () {

            load_properties();

        });

    }


    function load_properties() {


        var city_id = document.getElementById("city_id").value;

        var gender = document.getElementById("gender").value;

        var min_rent = document.getElementById("min_rent").value;

        var max_rent = document.getElementById("max_rent").value;



        var property_container = document.getElementById("property-list-container");


        property_container.innerHTML = `
            <div class="text-center mt-4">
                Loading properties...
            </div>
        `;



        var url = "api/filter_properties.php?"
            + "city_id=" + city_id
            + "&gender=" + gender
            + "&min_rent=" + min_rent
            + "&max_rent=" + max_rent;



        fetch(url)

            .then(function (response) {

                return response.json();

            })


            .then(function (data) {


                if (!data.success) {

                    property_container.innerHTML =
                        "<p>Something went wrong.</p>";

                    return;

                }



                display_properties(data.properties);


            })


            .catch(function () {


                property_container.innerHTML =
                    "<p>Unable to load properties.</p>";


            });


    }





    function display_properties(properties) {


        var property_container =
            document.getElementById("property-list-container");



        if (properties.length === 0) {


            property_container.innerHTML = `

                <div class="no-property-container">

                    <p>
                        No student accommodations are currently available.
                    </p>

                </div>

            `;


            return;

        }




        var html = "";



        properties.forEach(function (property) {



            var gender_image = "img/unisex.png";


            if (property.gender == "male") {

                gender_image = "img/male.png";

            }

            else if (property.gender == "female") {

                gender_image = "img/female.png";

            }



            html += `

            <div class="property-card property-id-${property.id} row">


                <div class="image-container col-md-4">

                    <img src="img/properties/${property.id}/1.jpg">

                </div>



                <div class="content-container col-md-8">


                    <div class="row no-gutters justify-content-between">


                        <div class="star-container">

                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>

                        </div>



                        <div class="interested-container">


                            <i class="is-interested-image far fa-heart"
                               data-property-id="${property.id}">
                            </i>



                            <div class="interested-text">

                                <span class="interested-user-count">
                                    0
                                </span>

                                Students Interested

                            </div>


                        </div>


                    </div>



                    <div class="detail-container">


                        <div class="property-name">

                            ${property.name}

                        </div>



                        <div class="property-address">

                            ${property.address}

                        </div>



                        ${property.university_name ? `

                        <div class="property-university">

                            🏫 <strong>Nearby University:</strong>
                            ${property.university_name}

                        </div>

                        ` : ""}



                        ${property.room_type ? `

                        <div class="property-room-type">

                            🛏 <strong>Room Type:</strong>
                            ${property.room_type}

                        </div>

                        ` : ""}



                        <div class="property-gender">

                            <img src="${gender_image}">

                        </div>


                    </div>



                    <div class="facility-container mb-2">


                        ${property.wifi == 1 ? 
                            '<span class="badge badge-success mr-1">📶 Wi-Fi</span>'
                        : ""}


                        ${property.meals == 1 ? 
                            '<span class="badge badge-success mr-1">🍽 Meals</span>'
                        : ""}


                        ${property.laundry == 1 ? 
                            '<span class="badge badge-success mr-1">🧺 Laundry</span>'
                        : ""}


                        ${property.security == 1 ? 
                            '<span class="badge badge-success mr-1">🛡 Security</span>'
                        : ""}


                    </div>



                    <div class="row no-gutters">


                        <div class="rent-container col-6">


                            <div class="rent">

                                ₹ ${Number(property.rent).toLocaleString()}/-

                            </div>


                            <div class="rent-unit">

                                per month

                            </div>


                        </div>




                        <div class="button-container col-6">


                            <a href="property_detail.php?property_id=${property.id}"
                               class="btn btn-primary">

                                View Accommodation

                            </a>


                        </div>


                    </div>



                </div>


            </div>

            `;


        });



        property_container.innerHTML = html;


    }



});