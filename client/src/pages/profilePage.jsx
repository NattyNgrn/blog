import { useState, useEffect } from "react";
import { userbyid } from "../serverfuncs.js";
import { edituser } from "../serverfuncs.js"
import { Link } from 'react-router-dom';

//username, password, firstname, lastname, email, url, bio
function ProfilePage({id}){

    
    const [user, setUser] = useState({});

    useEffect(()=>{
        userbyid(id).then(result => setUser(result));
    }, []);

    const [showEdit, setShowEdit] = useState(false);
    async function save(){
        await edituser(id, user.username, user.password, user.firstname, user.lastname, user.email, user.url, user.bio);
        setShowEdit(false);
        }

        function cancel(){
        setShowEdit(false);
        }


    if (showEdit){
        <form>
            <div class="flex flex-col items-center">
            <label for="name" class="text-lg font-medium text-amber-400">Name</label>
            <input value={user.username}  onChange={(e) => setUser({...user, username: e.target.value})} type="text" class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Name" required/>

            <label for="email" class="text-lg font-medium text-amber-400">Email</label>
            <input value={user.password}  onChange={(e) => setUser({...user, password: e.target.value})} type="text" class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Name" required/>

            <label for="phone" class="text-lg font-medium text-amber-400">Phone number</label>
            <input value={user.firstname}  onChange={(e) => setUser({...user, firstname: e.target.value})} type="text" class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Name" required/>

            <label for="phone" class="text-lg font-medium text-amber-400">Phone number</label>
            <input value={user.lastname}  onChange={(e) => setUser({...user, lastname: e.target.value})} type="text" class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Name" required/>

            <label for="phone" class="text-lg font-medium text-amber-400">Phone number</label>
            <input value={user.email}  onChange={(e) => setUser({...user, email: e.target.value})} type="text" class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Name" required/>


            <label for="notes" class="text-lg font-medium text-amber-400">Notes</label>
            <textarea value={user.bio}  onChange={(e) => setUser({...user, bio: e.target.value})} class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Notes" required></textarea>

            <label htmlFor="cover-photo" className="block text-lg font-medium leading-6 text-amber-400">
                Profile Picture
                </label>
                <UploadWidget setUploading={setUploading} setUrl={setUrl} ></UploadWidget>

            <div className="col-span-full">
                
            <div class="flex justify-center mt-4">
                <button onClick={cancel} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md mr-2">Cancel</button>
                <button type="submit" onClick={save} class="bg-amber-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md">Save</button>
            </div>

            </div>
            </div>
        </form>
    }
    else{
    return(
        <div className="px-4 sm:px-0 flex flex-col items-center">
            <img class="m-8 mx-auto rounded-full w-96 h-96 shadow-xl dark:shadow-gray-800" src= {user.url} />
            <h1 className="m-8 text-xl font-medium text-amber-400">Username: {user.username}</h1>
            <h1 className="m-8 text-xl font-medium text-amber-400">Name: {user.firstname +" "+ user.lastname}</h1>
            <h1 className="m-8 text-xl font-medium text-amber-400">Email: {user.email}</h1>
            <h1 className="m-8 text-xl font-medium text-amber-400">Bio: {user.bio}</h1>
            
            <button onClick={()=>setShowEdit(true)} class=" m-4 bg-amber-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md"> Edit</button>
            <button  class=" m-4 bg-amber-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md"> <Link to="/home">Home</Link> </button>
        </div>
        )
    }
}

    export default ProfilePage;