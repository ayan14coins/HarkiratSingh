const user = {
    "Fname" : "Ayan",
    "Lname" : "Das",
    "Roll" : 2205370,
    "University" : "KIIT"
}

user1 = JSON.stringify(user)
console.log("this is a string   :\n\n" + user1 + "\n")

const own = '{ "Fname" : "Shimolika", "Lname" : "Goswami", "Roll" : 22054170, "University" : "KIIT" }'

user2 = JSON.parse(own)
console.log("this is a JSON format  :\n")
console.log(user2)