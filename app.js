console.log("work");

let person = {
    'photo': '2.jpg',
    "name": "Иван Петров",
    "birthday": "01.05.1998",
    "age": 25,
    "isChild": false,
    "works":[
        {
            'name': 'Магазин',
            'year': 2005
        },
        {
            'name': 'Завод',
            'year': 2007
        }

    ]

}


let loadButtonElement = document.getElementById('load')
loadButtonElement.onclick = function(){
    console.log('load');

    let imgElement = document.getElementById('photo')
    imgElement.src = person.photo
}
