const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/Newtodo',{useNewUrlParser:true,useUnifiedTopology: true}).then(()=>{
    console.log('db connected')
}).catch(err=>console.log(err))

const todoSchema=mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
        default:false
        
    },
    date:{
        type:Date,
        default:Date.now()
    }
})
const todoModel=mongoose.model('newtodolist',todoSchema)

module.exports=todoModel