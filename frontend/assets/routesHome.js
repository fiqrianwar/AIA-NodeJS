let store = [];

const containerTitle        = document.querySelector('.title-profile');
const employee              = document.querySelector('.team-fiqi')
const positionJob           = document.querySelector('.position-job')


const homeRoutes = async () => {

    const data      = await fetch(`http://localhost:8000/home`);
    const response  = await data.json();
    
    store.push(response)

    store.map((item) => {
        containerTitle.innerHTML   = `${item.title}`;

        
        item.our_team.map((team) => {
            console.log(team);
            employee.innerHTML          = `${team.name}` 
            positionJob.innerHTML       = `${team.position}`
        })

    })
}  

homeRoutes()
