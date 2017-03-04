
var camera, scene, renderer;

var scene2, renderer2;

var controls;

var container = document.getElementById('container');

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.set( 200, 200, 200 );

    controls = new THREE.TrackballControls( camera );

    // scene = new THREE.Scene();
    scene2 = new THREE.Scene();

    var material = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true, wireframeLinewidth: 1, side: THREE.DoubleSide } );

    //

    for ( var i = 0; i < 10; i ++ ) {

        var element = document.createElement( 'div' );
        element.style.width = '100px';
        element.style.height = '100px';
        element.style.opacity = 0.5;
        element.style.background = new THREE.Color( Math.random() * 0xffffff ).getStyle();

        var object = new THREE.CSS3DObject( element );
        object.position.x = Math.random() * 200 - 100;
        object.position.y = Math.random() * 200 - 100;
        object.position.z = Math.random() * 200 - 100;
        object.rotation.x = Math.random();
        object.rotation.y = Math.random();
        object.rotation.z = Math.random();
        object.scale.x = Math.random() + 0.5;
        object.scale.y = Math.random() + 0.5;
        scene2.add( object );

        // var geometry = new THREE.PlaneGeometry( 100, 100 );
        // var mesh = new THREE.Mesh( geometry, material );
        // mesh.position.copy( object.position );
        // mesh.rotation.copy( object.rotation );
        // mesh.scale.copy( object.scale );
        // scene.add( mesh );

    }

    //

    // renderer = new THREE.WebGLRenderer();
    // renderer.setClearColor( 0xf0f0f0 );
    // renderer.setPixelRatio( window.devicePixelRatio );
    // renderer.setSize( window.innerWidth, window.innerHeight );
    // container.appendChild( renderer.domElement );

    renderer2 = new THREE.CSS3DRenderer();
    renderer2.setSize( window.innerWidth, window.innerHeight );
    renderer2.domElement.style.position = 'absolute';
    renderer2.domElement.style.top = 0;
    container.appendChild( renderer2.domElement );

}

function animate() {

    requestAnimationFrame( animate );

    controls.update();

    // renderer.render( scene, camera );
    renderer2.render( scene2, camera );

}