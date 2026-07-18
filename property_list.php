<?php
session_start();
require "includes/database_connect.php";

$user_id = isset($_SESSION['user_id']) ? $_SESSION['user_id'] : NULL;

$city_name = $_GET["city"];

$sql_1 = "SELECT * FROM cities WHERE name = '$city_name'";
$result_1 = mysqli_query($conn, $sql_1);

if (!$result_1) {
    echo "Something went wrong!";
    return;
}

$city = mysqli_fetch_assoc($result_1);

if (!$city) {
    echo "Sorry! No student accommodations are available in this city.";
    return;
}

$city_id = $city['id'];


$sql_2 = "SELECT * FROM properties WHERE city_id = $city_id";

$result_2 = mysqli_query($conn, $sql_2);

if (!$result_2) {
    echo "Something went wrong!";
    return;
}

$properties = mysqli_fetch_all($result_2, MYSQLI_ASSOC);



$sql_3 = "SELECT *
          FROM interested_users_properties iup
          INNER JOIN properties p 
          ON iup.property_id = p.id
          WHERE p.city_id = $city_id";


$result_3 = mysqli_query($conn, $sql_3);

if (!$result_3) {
    echo "Something went wrong!";
    return;
}


$interested_users_properties = mysqli_fetch_all($result_3, MYSQLI_ASSOC);

?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>
        Student Accommodations in <?php echo $city_name; ?> | Student Accommodation
    </title>


    <?php include "includes/head_links.php"; ?>


    <link href="css/property_list.css" rel="stylesheet" />

</head>


<body>


<?php include "includes/header.php"; ?>


<nav aria-label="breadcrumb">

    <ol class="breadcrumb py-2">

        <li class="breadcrumb-item">

            <a href="index.php">
                Home
            </a>

        </li>


        <li class="breadcrumb-item active" aria-current="page">

            <?php echo $city_name; ?>

        </li>


    </ol>

</nav>



<div class="page-container">


    <div class="filter-bar row justify-content-around">


        <div class="col-auto"
             data-toggle="modal"
             data-target="#filter-modal">


            <img src="img/filter.png" alt="filter">


            <span>
                Accommodation Filter
            </span>


        </div>



        <div class="col-auto">


            <img src="img/desc.png" alt="sort-desc">


            <span>
                Highest Rent
            </span>


        </div>



        <div class="col-auto">


            <img src="img/asc.png" alt="sort-asc">


            <span>
                Lowest Rent
            </span>


        </div>



    </div>
    <div id="property-list-container">
    <?php

