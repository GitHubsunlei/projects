<?php

	

if ($_SERVER["REQUEST_METHOD"] == "GET") {
  echo '用户账号'.$_GET['uname'];
} elseif ($_SERVER["REQUEST_METHOD"] == "POST"){
  echo '用户账号'.$_POST['uname'];
}
