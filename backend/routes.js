const http =  require('http');


const host = 'localhost';
const port = 8000;

// Home data
const home      = {
        title               : 'BEST DIGITAL MARKETING AGENCY',
        our_team            : [
            {
                name        : "fiqri anwar",
                position    : "CEO, Founder"
            }
        ]
    }


// About data
const about     = {
    about_us : "Eirmod est dolor nonumy sea amet dolore erat sit dolor et dolor vero. Tempor ipsum at justo amet at ipsum justo. Aiam kasd sea sit dolor duo elitr dolor amet, justo est ipsum amet dolor ut ipsum. Labore diam et nonumy amet dolores. Volup sit labore dolores erat, magna justo sed lorem kasd ea dolor. Labore sit clita invidunt, est dolores lorem sed ipsum kasd no amet ipsum."
}

// Contact data
const contact   = {
    text : "Contact Us"
};

// Inquiry data
const inquiry   = {
    text : "In quiry"
};


// Help data
const help      = {
    text        : "Help",
    text_help   : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores temporibus possimus excepturi ullam placeat minus a at adipisci dicta, incidunt nam labore odit voluptates aliquid recusandae? Quod, illo quia suscipit rem odit recusandae iste natus labore, quo voluptate optio soluta molestias minus quos accusamus? Iusto necessitatibus vitae earum maiores!",
}

const requestListener = function (req , res){

    const headers = {
        'Access-Control-Allow-Origin': '*', /* @dev First, read about security */
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000, // 30 days
        /** add other headers as per requirement */
      };


    res.setHeader("Content-Type", "application/json");

    switch(req.url) {

        // == Routes Home
        case "/home"    : 
        res.writeHead(200,headers);
        res.end(JSON.stringify(home));
        break

        // == Routes About
        case "/about"   : 
        res.writeHead(200,headers);
        res.end(JSON.stringify(about));
        break

         // == Routes Contact
        case "/contact" : 
        res.writeHead(200,headers);
        res.end(JSON.stringify(contact));
        break

         // == Routes inquiry
        case "/inquiry" : 
         res.writeHead(200,headers);
        res.end(JSON.stringify(inquiry));
        break

         // == Routes Help
        case "/help"    : 
         res.writeHead(200,headers);
        res.end(JSON.stringify(help));
        break

         // == Routes Default
        default         :
            res.writeHead(404,headers);
            res.end(JSON.stringify({error:"Resource not found"}));
        
    }
}


const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});




