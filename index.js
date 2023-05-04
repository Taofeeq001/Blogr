// const users = [{
//     id: 1,
//     name : "Bolaji Abdullahi",
//     age : 50,
//     gender: "male"
// },
// {
//     id: 2,
//     name : "Gbemisola Saraki",
//     age : 45,
//     gender: "Female"
// },
// {
//     id: 3,
//     name : "Kolade Oyinloye",
//     age : 42,
//     gender: "male"
// },
// {id: 4,
//     name : "Ahmed Fatai",
//     age : 55,
//     gender: "male"
// }]

<section>
<div>
    <p class="name"></p>
    <p class="age"></p>
    <p class="gender"></p>
</div>
</section>

<script src="../index.js"></script>
const details = [{
    Name: "Gbadegesin Faruq",
    Occupation: "Researcher",
    Hobbies: "Reading, Writting and Dancing",
    Age: 50,
    Gender: 'trans'

    },
    {
        Name: "Assayouti Adam",
        Occupation: "Web developer",
        Hobbies: "Reading, Writting and Dancing",
        Age: 70,
        Gender: 'Male'
    },
    {
        Name: "Ajayi Kaosara",
        Occupation: "Trader",
        Hobbies: "Buying and Exchanging of comodities",
        Age: 35,
        Gender: 'Female'
    },
]

users.map((user, index)=>{
    document.querySelector(".name").innerHTML= user.name
    document.querySelector(".age").innerHTML = user.age
    document.querySelector(".gender").innerHTML = user.gender
})

// Looping each items in users array

users.map((user, index)=>{
    for (u in user){
        console.log(`${u}: ${user[u]}`);
    }
})