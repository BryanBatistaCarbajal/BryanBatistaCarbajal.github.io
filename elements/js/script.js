window.onload =()=>{
    //CARGAR JSON
    let arrayElem=[];
    let txtElemento = document.getElementById('txtElemento');
    let txtSimbolo = document.getElementById ('txtSimbolo');
    let txtDescripcion = document.getElementById ('txtDescripcion');
    let xobj= new XMLHttpRequest();
    let periodic = document.getElementsByClassName("periodic-table");
    let dato = document.getElementById('data');
    document.body.addEventListener('click', ()=>{
       dato.style.display = 'none';
    }, true);
    xobj.overrideMimeType('application/json');
    xobj.open('GET','./js/PeriodicTableJSON.json',true);
    xobj.onreadystatechange = () =>{
        if(xobj.readyState == 4 && xobj.status== 200){
            let json=JSON.parse(xobj.responseText);
            arrayElem= json.elements;
            let todo= "";
            arrayElem.forEach(element => {
                let claseElemento = "";
                let elementoID = "";
                switch (element.category) {
                    case 'metalloid':
                        claseElemento = 'metalloid';
                        break;
                    case 'noble gas':
                        claseElemento = 'noble-gas';
                        break;
                    case 'alkali metal':
                        claseElemento = 'alkali';
                        break;
                    case 'alkaline earth metal':
                        claseElemento = 'alkaline';
                        break;
                    case 'lanthanide':
                        claseElemento = 'lanthanide';
                        break;
                    case 'actinide':
                        claseElemento = 'actinide';
                        break;
                    case 'polyatomic nonmetal':
                        claseElemento = 'polyatomic-non-metal';
                        break;
                    case 'diatomic nonmetal':
                        claseElemento = 'diatomic-nonmetal';
                        break;
                    case 'transition metal':
                    case 'post-transition metal':
                        break;
                    default:
                        claseElemento = 'unknown';
                        break;
                }
                switch (element.name){
                    case 'Hydrogen':
                        claseElemento = 'hydrogen';
                        break;
                    case 'Helium':
                    case 'Boron':
                    case 'Aluminium':
                    case 'Cerium':
                    case 'Thorium':
                        elementoID = element.name.toLowerCase();
                        break;
                }
                todo += `<li id="${elementoID}" class="${claseElemento}" data-id="${element.number}" data-sym="${element.symbol}" data-name="${element.name}" data-desc="${element.summary}">
                <abbr title="${element.name}">${element.symbol}</abbr>
            </li>`;
            });

    //CREAR EVENTOS
        periodic[0].innerHTML = todo;
        let elem = document.getElementsByTagName('li');
        for(let x=0;x<elem.length;x++){
            elem[x].addEventListener ('click',(e)=>{
                    dato.style.display = 'block';
                    let name = elem[x].dataset.name;
                    let sym = elem[x].dataset.sym;
                    let desc = elem[x].dataset.desc;
                    txtElemento.innerHTML = name;
                    txtSimbolo.innerHTML = sym;
                    txtDescripcion.innerHTML = desc;
                });
            }
        }       
    };
    xobj.send(null);
}