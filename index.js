let id;
let search_div = document.getElementById("character")

async function search(q){
    try{
        let url =`https://swapi.dev/api/people/?search=${q}`

        let res = await fetch(url)

        let data = await res.json()

        return data.results 

    }
    catch (err)
    {
        console.log("err :",err)
    }
}

function appendCharacter(character) {
    search_div.innerHTML = null;
    if (character === undefined) {
        return false
    }
    character.forEach(function (el) {         
        let name = document.createElement("p")
        name.innerText = el.name

        let dob = document.createElement("p")
        dob.innerText = el.birth_year
        dob.style.fontSize ="x-small"

        let gender = document.createElement("p")
        gender.innerText = el.gender

        search_div.append(name,dob,gender)
    })
}

async function main() {
    let query = document.getElementById("query").value;
    //console.log("query:",query)

    let response = search(query)     

    let data = await response
    console.log("data:",data)

    appendCharacter(data)

}

function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(function(){
        func()
    },delay)
}