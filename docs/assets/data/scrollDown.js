var lastScroll = 0;
var lastcldScroll = 0;
var startedScrolling = false;
var cld = false;
var finished = false;
var topPx = 0;
var header = document.getElementsByTagName("header").item(0);

window.onscroll = function ()
{
    var scroll = document.scrollingElement.scrollTop;
    var total = 0;
    if (cld && lastScroll < scroll)
    {
        lastScroll = scroll;
        return;
    }
    if (cld && lastcldScroll < scroll && lastScroll > scroll)
    {
        startedScrolling = false;
        finished = false;
    }
    if (!cld && lastcldScroll > scroll && lastScroll < scroll)
    {
        startedScrolling = false;
    }

    if (!startedScrolling)
    {
        lastcldScroll = scroll;
        startedScrolling = true;
        finished = false;
    }

    if (lastcldScroll < scroll)
    {
        total = lastcldScroll - scroll;
    }
    else if (lastcldScroll == scroll)
        total = (cld) ? -82 : 0;
    else
    {
        total = -83 + (lastcldScroll - scroll);
    }

    if (scroll <= 0)
        total = 0;
    
    
    if (!finished)
    {
        header.style.top = total.toString() + "px";
        topPx = total;
        if (-total >= 83)
        {
            finished = true;
            header.style.top = "-83px";
            topPx = -83;
            cld = true;
            startedScrolling = false;
        }
        else if (-total < 0)
        {
            header.style.top = "0px";
            cld = false;
        }
    }
    lastScroll = scroll;
}