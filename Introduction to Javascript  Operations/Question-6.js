// Q6. Write a Javascript program to calculate the Body Mass Index (BMI) using the formula BMI = weight (kg)/
// height * height.



function BMI_calculator()
{
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const BMI = weight/(height**2);
    document.getElementById('bmi_value').value = Math.round(BMI);
}