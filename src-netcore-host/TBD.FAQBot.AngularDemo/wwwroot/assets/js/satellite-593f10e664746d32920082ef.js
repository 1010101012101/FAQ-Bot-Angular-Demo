_satellite.pushBlockingScript(function(event, target, $variables){
  (function() {
  var eventAction;
  
  window.addEventListener('beforeunload', function() {
    if (eventAction) {
      s.clearVars();
      s.linkTrackVars="prop29,eVar29,eVar30"
      s.linkTrackEvents="event24"
      s.events="event24"
      s.eVar29 = s.prop29 = _satellite.getVar('form_forminfo_formname');
      s.eVar30 = eventAction;
      s.tl();
    }
  });
  
  document.addEventListener('focus', function(e) {
    eventAction = e['target'].getAttribute('data-field-name');
  }, true);
})();
});
