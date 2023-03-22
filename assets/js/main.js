/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.  Ogni membro è caratterizzato dalle seguenti informazioni:
nome
ruolo
foto
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede */



/* Creo l'array dei membri del team e ne inserisco  le informazioni */

const  teamMember = [
    //member 1(0)
    {
        name: "Wayne Barnett",
        position: "Founder & CEO",
        img:"./assets/img/angela-caroll-chief-editor.jpg"
    },
    //member 2(1)
    {
        name: "Angela Caroll",
        position: "Chief Editor",
        img:"./assets/img/angela-lopez-social-media-manager.jpg"
    },
    //member 3(2)
    {
        name: "Walter Gordon",
        position: "Office Manager",
        img:"./assets/img/barbara-ramos-graphic-designer.jpg"
    },
    //member 4(3)
    {
        name: "Angela Lopez",
        position: "Social Media Manager",
        img:"./assets/img/scott-estrada-developer.jpg"
    },
    //member 5(4)
    {
        name: "Scott Estrada",
        position: "Developer",
        img:"./assets/img/walter-gordon-office-manager.jpg"
    },
    //member 6(51)
    {
        name: "Barbara Ramos",
        position: "Graphic Designer",
        img:"./assets/img/wayne-barnett-founder-ceo.jpg"
    }
    
]


//console.log delle informazioni dei membri del team

for (const key in teamMember) {
    console.log(key, teamMember[key], 'team member' )
}

//stampo nella Dom le stesse informazioni che ho preso nel console.log

//seleziono l'elemento della Dom 

const rowElement = document.querySelector('.row')

for (let i = 0; i < teamMember.length; i++) {
    const thisMember = teamMember[i];
    // console.log(thisMember)

    const memberMarkup = `
    <div class="col">
        <div class="card">
            <img src="${thisMember.img}" alt="" class="card-img-top">
            <div class="card-body">
                <h3>${thisMember.name}</h3>
                <p>${thisMember.position}</p>
            </div>
        </div>
    </div>`

    rowElement.innerHTML += memberMarkup
    
}