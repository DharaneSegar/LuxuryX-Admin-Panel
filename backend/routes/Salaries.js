const router = require("express").Router();
const Salary = require("../models/salary");
const SE = require('../models/salesexecutive')
const DD = require('../models/deliverydriver')
const C = require('../models/c')

router.post("/addsal",async(req,res)=>{
    // console.log(req.body);
    const type = req.body.type;
    const eid = req.body.eid;
    const basicsalary = Number(req.body.basicsalary);
    const othrs = Number(req.body.othrs);
    const otrate = Number(req.body.otrate);
    var paydate = req.body.paydate;
    const netsalary =  Number(req.body.netsalary);


    if(type == "Sales Executive"){
        SE.findOne({sid:`${eid}`},function(err,doc){
            if(err){
                console.error(err);
            }else{
                const hasMatch = Boolean(doc);
                if(hasMatch == true){
                    C.findOneAndUpdate(
                        {id:"autoval"},
                        {"$inc" : {"seq":1}},
                        {new:true},(err,cd)=>{
                            let seqId;
                            if(cd == null){
                                const newval = new C({id:"autoval",seq:1})
                                newval.save()
                                seqId = 1
                            }else{
                                seqId = cd.seq;
                            }

                            const Id = seqId;

                                const newSalary = new Salary({
                                    Id,type,eid,basicsalary,othrs,otrate,paydate,netsalary  
                                })

                                newSalary.save().then(()=>{
                                    res.json("Success")
                                    }).catch((err) => {
                                    res.json("Failed");
                                    console.log(err);
                                    })
                            
                        }
                    )
                }
                else{
                    res.json("No id")
                }
            }
        })
    }

    else if(type == "Delivery Driver"){
        DD.findOne({did:`${eid}`},function(err,doc){
            if(err){
                console.error(err);
            }else{
                const hasMatch = Boolean(doc);
                if(hasMatch == true){
                    C.findOneAndUpdate(
                        {id:"autoval"},
                        {"$inc" : {"seq":1}},
                        {new:true},(err,cd)=>{
                            let seqId;
                            if(cd == null){
                                const newval = new C({id:"autoval",seq:1})
                                newval.save()
                                seqId = 1
                            }else{
                                seqId = cd.seq;
                            }
                            const Id = seqId;

                                const newSalary = new Salary({
                                    Id,type,eid,basicsalary,othrs,otrate,paydate,netsalary  
                                })

                                newSalary.save().then(()=>{
                                    res.json("Success")
                                    }).catch((err) => {
                                    res.json("Failed");
                                    console.log(err);
                                    })
                            
                        }
                    )
                }
                else{
                    res.json("No id")
                }
            }
        })
    }

})


router.route("/getsalary").get((req,res)=>{
    Salary.find().then((salary) => {
        res.json(salary)
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


router.route("/update/:id").put(async(req,res) => {
    let Id = req.params.id;
    const{othrs,otrate,paydate,netsalary} = req.body;

    const updateTransaction = {
        othrs,
        otrate,
        paydate,
        netsalary
    }

    await Salary.findByIdAndUpdate(Id,updateTransaction);

     
        res.status(200).send("Done")
    }).patch((err) => {
        console.log(err);
        res.status(500).json("Failed");
    })


router.route("/getId/:id").get(async(req,res) => {
    let id = req.params.id;

    await Salary.findOne({"Id" : `${id}`}).then((t) => {
        res.status(200).send({status : "Details fetched", t})
    }).catch((err) => {
        console.log(err.message);

        res.status(500).send({status : "Error with fetching details",error : err.message});
    })
})

module.exports = router;