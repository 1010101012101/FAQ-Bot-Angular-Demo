/*
 * position will be the position of the link relative to the page
 * name will be the name of the link
 * */
function analyticsLinkTrack(position, name) {
  
  var p = position.toLowerCase().replace(/ |-/g, "_");
  var n = name.toLowerCase().replace(/ |-/g, "_");
    
  digitalData["event"] = digitalData["event"] || [];

  digitalData["event"].push({
    eventInfo: {
      eventName: "link_click_event",
      timeStamp: new Date()
    },
    attributes: {
      linkPosition: p,
      linkName: n
    }
  });

  _satellite.track("link_click_event");

  s.clearVars();
}
