fetch('https://api.github.com/users/RefaelAW02')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.getElementById('username').innerHTML = data.name
    document.getElementById('bio').innerHTML = data.bio
    document.getElementById('id').innerHTML = data.id
    document.getElementById('url').innerHTML = data.url
    document.getElementById('followers').innerHTML = data.followers
    document.getElementById('following').innerHTML = data.following

    document.getElementById('githubb').style.fontSize = "16px";
    document.getElementById('githubb').style.textAlign = "center";
    document.getElementById('githubb').style.padding = "15px";
    document.getElementById('githubb').style.backgroundColor = "black";
    document.getElementById('githubb').style.color = "white";
    document.getElementById('githubb').style.fontFamily = 'Acme', 'sans-serif'; 

    document.getElementById('avatar').style.width = "250px";
    document.getElementById('avatar').style.height = "250px";
    document.getElementById('avatar').style.borderRadius = "50%";
    document.getElementById('avatar').style.display = "block";
    document.getElementById('avatar').style.marginLeft = "auto";
    document.getElementById('avatar').style.marginRight = "auto";
    document.getElementById('avatar').style.padding = "20px";

    document.getElementById('myname').style.fontFamily = 'Acme', 'sans-serif'; 
    document.getElementById('myname').style.fontSize = "30px";
    document.getElementById('myname').style.textAlign = "center";
    document.getElementById('myname').style.paddingTop = "20px"; 

    document.getElementById('bio').style.fontFamily = 'Acme', 'sans-serif'; 
    document.getElementById('bio').style.fontSize = "26px";
    document.getElementById('bio').style.textAlign = "center";
    document.getElementById('bio').style.paddingTop = "20px"; 

    document.getElementById('myquotes').style.fontFamily = 'Acme', 'sans-serif'; 
    document.getElementById('myquotes').style.fontSize = "26px";
    document.getElementById('myquotes').style.fontStyle = "italic"; 
    document.getElementById('myquotes').style.color = "#242524"; 
    document.getElementById('myquotes').style.textAlign = "center";
    document.getElementById('myquotes').style.paddingTop = "20px"; 

    document.getElementById('mygithub').style.backgroundImage = "linear-gradient(rgb(175, 175, 175), rgb(247, 247, 247))";
    document.getElementById('mygithub').style.paddingBottom = "4rem";

    document.getElementById('text-username').style.textAlign = "center";
    document.getElementById('text-username').style.fontSize = "20px";
    document.getElementById('text-username').style.fontFamily = 'Acme', 'sans-serif'; 
    document.getElementById('text-username').style.paddingTop = "3rem"; 
    document.getElementById('text-username').style.color = "black";

    document.getElementById('text-id').style.textAlign = "center";
    document.getElementById('text-id').style.fontSize = "20px";
    document.getElementById('text-id').style.fontFamily = 'Acme', 'sans-serif'; 
    document.getElementById('text-id').style.paddingTop = "20px";
    document.getElementById('text-id').style.color = "black";

    document.getElementById('text-url').style.textAlign = "center";
    document.getElementById('text-url').style.fontSize = "20px";
    document.getElementById('text-url').style.fontFamily = 'Acme', 'sans-serif'; 
    document.getElementById('text-url').style.paddingTop = "20px";
    document.getElementById('text-url').style.color = "black";

    document.getElementById('text-followers').style.textAlign = "center";
    document.getElementById('text-followers').style.fontSize = "20px";
    document.getElementById('text-followers').style.fontFamily = 'Acme', 'sans-serif'; 
    document.getElementById('text-followers').style.paddingTop = "20px";
    document.getElementById('text-followers').style.color = "black";

    document.getElementById('text-following').style.textAlign = "center";
    document.getElementById('text-following').style.fontSize = "20px";
    document.getElementById('text-following').style.fontFamily = 'Acme', 'sans-serif'; 
    document.getElementById('text-following').style.paddingTop = "20px";
    document.getElementById('text-following').style.color = "black";

    document.getElementById('name').style.textAlign = "center";
    document.getElementById('name').style.padding = "20px";
    document.getElementById('name').style.borderRadius = "20px";

    document.getElementById('id-github').style.textAlign = "center";
    document.getElementById('id-github').style.padding = "20px";
    document.getElementById('id-github').style.borderRadius = "20px";

    document.getElementById('url-github').style.textAlign = "center";
    document.getElementById('url-github').style.padding = "20px";
    document.getElementById('url-github').style.borderRadius = "20px";
    
    document.getElementById('followers-github').style.textAlign = "center";
    document.getElementById('followers-github').style.padding = "20px";
    document.getElementById('followers-github').style.borderRadius = "20px";
    
    document.getElementById('following-github').style.textAlign = "center";
    document.getElementById('following-github').style.padding = "20px";
    document.getElementById('following-github').style.borderRadius = "20px";
  
    document.getElementById('button-name').style.borderRadius = "20px";
    document.getElementById('button-name').style.border = "none";
    document.getElementById('button-name').style.backgroundColor = "#1E2422";
    document.getElementById('button-name').style.height = "86px";

    document.getElementById('button-id').style.borderRadius = "20px";
    document.getElementById('button-id').style.border = "none";
    document.getElementById('button-id').style.backgroundColor = "#1E2422";
    document.getElementById('button-id').style.height = "86px";

    document.getElementById('button-url').style.borderRadius = "20px";
    document.getElementById('button-url').style.border = "none";
    document.getElementById('button-url').style.backgroundColor = "#1E2422";
    document.getElementById('button-url').style.height = "86px";

    document.getElementById('button-followers').style.borderRadius = "20px";
    document.getElementById('button-followers').style.border = "none";
    document.getElementById('button-followers').style.backgroundColor = "#1E2422";
    document.getElementById('button-followers').style.height = "86px";

    document.getElementById('button-following').style.borderRadius = "20px";
    document.getElementById('button-following').style.border = "none";
    document.getElementById('button-following').style.backgroundColor = "#1E2422";
    document.getElementById('button-following').style.height = "86px";
    
    document.getElementById('username').style.width = "300px";
    document.getElementById('username').style.height = "40px";
    document.getElementById('username').style.color = "white";
    document.getElementById('username').style.borderRadius = "20px";
    document.getElementById('username').style.fontSize = "18px";
    document.getElementById('username').style.paddingTop = "14px";
    document.getElementById('username').style.textAlign = "center";
    document.getElementById('username').style.fontFamily = 'Acme', 'sans-serif'; 

    document.getElementById('id').style.width = "300px";
    document.getElementById('id').style.height = "40px";
    document.getElementById('id').style.color = "white";
    document.getElementById('id').style.borderRadius = "20px";
    document.getElementById('id').style.fontSize = "18px";
    document.getElementById('id').style.textAlign = "center";
    document.getElementById('id').style.paddingTop = "14px";
    document.getElementById('id').style.fontFamily = 'Acme', 'sans-serif'; 

    document.getElementById('url').style.width = "320px";
    document.getElementById('url').style.height = "40px";
    document.getElementById('url').style.color = "white";
    document.getElementById('url').style.borderRadius = "20px";
    document.getElementById('url').style.fontSize = "16px";
    document.getElementById('url').style.paddingTop = "14px";
    document.getElementById('url').style.textAlign = "center";
    document.getElementById('url').style.fontFamily = 'Acme', 'sans-serif'; 

    document.getElementById('followers').style.width = "320px";
    document.getElementById('followers').style.height = "40px";
    document.getElementById('followers').style.color = "white";
    document.getElementById('followers').style.borderRadius = "20px";
    document.getElementById('followers').style.fontSize = "16px";
    document.getElementById('followers').style.paddingTop = "14px";
    document.getElementById('followers').style.textAlign = "center";
    document.getElementById('followers').style.fontFamily = 'Acme', 'sans-serif'; 

    document.getElementById('following').style.width = "320px";
    document.getElementById('following').style.height = "40px";
    document.getElementById('following').style.color = "white";
    document.getElementById('following').style.borderRadius = "20px";
    document.getElementById('following').style.fontSize = "16px";
    document.getElementById('following').style.paddingTop = "14px";
    document.getElementById('following').style.textAlign = "center";
    document.getElementById('following').style.fontFamily = 'Acme', 'sans-serif'; 
    
})

document.getElementById("button-id").addEventListener("click", handleClick);
function handleClick() {
      console.log("tes1");
      alert("My ID Gitub : 88776770");
}
