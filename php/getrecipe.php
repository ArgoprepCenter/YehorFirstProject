<?php
  include ("dbconnect.php");
  $recipe_name = $_GET['recipe_name'];
//   $sql = "INSERT INTO invoice (InvoiceNumber, AgentID, SalesPartnerID,
//   AccountingType, ItemID, Quantity, Price, Total, ExchangeQuantity,
//  ReturnQuantity, DateTimeDoc, InvoiceSum, InvoiceNumberLocal, DateTimeDocLocal)
//  VALUES ($invoiceNumber, $agentID, $salesPartnerID,
//    '$accountingType', $itemID, $quantity, $price, $totalCost, $exchange,
//    $returns, '$dateTimeDoc', $invoiceSum, $invoiceNumberLocal, '$dateTimeDocLocal') ";

// if (mysqli_query($dbconnect, $sql)) {
//    $tmpInfo = "New record created successfully";
// } else {
//    echo "Error: " . $sql . "<br>" . mysqli_error($dbconnect);
// }
// }
// if ($tmpInfo == "New record created successfully") {
// $tempArray = array('invoiceNumber' => $invoiceNumber, 'dateTimeDoc' => $dateTimeDoc);
// array_push($resultArray, $tempArray);
// echo json_encode($resultArray);
// }
// mysqli_close($dbconnect);
  $sql = "SELECT * FROM recipes Where name Like '$recipe_name'";
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