// Q7. Write a program in JavaScript to calculate the area of a circle given its radius value of 10. Use appropriate
// arithmetic operators.
// value of radius=10;
// value of pi=Math.PI;

function area_of_circle(radius)
{
    const area = Math.PI*(radius**2);
    return area;
}
console.log(area_of_circle(10));