let commentContainer = document.getElementById("comment-container")

const createInputBox =  () =>{
    let div = document.createElement("div")
    div.setAttribute("class", "comment-details")
    div.innerHTML += `
        <input type="text" class="input" placeholder="Add text here">
        <button class="btn submit">Submit</button>
    `;

    return div;
}

const addReply = (text) => {
    let div = document.createElement("div")
    div.setAttribute("class", "all-comment")
    div.innerHTML += `
        <div class="card">
            <span class="text">${text}</span>
            <span id="reply" class="reply">Add Reply</span>
        </div>
    `;

    return div
}

commentContainer.addEventListener('click', (e) => {
    console.log('event seen', e);
    let replyClicked = e.target.classList.contains("reply");
    let submitClicked = e.target.classList.contains("submit");
    let closestCard = e.target.closest(".all-comment");


    if(replyClicked) {
        closestCard.appendChild(createInputBox())
    }

    if(submitClicked) {
        const commentDetails = e.target.closest(".comment-details");
        if (commentDetails.children[0].value) {
            closestCard.appendChild(addReply(commentDetails.children[0].value));
            commentDetails.remove();
        }
    }
})