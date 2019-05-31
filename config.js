define("config", function () {
  /* after making any changes here enter "grunt" in your terminal to apply the changes */
  "use strict"

  var ffmapConfig = {
    // link to your main community site:
    url:       "http://md.freifunk.net/",

    // current version

    // visible link in the navigation:
    sitename:  "md.freifunk.net",

    // initial gravity, friction, of the graph at pageload:
    gravity:   0.05,
    friction:  0.73,
    theta:     0.8,
    charge:    1.0,
    distance:  1.0,
    strength:  1.0,

    // path to the nodes.json
    nodesJSON: "nodes.json",
    "citylat": "52.133333",
    "citylon": "10.616667",
    "radius": "100"
  }

  return ffmapConfig
})
