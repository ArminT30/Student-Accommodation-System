import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import FilterBar from "./FilterBar";


function PropertyList() {


  const [properties, setProperties] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");



  const [filters, setFilters] = useState({

    gender: "all",
    min_rent: "",
    max_rent: "",
    sort: ""

  });




  const fetchProperties = () => {


    setLoading(true);

    setError("");



    const url =
      `http://localhost/student-accommodation/api/filter_properties.php?city_id=1&gender=${filters.gender}&min_rent=${filters.min_rent}&max_rent=${filters.max_rent}&sort=${filters.sort}`;



    fetch(url, {
      credentials: "include"
    })

      .then((response) => {


        if (!response.ok) {

          throw new Error("Failed to fetch properties");

        }


        return response.json();


      })


      .then((data) => {


        console.log(data);



        if (data.success) {


          setProperties(data.properties);


        }

        else {


          setError("No properties found");


        }


      })


      .catch((error) => {


        console.log(error);

        setError("Something went wrong while loading properties");


      })


      .finally(() => {


        setLoading(false);


      });


  };






  useEffect(() => {


    fetchProperties();


  }, []);






  return (


    <section className="property-section">


      <h2>
        Available Properties
      </h2>



      <FilterBar

        filters={filters}

        setFilters={setFilters}

        applyFilter={fetchProperties}

      />





      {

        loading ? (


          <p>
            Loading properties...
          </p>


        )


        : error ? (


          <p>
            {error}
          </p>


        )


        : properties.length > 0 ? (


          properties.map((property) => (


            <PropertyCard

              key={property.id}

              property={property}

            />


          ))


        )


        : (


          <p>
            No properties available
          </p>


        )


      }



    </section>


  );


}


export default PropertyList;