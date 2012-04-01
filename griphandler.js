/**
 * gripHandler jQuery plugin
 * The jQuery plugin enables user to resize an element using a grip
 *
 * jQuery 1.7+
 *
 * @author     Pieter Hordijk <info@pieterhordijk.com>
 * @copyright  Copyright (c) 2012 Pieter Hordijk
 * @license    http://www.opensource.org/licenses/mit-license.html  MIT License
 * @version    0.10.1
 * @website    https://github.com/PeeHaa/gripHandler
 */
(function($) {
    $.fn.gripHandler = function(options) {
        var defaults = {
            cursor: 'auto',
            gripClass: 'grip-handle'
        };
        var opts = $.extend({}, defaults, options);

        return this.each(function() {
            var $this = $(this)
            $this.data('initheight', $this.height());
            var $gripHandler = $('.' + opts.gripClass, $this);
            var totalHeight = $this[0].scrollHeight + $gripHandler.height();
            var isResizing = false;
            var currentPosY;

            $gripHandler.mousedown(function(e) {
                isResizing = true;
                currentPosY = e.pageY;

                return false;
            }).css('cursor', opts.cursor);

            $gripHandler.dblclick(function() {
              if ($this.height() < totalHeight) {
                $this.height(totalHeight);
              } else {
                $this.height($this.data('initheight'));
              }
            });

            $(document).mousedown(function() {
                if (isResizing) return false;
            });

            $(document).mousemove(function(e) {
                if (!isResizing) return;

                var newHeight = $this.height() + (e.pageY - currentPosY);
                currentPosY = e.pageY;

                if (newHeight > $gripHandler.height() && newHeight < totalHeight) {
                    $this.height(newHeight);
                }
            });

            $(document).mouseup(function() {
                isResizing = false;
            });
        });
    };
})(jQuery);