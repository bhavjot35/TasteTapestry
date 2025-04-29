
// JavaScript code for the comment section
document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentList = document.getElementById('comment-list');

    commentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        
        const newComment = commentInput.value;

        
        const commentItem = document.createElement('li');
        commentItem.textContent = newComment;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            commentList.removeChild(commentItem);
        });

        commentItem.appendChild(deleteButton);

        
        commentList.appendChild(commentItem);

        
        commentInput.value = '';
    });
});
