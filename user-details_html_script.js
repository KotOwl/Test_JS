let userInfo = JSON.parse(localStorage.getItem('info'))
console.log(userInfo);

let wrapperForDetails = document.getElementsByClassName('wrapper');
    let divForButton = document.getElementsByClassName('divForButton')[0];
    let userInfoWrap = document.getElementsByClassName('userInfo')[0];
    userInfoWrap.innerHTML= `
    <h1># ${userInfo.id}</h1>
    <p class="name">&#x1F464; ${userInfo.name}</p>
    <p class="username">&#x1F194; ${userInfo.username}</p>
    <p>&#9742;${userInfo.phone}</p>
    <p>&#x1F310; ${userInfo.website}</p>
    <p>&#9993; ${userInfo.email}</p>
    <p>&#x2122; ${userInfo.company.name}</p>
    <p>💼 ${userInfo.company.bs}</p>
    <p>&#x1F4A1; ${userInfo.company.catchPhrase}</p>
    <p>&#x1F3D9; ${userInfo.address.city}</p>
    <p>&#x1F3E0; ${userInfo.address.geo.lat} ${userInfo.address.geo.lng}</p>
    <p>&#x1F4CD; ${userInfo.address.street}</p>
    <p>&#x1F3E4; ${userInfo.address.zipcode}</p>`;
let pInUserInfo = userInfoWrap.querySelectorAll('p');
console.log(pInUserInfo);
let margin = 10;
for (const p of pInUserInfo){
    p.style.marginLeft = `${margin}px`;
    margin += 30;
}
let posts = document.createElement('div');
posts.classList='posts';
posts.style.display ='none';
const { id } = userInfo;
let buttonForAllPost = document.createElement('button');
buttonForAllPost.classList = 'buttonForAllPosts';
buttonForAllPost.innerText ='Показати всі пости';

buttonForAllPost.onclick = function (){
    if (posts.style.display ==='grid'){
        posts.style.display ='none';
        buttonForAllPost.innerText ='Показати всі пости';
    }
    else {
        posts.style.display ='grid';
        buttonForAllPost.innerText ='Приховати пости';
    }
}
divForButton.appendChild(buttonForAllPost);
fetch( `https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(res => res.json())
    .then(res => {
        const userPosts = res;
        for (const userPost of userPosts) {
            let postTitle = document.createElement('div');
            postTitle.classList ='postTitle';
            postTitle.innerText = `${userPost.title}`;
            let postInfo = document.createElement('button');
            postInfo.innerText = 'Більше інформації про пост ';
            postInfo.onclick = function (){

                localStorage.setItem('post',`${JSON.stringify(userPost)}`)
                window.location.href='post-details.html';
            }
            postTitle.classList='postTitle';
            postTitle.appendChild(postInfo);
            posts.appendChild(postTitle);
        }

    })
document.body.appendChild(posts);

