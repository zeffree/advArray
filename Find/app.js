function findUserByUsername(arr,value){
    return arr.find(function(val){
        return val.username == value;
    })
}

const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  
  findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
  findUserByUsername(users, 'taco') // undefined


function removeUser(arr,name){
    let index = arr.findIndex(function(value){
        return value.username == name;
    })
    if(index == -1){
        return;
    }
    return arr.splice(index,1);
}
  
//   removeUser(users, 'akagen') // {username: 'akagen'}
//   removeUser(users, 'akagen') // undefined