<?php

require_once 'config.php';
require_once 'Functions.php';

try {
  if ((isset($_REQUEST['column_count']) != '') && (isset($_REQUEST['row_count']) != '')) {
    $db = new Functions();
    $response = $db->get_random_list($_REQUEST['column_count'], $_REQUEST['row_count']);
    echo json_encode($response);
  } else {
    $response["status"] = 203;
    $response["msg"] = "invalid parameter";
    echo json_encode($response);
  }
} catch (Exception $e) {
  echo $e->getMessage();
}
