const router = require("express").Router();
const Salary = require("../models/salary");

router.post("/addsal",async(req,res)=>{
    // console.log(req.body);
    const eid = req.body.eid;
    const basicsalary = Number(req.body.basicsalary);
    const othrs = Number(req.body.othrs);
    const otrate = Number(req.body.otrate);
    const paydate = req.body.paydate;
    const netsalary =  Number(req.body.netsalary);
   
        const newSalary = new Salary({
            eid,basicsalary,othrs,otrate,paydate,netsalary
            
        })

        newSalary.save().then(()=>{
    res.json("Success")
}).catch((err) => {
    res.json("Failed");
    console.log(err);
}) 
})

module.exports = router;