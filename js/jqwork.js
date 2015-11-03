//Check if the document has loaded
$(document).ready(function()
	{

		$("h1").mouseenter(function()
			{
			// $(this).fadeOut().fadeIn();

		$(this).toggle(1000).toggle(1000);
			});//end

		$("#project1 img").mouseenter(function()
			{
				$("#project1 h5").hide(1000);

			});
		
		$("#project1 img").mouseleave(function()
			{
				$("#project1 h5").show(1000);	
			});



	});