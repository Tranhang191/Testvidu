Vidu = function()
{
    Sim.App.call(this); 
}
Vidu.prototype = new Sim.App();
Vidu.prototype.init = function(param)
{
    Sim.App.prototype.init.call(this, param);
    //tao camera va light
    // Some scene lighting
  var ambientLight = new THREE.AmbientLight(0x444444);
  this.scene.add(ambientLight);

  var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(-0.3333, 1, 0.777).normalize();
  this.scene.add(directionalLight);
  this.directionalLight = directionalLight;

  this.camera.position.set(0, 3.333, 6.667);
  this.camera.lookAt(this.root.position);
    var hoa = new Hoa();
    hoa.init();
    this.addObject(hoa);
}

Hoa = function()
{
    Sim.Object.call(this);
}
Hoa.prototype = new Sim.Object();
Hoa.prototype.init = function()
{
    var geometry = new THREE.CylinderGeometry(1, 1, 2, 32);// tạo hình trụ
    var material = new THREE.MeshPhongMaterial( // chinh mau
		{
			color: 0xf25346
		}
	);
    var mesh = new THREE.Mesh(geometry,material);
    this.setObject3D(mesh);

}
// ham xoay
Hoa.prototype.update = function()
{
    this.object3D.rotation.x += 0.0025;
}


Vidu1 = function()
{
    Sim.App.call(this); 
}
Vidu1.prototype = new Sim.App();
Vidu1.prototype.init = function(param)
{
    Sim.App.prototype.init.call(this, param);
    //tao camera va light
    // Some scene lighting
  var ambientLight = new THREE.AmbientLight(0x444444);
  this.scene.add(ambientLight);

  var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(-0.3333, 1, 0.777).normalize();
  this.scene.add(directionalLight);
  this.directionalLight = directionalLight;

  this.camera.position.set(0, 3.333, 6.667);
  this.camera.lookAt(this.root.position);
    var hoa = new Hoa1();
    hoa.init();
    this.addObject(hoa);
}

Hoa1 = function()
{
    Sim.Object.call(this);
}
Hoa1.prototype = new Sim.Object();
Hoa1.prototype.init = function()
{
    var geometry = new THREE.SphereGeometry(1, 20, 20);// tạo hình trụ
    var material = new THREE.MeshPhongMaterial( // chinh mau
		{
			color: 0xf25346 , ambient : 0xaa0000 
		}
	);
    var mesh = new THREE.Mesh(geometry,material);
    this.setObject3D(mesh);

}
// ham xoay
Hoa1.prototype.update = function()
{
    this.object3D.rotation.y += 0.0025;
}


