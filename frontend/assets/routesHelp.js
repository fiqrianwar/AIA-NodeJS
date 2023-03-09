let store = [];


const helpUs        = document.querySelector('.text-help');
const containerHelp = document.querySelector('.container-help');


const helpRoutes = async () => {

    const data      = await fetch(`http://localhost:8000/help`);
    const response  = await data.json();

    


    store.push(response)
        store.map((item) => {
            helpUs.innerHTML = `${item.text}`

            containerHelp.innerHTML = `${item.text_help}`
        })
    console.log(store);
}  

helpRoutes()
