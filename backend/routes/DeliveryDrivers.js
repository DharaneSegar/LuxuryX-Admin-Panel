const router = require("express").Router();
const DeliveryDriver = require("../models/deliverydriver");
const multer = require("multer")

const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"../frontend/public/assets/images")
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalname)
    }
})

const upload = multer({storage:storage})

router.post("/adddd" ,async(req,res)=>{
    // console.log(req.body);
    const did = req.body.did;
    const fullname = req.body.fullname;
    const email = req.body.email;
    const password = req.body.password;
    const address = req.body.address;
    const phone =  Number(req.body.phone);
    const age = Number(req.body.age);
    const licenseno = req.body.licenseno;
    const vehicleno = req.body.vehicleno;
    const nic = req.body.nic;
    const basicsalary = Number(req.body.basicsalary);
    const image = req.body.image;
    
    
    try {
        
        const preuser = await DeliveryDriver.findOne({email:email});
        const useId = await DeliveryDriver.findOne({did:did});
        console.log(preuser);

        if(preuser || useId){
            res.status(200).json("Taken");
        
        }else{
            const newDeliveryDriver = new DeliveryDriver({
                did,fullname,email,password,address,phone,age,licenseno,vehicleno,nic,basicsalary,image
                
            });


            await newDeliveryDriver.save();
            res.status(201).json(newDeliveryDriver);
            console.log(newDeliveryDriver);
        }

    } catch (error) {
        res.status(422).send({status:"Email already taken"});
    }
})

router.route("/getdd").get((req,res)=>{
    DeliveryDriver.find().then((deliverydrivers) => {
        res.json(deliverydrivers)
    }).catch((err)=>{
        console.log(err)
    })
})


    router.route("/deletedd/:id").delete(async(req,res) => {
        let Id = req.params.id;
        await DeliveryDriver.findByIdAndDelete(Id).then(()=>{
            res.status(200).json("success");
        }).catch((err) => {
            res.status(500).json("error");

        })
    })

    router.route("/getDid/:id").get(async(req,res) => {
        let id = req.params.id;
    
        await DeliveryDriver.findOne({"did" : `${id}`}).then((dd) => {
            res.status(200).send({status : "DD Details fetched", dd})
        }).catch((err) => {
            console.log(err.message);
    
            res.status(500).send({status : "Error with fetching DD details",error : err.message});
        })
    })

    router.route("/update/:id").put(async(req,res) => {

        let Id = req.params.id;
    
        const{fullname,email,password,address,phone,age,licenseno,vehicleno,nic,basicsalary} = req.body;
       
    
            //This variable is the object to update. This object will be passed to the record of the variable "userId" and the respective id is updated with these values in the object.
    
            const updateDeliveryDriver = {
                fullname,
                email,
                password,
                address,
                phone,
                age,
                licenseno,
                vehicleno,
                nic,
                basicsalary
            }
    
            await DeliveryDriver.findByIdAndUpdate(Id,updateDeliveryDriver);
    
         
            res.status(200).send("Done")
        }).patch((err) => {
            console.log(err);
            res.status(500).json("Failed");
        })





module.exports = router;