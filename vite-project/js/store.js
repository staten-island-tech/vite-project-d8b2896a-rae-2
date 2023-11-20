const dawgs = [
    {
        name: "shao wee wee", 
        breed: "loser",
        age: "16",
        price: "worthless", 
        personality: "Acoustic",
    },
    {
        name: "LAALAA",
        breed: "afghan hound",
        age: "1",
        price: "$2000", 
        personality: "Aloof",
        petimage: <img src="https://www.petmiconnect.com/wp-content/uploads/2018/08/ah.jpg" class="afghanhound"></img>,
    },
    {
        name: "DIPSY",
        breed: "alaskan klee kai",
        age: "2",
        price: "1800", 
        personality: "Playful",
        petimage: <img src="https://wagsandwiggles.com/wp-content/uploads/2023/03/Sandy-1-scaled.jpg" class="akk"></img>,
    },
    {
        name: "PO",
        breed: "akita",
        age: "5",
        price: "$2300", 
        personality: "Docile",
    },
    {
        name: "TINKYWINKY",
        breed:  "tosa",
        age: "3",
        price: "$1950", 
        personality: "Tranquil",
    }
    
];
const meow = [
        {
            name: "Arby's",
            breed: "persian",
            age: "2",
            price: "1300", 
            personality: "Calm",
        }, 
        {
            name: "Burger King",
            breed: "ragdoll",
            age: "4",
            price: "$650", 
            personality: "Friendly",
          },
        {
            name: "Chipotle Mexican Grill",
            breed: "maine coon",
            age: "--",
            price: "$1700", 
            personality: "Goofy",
        },
        {
            name: "Domino's Pizza",
            breed:"birman",
            age: "8",
            price: "$2400", 
            personality: "Affectionate",
        }, 
        {
            name: "Five Guys",
            breed: "siamese",
            age: "3",
            price: "$675", 
            personality: "Extroverted",
        },
];
const chirp = [
    {
        name: "PlayStation 2",
        breed: "parrot",
        age: "2",
        price: "$1200", 
        personality: "Cuddly",
    },
    {
        name: "Gamecube",
        breed: "cockatiel",
        age: "1",
        price: "$275", 
        personality: "Gentle",
    },
    {
        name: "Xbox 360",
        breed: "finch",
        age: "1",
        price: "$95", 
        personality: "Energetic",
    }, 
    {
        name: "Wii",
        breed: "canary",
        age: "3",
        price: "$365", 
        personality: "Quiet",
    },
    {
        name: "Nintendo DS and Nintendo Switch",
        breed: "pair of barbary dove",
        age: "2",
        price: "$145", 
        personality: "Tame",
    }, 
];
const allpets = dawgs.concat(meow, chirp);
export {dawgs, meow, chirp, allpets};