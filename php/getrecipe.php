<?php
  include ("dbconnect.php");
  $sql = "SELECT * FROM recipes Where name Like '%Pasta%'";
  $results = mysqli_query($conn, $sql);
  if (mysqli_num_rows($results) > 0) {
    $resultArray = array();
    $tempArray = array();
    while($row = $result->fresh_object()) {
      $tempArray = $row;
      array_push($resultArray, $tempArray);
    }
    $result = json_encode($resultArray);
  } 
  else {
    echo "0 results";
  }
  mysqli_close($conn);