foreach ($properties as $property) {


    $property_images = glob("img/properties/" . $property['id'] . "/*");

?>



<div class="property-card property-id-<?= $property['id'] ?> row">


    <div class="image-container col-md-4">


        <img src="<?= $property_images[0] ?>">


    </div>



    <div class="content-container col-md-8">



        <div class="row no-gutters justify-content-between">



            <?php


            $total_rating = ($property['rating_clean'] +
                            $property['rating_food'] +
                            $property['rating_safety']) / 3;


            $total_rating = round($total_rating,1);


            ?>



            <div class="star-container" title="<?= $total_rating ?>">



                <?php


                $rating = $total_rating;


                for($i=0;$i<5;$i++){


                    if($rating >= $i+0.8){

                        echo '<i class="fas fa-star"></i>';

                    }


                    elseif($rating >= $i+0.3){

                        echo '<i class="fas fa-star-half-alt"></i>';

                    }


                    else{

                        echo '<i class="far fa-star"></i>';

                    }


                }


                ?>


            </div>




            <div class="interested-container">



                <?php


                $interested_users_count = 0;
                $is_interested = false;



                foreach($interested_users_properties as $interested_user_property){



                    if($interested_user_property['property_id'] == $property['id']){


                        $interested_users_count++;



                        if($interested_user_property['user_id'] == $user_id){


                            $is_interested = true;


                        }


                    }


                }




                if($is_interested){


                ?>


                <i class="is-interested-image fas fa-heart"
                   data-property-id="<?= $property['id'] ?>"></i>


                <?php

                }

                else{


                ?>


                <i class="is-interested-image far fa-heart"
                   data-property-id="<?= $property['id'] ?>"></i>


                <?php

                }


                ?>



                <div class="interested-text">


                    <span class="interested-user-count">

                        <?= $interested_users_count ?>

                    </span>


                    Students Interested


                </div>



            </div>



        </div>




        <div class="detail-container">



            <div class="property-name">


                <?= $property['name'] ?>


            </div>



            <div class="property-address">


                <?= $property['address'] ?>


            </div>




            <?php if (!empty($property['university_name'])) { ?>


            <div class="property-university">


                🏫 <strong>Nearby University:</strong>

                <?= $property['university_name']; ?>


            </div>


            <?php } ?>





            <?php if (!empty($property['university_distance'])) { ?>


            <div class="property-distance">


                📍 <strong>Distance:</strong>

                <?= $property['university_distance']; ?>


            </div>


            <?php } ?>





            <?php if (!empty($property['room_type'])) { ?>


            <div class="property-room-type">


                🛏 <strong>Room Type:</strong>

                <?= $property['room_type']; ?>


            </div>


            <?php } ?>






            <div class="property-gender">



                <?php



                if($property['gender']=="male"){


                    echo '<img src="img/male.png">';


                }


                elseif($property['gender']=="female"){


                    echo '<img src="img/female.png">';


                }


                else{


                    echo '<img src="img/unisex.png">';


                }



                ?>


            </div>



        </div>





        <div class="facility-container mb-2">



            <?php if($property['wifi']){ ?>


            <span class="badge badge-success mr-1">

                📶 Wi-Fi

            </span>


            <?php } ?>




            <?php if($property['meals']){ ?>


            <span class="badge badge-success mr-1">

                🍽 Meals

            </span>


            <?php } ?>




            <?php if($property['laundry']){ ?>


            <span class="badge badge-success mr-1">

                🧺 Laundry

            </span>


            <?php } ?>




            <?php if($property['security']){ ?>


            <span class="badge badge-success mr-1">

                🛡 Security

            </span>


            <?php } ?>


        </div>





        <div class="row no-gutters">



            <div class="rent-container col-6">



                <div class="rent">


                    ₹ <?= number_format($property['rent']) ?>/-

                    
                </div>



                <div class="rent-unit">


                    per month


                </div>



            </div>




            <div class="button-container col-6">


                <a href="property_detail.php?property_id=<?= $property['id'] ?>"
                   class="btn btn-primary">


                    View Accommodation


                </a>


            </div>



        </div>



    </div>



</div>



<?php

}


if(count($properties)==0){

?>


<div class="no-property-container">


    <p>
        No student accommodations are currently available in this city.
    </p>


</div>


<?php } ?>
</div>



<div class="modal fade"
     id="filter-modal"
     tabindex="-1"
     role="dialog"
     aria-labelledby="filter-heading"
     aria-hidden="true">

    <div class="modal-dialog modal-dialog-centered"
         role="document">

        <div class="modal-content">

            <div class="modal-header">

                <h3 class="modal-title"
                    id="filter-heading">

                    Accommodation Filters

                </h3>

                <button type="button"
                        class="close"
                        data-dismiss="modal">

                    <span>&times;</span>

                </button>

            </div>

            <div class="modal-body">

                <input
                    type="hidden"
                    id="city_id"
                    value="<?php echo $city_id; ?>">

                <h5>Gender</h5>

                <hr>

                <div class="form-group">

                    <select
                        id="gender"
                        class="form-control">

                        <option value="all">All</option>

                        <option value="male">Male</option>

                        <option value="female">Female</option>

                        <option value="unisex">Unisex</option>

                    </select>

                </div>

                <h5 class="mt-3">
                    Budget
                </h5>

                <hr>

                <div class="row">

                    <div class="col-6">

                        <input
                            type="number"
                            id="min_rent"
                            class="form-control"
                            placeholder="Minimum Rent">

                    </div>

                    <div class="col-6">

                        <input
                            type="number"
                            id="max_rent"
                            class="form-control"
                            placeholder="Maximum Rent">

                    </div>

                </div>

            </div>

            <div class="modal-footer">

                <button
                    type="button"
                    id="apply-filter"
                    class="btn btn-primary">

                    Apply Filter

                </button>

            </div>

        </div>

    </div>

</div>




<?php


include "includes/signup_modal.php";

include "includes/login_modal.php";

include "includes/footer.php";


?>




<script src="js/property_list.js"></script>



</body>

</html>