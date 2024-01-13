const drawerIcon = jQuery("#drawer-icon");
const drawerContent = jQuery("#drawer-content");
const drawerLink = jQuery(".drawer__link");
const drawerCheckBox = jQuery("#drawer-checkbox");
const drawerOpen = jQuery(".js-drawer-open");

drawerIcon.on("click", function() {
  drawerContent.toggleClass("is-checked"); 
});