const fs = require("fs")
var data=fs.readFileSync('cars.json')
var carDetails=JSON.parse(data);
console.log(carDetails);


const util = require('util')
//const url=loadJSON('carList.json')
//console.log(url)

const writeFile = util.promisify(fs.writeFile)
const readFile = util.promisify(fs.readFile)

 class Car {

constructor(car){
this.color=color
this.model=model
this.brand=brand

} 

} 

class CarsList {
    constructor(File) {
        this.cars = []
        this.File=File

        this.load()
    }
    load(){
           
            this.cars = []
              readFile(this.File, 'utf8')
                 .then(data => JSON.parse(data))
                .then(carsList => {
                    carsList.forEach(car => {
                        // this.cars.push(car)
                        this.add(car)
                    })
                    //console.log('after', this.cars)
                })
    
        }
    
        save(){
            writeFile(this.File, JSON.stringify(this.cars))
    }

    getAll() {
        return this.cars;
    }

    getById(id) {
        if (!this.cars[id]) throw Error(`Cannot find a car with ${id}`)
        return this.cars[id];
    }

    add(car) {
        this.cars.push(car);
        return this.cars;
    }

    edit(id, car_partial) {
        if (!this.cars[id]) throw Error(`Cannot find a car with ${id}`)
        this.cars[id] = { ...this.cars[id], ...car_partial }
        return this.cars;
    }

    delete(id) {
        if (!this.cars[id]) throw Error(`Cannot find a car with ${id}`)
        this.cars.splice(id, 1);
        return this.cars;
    }

}

module.exports = CarsList,Car;