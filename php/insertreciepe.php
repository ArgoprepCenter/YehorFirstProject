<?php
  include ("dbconnect.php");
  // $recipe_name = $_GET['recipe_name'];
  // INSERT INTO `recipes` (`id`, `name`, `ingredients`) VALUES (NULL, 'banh-gan', 'Ingredients (9)\r\n225g (1 cup) white sugar\r\n80ml (1/3 cup) water\r\n1 x 400ml can coconut milk\r\n375ml (1 1/2 cups) milk\r\n6 eggs, lightly whisked\r\n100g (1/2 cup, firmly packed) brown sugar\r\n1 tsp vanilla bean paste\r\nToasted shredded coconut, to serve\r\nShredded lime rind, to serve');
  $sql = "INSERT INTO recipes (recipe_name, ingradients) VALUES ('test 1', 'test ingradients')";
  if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
  }
  mysqli_close($conn);
  