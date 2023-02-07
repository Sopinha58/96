user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        mensage:msg,
        like:0 
    });
    document.getElementById("msg").value ="";

}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html")
}
function getdata(){
    firebase.database().ref("/"+room_name).on('value', )
    function(snapshot) { document.getElementById("output").innerHTML = "";
    snapshot.forEach(function)(childSnapshot)}
    { childKey = childSnapshot.key;
    childData = childSnapshot.val();
    if(childKey != "purpose")} {

    firebase_message_id = childKey;
    mensage_data=childKey;
    console.log(menssage_data);
    console.log(firebase_menssage_id);
    name=menssage_data['menssage'];
    like=menssage_data['like'];
    name_with_tag="<h4> "+ name +"<img class='user_tick' src='tick.png'> </h4>";
    menssage_with_tag="<h4 class='menssage_h4'> "+ menssage +" </h4>";
    like_button="<button class'bt btn-warning' "+ firebase_menssage_id +" value="+ like +"onclick='updateLike(this.id)'>
    spam_with_tag= "<spam class='glificon glifícon-thumbs-up'>like: "+ like +" </spam></button> <hr>";
    row =name_width_tag + menssage_with_tag + like_button + spam_with_tag;
    document.getElementById("output").innerHTML + = row;
}});}); }