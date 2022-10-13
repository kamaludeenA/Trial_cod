let qty ;
let total;

function buy(){
    let num = window.prompt("Choose Dish : ");
    let result;






switch(num){
    case "1" :
        console.log(">>>You Choose Samosa");
        document.write(">>>You Choose Samosa");
        qty = parseInt(window.prompt("No of Quantity : "));
        result = qty*10

        total = console.log("Total Amount for Samosa is Rs.",result);
        break;
    case "2":
        console.log(">>>You Choose Biriyani");
        qty = parseInt(window.prompt("No of Quantity : "));
        result = qty*250
        console.log("Total Amount for Biriyani is Rs.",result);
        break;
    case "3":
        console.log(">>>You Choose Noodles"); 
        qty = parseInt(window.prompt("No of Quantity : "));
        result = qty*100
        console.log("Total Amount for Noodles is Rs.",result);
        break;
    case "4":
        console.log(">>>You Choose Kothu Parotta"); 
        qty = parseInt(window.prompt("No of Quantity : "));
        result = qty*90
        console.log("Total Amount for Kothu Parotta is Rs.",result);
        break;
    case "5":
        console.log(">>>You Choose Meals"); 
        qty = parseInt(window.prompt("No of Quantity : "));
        result = qty*150
        console.log("Total Amount for Meals is Rs.",result);
        break;   
    default:
        console.log("<<<<<Please Enter the Given Options ^^^");           
}

document.getElementById("res").innerText = "you have to pay Rs.  " + result;
}