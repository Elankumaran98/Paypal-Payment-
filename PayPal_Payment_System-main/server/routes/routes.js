const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
const addcardTemplateCopy=require('../models/addCardModel')

router.post('/addcard',async(request,response)=>{
    const saltCardNumber=await bcrypt.genSalt(10)
    const secureCardNumber=await bcrypt.hash(request.body.password,saltCardNumber)



    const addCardUser=addcardTemplateCopy({
        cardHolderName:request.body.cardHolderName,
        cardnumber:secureCardNumber,
        date:request.body.date,
        cvv:request.body.cvv
    })
    addCardUser.save().then(data=>{
        response.json(data)
    }).
    catch(error=>{
        response.json(error)
    })
})


module.exports=router