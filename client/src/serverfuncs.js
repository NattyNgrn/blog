const API = "http://localhost:3030";


//get all posts for display on home page
async function allposts(){
    const result = await fetch (API + '/allposts');
    const posts = await result.json();
    console.log(posts);
    return posts;
}


//get individual post when title/picture is clicked
async function postbyid(id){
    const result = await fetch(API + `/post/${id}`);
    const individual = await result.json();
    console.log(individual);
    return individual;
}

//get individual user when title/picture is clicked
async function userbyid(id){
    const result = await fetch(API + `/user/${id}`);
    const individual = await result.json();
    console.log(individual);
    return individual;
}


//add new post
async function addpost(user, title, recorded, url, article){
    const result = await fetch(API + '/addpost', {
    method: "POST",
        body: JSON.stringify({
            user: user, 
            title: title, 
            recorded: recorded, 
            url: url,
            article: article
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(result);
}

//add new user
async function newuser(username, password, firstname, lastname, email, url, bio){
    const result = await fetch(API + '/newuser', {
    method: "POST",
        body: JSON.stringify({
            username: username, 
            password: password, 
            firstname: firstname, 
            lastname: lastname, 
            email: email, 
            url: url, 
            bio: bio
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(result);
}

//delete post
async function deletepost(id){
    const result = await fetch(API + `/delete/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(result);
}

//edit user
async function edituser(username, password, firstname, lastname, email, url, bio){
    const result = await fetch(API + `/edituser/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            username: username, 
            password: password, 
            firstname: firstname, 
            lastname: lastname, 
            email: email, 
            url: url, 
            bio: bio
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(result);
}

export {allposts, postbyid, addpost, deletepost, newuser, edituser, userbyid};