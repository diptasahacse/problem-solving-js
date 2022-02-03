function bestFriend(friends){
    let bigFriend = friends[0];
    for (let index = 0; index < friends.length; index++) {
        if(bigFriend.length < friends[index].length){
            bigFriend = friends[index];
        }
    }
    return bigFriend;
}
let allFriend = ["Dipta", "Keya", "Arjit Shing", "Shuvo", "Post Malone", "Onik", "Jhankar Mahabub"];
let bigFriend = bestFriend(allFriend);
console.log(bigFriend);
