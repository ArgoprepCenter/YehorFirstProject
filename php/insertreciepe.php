<?php
  include ("dbconnect.php");
  // $recipe_name = $_GET['recipe_name'];
  // INSERT INTO `recipes` (`id`, `name`, `ingredients`) VALUES (NULL, 'banh-gan', 'Ingredients (9)\r\n225g (1 cup) white sugar\r\n80ml (1/3 cup) water\r\n1 x 400ml can coconut milk\r\n375ml (1 1/2 cups) milk\r\n6 eggs, lightly whisked\r\n100g (1/2 cup, firmly packed) brown sugar\r\n1 tsp vanilla bean paste\r\nToasted shredded coconut, to serve\r\nShredded lime rind, to serve');
  $sql = "INSERT INTO recipes (recipe_name, ingradients) VALUES ('test 1', 'test ingradients')";
  if ($result = mysqli_query($conn, $sql)) {
    if ($num = mysqli_affected_rows($conn) > 0) {
      $resultArray = array();
      $tempArray = array("Message" => "New record created successfully with id: " .mysqli_insert_id($conn) . " and affected rows: " . $num . "");
      array_push($resultArray, $tempArray);
      $result = json_encode($resultArray);
  } else {
    $$resultArray = array();
    $tempArray= array("Message" =>"Error: " . $sql . "<br>" . mysqli_error($conn));
    array_push($resultArray, $tempArray);
    $result = json_encode($resultArray);
  }
} else {
    $resultArray = array();
    $tempArray = array("Message" =>"Error: " . $sql . "<br>" . mysqli_error($conn));
    array_push($resultArray, $tempArray);
    $result = json_encode($resultArray);
  }
  mysqli_close($conn);