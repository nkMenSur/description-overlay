(function($){
  'use strict';
  
  function readyOverlay(currentOverlay) {
    currentOverlay.css({
      // height:'100%',
      // width:'100%',
      position:'absolute',
      top:0,
      right: 0,
      left: 0,
      bottom: 0,
      opacity: 0,
      'background-color': '#fff',
      'transition': 'opacity 0.2s ease-in-out'
    });
  }
  function reposition(currentDescriptionContainer) {
    var overlayHeight = currentDescriptionContainer.parent().outerHeight();
    var actualDescriptionHeight = currentDescriptionContainer.outerHeight();

    currentDescriptionContainer.css({
      'margin-top': (overlayHeight / 2) - (actualDescriptionHeight / 2)
    });
  }
  function prepareDescription(currentDescriptionContainer){
    currentDescriptionContainer.css({
      'text-align': 'center'
    });
    
    var actualDescription = currentDescriptionContainer.find('h1');

    actualDescription.css({
      display: 'inline-block',
      padding: '10px',
      color: '#000',
      'border-top': '1px solid #000',
      'border-bottom': '1px solid #000'
    });

    reposition(currentDescriptionContainer);
  }

  $.fn.descriptionOverlay = function(overlayClassName, opacityMin, opacityMax) {
    var starttime = new Date;

    if (!overlayClassName)
      overlayClassName = 'overlay-indicator';

    var $this = $(this);

    $this.each(function(){
      var $currentItem = $(this);
      var $currentOverlay = $('<div class="'+ overlayClassName +'"></div>');
      var $currentDescriptionContainer = $('<div><h1>'+ $currentItem.data('description') +'</h1></div>');

      $currentOverlay.append($currentDescriptionContainer);

      readyOverlay($currentOverlay);

      $currentItem.append($currentOverlay);
      
      prepareDescription($currentDescriptionContainer);

    });

    $this.hover(function(){
      if (!opacityMax)
        opacityMax = 1;

      if (!opacityMin)
        opacityMin = 0;

      $(this).find('.' + overlayClassName).css({
        opacity: opacityMax
      });
    }, function() {
      $(this).find('.' + overlayClassName).css({
        opacity: opacityMin
      });
    });

    $(window).resize(function() {
      //TODO: fix for multiline changes
      reposition($('.'+overlayClassName).find('div'));
    });

    console.log('init: ' + (new Date - starttime));

    return this;
  }
})(jQuery);