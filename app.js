var config = {
    apiKey: "AIzaSyDgfLz6jLDqhm8XcANQuSQ_xa_9v2uuf1M",
    authDomain: "wishingwall-16899.firebaseapp.com",
    databaseURL: "https://wishingwall-16899.firebaseio.com",
    projectId: "wishingwall-16899",
    storageBucket: "wishingwall-16899.appspot.com",
    messagingSenderId: "560708114638"
};
firebase.initializeApp(config);

/* firebase.database().ref("/wishes/wish_history").once("value")
.then(function(snapshot){
    console.log(snapshot.val())
}); */

var root = document.getElementById("root");

var elemnum = 1;
firebase.database().ref("/wishes/wish_history")
.on("child_added", function(snapshot){
    
    console.log(snapshot.val());

    if(elemnum>20){
        elemnum=1;
    }

    var top = document.createElement("div");
    top.classList.add("circle", snapshot.val().color, "particle", "elem"+elemnum);

    var inner = document.createElement("div");
    inner.classList.add("circle__inner");

    var wrapper = document.createElement("div");
    wrapper.classList.add("circle__wrapper");

    var element = document.createElement("div");
    element.classList.add("circle__content");
    element.innerText = snapshot.val().wish;

    wrapper.appendChild(element);
    inner.appendChild(wrapper);
    top.appendChild(inner);

    root.appendChild(top);
    elemnum++;
    console.log("elemnum is "+ elemnum)

});
