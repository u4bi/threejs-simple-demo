/* dice index.js*/

var container;
var camera, scene, renderer;
var cube;

init();
render();

function init(){ 
  container = document.getElementById('container'); /* 돔에 접근함*/

  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000); /* 카메라 셋업함*/
  camera.position.y = 150; /* 카메라의 y값을 150으로 물체와의 간격 조정을 위함*/
  camera.position.z = 500; /* 카메라의 z값을 500으로 물체와의 간격 조정을 위함*/
  
  scene = new THREE.Scene(); /* 씬에 카메라 구성을 집어넣음*/
  var geometry = new THREE.BoxGeometry( 200, 200, 200 );
  // console.log('d : '+geometry.faces.length);
  for (var i = 0; i < geometry.faces.length; i += 2) { /* 12개 / 한면에 삼각형 두개임 그러므로 2쁠쁠*/
    var hex = Math.random() * 0xffffff; /* 랜덤돌려 hex값 구함*/
    geometry.faces[i].color.setHex(hex); /*현재 루프 i*/
    geometry.faces[i+1].color.setHex(hex); /* 한면 채워주기 위해 i의 다음번째까지*/
  }
  var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors, overdraw: 0.5 } ); /*  정의된 faceColors를 주입함*/
  cube = new THREE.Mesh(geometry, material); /* cube에 위의 두 객체를 정의함*/
  
  cube.position.y = 150; /* cube의 pos y값 150으로 정의*/
  scene.add(cube); /* 씬에 cube 객체를 넣어줌*/

  renderer = new THREE.CanvasRenderer(); /* 캔버스를 지원하는 렌더러 생성*/
  renderer.setClearColor(0xf0f0f0); /* 렌더러 배경색 설정*/
  renderer.setPixelRatio(window.devicePixelRatio); /* 현재 디스플레이 픽셀 반영함*/
  renderer.setSize(window.innerWidth, window.innerHeight); /* 렌더링할 공간 컨테이너란 id를 가진 div의 높이와 너비로 설정함*/
  container.appendChild(renderer.domElement); /* 컨테이너에 렌더러란 돔을 주입함*/
}

function render(){
  requestAnimationFrame(render); /* 브라우저 탭을 이동하거나 할때 정지되게끔 해줌 브라우저 부담 줄임*/

  renderer.render(scene, camera); /* 컨테이너안에 입혀진 렌더러란 돔안의 씬과 카메라를 렌딩시킴*/
}