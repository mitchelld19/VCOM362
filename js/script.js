function toggleSection(a){
	var section = $('#'+a);
	var nav = $('#nav-container');
	var aboutCont = $('#aboutContainer');
	var locationCont = $('#locationContainer');
	var homePage = $('#homePage');

	var effect = 'slide';
  var options = { direction: 'down' };
  var duration = 300;

	if(section.css("display") == "none")
	{
		section.slideDown();
		homePage.css("display", "none");
	}

	else{
		homePage.toggle(effect, options, duration);
		section.css("display", "none");
	}
}



function subNavToggle(a, b){
	var subContainers = $('.sub-containers');
	var selectedContainer = $('#' + a);
	var subNavSection = $('.active'+b+'Ul');

	subContainers.css("display", "none");

     var effect = 'slide';
     var options = { direction: 'left' };
     var duration = 400;

		selectedContainer.toggle(effect, options, duration);
		subNavSection.css("display", "block");
}

/*----- Sub Accordion Nav -----*/
$(document).ready(function(){
	$(".sub-nav h2").click(function(){
		//slide up all the link lists
		$(".sub-nav ul").slideUp();
		//slide down the link list below the h3 clicked - only if its closed
		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
		}
	});
});





function showTimelineSection(defaultDiv, timelineItemName, timelineDate, timelineSectionName, timelineImg){

	var timelineSection = $('#'+timelineItemName);
	var allTimelineSections = $('.'+timelineSectionName+'TimelineSections');
	var defaultDivs = $('#'+ defaultDiv);
	var timelineImgs = $('#' + timelineImg);
	var allTimelineImgs = $('.timelineImg');
	var timelineDates = $('#' + timelineDate);
	var allTimelineDates = $('.TimelineNumbers');

	defaultDivs.hide();
	allTimelineSections.hide();
	timelineSection.show();
	allTimelineImgs.css('opacity', '0.5');
	allTimelineDates.show();
	timelineDates.hide();
	timelineImgs.css('opacity', '1');

}
