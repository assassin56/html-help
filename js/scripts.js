$(document).ready(function() {
  $("div").click(function() {
    var elements = ["header", "paragraph", "function"];
    elements.forEach(function(element) {
      alert('This is ' + element + "!");
    });
  //   alert("This is a header.");
  //   alert("I told you, THIS IS A HEADER!");
  // });
  // $("p").click(function() {
  //   alert("This is a paragraph.");
  // });
  // $("img").click(function() {
  //   alert("This is an image.");
  });
});