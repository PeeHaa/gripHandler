gripHandler jQuery plugin
=========================

Enables the resizing of an element using a grip. Download the [latest minified version][1].

Usage
-----

The plugin is tested on jQuery 1.7+, but older versions of the library should also work. Both the jQuery plugin library and the plugin should be included on the page:

    <script type="text/javascript" src="/path/to/jquery-1.7.2.min.js"></script>
    <script type="text/javascript" src="/path/to/griphandler-0.9.0.min.js"></script>

Add a grip to the element you wish to resize:

    <div class="some-container">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis, nisl in ultricies vulputate, risus nisl semper dolor, fermentum consequat felis augue quis dui. Aenean tempus iaculis risus, sit amet fringilla augue eleifend sed. Nullam congue aliquam mauris, et vulputate augue feugiat eu. Maecenas laoreet, nulla in blandit viverra, nibh nisl porttitor metus, et imperdiet justo sapien non felis. Suspendisse commodo mollis orci at auctor. Nulla blandit, libero vel tristique gravida, ipsum sem sollicitudin eros, eu rutrum enim orci vitae ligula. Sed arcu velit, scelerisque ut dignissim tincidunt, rutrum ut velit.</p>
      <div class="grippie"></div>
    </div>

Activate the plugin on the element(s):

    (function($) {
      $('.some-container').gripHandler({
        cursor: 'n-resize',
        gripClass: 'grippie'
      });
    })(jQuery);

Options
-------

- **cursor** - The cursor type dislayed when hovering over the griphandle. Default is `auto`.
- **gripClass** - The class of the griphandle. Default is `grip-handle`.

Demo
----

Check out the demo @ [jsfiddle][2].

[1]:https://github.com/downloads/PeeHaa/gripHandler/griphandler-0.9.0.min.js
[2]:http://jsfiddle.net/PeeHaa/54nfe/