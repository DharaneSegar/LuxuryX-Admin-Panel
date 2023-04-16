const router = require("express").Router();
const SalesExecutive = require("../models/salesexecutive");

router.post("/addse",async(req,res)=>{
    // console.log(req.body);
    const sid = req.body.sid;
    const fullname = req.body.fullname
    const email = req.body.email;
    const password = req.body.password;
    const address = req.body.address;
    const phone = Number(req.body.phone);
    const age = Number(req.body.age);
    const qualification = req.body.qualification;
    const basicsalary = Number(req.body.basicsalary);
    const gender = req.body.gender;
    const image = req.body.image;
    

    try {
        
        const preuser = await SalesExecutive.findOne({email:email});
        const useId = await SalesExecutive.findOne({sid:sid});
        console.log(preuser);

        if(preuser){
            res.status(200).json("Taken");
        
        }else if(useId){
            res.status(200).json("Id");

        }else{
            const newSalesExecutive = new SalesExecutive({
                sid,fullname,email,password,address,phone,age,qualification,basicsalary,gender,image

                
                
            });

            await newSalesExecutive.save();
                res.status(201).json(newSalesExecutive);
                console.log("Added");
                console.log(newSalesExecutive);

        }


    } catch (error) {
        res.status(422).json(error);
    }
})

router.route("/getse").get((req,res)=>{
    SalesExecutive.find().then((salesexecutives) => {
        res.json(salesexecutives)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req,res) => {
    let id = req.params.id;
    const{sid,fullname,email,password,address,phone,age,qualification,basicsalary,gender} = req.body;

    const updateSalesExecutive = {
        sid,
        fullname,
        email,
        password,
        address,
        phone,
        age,
        qualification,
        basicsalary,
        gender
    }

    const update = await SalesExecutive.findByIdAndUpdate(id,updateSalesExecutive).then(() => {
        res.status(200).json("Success");

        //user:update-pass the updated value to the front end

    }).catch((err) => {
        console.log(err);
        res.status(500).json("Failed");
    })
})

    router.route("/deletese/:id").delete(async(req,res) => {
        let Id = req.params.id;
        await SalesExecutive.findByIdAndDelete(Id).then(()=>{
            res.status(200).json("success");
        }).catch((err) => {
            res.status(500).json("error");

        })
    })


router.route("/getSid/:id").get(async(req,res) => {
    let id = req.params.id;

    await SalesExecutive.findOne({"sid" : `${id}`}).then((se) => {
        res.status(200).send({status : "SE Details fetched", se})
    }).catch((err) => {
        console.log(err.message);

        res.status(500).send({status : "Error with fetching SE details",error : err.message});
    })
})

router.route("/update/:id").put(async(req,res) => {

    let Id = req.params.id;

    const{fullname,email,password,address,phone,age,qualification,basicsalary,gender} = req.body;
   

        //This variable is the object to update. This object will be passed to the record of the variable "userId" and the respective id is updated with these values in the object.

        const updateSalesExecutive = {
            fullname,
            email,
            password,
            address,
            phone,
            age,
            qualification,
            basicsalary,
            gender
        }

        await SalesExecutive.findByIdAndUpdate(Id,updateSalesExecutive);

     
        res.status(200).send("Done")
    }).patch((err) => {
        console.log(err);
        res.status(500).json("Failed");
    })


module.exports = router;