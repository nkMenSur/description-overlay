# description-overlay
A plugin for description overlays

Requirement/s:
jQuery 1.7+

How to use: 

html: 
----put as many of these in your markup as you wish :)----
&lt;div class="someClass" data-description="desired description to be put here"&gt;<br />
  &nbsp;&nbsp;&lt;img src="someImage.jpg"/&gt;<br />
&lt;/div&gt;

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


and now go and use it!! :D
