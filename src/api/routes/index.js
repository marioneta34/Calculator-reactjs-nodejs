const {Router} = require('express');
const router = Router();

//traemos el json para simular DB
const hystory = require('../modal/history.json')

router.post('/',(req,res)=>{
    console.log(req.body.object)
    try{
        //resolvemos la ecuacion
        input = calculate(req.body.object); 
        //creamos el historial
        newhystory = {"operacion": req.body.object, "resultado": input};
        //insertamos al modal
        hystory.push(newhystory);
        //devolvemos datos a la app
        res.json(JSON.stringify(input));       
    }catch(e){
        console.log(e)
    }
    //Resuelve la ecuacion
    function calculate(fn) {
        return new Function('return ' + fn)();
    }
});

router.get('/hystory',(req,res)=>{
    res.json(hystory);
});

module.exports = router;