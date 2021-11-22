// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCNjW_IOkw5lFEEZtKyJKXrhV8894poZGo",
      authDomain: "project-95-74661.firebaseapp.com",
      databaseURL: "https://project-95-74661-default-rtdb.firebaseio.com",
      projectId: "project-95-74661",
      storageBucket: "project-95-74661.appspot.com",
      messagingSenderId: "253153194581",
      appId: "1:253153194581:web:11a89e9c5aede908e31adc",
      measurementId: "G-G8DYW4V0ZY"
    };

    function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room Name-" + Room_names);
  row = "<div class = 'room_name' id = "+ Room_names+" onclick = 'redirecttoRoomName(this.id)'> #"+Room_names+" + </div> <hr>";
  document.getElementById("output").innerHTML = row;
  //End code
  });});}
getData();

function redirecttoRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = kwitter_page.html;
}

function logout() 
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html"; 
}