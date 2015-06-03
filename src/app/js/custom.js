$(document).ready(function() {
	console.log('HI');
    $('h3').click(function() {
    	console.log('hm');
        $(this).toggle('slow');
    });


	$('#idee').hover(
		  function() {
		      $('#idee').text("idee:");
		  }, function() {
		      $('#idee').text("idee");
		  }
	);
				
});