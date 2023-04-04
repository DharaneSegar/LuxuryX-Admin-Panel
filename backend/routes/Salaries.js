const router = require("express").Router();
const Salary = require("../models/salary");
const SE = require('../models/salesexecutive')
const DD = require('../models/deliverydriver')

router.post("/addsal",async(req,res)=>{
    // console.log(req.body);
    const type = req.body.type;
    const eid = req.body.eid;
    const basicsalary = Number(req.body.basicsalary);
    const othrs = Number(req.body.othrs);
    const otrate = Number(req.body.otrate);
    const paydate = req.body.paydate;
    const netsalary =  Number(req.body.netsalary)

    if(type == "Sales Executive"){
        SE.findOne({sid: `${eid}`}, function(err, doc) {
            if (err) {
              console.error(err);  
            }else{
                const hasMatch = Boolean(doc); // convert to boolean value
              console.log(hasMatch); // will log 'true' if a matching document was found, otherwise 'false'
              if(hasMatch == true ){
                const newSalary = new Salary({
                    type,eid,basicsalary,othrs,otrate,paydate,netsalary  
                })
    
                newSalary.save().then(()=>{
                    res.json("Success")
                    }).catch((err) => {
                    res.json("Failed");
                    console.log(err);
                    })     
              }else{
                res.json("No id")
              }
    
            }
    
    })
    }

    if(type == "Delivery Driver"){
        DD.findOne({did: `${eid}`}, function(err, doc) {
            if (err) {
              console.error(err);  
            }else{
                const hasMatch = Boolean(doc); // convert to boolean value
              console.log(hasMatch); // will log 'true' if a matching document was found, otherwise 'false'
              if(hasMatch == true ){
                const newSalary = new Salary({
                    type,eid,basicsalary,othrs,otrate,paydate,netsalary  
                })
    
                newSalary.save().then(()=>{
                    res.json("Success")
                    }).catch((err) => {
                    res.json("Failed");
                    console.log(err);
                    })     
              }else{
                res.json("No id")
              }
    
            }
    
    })
    }
})

router.route("/getsalary").get((req,res)=>{
    Salary.find().then((leaves) => {
        res.json(leaves)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/deletet/:id").delete(async(req,res) => {
    let Id = req.params.id;
    await Salary.findByIdAndDelete(Id).then(()=>{
        res.status(200).json("success");
    }).catch((err) => {
        res.status(500).json("error");

    })
})


module.exports = router;