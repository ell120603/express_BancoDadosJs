const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancodeDados = require('./BancodeDados')

app.use(bodyParser.urlencoded({extended:true}))

app.get('/produtos',(req,res,next)=>{
    res.send(bancodeDados.getProdutos())
})

app.get('/produtos/:id',(req,res,next)=>{
    res.send(bancodeDados.getProduto(req.params.id))

})

app.post('/produtos',(req,res,next)=>{
    const produto = bancodeDados.salvarProduto({
        nome:req.body.name,
        preco:req.body.preco,
        id: req.body.id
    })
    res.send(produto)
})

app.delete('/produto/:id',(req,res,next)=>{
    const produto = bancodeDados.deletarProdutos(req.params.id)
    res.send(produto)
     
})

app.listen(porta,()=>{
    console.log(`servidor executando na porta ${porta}`)
})