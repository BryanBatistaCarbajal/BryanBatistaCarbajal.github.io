window.onload=() =>{
    let usuario=JSON.parse(localStorage.getItem("usuario"));
    document.getElementById("imgUser").src="./img/"+usuario.imagen;
    let arrayTw=[];
    var xobj= new XMLHttpRequest ();
    xobj.overrideMimeType("application/js");
    xobj.open('GET','./js/tweets.json',true);
    xobj.onreadystatechange=function(){
        if (xobj.readyState == 4 && xobj.status=='200'){
            arrayTw=JSON.parse (xobj.responseText);
            console.log(arrayTw);
        }
    }
    
   // console.log(usuario);
    //document.getElementById("usuario").innerHTML="Hola "+usuario.nombre;
    let txtTweet=document.getElementById("txtTweet");
    let btnTweet=document.getElementById("btnTweet");
    btnTweet.addEventListener('click',(evt)=>{
       // console.log(txtTweet.value);
        if(txtTweet.ariaValueMax.trim()!= ""){
            let obj = {
                img:usuario.imagen,
                nombre:usuario.nombre,
                mensaje:txtTweet.value,
                username:usuario.username,
            };
            arrayTw.push(obj);
            crearPost();
            txtTweet.value="";
        }
    });
    txtTweet.addEventListener('keyup',(evt)=>{

    });
    function crearPost(){
        var todo="";
        arrayTw.forEach(el=>{
            todo+=`<div class="post">
            <div>
                <img src="img/${el.img}" alt="" class="imgUser">
            </div>
            <div>
                <h2> 
                    <span>${el.nombre}</span>
                    <span>@${el.username}</span>
                </h2>
                <div class="textTweet">
                   ${el.mensaje}
                </div>
            </div>
        </div>`;
        });
        document.getElementById("posts").innerHTML=todo;

    }
}