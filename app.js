function doubleValues(arr){
    let newArr = [];
    arr.forEach(function(value){
        newArr.push(value*2);
    })
    return console.log(newArr);
}

doubleValues([1,2,3]) // [2,4,6]
doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach(function(value){
        if(value%2==0){
            newArr.push(value);
        }
    })
    return console.log(newArr);
}

onlyEvenValues([1,2,3]) // [2]
onlyEvenValues([5,1,2,3,10]) // [2,10]

function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach(function(value){
        newArr.push(value[0]+value[value.length-1]);
    })
    return console.log(newArr);
}

showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

function addKeyAndValue(arr,key,keyValue){
    arr.forEach(function(value){
        value[key] = keyValue;
    })
    return console.log(arr);
}

addKeyAndValue(
    [
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ],
      'title',
      'instructor'
    )
    
    /*
      [
        {name: 'Elie', title:'instructor'},
        {name: 'Tim', title:'instructor'},
        {name: 'Matt', title:'instructor'},
        {name: 'Colt', title:'instructor'}
      ]
    */


function vowelCount(str){
    let arr = str.split("");
    let vowels = "aeiou";
    let obj = {};
    arr.forEach(function(value){
        let lowerCaseLetter = value.toLowerCase();
        if(vowels.indexOf(lowerCaseLetter)!==-1){
            if(obj[lowerCaseLetter]){
                obj[lowerCaseLetter]++;
            }else{
                obj[lowerCaseLetter] = 1;
            }
        }
    })
    return console.log(obj);
}

vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}

function doubleValuesWithMap(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

console.log(doubleValuesWithMap([1,2,3])) // [2,4,6]
console.log(doubleValuesWithMap([1,-2,-3])) // [2,-4,-6]

function valTimesIndex(arr){
    return arr.map(function(val,index){
        return val * index;
    })
}

console.log(valTimesIndex([1,2,3])) // [0,2,6]
console.log(valTimesIndex([1,-2,-3])) // [0,-2,-6]4

function extractKey(arr,key){
    return arr.map(function(val){
        return val[key];
    });
}

let key = extractKey(
    [
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ],
    'name'
  )
  console.log(key);
    // ['Elie', 'Tim', Matt', 'Colt']

function extractFullName(arr){
    return arr.map(function(value){
        return `${value.first} ${value.last}`;
    });
}

let fullNameArray = extractFullName([
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia"},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele"}
])
console.log(fullNameArray);

  // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']


function filterByValue(arr,key){
    return arr.filter(function(value){
        return value[key] == true;
    })
}

console.log(filterByValue(
[
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia", isCatOwner: true},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele", isCatOwner: true}
],
'isCatOwner'
))

/*
  [
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Colt', last:"Steele", isCatOwner: true}
  ]
*/


function find(arr,num){
    return arr.filter(function(value){
        return value == num;
    })[0];
}

console.log(find([1,2,3,4,5], 3)) // 3
console.log(find([1,2,3,4,5], 10)) // undefined

function removeVowels(str) {
    const vowels = "aeiou";
    return str
      .toLowerCase()
      .split("")
      .filter(function(val) {
        return vowels.indexOf(val) === -1;
      })
      .join("");
  }

console.log(removeVowels('Elie')) // ('l')
console.log(removeVowels('TIM')) // ('tm')
console.log(removeVowels('ZZZZZZ')) // ('zzzzzz')

function doubleOddNumbers(arr) {
    return arr
      .filter(function(val) {
        return val % 2 !== 0;
      })
      .map(function(val) {
        return val * 2;
      });
    }
console.log("Double Odd Numbers")
console.log(doubleOddNumbers([1,2,3,4,5])) // [2,6,10]
console.log(doubleOddNumbers([4,4,4,4,4])) // []