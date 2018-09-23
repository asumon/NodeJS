const fs = require("fs")
const util = require('util')

const writeFile = util.promisify(fs.writeFile)
const readFile = util.promisify(fs.readFile)
//For Asynchronous behavior, we use promisify

class Car {
    constructor(obj) {
        this.color = obj.color
        this.model = obj.model
        this.brand = obj.brand 
    }
} 
    
// const carObj={
//     color: "green",
//     model: "3 Sereies",
//     brand: "BMW"
// }
// const new_car = Car(carObj)

class Cars {
    constructor(fileName) {
        this.cars = []
        this.fileName = fileName
        this.load()
    }
//to load the file and then push it to list of cars by using Json.parse
    load() {
    
        this.cars = []
        //readFile(this.fileName).then(function(data){console.log(data)})
        readFile(this.fileName, 'utf8')
            //.then(data => console.log(typeof data))
            .then(data => JSON.parse(data))
            .then(carsList => {
                //console.log('before', this.cars)
                carsList.forEach(car => {
                    // this.cars.push(car)
                    this.add(car)
                })
                //console.log('after', this.cars)
            })

    }

    save(){
        writeFile(this.fileName, JSON.stringify(this.cars))
    }

    getAll() {
        return this.cars;
    }

    getById(id) {
        if (!this.cars[id - 1]) throw Error(`Cannot find a car with ${id}`)

        return this.cars[id - 1];
    }

    add(car) {
        if (!car instanceof(Car))
            throw new Error('car is not instance of Car class')
        this.cars.push(car);
        return this.cars;
    }

    edit(id, car_partial) {
        if (!this.cars[id]) throw Error(`Cannot find a car with ${id}`)
        this.cars[id] = { ...this.cars[id],
            ...car_partial
        }
        return this.cars;
    }

    delete(id) {
        if (!this.cars[id]) throw Error(`Cannot find a car with ${id}`)
        this.cars.splice(id, 1);
        return this.cars;
    }

}

module.exports = Cars;
