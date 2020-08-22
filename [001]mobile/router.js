const express = require('express');
const router = express.Router();

router.get('/list1', (req,res,next)=>{
  res.render('list1.html');
})
router.get('/list2', (req,res,next)=>{
  res.render('list2.html');
})
router.get('/list3', (req,res,next)=>{
  res.render('list3.html');
})
router.get('/list4', (req,res,next)=>{
  res.render('list4.html');
})
router.get('/list5', (req,res,next)=>{
  res.render('list5.html');
})
router.get('/list6', (req,res,next)=>{
  res.render('list6.html');
})
router.get('/list7', (req,res,next)=>{
  res.render('list7.html');
})
router.get('/tab1', (req,res,next)=>{
  res.render('tab1.html');
})
router.get('/tab2', (req,res,next)=>{
  res.render('tab2.html');
})
router.post('/form1', (req,res,next)=>{
  console.log(req.body);
  res.render('form1.html');
})
router.get('/form2', (req,res,next)=>{
  res.render('form2.html');
})
router.get('/form3', (req,res,next)=>{
  res.render('form3.html');
})
router.get('/form4', (req,res,next)=>{
  res.render('form4.html');
})
router.get('/header', (req,res,next)=>{
  res.render('header.html');
})


module.exports = router;