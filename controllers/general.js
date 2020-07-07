const express = require('express')
const router = express.Router();


//home route
router.get("/",(req,res)=>{

    res.render("general/home",{
        title:"Home Page",
        /*data : product.getallproducts(),
        data1 : product.getfeaturedproducts()*/
    });
});

//contact us route
router.get("/contact-us",(req,res)=>{
console.log("heloo");
    res.render("general/contactUs",{
        title:"Login"
    });
});

// Customer
router.get("/customer",(req,res)=>{

    res.render("login",{
        title : "customer"
    })
});

//process contact us form for when user submits form
router.post("/contact-us",(req,res)=>{

    const {firstName,lastName,email,message} = req.body;

    
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
    const msg = {
    to: `sdehghan822@gmail.com`,
    from: `${email}`,
    subject: 'Contact Us Form Submit',
    html: 
    `Vistor's Full Name: ${firstName} ${lastName} <br>
     Vistor's Email Address: ${email} <br>
     Vistor's message : ${message}<br>
    `,
    };

    //Asynchornous operation (who don't know how long this will take to execute)
    sgMail.send(msg)
    .then(()=>{
        res.redirect("/");
    })
    .catch(err=>{
        console.log(`Error ${err}`);
    });

});

module.exports = router;
