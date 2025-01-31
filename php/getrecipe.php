<?php
  include ("dbconnect.php");
  $sql = "SELECT * FROM recipes Where name Like '%Pasta%'";
  $result = mysqli_query($conn, $sql);
  if (mysqli_num_rows($result) > 0) {
    $resultArray = array();
    $tempArray = array();
    while($row = $result->fetch_object()) {
      $tempArray = $row;
      array_push($resultArray, $tempArray);
    }
    $result = json_encode($resultArray);
    echo $result;
  } 
  else {
    echo "0 results";
  }
  mysqli_close($conn);