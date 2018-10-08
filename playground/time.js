const moment = require('moment')

// jan 1st 1970 00:00:00 am

// const date = new Date()
// const months = ['Jan', 'Feb']
// console.log(date.getMonth())

// const date = moment()
// date.add(100, 'year').subtract(9, 'months')
// console.log(date.format('MMM Do, YYYY'))

// 10:35 am

// new Date().getTime()
const someTimestamp = moment().valueOf()
console.log(someTimestamp)

const createdAt = 1234
const date = moment(createdAt)
console.log(date.format('h:mm a'))
