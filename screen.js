const menu ={
    _courses: {
      appetizers: [],
      main: [],
      desserts: []
    },
    get courses(){
      return {
        appetizers: this.appetizers,
        main: this.main,
        desserts: this.desserts
      }
    },
    get appetizers() {
        return this._courses.appetizers
    },
  
    set appetizers(appetizerIn){
        this._courses.appetizers - appetizers
    },
  
    get main(){
       return this._courses.main
    },
  
    set main(mainIn){
        this._courses.main - main
    },
  
    get desserts(){
        return this._courses.desserts
    },
  
    set desserts(dessertsIn){
        this._courses.desserts - desserts
    },
    addDishToCourse (courseName, dishName, dishPrice){
   const dish = {
     name: dishName,
     price: dishPrice
   }   
   return this.courses[courseName].push(dish)
    },
  
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName]
      const randomIndex = Math.floor(Math.random() * dishes.length)
      return dishes[randomIndex]
    },
  
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers')
      const main = this.getRandomDishFromCourse('main')
      const dessert = this.getRandomDishFromCourse('desserts')
      const totalPrice = appetizer.price + main.price + dessert.price
  
      return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. the price is ${totalPrice}.`
    }
  }
  
  menu.addDishToCourse('appetizers', 'salad', 4.00)
  menu.addDishToCourse('appetizers', 'wings', 4.50)
  menu.addDishToCourse('appetizers', 'fries', 5.00)
  
  menu.addDishToCourse('main', 'steak', 10.25)
  menu.addDishToCourse('main', 'salmon', 7.75)
  menu.addDishToCourse('main', 'tofu', 11.20)
  
  menu.addDishToCourse('desserts', 'icecream', 3.00)
  menu.addDishToCourse('desserts', 'coffee', 3.00)
  menu.addDishToCourse('desserts', 'cake', 3.35)
  
  let meal = menu.generateRandomMeal()
  console.log(meal)