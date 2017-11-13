$( document ).ready(function() {
	$("#twitter").stop().mouseenter(function(){
		$("#twitterbg").stop().show("2000")
	});

	$("#twitter").stop().mouseleave(function(){
		$("#twitterbg").stop().hide("2000")
	});

	$("#twitter").click(function() {
		document.location = "https://twitter.com/seikv";		
	} );

	$("#github").stop().mouseenter(function(){
		$("#githubbg").stop().show("2000")
	});

	$("#github").stop().mouseleave(function(){
		$("#githubbg").stop().hide("2000")
	});

	$("#github").click(function() {
		document.location = "https://github.com/seik";		
	});

	$("#telegram").stop().mouseenter(function(){
		$("#telegrambg").stop().show("2000")
	});

	$("#telegram").stop().mouseleave(function(){
		$("#telegrambg").stop().hide("2000")
	});

	$("#telegram").click(function() {
		document.location = "http://telegram.me/seikv";		
	});

	$("#email").stop().mouseenter(function(){
		$("#emailbg").stop().show("2000")
	});

	$("#email").stop().mouseleave(function(){
		$("#emailbg").stop().hide("2000")
	});

	$("#email").click(function() {
		document.location = "mailto:ivanmartinga@gmail.com";		
	});
});