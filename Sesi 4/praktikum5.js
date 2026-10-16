let studentData = {
    name : "Warda",
    java_programming_score : 80,
    python_programming_Score: 100,
    javascript_programming_scrore: 80,
    infoStudent: function (){
        return(
           "Name :" + this.name + "\n" +
           "id_number :" + this.id_number + "\n" +
           "Java Score :" + this.java_programming_score + "\n" +
           "Python Score :" + this.python_programming_Score + "\n" +
           "JS Score :" + this.javascript_programming_scrore 
        )
    }
}

studentData["id_number"] = "20250040003"
console.log(studentData);
delete studentData["id_number"]
console.log(studentData);
