var form = document.forms.images;
var form2 = document.forms.images2;

var M = 0
var N = 0

const mapWidth = document.body.clientWidth/2;

const map = document.getElementById('globeViz')
const map2 = document.getElementById('globeViz2')

const renderEarth = (e) => {
    M = e.target.value;
    const myGlobe = Globe()
        .backgroundColor("#00000000")
        .globeImageUrl(`./${M}.jpg`)
        .bumpImageUrl("topology.png")
        myGlobe(map)
        .width(mapWidth)
}

const renderEarth2 = (e) => {
    N = e.target.value;

    const myGlobe2 = GlobeTwo()
        .backgroundColor("#00000000")
        .globeImageUrl(`./${N}.jpg`)
        .bumpImageUrl("topology.png")
        myGlobe2(map2)
        .width(mapWidth)

/*    const globeMaterial = myGlobe.globeMaterial();
    globeMaterial.bumpscale = 20;
    new THREE.TextureLoader().load('./4.jpg', texture => {
        globeMaterial.specularMap = texture;
        globeMaterial.specular = new THREE.Color('grey');
        globeMaterial.shininess = 15;
    })

    const globeMaterial2 = myGlobe2.globeMaterial();
    globeMaterial2.bumpscale = 20;
    new THREE.TextureLoader().load('./4.jpg', texture => {
        globeMaterial2.specularMap = texture;
        globeMaterial2.specular = new THREE.Color('grey');
        globeMaterial2.shininess = 15;
    })*/
}

/*-------------------------------*/
form.addEventListener('change', renderEarth)
form2.addEventListener('change', renderEarth2)

renderEarth({target: {value: 33}})
renderEarth2({target: {value: 33}})

var input2d = document.getElementById("2d");
var input3d = document.getElementById("3d")

var map2d = document.getElementById("twodmap")

var M = 33;

function switchmap (event){
    var value = event.target.value;
    if(value == "2d"){
        map2d.src = `./${M}.jpg`
        map2d.style.display = "block"
        map.style.display = "none"
        map2.style.display = "none"
    }
    else{
        map2d.style.display = "none"
        map.style.display = "block"
        map2.style.display = "block"
    }
}

input2d.addEventListener('change', switchmap)
input3d.addEventListener('change', switchmap)