var currentQuote = "", currentAuthor = "";

function getNextQuote() {
  $.ajax({
    url: "http://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        
        $(".quote-text").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $("#text").html(
          response.quoteText);
        });

      $(".quote-author").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $("#author").html(
          response.quoteAuthor);
        });
        
         
        
    
      
      $("#tweet-quote").attr("href", "http://twitter.com/home/?status=" + response.quoteText +
          ' (' + response.quoteAuthor + ')');
      }
  });
}

$(document).ready(function(){
    getNextQuote();
  $("#new-quote").on("click",getNextQuote());
  
    });
$("button").click(function(){
getNextQuote();
});