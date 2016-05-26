<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

		<title>Test</title>

		<link rel="stylesheet" href="css/reveal.css">
		<link rel="stylesheet" href="css/theme/black.css">
		<link rel="stylesheet" href="lib/css/zenburn.css">

        <style>
        @import url(http://fonts.googleapis.com/css?family=Droid+Sans:400,700);

				section{
					padding: 20px;
				}
        </style>



		<!-- Theme used for syntax highlighting of code -->
        <link href="/c3/c3.css" rel="stylesheet" type="text/css">
        <script src="/c3/d3.min.js"></script>
        <script src="/c3/c3.js"></script>

				    <link rel="stylesheet" href="css/custom.css">
    </head>
    <body>

			<div class="reveal">
				<div class="slides">

							<section>
									Enrollment vs Transactions
									<div class="chart-wrap">
										<div id="chart--enrollment-transactions"></div>
									</div>
									<script src="data/enrollment-v-transactions.js"></script>

							</section>
					</div>
			</div>


			<script src="lib/js/head.min.js"></script>
			<script src="js/reveal.js"></script>

			<script>
				// More info https://github.com/hakimel/reveal.js#configuration
				Reveal.initialize({
					history: true,
	                minScale: 1,
	                maxScale: 1,
	                margin: 0,
									width: '100%',
	 								height: '100%',

					// More info https://github.com/hakimel/reveal.js#dependencies
					dependencies: [
						//{ src: 'plugin/markdown/marked.js' },
						//{ src: 'plugin/markdown/markdown.js' },
						//{ src: 'plugin/notes/notes.js', async: true },
						//{ src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
					]
				});

				Reveal.addEventListener( 'slidechanged', function( event ) {
					console.log("RESIZE");
					var handler = window.onresize;
					handler();
					// or if you need to pass parameters...
					handler.apply(window, []);//['param', 'another']);
// event.previousSlide, event.currentSlide, event.indexh, event.indexv
				} );
			</script>



    </body>

    </html>
