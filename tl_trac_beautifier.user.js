// ==UserScript==
// @name TL Trac Beautifier
// @namespace https://dev.transloc.com
// @description Makes Trac look much better.
// @include https://dev.transloc.com/*
// ==/UserScript==

var $;

addJQuery(letsJQuery);

// Add jQuery
function addJQuery(callback) {
    var script = document.createElement("script");

    script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js");

    script.addEventListener('load', function() {
        var script = document.createElement("script");
        script.textContent = "(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);

    document.body.appendChild(script);
}

// All your GM code must be inside this function
function letsJQuery() {
    $('body').css({
        width: 1024,
        margin: '15px auto'
    });
    
    
    // -----------------------------------------------------
    // For the Tickets
    // -----------------------------------------------------
    
    var changes = {
        fontSize: 14,
        verticalAlign: 'middle'
    };
    var items= ['table.listing tbody', 'table.listing th', 'table.listing td'];
    for(var i = 0, len = items.length; i < len; i++){
        $(items[i]).css(changes);
    }
    
    $('table .type').css({
        textAlign: 'center'
    }).each(function(){
        // Go through and replace the text with an icon
        var types = {
            'task': '<img src="http://hacks.jwf.us/pretty_trac/icons/page_white_text.png" alt="Task Icon" title="Task" />',
            'defect': '<img src="http://hacks.jwf.us/pretty_trac/icons/bug.png" alt="Bug Icon" title="Defect / Bug" />',
            'enhancement': '<img src="http://hacks.jwf.us/pretty_trac/icons/star.png" alt="Enhancement Icon" title="Enhancement / New Feature" />'
        };
        var $this = $(this),
            content = $this.text();
    
        content = /(task)|(defect)|(enhancement)/i.exec(content);
        
        if(content && content.length > 0){
            $this.html(types[content[0]]);
        }
    });
    
    // Individual ticket view
    
    $('#content.ticket').css({
        width: '100%'
    });
    $('#content #ticket').css({
        border: 'none',
        backgroundColor: '#FFF',
        padding: 0
    });
    $('#ticket .description h3').css({
        borderBottom: '1px solid black',
        color: '#000',
        fontWeight: 'bold'
    });
    
}