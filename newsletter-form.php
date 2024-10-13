<?php
function getDB()
{
	$db_host = "sql5.freesqldatabase.com";
	$db_name = "sql5675529";
	$db_user = "sql5675529";
	$db_pass = "emwiuq6lXc!";

	$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

	if (mysqli_connect_error()) {
		die("There is a connection failure: " . mysqli_connect_error());
	} else {
		return $conn;
	}
}

function newUser($first_name, $last_name, $email)
{
	$connDatabase = getDB();

	$user_id = generate_user_id($first_name, $last_name);

	$sql = "INSERT INTO newsletter (first_name, last_name, email, user_id)
					VALUES (?, ?, ?, ?)";

	$stmt = mysqli_prepare($connDatabase, $sql);

	if ($stmt === false) {
		echo (mysqli_error($connDatabase));
	} else {
		if (checkUserExists($user_id) === true) {
			echo "You've already joined the newsletter!";
		} else {
			$stmt = mysqli_stmt_bind_param($stmt, "ssss", $first_name, $last_name, $email, $user_id);

			if (mysqli_stmt_execute($stmt)) {
				echo "Welcome,  . $first_name . ! You've been succesfully added to the newsletter.";
			} else {
				echo "An error has occured: " . mysqli_stmt_error($stmt);
			}
		}
	}
}

function checkUserExists($user_id)
{
	$connDatabase = getDB();

	$sql = "SELECT COUNT(*) FROM newsletter WHERE user_id = ?";

	$stmt = mysqli_prepare($connDatabase, $sql);

	if ($stmt === false) {
		echo (mysqli_error($connDatabase));
	} else {
		$stmt = mysqli_stmt_bind_param($stmt, "s", $user_id);

		$result = mysqli_stmt_execute($stmt);

		if ($result) {
			$rows = mysqli_fetch_all($result);

			$count = count($rows);

			if ($count > 0) {
				return true;
			}
		} else {
			echo ("An error has occured: " . mysqli_stmt_error($stmt));
		}
	}

	return false;
}

function deleteUser()
{
	//add delete user functionality in future
}

function generate_user_id($first_name, $last_name)
{
	$first_letter = strtoupper(substr($first_name, 0, 1));
	$last_letter = strtoupper(substr($last_name, 0, 1));

	$random_number = str_pad(mt_rand(1, 999), 3, '0', STR_PAD_LEFT);

	return $first_letter . $last_letter . $random_number;
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	if (isset($_POST['first-name']) && isset($_POST['last-name']) && isset($_POST['email'])) {
		$first_name = $_POST['first-name'];
		$last_name = $_POST['last-name'];
		$email = $_POST['email'];

		if (!preg_match("/^[a-zA-Z0-9_]+$/", $first_name) || !preg_match("/^[a-zA-Z0-9_]+$/", $last_name)) {
			echo "Please ensure your first and last name has no mispellings!";
		} else {
			$subject = "Welcome to RCCG Dominion Chapel NJ's Newsletter!";
			$htmlContent = '
			<html>
			<head>
			<title>The RCCG Dominion Chapel NJ Newsletter</title>
			</head>
			<body>
			<h1>Thank You for Subscribing!</h1>
			<p>Here, we will inform you on the latest events, services, and news related to Domion Chapel, Galloway NJ!</p>
			</body>
			</html>';

			$headers  = "MIME-Version: 1.0" . "\r\n";
			$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
			$headers .= 'From: no-reply@yourwebsite.com' . "\r\n";

			if(mail($email, $subject, $htmlContent, $headers)){
				echo "Email has been sent.";
			} else {
				echo "Failed to send email.";
			}

			newUser($first_name, $last_name, $email);
		}
	}
} else {
	echo "This page only accepts POST requests.";
}
