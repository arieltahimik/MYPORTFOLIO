import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
  height = ''
  weight = ''
  bmiValue = ''
  result = ''

  bmi = '' //bmi for US & Metric
  heightUnit ='(inches)' //placeholder
  weightUnit ='(pounds)' //placeholder
  unit = 'in_lbs'  //in_lbs or cm_kg

  // which radio button? in/lbs or cm/kg
  radioHandle(event){
    const {value} = event.target
    console.log('value', value)
    if(value === 'in_lbs') {
      // this.heightUnit = 'Enter your height in inches'
      this.heightUnit = '(inches)'
      this.weightUnit = '(pounds)'
      this.unit = value
    } else if(value === 'cm_kg') {
      // this.heightUnit = 'Enter your height in centimeters'
      this.heightUnit = '(centimeters)'
      this.weightUnit = '(kilograms)'
      this.unit = value
    } else {
      alert('Please choose a unit.')
    }
  }


  inputHandler(event){
    const {name, value} = event.target
    if(name === "height"){
      this.height = value
    }
    if(name === "weight"){
      this.weight = value
    }

    /*** */
    //this[name] = value
  }
  submitHandler(event){
    event.preventDefault()
    console.log("height", this.height)
    console.log("weight", this.weight)
    this.calculate()
  }

  calculate() {
    if (this.unit === 'in_lbs') {
      let height = Number(this.height);
      let weight = Number(this.weight);
      // let bmi = (weight /(height*height)) * 703;
      this.bmi = (weight /(height*height)) * 703;
    } else {
      //BMI = weight in KG / (height in m * height in m)
      let height = Number(this.height)/100;
      //let bmi = Number(this.weight) /(height*height);
      this.bmi = Number(this.weight) /(height*height);
    }
    
    //this.bmiValue = Number(bmi.toFixed(2))
    this.bmiValue = Number(this.bmi.toFixed(2))

    if(this.bmiValue <18.5){
      this.result = "Underweight"
    } else if(this.bmiValue >=18.5 && this.bmiValue <25){
      this.result = "Healthy"
    } else if(this.bmiValue >=25 && this.bmiValue <30){
      this.result = "Overweight"
    } else {
      this.result = "Obese"
    }

    console.log("BMI Value is : ", this.bmiValue)
    console.log("Result is : ", this.result)
  }

  recalculate(){
    this.height = ''
    this.weight = ''
    this.bmiValue = ''
    this.result = ''
    //blank the placeholder
    this.heightUnit='(inches)'
    this.weightUnit='(pounds)'
  }
}