// const result='Hello world:'.indexOf('heropy')
// console.log(result)

//string.protytpe.indexof()
// const str='0123'
// console.log('012 34'.length)

// const str='hello world!'
// console.log(str.indexOf('HEROPY')!== -1)
// console.log(str.slice(6,11))
// console.log(str.replace(' world!',''))
// const str='thesecon@gmail.com'
// console.log(str.match(/.+(?=@)/)[0])

// const str='       hello world   '
// console.log(str.trim())

// const pi=3.14159265358979
// console.log(pi)

// const str=pi.toFixed(2)
// console.log(str)
// console.log(typeof str)
// //전역함수 

// const integer=parseInt(str)//전역함수에서 문자데이터를 숫자데이터(정수)로 반환
// const float=parseFloat(str)//전역함수에서 문자데이터를 숫자데이터 (소수)
// console.log(integer)
// console.log(float)
// console.log(typeof integer,typeof float)

// console.log('abs: ',Math.abs(-12))

// console.log('min: ',Math.min(2,8))

// console.log('max: ',Math.max(2,8))
// console.log('ceil: ',Math.ceil(3.14))
// console.log('floor: ',Math.floor(3.14))
// console.log('round: ',Math.round(3.14))
// console.log('random: ',Math.random())

// array
//----------------------------------------------------------------------
// const numbers=[1,2,3,4]
// const fruits=['Apple','Banana','Cherry']

// console.log(numbers[1])
// console.log(fruits[2])
// console.log(numbers.length)
// console.log(fruits.length)
// console.log([1,2].length)

// console.log([].length)
// console.log(numbers.concat(fruits))
// console.log(numbers)
// console.log(fruits)

// fruits.forEach(function (fruit,i) {
//   console.log(fruit,i)
// })


//.map
// const a= fruits.forEach((fruit,index)=>{
//   console.log(`${fruit}-${index}`)
// })
// console.log(a)

// const b=fruits.map((fruit,index) => ({
//   id:index,
//   name: fruit
// }))
// console.log(b)

// const a=numbers.map(number=> number<3)
// console.log(a)

// const b=numbers.filter(number=>number<3)
// console.log(b)

// console.log(numbers)
// const a=fruits.find(fruit=>{
//   return /^C/.test(fruit)
// })
// const a=fruits.find(fruit=>/^C/.test(fruit))
// console.log(a)

// const b=fruits.findIndex(fruit=>/^C/.test(fruit))
// console.log(b)

// const a=numbers.includes(3)
// console.log(a)

// const b=fruits.includes('HEROPY')
// console.log(b)
//---------------------------------------------------------------------
// const numbers=[1,2,3,4]
// const fruits=['Apple','Banana','Cherry']


// numbers.push(5)
// console.log(numbers)

// numbers.unshift(0)
// console.log(numbers)

// numbers.reverse()
// fruits.reverse()
// console.log(numbers)
// console.log(fruits)

// numbers.splice(2,1)
//인덱스,삭제개수,대체숫자
//----------------------------------------------
// const numbers=[1,2,3,4]
// const fruits=['Apple','Banana','Cherry']

// numbers.splice(2, 1,  999)

// console.log(numbers)

// fruits.splice(2,0,'orange')

// console.log(fruits)
//------------------------------------------------
// const userAge={
//   name:'Heropy',
//   age:85
// }
// const userEmail={
//   name:'Heropy',
//   email:'thesecon@gmail.com'
// }

// const target=Object.assign({},userAge)//.userEmail)
// console.log(target)
// console.log(userAge)
// console.log(target===userAge)

// const a={k:123}
// const b={k:123}
// console.log(a===b)

// const user={
//   name:'heropy',
//   age:85,
//   email:'thesecon@gmail.com'
// }
// const keys=Object.keys(user)
// console.log(keys)

// console.log(user['email'])

// const values=keys.map(key=>user[key])
// console.log(values)

//구조분해 할당
// const user={
//   name:'heropy',
//   age:85,
//   email:'thesecon@gmail.com',
//   address:'USA'
// }
// const {name:heropy,age,email,address='korea'}=user
// //E.g,user.address

// console.log(`사용자의 이름은 ${heropy}입니다.`)
// console.log(`${heropy}의 나이는 ${age}세 입니다.`)
// console.log(`${heropy}의 이메일 주소는 ${email}입니다.`)
// console.log(address)


// const fruits=['Apple','Banana','Cherry']
// // const [a,b,c,d]=fruits
// const [,,b]=fruits
// // console.log(a,b,c,d)
// console.log(b)

// //전개연산자(spread)
// //const fruits=['Apple','Banana','Cherry']
// const fruits=['Apple','Banana','Cherry','Orange']

// console.log(fruits)
// console.log(...fruits)
// //console.log('Apple','Banana','Cherry') 설명

// // function toObject(a,b,c){//...c 오랜지랑 연결
// //   return{
// //     a,//a:a 변수와 같으므로
// //     b,//b:b
// //     C
// //   }
// // }
// const toObject=(a,b,...c)=>{a,b,c}


//  console.log(toObject(...fruits))
// // console.log(toObject(fruits[0],fruits[1],fruits[2]))

//데이터 불변성
//원시데이터:string,Number,Boolean,undefined,null
//참조형데이터:Object,Array,Funtion
//-------------------------------------------------------------
//|1:         |2:         |3:        |4:
//-------------------------------------------------------------

// let a=1
// let b=4
// console.log(a,b,a===b)
// b=a
// console.log(a,b,a===b)
// a=7
// console.log(a,b,a===b)
// let c=1
// console.log(b,c,b==c)

// let a={k:1}
// let b={k:1}
// console.log(a,b,a===b)
// a.k=7
// b=a

// console.log(a,b,a===b)
// a.k=2
// console.log(a,b,a===b)
// let c=b

// console.log(a,b,c,a===c)
// a.k=9
// console.log(a,b,c,a===c)

//-------------------------------------------------------------
//|1:         |2:         |3:        |4:
//-------------------------------------------------------------
//얕은 복사shallow copy, 깊은복사
//  import _ from 'losash'
const user={
  name:'heropy',
  age:85,
  emails:['thesecon@gmail.com']
}
// const copyUser=user
// const copyUser=Object.assign({},user)
 const copyUser={...user}

// const copyUser=_.cloneDeep(user)
console.log(copyUser===user)

user.age=22
console.log('user',user)
console.log('copyUser',copyUser)

console.log('-------')
console.log('------')

user.emails.push('neo@zilinks.com')
console.log(user.emails===copyUser.emails)
console.log('user',user)
console.log('copyUser',copyUser)

//npm i lodash 
//npm run dev