function submit(){
var display_array = [];
var name_array = [];

for (j=1; j <= 4; j++){
    var name = document.getElementById("name_of_the_student_"+j).value;
    console.log(name);
    name_array.push(name);
} 
console.log(name_array);
var array_length = name_array.length;
console.log(array_length);

for (k=0; k < array_length; k++){
    display_array.push("<h4>Name - "+name_array[k]+"</h4>");
    console.log(display_array);
}
console.log(display_array);
document.getElementById("display_name_with_commas").innerHTML=display_array;
var remove_comma = display_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_comma;
console.log(remove_comma);
}
function sorting(){
    name_array.sort();
    console.log(name_array);
    var display_sorted_name = []
    for (i=0; i < array_length; i++){
        display_sorted_name.push("<h4>Name - "+name_array[i]+"</h4>");
        console.log(display_sorted_name);
    }
    console.log(display_sorted_name);
    document.getElementById("display_name_with_commas").innerHTML=display_sorted_name;
    var remove_comma_sorted = display_sorted_name.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_comma_sorted;
    console.log(remove_comma_sorted);
}