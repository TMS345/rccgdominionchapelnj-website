<?php
	if (isset($_POST ['first-name']) && isset($_POST ['last-name']) && isset ($_POST ['email'])) 
	{
		$first_name = $_POST ['first-name'];
		$last_name = $_POST ['last-name'];
		$email = $_POST ['email'];
									
		if (empty ($first_name) || empty ($last_name)) 
		{
			echo "Please enter your name";
		}
		else if (empty ($email))
		{
			echo "Please enter your email address";
		}
		else 
		{
			echo "Welcome,  . $first_name . ' ' . $last_name . ! You've been succesfully added to the newsletter.";
		}
	}
?>