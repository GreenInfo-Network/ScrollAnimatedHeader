$(document).ready(function () {
    initScrollingHeader();
});

function initScrollingHeader() {
    // make the #story content fill the vertical height after the image header
    // if you have a navbar etc you may want to modify the story_height calculation to subtract those heights as well
    function handleResize() {
        var story_height = $(window).height() - $('#image-frames').height();
        if (story_height < 200) story_height = 200;
        $('#story').css({
            'max-height': story_height + 'px'
        });
    }
    $(window).resize(handleResize);
    handleResize();

    // as the #story content scrolls, find the midline and pick the correspnding animation frame
    $('#story').scroll(function () {
        // find our relative position in the scrolling process

        // option 1: this uses the midline of the scrolling viewport
        var position = ( $('#story').scrollTop() + 0.5 * $('#story').height()) / $('#story').prop('scrollHeight');

        // option 2: this uses the top of the scrolling viewport
        //var position = $('#story').scrollTop() / $('#story').prop('scrollHeight');

        // show this image frame
        var $images    = $('#image-frames img');
        $images.hide().eq( Math.round(position * $images.length) ).show();
    }).trigger('scroll');
}
