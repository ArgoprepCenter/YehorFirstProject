<?php
  include ("dbconnect.php");
  $sql = "SELECT * FROM recipes Where id = 2 ";
  $results = mysqli_query($conn, $sql);
  if (mysqli_num_rows($results) > 0) {
    while($row = mysqli_fetch_assoc($results)) {
      echo $row["id"] . "<br>";
      echo $row["name"] . "<br>";
      echo $row["ingredients"] . "<br>";
    };
  } 
  else {
    echo "0 results";
  }
  mysqli_close($conn);