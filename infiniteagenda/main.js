$(document).on('ready', function() {
  
  var newWeek = "<div class='calendarWeek'><label>Monday</label><div class='calendarDay'><p>Click to add an agenda</p></div><label>Tuesday</label><div class='calendarDay'><p>Click to add an agenda</p></div><label>Wednesday</label><div class='calendarDay'><p>Click to add an agenda</p></div><label>Thursday</label><div class='calendarDay'><p>Click to add an agenda</p></div><label>Friday</label><div class='calendarDay'><p>Click to add an agenda</p></div><label>Saturday</label><div class='calendarDay'><p>Click to add an agenda</p></div><label>Sunday</label><div class='calendarDay'><p>Click to add an agenda</p></div></div>";

  $("body").append(newWeek)

  $(".calendarDay p").click(function() {
  	$(this).parent().html("<textarea name='newAgendaInput'></textarea>")


	  $("textarea").blur(function() {
	  	$(this).parent().html("<p>" + $("textarea").val() + "</p>")
	  })
   })

  window.addEventListener("scroll", function() {
  	if(window.scrollY > 500) {
  		$(".calendarWeek").slideDown();
  	}
  })
});