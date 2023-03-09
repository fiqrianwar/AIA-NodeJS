let store = [];


const contactUs = document.querySelector('.text-contactUs');



const contactRoutes = async () => {

    const data      = await fetch(`http://localhost:8000/contact`);
    const response  = await data.json();

    


    store.push(response);


        store.map((item) => {
            contactUs.innerHTML = `

                 ${item.text} 
            
            `
        })


    console.log(store);
}  

contactRoutes()

