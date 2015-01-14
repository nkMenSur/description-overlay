# description-overlay
A plugin for description overlays

Requirement/s:<br>
jQuery 1.7+<br>
IE 9+


How to use: 

html:<br> 
<pre>
&lt;!--put as many of these in your markup as you wish :)--&gt;<br>
&lt;div class="someClass" data-description="desired description to be put here"&gt;<br />
&nbsp;&nbsp;&lt;!--img is just an example. use anythig you want. it just has to stretch the container!--&gt;<br>
  &nbsp;&nbsp;&lt;img src="someImage.jpg"/&gt;<br />
&lt;/div&gt;
</pre>

js:<br>
<pre>/*
  a, b and c are optional.
  default values are:
    a = 'overlay-indicator'; 
    b = 0;
    c = 1;
*/

var a = 'className';//classname for the overlay wrapper<br>var b = 0;// min opacity<br>var c = 1;// max opacity;

$('.someClass').descriptionOverlay(a, b, c);</pre>

respnsive demo:<br>
<a href="http://nkmensur.github.io/">nkmensur.github.io</a>

#and now go and use it!! :D

