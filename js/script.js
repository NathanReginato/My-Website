$( document ).ready( function() {
	
	$(function() {
		$(".right-content").hide();
	});
	
	$(function() {
    	$( "button" ).click(function() {
			$(".right-content").show( "slow" );
      	});
  	});
});