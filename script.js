const db = firebase.database();
const rootref = db.ref('rating');

var d = new Date();
var t = d.getTime();
var counter = t;

	var str1 = "black";
    var str2 = "black";
    var str3 = "black";
    var str4 = "black";
    var str5 = "black";

 const stars=document.querySelector(".ratings").children;
 const ratingValue=document.querySelector("#rating-value");
  let index;
  let starvalue;
  
  for(let i=0; i<stars.length; i++){
  	stars[i].addEventListener("mouseover",function(){
  		 // console.log(i)
  		 for(let j=0; j<stars.length; j++){
  		 	stars[j].classList.remove("fa-star");		 	
            stars[j].classList.add("fa-star-o");		 	
  		 }
  		 for(let j=0; j<=i; j++){
  		 	stars[j].classList.remove("fa-star-o");		 	
           stars[j].classList.add("fa-star");		 	
  		 }
  	})
  	stars[i].addEventListener("click",function(){
      ratingValue.value=i+1;
	  index=i;
	  starvalue=index;
      console.log(starvalue);
  	})
  	stars[i].addEventListener("mouseout",function(){
  		 
  		 for(let j=0; j<stars.length; j++){
  		 	stars[j].classList.remove("fa-star");		 	
            stars[j].classList.add("fa-star-o");		 	
  		 }
  		 for(let j=0; j<=index; j++){
  		 	stars[j].classList.remove("fa-star-o");		 	
           stars[j].classList.add("fa-star");		 	
  		 }
  	})
  }


  document.getElementById("form").addEventListener("submit",(e)=>{
    var names = document.getElementById("name").value;
    var msg = document.getElementById("message").value;
    e.preventDefault();

    createUser(names,msg,starvalue);
    form.reset();

});


function createUser(inname,inmsg,strval){

    
    console.log(counter);
    counter+=1;
    console.log(counter);

    switch(strval){
        case 0:
            str1 = "orange";
            str2 = "black";
            str3 = "black";
            str4 = "black";
            str5 = "black";
            break;
        case 1:
            str1 = "orange";
            str2 = "orange";
            str3 = "black";
            str4 = "black";
            str5 = "black";
            break;
        case 2:
            str1 = "orange";
            str2 = "orange";
            str3 = "orange";
            str4 = "black";
            str5 = "black";
            break;
        case 3:
            str1 = "orange";
            str2 = "orange";
            str3 = "orange";
            str4 = "orange";
            str5 = "black";
            break;
        case 4:
            str1 = "orange";
            str2 = "orange";
            str3 = "orange";
            str4 = "orange";
            str5 = "orange";
            break;          

    }

    console.log(str1);
    console.log(str2);
    console.log(str3);
    console.log(str4);
    console.log(str5);

    rootref.child(counter).set({
        user_name: inname,
        user_msg: inmsg,
        user_id: counter,
        str1_value: str1,
        str2_value: str2,
        str3_value: str3,
        str4_value: str4,
        str5_value: str5
    });

    document.getElementById("customer_review").innerHTML='';
    read_Data();
    document.getElementById("cardsection").innerHTML='';
    document.getElementById("cardsection2").innerHTML='';
    read_contact();
    var txt = "Thankyou for your Review.";
    document.getElementById("rate_message").style.color = "green";
    document.getElementById("rate_message").innerHTML = txt;
    
}

function read_Data(){
	var data = firebase.database().ref("rating/");
    data.on("child_added",function(data){

        var userdata = data.val();
        console.log(userdata);
    
		document.getElementById("customer_review").innerHTML+=`
		
		
		<div class="pt-4">
		<h6 >${userdata.user_name}</h6>
		<div class="ratings_value" style="margin-top: -45px; margin-left: 140px">
        <span class="fa fa-star" id="str1" style="color: ${userdata.str1_value}"></span>
        <span class="fa fa-star" id="str2" style="color: ${userdata.str2_value}; margin-left: -40px "></span>
        <span class="fa fa-star" id="str3" style="color: ${userdata.str3_value}; margin-left: -40px "></span>
        <span class="fa fa-star" id="str4" style="color: ${userdata.str4_value}; margin-left: -40px "></span>
        <span class="fa fa-star" id="str5" style="color: ${userdata.str5_value}; margin-left: -40px "></span>
        <span id="rating-valuesss"></span>
		</div> 
		<p style="margin-top: -15px; margin-left: 25px" class="card-text">${userdata.user_msg}</p>
		</div>
		<br>
		
		`;
    });
    
    
}

function read_contact(){
    var data = firebase.database().ref("contact/");
    data.on("child_added",function(data){

        var userdata = data.val();
        console.log(userdata);
        document.getElementById("cardsection").innerHTML+=`
        <div class="card mb-3">
        <div class="card-body">
        <h5  class="card-title">${userdata.user_name}</h5>
        <p class="card-text">${userdata.user_email}</p>
        <p class="card-text">${userdata.user_msg}</p>
        </div>
        </div>

        `;
    });

    var data1 = firebase.database().ref("rating/");
    data1.on("child_added",function(data1){

        var userdata = data1.val();
        console.log(userdata);
        document.getElementById("cardsection2").innerHTML+=`
        <div class="card mb-3">
        <div class="card-body">
        <h5  class="card-title">${userdata.user_name}</h5>
        <p class="card-text">${userdata.user_msg}</p>
        <button type="submit" style"color:white" class="btn btn-danger" onclick="delete_data(${userdata.user_id})"><i class="fa fa-trash" aria-hidden="true"></i> Delete</button>
        </div>
        </div>

        `;
    });
}

function delete_data(userid){

    rootref.child(userid).remove();
    document.getElementById("cardsection2").innerHTML='';
    read_contact();
    
}



