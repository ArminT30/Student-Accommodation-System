<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

session_start();
require "../includes/database_connect.php";

$user_id = isset($_SESSION['user_id']) ? $_SESSION['user_id'] : 0;

$city_id = isset($_GET['city_id']) ? intval($_GET['city_id']) : 0;
$gender = isset($_GET['gender']) ? mysqli_real_escape_string($conn, $_GET['gender']) : "";
$min_rent = isset($_GET['min_rent']) ? intval($_GET['min_rent']) : 0;
$max_rent = isset($_GET['max_rent']) ? intval($_GET['max_rent']) : 0;
$sort = isset($_GET['sort']) ? $_GET['sort'] : "";

$sql = "SELECT * FROM properties WHERE city_id = $city_id";

if ($gender != "" && $gender != "all") {
    $sql .= " AND gender='$gender'";
}

if ($min_rent > 0) {
    $sql .= " AND rent >= $min_rent";
}

if ($max_rent > 0) {
    $sql .= " AND rent <= $max_rent";
}

if ($sort == "low") {
    $sql .= " ORDER BY rent ASC";
}
elseif ($sort == "high") {
    $sql .= " ORDER BY rent DESC";
}

$result = mysqli_query($conn, $sql);

if (!$result) {
    echo json_encode([
        "success" => false,
        "message" => "Database Error"
    ]);
    exit;
}

$properties = mysqli_fetch_all($result, MYSQLI_ASSOC);

foreach ($properties as &$property) {

    // First image
    $property_images = glob("../img/properties/" . $property['id'] . "/*");

    if (!empty($property_images)) {
        $property['image'] = "img/properties/" . $property['id'] . "/" . basename($property_images[0]);
    } else {
        $property['image'] = "";
    }

    // Average Rating
    $property['average_rating'] = round(
        (
            $property['rating_clean'] +
            $property['rating_food'] +
            $property['rating_safety']
        ) / 3,
        1
    );

    // Interested Status
    $property['is_interested'] = false;

    if ($user_id) {

        $check = mysqli_query(
            $conn,
            "SELECT id FROM interested_users_properties
             WHERE user_id=$user_id
             AND property_id=".$property['id']
        );

        if ($check && mysqli_num_rows($check) > 0) {
            $property['is_interested'] = true;
        }

    }

}

echo json_encode([
    "success" => true,
    "properties" => $properties
]);

?>