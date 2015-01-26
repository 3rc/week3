$(document).on('ready', function() {
	var outerShell = $('<div class="outer-shell"></div>');
	var innerShell = $('<div class="inner-shell"></div>');
	var clockFace = $('<div class="clock-face">.&nbsp;12:30</div>');
	var pmSide = $('<div class="pm-side">PM<br>Auto</div>');
	var tunerLabel = $('<div class="tuner-label">AM &nbsp;&nbsp;&nbsp; 53 60 70 90 110 140 170 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KHz<br>FM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 88 92 96 102 106 108 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MHz</div>');
	$('body').append(outerShell);
	$('.outer-shell').append(innerShell);
	$('.inner-shell').append(pmSide, clockFace, tunerLabel)
  
});