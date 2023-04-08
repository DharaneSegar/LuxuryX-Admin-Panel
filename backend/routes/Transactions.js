const router = require("express").Router();
const Transaction = require("../models/transaction");


router.post("/det",async(req,res)=>{

    const eid = req.body.eid;
    const type = req.body.type;
    const basicsalary = Number(req.body.basicsalary);

    const newTransaction  =new Transaction({
        eid,type,basicsalary

    });

    await newTransaction.save();
    res.status(201);
    console.log("Added");
            
})

router.route("/get/:id").get(async(req,res) => {
    let id = req.params.id;

    await Transaction.findOne({"eid" : `${id}`}).then((t) => {
        res.status(200).send({status : "Details fetched", t})
    }).catch((err) => {
        console.log(err.message);

        res.status(500).send({status : "Error with fetching details",error : err.message});
    })
})

module.exports = router;