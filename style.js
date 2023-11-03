function myFunction() {
            var age = document.getElementById("myAge").value;
            var name = document.getElementById("myName").value;
            

            if (age >= 18) {
                age = "You are eligible to vote " + name;

            }
            else if(age <= 17) {
                age = "You are not eligible to vote " + name;
            }
            document.getElementById("demo").innerHTML = age;
            document.getElementById("demo").style.fontSize = "35px";
            document.getElementById("demo").style.color = "green";
        }
