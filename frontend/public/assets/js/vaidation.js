function checkPassword()
{
    var input = document.getElementById("pswd").value;
    
    input=input.trim();
    if(input.length<8)
    {
        alert("Password should consist atleast 8 chracters")
    }
    

    
    if(input.match(/[^A-Za-z0-9-' ']/i))
    {
        
    }
    else
    {
       alert("Password should contain a simple letter,a capital letter,a number and a special character")
    }
    

    
}
