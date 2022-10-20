function payWithPaystack() {

    var handler = PaystackPop.setup({ 
        key: 'pk_test_89aaa353160cbf6c9c97b5efb14e4e0ff3f5f5eb', //put your public key here
        email: 'timmyleeokoduwa7@gmail.com', //put your customer's email here
        amount: 70000, //amount the customer is supposed to pay
        metadata: {
            custom_fields: [
                {
                    display_name: "Mobile Number",
                    variable_name: "mobile_number",
                    value: "+2348012345678" //customer's mobile number
                }
            ]
        },
        callback: function (response) {
            //after the transaction have been completed
            //make post call  to the server with to verify payment 
            //using transaction reference as post data
            
                    //successful transaction
                    window.location.href = 'https://drive.google.com/file/d/1kfT1uIdbuTft6bb7DbweRJjePTYnqza6/view?usp=sharing';
                    alert('Transaction was successful');
              
        },
        onClose: function () {
            //when the user close the payment modal
            alert('Transaction cancelled');
        }
    });
    handler.openIframe(); 
}



function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var sn4 = getParameterByName('title');
var sn = getParameterByName('firstName');
var sn2 = getParameterByName('lastName');
var sn3 = getParameterByName('email');

document.getElementById("write").innerHTML = sn;
document.getElementById("write2").innerHTML = sn2;
document.getElementById("write3").innerHTML = sn3;
document.getElementById("write4").innerHTML = sn4;








