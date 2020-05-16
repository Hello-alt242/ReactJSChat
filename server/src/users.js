const users=[];

const addUser=({id,name,room}) => {
    name=name.trim().toLowerCase();
    room=room.trim().toLowerCase();

    //check if user exists: add user if not exist
    const existingUser=users.find(user)=> user.room==room&&user.name==name);
    //error message if haven't entered a credential yet
    if (name || !room) return {error:"Username and room required"};
    if (existingUser) return {error: 'This username is already taken for this room'};

    const user={id,name,room};
    users.push(user);

    return {user};
}

const removeUser=(id)=>{
    const index=users.findIndex((user) => user.id===id );
    if (index !== -1) return user.splice(index,1)[0];
}
//24:17
const getUser = (id) => users.find((user)=> user.id===id);

const getUsersInRoom=(room) => users.filter((user.room===room));

module.exports= {addUser, removeUser, getUser, getUsersInRoom};
