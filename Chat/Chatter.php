<!DOCTYPE html>
<html>
<head>
	<title>chatter</title>
</head>
<body>
<?php  

$user = $_GET["u"];
?>
	<div class="chatContainer">
	<div class="chatHeader">
		<h3>Welcom <?php echo ucwords($user); ?></h3>
	</div>
	<div class="ChatMessages"></div>


	<div class="ChatBottom">
	<form action="#" onsubmit="retrun false;" id="chatFrom">
	<input type="hidden" id="name" value="<?php echo $user; ?>">	
	<input type="text" name="text" id="text" value="" placeholder="type your messafe ">
	<input type="submit" name="submit" value="post">
	</form>

</div>

</div>










</body>
</html>