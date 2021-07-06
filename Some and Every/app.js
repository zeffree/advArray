function hasOddNumber(arr){
    return arr.some(function(value){
        return value % 2 !== 0;
    })
}

hasOddNumber([1,2,2,2,2,2,4]) // true
hasOddNumber([2,2,2,2,2,4]) // false

function hasAZero(num){
    return num.toString().split('').some(function(value){
        return value == '0';
    })
}

hasAZero(33321232131012) // true
hasAZero(1212121) // false

function hasOnlyOddNumbers(arr){
    return arr.every(function(value){
        return value % 2 !==0;
    })
}

hasOnlyOddNumbers([1,3,5,7]) // true
hasOnlyOddNumbers([1,2,3,5,7]) // false

function hasNoDuplicates(arr){
    return arr.every(function(value){
        return arr.indexOf(value) == arr.lastIndexOf(value);
    })
}

hasNoDuplicates([1,2,3,1]) // false
hasNoDuplicates([1,2,3]) // true

let arr1 = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

function hasCertainKey(arr,key){
    return arr.every(function(value){
        return key in value;
    })
}

hasCertainKey(arr1,'first') // true
hasCertainKey(arr1,'isCatOwner') // false

let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

function hasCertainValue(arr,key,val){
    return arr.every(function(value){
        return value[key] == val;
    })
}

  hasCertainValue(arr,'title','Instructor') // true
  hasCertainValue(arr,'first','Elie') // false