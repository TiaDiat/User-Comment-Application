// When the user clicks the post button, the broswer will show the username and the comment
function leaveComment() {
	var username = document.getElementById("username").value
	var comment = document.getElementById("comment").value

	var userNameText = document.createTextNode("Username: " + username)
	var commentText = document.createTextNode(comment)

	var newListItem = document.createElement("li")
	newListItem.className = "list-group-item"
	var newUserName = document.createElement("p")
	newUserName.appendChild(userNameText)
	var newComment = document.createElement("p")
	newComment.appendChild(commentText)
//Posts the username and the comment 
	newListItem.appendChild(newUserName)
	newListItem.appendChild(newComment)
	document.getElementById("commentList").appendChild(newListItem)
//Clears the text nodes after the user clicks the post button
	document.getElementById("todoForm").reset();

}