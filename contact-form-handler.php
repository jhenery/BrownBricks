<?php 
// The global $_POST variable allows you to access the data sent with the POST method by name
// To access the data sent with the GET method, you can use $_GET
$say = htmlspecialchars($_POST['say']);
$to  = htmlspecialchars($_POST['to']);

echo  $say, ' ', $to;
/*$name = $_POST['name'];
$discord = $_POST['discord'];
$email = $_POST['email'];
$message = $_POST['message'];
$from = 'From: TangledDemo'; 
$to = 'brownbrickswow@gmail.com'; 
$subject = 'Hello';

$body = "From: $name\n Discord: $discord\n E-Mail: $email\n Message:\n $message";
if ($_POST['submit']) {
    if (mail ($to, $subject, $body, $from)) { 
        echo '<p>Your message has been sent!</p>';
    } else { 
        echo '<p>Something went wrong, go back and try again!</p>'; 
    }
}*/
?>