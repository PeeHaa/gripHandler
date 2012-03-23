(function($) {
    $.fn.gripHandler = function(options) {
        var defaults = {
            cursor: 'auto',
            gripClass: 'grip-handle'
        };
        var opts = $.extend({}, defaults, options);

        return this.each(function() {
            var $this = $(this);
            var $gripHandler = $('.' + opts.gripClass, $this);
            var totalHeight = $this[0].scrollHeight + $gripHandler.height();
            var isResizing = false;
            var currentPosY;

            $gripHandler.mousedown(function(e) {
                isResizing = true;
                currentPosY = e.pageY;

                return false;
            }).css('cursor', opts.cursor);

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