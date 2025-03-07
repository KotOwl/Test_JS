fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => {
        console.log(res);
        let wrapper = document.createElement('div');
        wrapper.classList = "wrapper";
        let info = res;
        for (const element of info) {
            let userCard = document.createElement('div');
            let userId = document.createElement('p');
            userId.classList='user-id';
            let userName = document.createElement('p');
            userName.classList = 'user-name';
            userId.innerText = `User id : ${element.id}`;
            let button = document.createElement('button');
            button.innerText = "Повна інформація про користувача";
            button.onclick= function (ev){
                let info = element;
                console.log(info );
                localStorage.setItem('info',JSON.stringify(info));
                window.location.href = "user-details.html";
            }

            userName.innerText= element.name;
            userCard.append(userId, userName,button);
            userCard.classList = 'userCard';
            wrapper.appendChild(userCard);
        }
        document.body.appendChild(wrapper);

    })
