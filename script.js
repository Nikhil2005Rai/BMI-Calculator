const form = document.querySelector("form")

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    //prevent the form to submit to server
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const bmi = weight/((height/100)**2)
    // console.log(bmi.toString().slice(0,5))
    const result = document.querySelector("#result")
    // console.log(result)
    if (height === '' || height < 0 || isNaN(height) || weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = "Please enter valid values...."
    }
    else{
        result.innerHTML = `The BMI is ${bmi.toString().slice(0,5)}`
    }
})