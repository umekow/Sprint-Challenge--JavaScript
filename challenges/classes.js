// 1. Copy and paste your prototype in here and refactor into class syntax.

/*******added 1 to the end of class name because the class was already created in prototype assignment*******/
class CuboidMaker1{
    constructor(attr){
        this.length = attr.length; 
        this.width = attr.width; 
        this.height = attr.height; 
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height); 
    }
  }

  const cuboid1 = new CuboidMaker1({
      length: 4, 
      width: 5, 
      height: 5
    }); 

 


// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid1.volume()); // 100
console.log(cuboid1.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker1{
    constructor(attr){
        super(attr); 
    }

    cubeSurfaceArea(){
        return 6 * Math.pow(this.length, 2); 
    }
}

const cube = new CubeMaker(
    {length: 3, width: 3, height: 3}
    ); 
console.log(cube.volume()); 
console.log(cube.cubeSurfaceArea()); 