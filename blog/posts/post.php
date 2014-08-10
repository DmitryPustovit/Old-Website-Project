<!doctype html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <title>Dmitry Pustovit</title>

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="../scripts/changebackground.js"></script>

    <link rel="stylesheet" type="text/css" href="../css/main.css">
</head>

<body>
    <div id="nav">
		<?php include('../addons/nav.php'); ?>
    </div>

    <div id="Content">
        <article class="post">
            <header>
                <h1> <a href="#"> <?php echo $post_title; ?> </a> </h1>
            </header>
            <div class="dateposted">
                <?php echo $post_date; ?>
            </div>
            <section class="postContent">
				<?php echo $post_cotent; ?>
            </section>
        </article>

    </div>
	
</body>
</html>