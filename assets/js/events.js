$(window).resize(function() {
   /*if ($(window).width() >= 992) {
      $("#edu").removeClass("educationsm");
      $("#edu").addClass("education");
   }
   
   if ($(window).width() < 992) {
      $("#edu").removeClass("education");
      $("#edu").addClass("educationsm");
   }*/
   
   if ($(window).width() < 576) {
      $("#pfSkills").removeClass("subtitleL");
      $("#pfSkills").addClass("subtitleLNoBorder");
      $("#sclSkills").removeClass("subtitleR");
      $("#sclSkills").addClass("subtitleRNoBorder");
   }
   else {
      $("#pfSkills").removeClass("subtitleLNoBorder");
      $("#pfSkills").addClass("subtitleL");
      $("#sclSkills").removeClass("subtitleRNoBorder");
      $("#sclSkills").addClass("subtitleR");
   }
})