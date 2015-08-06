$(document).ready(function () {

	$('#primary-nav li').click(function(e){
		e.preventDefault(); 

	//handles slide-down

		//exclamation point  !$ shows a not argument
		//if (slide-down is not open)
		if(!$('#slide-down').hasClass('open')) {
			//show slide-down
			$('#slide-down').show().addClass('open');
			
			//active class for li
			$(this).removeClass('active');

		}

		//else if (slide-down is not open and link has active class)
		else if($('#slide-down').hasClass('open') && $(this).hasClass('active')) {
				$('#slide-down').hide().removeClass('open');
			// look up slideup
			$(this).removeClass('active');
		}
		
		//else (clicked on a non-active link while slide-down is open)
		else {
			//handles primary nav active
			$(this).addClass('active')
			$(this).siblings().removeClass('active');
		}

	//handles hide / show of drop sections	

	var section = $(this).children('a').attr('href')

	console.log(section);

	$(section).show();

	//hide siblings section
	$(section).siblings().hide();

	});

});


