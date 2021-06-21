student_array = [];
function submit() {
 
 var display_student_array = [];
 for (var r = 1; r <= 4; r++)   {
var student_name = document.getElementById("name_of_the_student_" +r ).value;
console.log(student_name);
 student_array.push(student_name);
 }
 console.log(student_array);
var student_len = student_array.length;
console.log(student_len);
for (var s = 0; s < student_len; s++) {
display_student_array.push("<h4> NAME - " + student_array[s] + "</h4>" );
console.log(display_student_array);
}

console.log(display_student_array);
document.getElementById("display_name_with_commas").innerHTML = display_student_array;

}





























