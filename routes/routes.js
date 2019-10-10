const router=require('express').Router()
const todoModel=require('../models/todoModel')

router.get('/',(req,res)=>{
   todoModel.find({})
   .then(data=>{
       let todos=data.filter(function(todo){
           return !todo.done
       })
       let donetodos=data.filter(function(todo){
        return todo.done
    }
       )
       res.render('index',{todos:todos,donetodos:donetodos })
   })
})

router.post('/todoapp',(req,res)=>{
    const description=req.body.description
    let todo=new todoModel({
        description:description
    })
    todo.save().then(data=>{
        res.redirect('/')
    }).catch(err=>{
        console.log(err.message)
        res.redirect('/')
    }) 
    
})

router.post('/todoapp/:id/done',(req,res)=>{
    todoModel.findById(req.params.id)
    .exec()
    .then((results)=>{
        results.done= !results.done
        return results.save()
    })
    .then(result2=>{
        res.redirect('/')
    })
    .catch(err=>console.log(err))
    })

 router.get('/todoapp/:id/delete',(req,res)=>{
        todoModel.findByIdAndDelete(req.params.id)
        .then(()=>{
            res.redirect('/')
        }).catch(err=>console.log(err))
        })

        
module.exports=router