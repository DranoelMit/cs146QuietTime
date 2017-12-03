function addPost()
{
  var col2Hex =
  {
red : "#ff0000",
blue : "#0000ff",
green : "#00ff00",
yellow : "#ffff00",
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
      var tagText = document.createTextNode(name);
      var tagText1 = document.createTextNode(email);
      nameTag.appendChild(tagText);
      nameTag.appendChild(tagText1);

  var postComment = document.createElement("SPAN");
      var commentText = document.createTextNode(comment);
      postComment.appendChild(commentText);

  //Add all the pieces to the new post
  newPost.appendChild(nameTag);
  newPost.appendChild(postComment);
  newPost.style.color = col2Hex[color];
  board.appendChild(newPost);
}
