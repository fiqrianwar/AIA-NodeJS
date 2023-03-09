let store = [];


const containerAbout = document.querySelector('.container-about')

const aboutRoutes = async () => {

    const data      = await fetch(`http://localhost:8000/about`);
    const response  = await data.json();

    


    store.push(response)

    store.map((item) => {
        
        store.map((item) => {
            containerAbout.innerHTML = `

                <p> ${item.about_us} </p>
            
            `
        })
    })

    console.log(store);
}  

aboutRoutes()
