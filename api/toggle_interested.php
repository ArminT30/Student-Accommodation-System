<?php

session_start();

require "../includes/database_connect.php";

header("Content-Type: application/json");


// Allow React frontend access
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");




// Check login

if (!isset($_SESSION['user_id'])) {


    echo json_encode([

        "success" => false,

        "is_logged_in" => false,

        "message" => "User not logged in"

    ]);


    exit;

}




// Check property id

if (!isset($_GET["property_id"])) {


    echo json_encode([

        "success" => false,

        "message" => "Property ID missing"

    ]);


    exit;

}





$user_id = intval($_SESSION['user_id']);

$property_id = intval($_GET["property_id"]);







// Check if already interested

$sql = "SELECT id 
        FROM interested_users_properties
        WHERE user_id = $user_id
        AND property_id = $property_id";



$result = mysqli_query($conn, $sql);






if (!$result) {


    echo json_encode([

        "success" => false,

        "message" => "Database error"

    ]);


    exit;

}








// Remove interest

if (mysqli_num_rows($result) > 0) {



    $delete = "DELETE FROM interested_users_properties
               WHERE user_id = $user_id
               AND property_id = $property_id";




    if(mysqli_query($conn, $delete)){


        echo json_encode([

            "success" => true,

            "is_logged_in" => true,

            "is_interested" => false,

            "message" => "Removed from interested list"

        ]);



    }

    else{


        echo json_encode([

            "success" => false,

            "message" => "Unable to remove interest"

        ]);



    }



}






// Add interest

else {



    $insert = "INSERT INTO interested_users_properties
               (user_id, property_id)
               VALUES
               ($user_id, $property_id)";





    if(mysqli_query($conn, $insert)){



        echo json_encode([

            "success" => true,

            "is_logged_in" => true,

            "is_interested" => true,

            "message" => "Added to interested list"

        ]);



    }

    else{


        echo json_encode([

            "success" => false,

            "message" => "Unable to add interest"

        ]);



    }



}



?>