let store = [];


const text        = document.querySelector('.text-inqruiry');

const inquiryRoutes = async () => {

    const data      = await fetch(`http://localhost:8000/inquiry`);
    const response  = await data.json();

    


    store.push(response)
        store.map((item) => {
            text.innerHTML = `${item.text}`
        })
    console.log(store);
}  

inquiryRoutes()
