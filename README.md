# ScrollAnimatedHeader

HTML/CSS/JS technique for a scrolling-animated website header

Not a software package but a demonstration of a technique that could work for your need.

https://greeninfo-network.github.io/ScrollAnimatedHeader/


## How It Works

* A function finds the best height for this section (called #story) so it matches the screen height to the height of the header, and CSS causes #story to scroll its content.

* A *scroll* event handler on #story calculates how far along you are in the scrolling process, then which of the "frames" of the animation is aldso that far along, and shows only that image.


## Caveats and Workarounds

* It is not possible to guarantee, that every frame of the animation will be displayed. Mousewheels and people will scroll different speeds, possibly skipping over some frames.

* The action is based on scrolling. If you don't have a lot of scrolling content, the effect won't be very great. Smaller screens and/or a narrower page layout, will cuase more scrolling and better results.

* The "how far along" calculation can use the top of the scrolling viewport or the midline of the scrolling viewport. Either way this is a single number, derived from a scrolling area that is a <b>range</b>. As a result, the very first or last frame may not show up at all if you have more frames than scroll positions. You may want to try fewer frames, particularly at the start or end of the sequence.
