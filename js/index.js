xmlDoc = $.parseXML("https://www.brainyquote.com/link/quotebr.rss"),
$xml = $( xmlDoc ),
$title = $xml.find( "title" );