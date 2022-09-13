const mongoose=require('mongoose');
const addcardTemplate=new mongoose.Schema({
    cardHolderName:{
        type:String,
        required:true
    },
    cardnumber:{
        type:Number,
        required:true,
    },
    Date:{
        type:Date,
        required:true,
    },
    cvv:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('addCard',addcardTemplate)