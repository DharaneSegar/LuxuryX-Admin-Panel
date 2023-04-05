const router = require("express").Router();
const LeaveApplication = require('../models/leaveapplication');
const Counter = require('../models/counter')
const SE = require('../models/salesexecutive')
const DD = require('../models/deliverydriver')

router.route("/addladd").post((req,res) => {
    
    const eid = req.body.eid;
    const fullname = req.body.fullname;
    const title = req.body.title;
    const days = Number(req.body.days);
    const startdate = req.body.startdate;
    const enddate =  req.body.enddate;
    const reason = req.body.reason;
    const status = req.body.status;
    DD.findOne({did: `${eid}`}, function(err, doc) {
        if (err) {
          console.error(err);  
        }else{
            const hasMatch = Boolean(doc); // convert to boolean value
          console.log(hasMatch); // will log 'true' if a matching document was found, otherwise 'false'
          if(hasMatch == true ){
            Counter.findOneAndUpdate(
                {id:"autoval"},
                {"$inc":{"seq":1}},
                {new:true},(err,cd)=>{
                    console.log("Counter value",cd)
                    let seqId;
                    if(cd == null){
                        const newval = new Counter({id:"autoval",seq:1})
                        newval.save()
                        seqId = 1
                    }else{
                        seqId = cd.seq;
                    }
                    const Id = seqId;    

            const newLeave = new LeaveApplication({
                Id,eid,fullname,title,days,startdate,enddate,reason,status  
            })

            newLeave.save().then(()=>{
                res.json("Success")
                }).catch((err) => {
                res.json("Failed");
                console.log(err);
                }) 
                }
            )
          }else{
            res.json("No id")
          }

        }

})
})

router.route("/addlase").post((req,res) => {
    const eid = req.body.eid;
    const fullname = req.body.fullname;
    const title = req.body.title;
    const days = Number(req.body.days);
    const startdate = req.body.startdate;
    const enddate =  req.body.enddate;
    const reason = req.body.reason;
    const status = req.body.status;
    SE.findOne({sid: `${eid}`}, function(err, doc) {
        if (err) {
          console.error(err);  
        }else{
            const hasMatch = Boolean(doc); // convert to boolean value
          console.log(hasMatch); // will log 'true' if a matching document was found, otherwise 'false'
          if(hasMatch == true ){
            Counter.findOneAndUpdate(
                {id:"autoval"},
                {"$inc":{"seq":1}},
                {new:true},(err,cd)=>{
                    console.log("Counter value",cd)
                    let seqId;
                    if(cd == null){
                        const newval = new Counter({id:"autoval",seq:1})
                        newval.save()
                        seqId = 1
                    }else{
                        seqId = cd.seq;
                    }
                    const Id = seqId;    

            const newLeave = new LeaveApplication({
                Id,eid,fullname,title,days,startdate,enddate,reason,status  
            })

            newLeave.save().then(()=>{
                res.json("Success")
                }).catch((err) => {
                res.json("Failed");
                console.log(err);
                }) 
                }
            )
          }else{
            res.json("No id")
          }
        }

})
})

router.route("/getleaves").get((req,res)=>{
    LeaveApplication.find().then((leaves) => {
        res.json(leaves)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/deletela/:id").delete(async(req,res) => {
    let Id = req.params.id;
    await LeaveApplication.findByIdAndDelete(Id).then(()=>{
        res.status(200).json("success");
    }).catch((err) => {
        res.status(500).json("error");

    })
})



router.route("/getId/:id").get(async(req,res) => {
    let id = req.params.id;

    await LeaveApplication.findOne({"Id" : `${id}`}).then((la) => {
        res.status(200).send({status : "Details fetched", la})
    }).catch((err) => {
        console.log(err.message);

        res.status(500).send({status : "Error with fetching details",error : err.message});
    })
})

router.route("/update/:id").put(async(req,res) => {

    let Id = req.params.id;

    const{status} = req.body;
   

        //This variable is the object to update. This object will be passed to the record of the variable "userId" and the respective id is updated with these values in the object.

        const updateStatus = {
            status
        }

        await LeaveApplication.findByIdAndUpdate(Id,updateStatus);

     
        res.status(200).send("Done")
    }).patch((err) => {
        console.log(err);
        res.status(500).json("Failed");
    })

module.exports = router;