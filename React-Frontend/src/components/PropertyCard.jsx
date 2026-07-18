import { useState } from "react";


function PropertyCard({ property }) {


  const [isInterested, setIsInterested] = useState(property.is_interested);



  const imagePath =
    `http://localhost/student-accommodation/${property.image}`;





  const toggleInterested = () => {


    fetch(
      `http://localhost/student-accommodation/api/toggle_interested.php?property_id=${property.id}`,
      {
        method: "GET",
        credentials: "include"
      }
    )


      .then((response) => response.json())


      .then((data) => {


        console.log("Interested Response:", data);



        if (data.is_logged_in === false) {


          alert("Please login first");


          return;


        }




        if (data.success) {


          setIsInterested(
            data.is_interested
          );


        }


      })


      .catch((error) => {


        console.log(
          "Error toggling interest:",
          error
        );


      });


  };







  return (


    <div className="property-card">





      {/* Image */}

      <div className="image-container">


        <img

          src={imagePath}

          alt={property.name}

        />


      </div>









      {/* Content */}

      <div className="content-container">






        {/* Rating */}

        <div className="star-container">


          {"★".repeat(
            Math.round(property.average_rating || 0)
          )}


          {"☆".repeat(
            5 - Math.round(property.average_rating || 0)
          )}



          <span>

            {" "}

            {property.average_rating}

          </span>


        </div>








        {/* Name */}

        <div className="property-name">


          {property.name}


        </div>








        {/* Address */}

        <div className="property-address">


          {property.address}


        </div>









        {/* University */}

        {

          property.university_name && (


            <div className="property-university">


              🏫 <strong>University:</strong>{" "}

              {property.university_name}


            </div>


          )

        }









        {/* Distance */}

        {

          property.university_distance && (


            <div className="property-distance">


              📍 <strong>Distance:</strong>{" "}

              {property.university_distance}


            </div>


          )

        }









        {/* Room */}

        <div className="property-room">


          🛏 <strong>Room Type:</strong>{" "}

          {property.room_type}


        </div>









        {/* Gender */}

        <div className="property-gender">


          👤 <strong>Gender:</strong>{" "}

          {property.gender}


        </div>









        {/* Facilities */}

        <div className="facility-container">



          {

            property.wifi === "1" && (

              <span>

                📶 WiFi

              </span>

            )

          }





          {

            property.meals === "1" && (

              <span>

                🍽 Meals

              </span>

            )

          }





          {

            property.laundry === "1" && (

              <span>

                🧺 Laundry

              </span>

            )

          }





          {

            property.security === "1" && (

              <span>

                🛡 Security

              </span>

            )

          }



        </div>









        {/* Rent and Buttons */}

        <div className="bottom-container">





          <div className="rent-container">


            <div className="rent">


              ₹ {property.rent}


            </div>





            <div className="rent-unit">


              per month


            </div>


          </div>









          <div className="button-group">





            <button

              onClick={toggleInterested}

            >


              {

                isInterested

                ?

                "Interested ✓"

                :

                "Interested"


              }


            </button>








            <button


              onClick={() =>


                window.location.href =


                `http://localhost/student-accommodation/property_detail.php?property_id=${property.id}`


              }


            >


              View Accommodation


            </button>





          </div>






        </div>






      </div>





    </div>


  );


}


export default PropertyCard;