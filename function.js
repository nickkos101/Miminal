$(document).ready(function(){

	function tabBuffer() {
		$('.tab-bank .tab').hide();
	}


	$('.tablature-nav .tab').click(function(){
		tabBuffer();
		if ($(this).hasClass('light')) {			
			$('.tab-bank .tab.light').show();
		}
		if ($(this).hasClass('lighter')) {			
			$('.tab-bank .tab.lighter').show();
		}
		if ($(this).hasClass('ultralight')) {			
			$('.tab-bank .tab.ultralight').show();
		}
		if ($(this).hasClass('lightest')) {			
			$('.tab-bank .tab.lightest').show();
		}
		if ($(this).hasClass('megalight')) {			
			$('.tab-bank .tab.megalight').show();
		}
		else {
			$('.tab-bank .original').show();
		}

	});


});