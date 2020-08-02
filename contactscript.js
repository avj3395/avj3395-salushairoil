const db = firebase.database();
const rootref = db.ref('contact');

var d = new Date();
var t = d.getTime();
var counter = t;


document.getElementById("form").addEventListener("submit",(e)=>{
    var con_name = document.getElementById("name_c").value;
    var con_email = document.getElementById("email_c").value;
    var con_msg = document.getElementById("message_c").value;
    e.preventDefault();

    createUser_contact(con_name,con_email,con_msg);
    form.reset();

});

function createUser_contact(user_name,user_email,user_message){

    counter+=1;
    rootref.child(counter).set({
        userid: counter,
        user_name: user_name,
        user_email: user_email,
        user_msg: user_message
    })

    var txtcontact = "Thankyou for your Contact...we will contact you soon";
    document.getElementById("contact_ack").style.color = "green";
    document.getElementById("contact_ack").innerHTML = txtcontact;
}