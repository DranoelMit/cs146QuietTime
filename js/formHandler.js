function addPost()
{
  var col2Hex =
  {
red : "#ff0000",
blue : "#0000ff",
green : "#00ff00",
purple : "#aa00ff",
black : "#000000",

};
  var name = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var color  = document.getElementById('dropColor').value;
  var comment = document.getElementById('comment').value;



var board = document.getElementById('postArea');

var newPost = document.createElement("DIV");
      newPost.setAttribute("class", "post");

  var nameTag = document.createElement("SPAN");
      var tagText = document.createTextNode(name + "(" + email + "): ");
      nameTag.appendChild(tagText);


  var postComment = document.createElement("SPAN");
      var commentText = document.createTextNode(comment);
      postComment.setAttribute("class", "comment-body");
      postComment.appendChild(commentText);
      var breakline = document.createElement('hr');

  //Add all the pieces to the new post
  newPost.appendChild(nameTag);
  newPost.appendChild(postComment);
  newPost.appendChild(breakline);
  newPost.style.color = col2Hex[color];
  newPost.addEventListener("mouseover", function(e)
{
newPost.style.transition = "font-size .5s"
newPost.style.fontSize = "20pt";

});
newPost.addEventListener("mouseout", function(e)
{
newPost.style.transition = "font-size .5s"
newPost.style.fontSize = "14pt";

});
  board.appendChild(newPost);
}
