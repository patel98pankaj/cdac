const db = require('../db/mysqldb');

const addProductForm = (req,res)=>{
    res.render('AddProduct')
}

const addProduct = function(req,res){
    var postValue = {
        id:'',username:req.body.username, usersalary:req.body.usersalary, usercity:req.body.usercity
    }

    var username = req.body.username;
    var usersal = req.body.usersalary;
    var usercity = req.body.usercity;

    db.query(`insert into emp (ename,sal,city) values ('${username}','${usersal}','${usercity}')` , function(err,results){
        if(err) throw err;
        res.send({msg:results});
    });

}

const showProduct = function(req,res){
    db.query('select * from emp', function(err,results){
        if(err){
            throw err;
        }
        else{
            res.render('ShowProduct',{dbRecord:results})
        }
    })
}

module.exports = {
    addProduct,
    showProduct,
    addProductForm
}