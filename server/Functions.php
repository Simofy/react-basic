<?php

$date = date('Y-m-d H:i:s');

class Functions
{

  protected $date_obj;
  function generateRandomString($length = 10)
  {
    return substr(str_shuffle(str_repeat($x = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil($length / strlen($x)))), 1, $length);
  }
  function __construct()
  {
    global $date;
    $this->date_obj = $date;
  }

  public function get_random_list($column_count, $row_count)
  {
    $column = array();
    for ($i = 0; $i < $row_count; $i++) {
      $row = array();
      for ($k = 0; $k < $column_count; $k++) {
        $row[] = ($this->generateRandomString());
      }
      $column[] = ($row);
    }
    return $column;
  }
}
