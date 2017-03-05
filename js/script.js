function toggleSection(a){
	//var sectionId = document.getElementById(a);
	//var navId = document.getElementById("nav-container");
	var section = $('#'+a);
	var nav = $('#nav-container');

	if(section.css("display") == "none")
	{
		section.slideDown();
		nav.css("display", "none");
	}

	else{
		nav.slideDown();
		section.css("display", "none");
	}
}


function showTimelineSection(defaultDiv, timelineName, timelineSectionName, timelineImg){

	var timelineSection = $('#'+timelineName);
	var allTimelineSections = $('.'+timelineSectionName+'TimelineSections');
	var defaultDiv = $('#'+ defaultDiv);
	var timelineImg = $('#' + timelineImg);
	var allTimelineImgs = $('.timelineImg');
	
	defaultDiv.hide();
	allTimelineSections.hide();
	timelineSection.show();
	allTimelineImgs.css('opacity', '0.3');
	timelineImg.css('opacity', '1');

}