(function($) {
  $(function() {
    var ds = {
      'name': 'Lao Lao',
      'title': 'general manager',
      'children': [
        { 'name': 'Bo Miao', 'title': 'department manager' },
        { 'name': 'Su Miao', 'title': 'department manager',
          'children': [
            { 'name': 'Tie Hua', 'title': 'senior engineer' },
            { 'name': 'Hei Hei', 'title': 'senior engineer',
              'children': [
               { 'name': 'Pang Pang', 'title': 'engineer' },
               { 'name': 'Xiang Xiang', 'title': 'UE engineer' }
              ]
            }
          ]
        },
        { 'name': 'Hong Miao', 'title': 'department manager' },
        { 'name': 'Chun Miao', 'title': 'department manager' }
      ]
    };

    var oc = $('#chart-container').orgchart({
      'data' : ds,
      'nodeContent': 'title',
      'pan': true,
      'zoom': true,
      'draggable': true
    });
    
    $('#togglePan').on('click', function() {
      // of course, oc.setOptions({ 'pan': this.checked }); is also OK.
      oc.setOptions('pan', this.checked);
    });
    
    $('#toggleZoom').on('click', function() {
      // of course, oc.setOptions({ 'zoom': this.checked }); is also OK.
      oc.setOptions('zoom', this.checked);
    });

  });
})(jQuery);
