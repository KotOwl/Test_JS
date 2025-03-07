let postInfo = JSON.parse(localStorage.getItem('post'))
const {id,body,title,userId} = postInfo;
let wrapperForPosts = document.getElementsByClassName('wrapperForPost')[0]
wrapperForPosts.innerHTML=`<p>Id: ${id}</p><p class="title">Title</p><h1>${title}</h1><p class="bodyHead">Body</p><p class="bodyId">${body}</p><p>Id Користувача: ${userId}</p>`
fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(res => res.json())
    .then(res =>{
        let wrapperForComments = document.getElementsByClassName('wrapperForComments')[0];
        for (const comments of res) {
            let {name, email, body} = comments;
            let comment= document.createElement('div');
            comment.classList = 'comment';
            comment.innerHTML = `<h1>${name}</h1><p>${body}</p><p class="email">By ${email}</p>`;
            wrapperForComments.appendChild(comment);
        }
    })