var name_of_student_array=[]
function submit()
{
    var name1 =
    document.getElementById("nameofstudent1").value

    var name2 =
    document.getElementById("nameofstudent2").value

    var name3 =
    document.getElementById("nameofstudent3").value

    var name4 =
    document.getElementById("nameofstudent4").value

    name_of_student_array.push(name1)
    name_of_student_array.push(name2)
    name_of_student_array.push(name3)
    name_of_student_array.push(name4)

    document.getElementById("NameDiv").innerHTML = name_of_student_array
    document.getElementById("SubmitButton").style.display = "none"
    document.getElementById("sortbutton").style.display = "inline-block"

}

function sort()
{
name_of_student_array.sort()
document.getElementById("NameDiv").innerHTML = name_of_student_array
}