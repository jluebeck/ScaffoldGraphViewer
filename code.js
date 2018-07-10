function makeCyJS(data) {
    var cy = window.cy = cytoscape({
      container: document.getElementById('cy'),

      boxSelectionEnabled: false,
      autounselectify: true,

      layout: {
        name: 'dagre'
      },

    style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(name)',
        'text-valign': 'above',
        'color': 'black',
        'background-color': 'black'
      })
    .selector('edge')
      .css({
        'label':'data(lText)',
        'curve-style': 'bezier',
        'width': 2,
        'line-color': 'data(lCol)',
        'line-style': 'data(lStyle)'
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      }),

      elements: data
    });
  };
