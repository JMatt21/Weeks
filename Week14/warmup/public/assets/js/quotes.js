// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  // jQuery event handlers should go here.
  $("button[type=submit]").on("click", function(event){
    event.preventDefault();
    const newQuote = {
      author: $("#auth").val().trim(),
      quote: $("#quo").val().trim()
    }
    $.post("/", newQuote).then(function(){
      console.log('sending info to server');
      location.reload();
    });
    
  });
  $(".delquote").on("click", function(event){
    event.preventDefault();
    $.ajax("/" + $(this).attr("data-id"), {
      type: "DELETE"
    }).then(function(){
      console.log("deleted: ", $(this).attr("data-id"));
      location.reload();
    });
  });
});
