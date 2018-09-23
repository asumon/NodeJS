const {
    Router
} = require('express')

const Cars = require('./cars')
const my_cars = new Cars("cars.json");

const cars_route = Router();

cars_route.get('/', (req, res) => {
    res.send(my_cars.getAll())
})

.get('/:id', (req, res) => {
    try {
        res.send(my_cars.getById(req.params.id))
    } catch (error) {
        res.status(404).end()
    }
})
.patch('/:id', (req, res) => {
    try {
        res.send(my_cars.edit(req.params.id, req.body))
    } catch (error) {
        res.status(404).end();
    }
})

.post('/', (req, res) => {

 //const cars=new Cars({

//color:req.body.color,
//model:req.body.model,
//brand:req.body.brand
res.send(my_cars.add(req.body));
/* my_cars.save()
.then(data =>{
    res.status(201).json({
        message:'Car Added',
        my_cars:data
    })
})
.catch(err=console.log(err))
*/
}) 

cars_route.delete(':id', (req, res) => {
    try {
        res.send(my_cars.delete(req.params.id))
    } catch (error) {
        res.status(404).end();
    }
})

module.exports = cars_route