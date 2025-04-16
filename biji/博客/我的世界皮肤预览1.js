/*! Copyright © 2021 NameMC. All rights reserved. */

const TAU = 2 * Math.PI;
const EPS = 1e-3;

const SKIN = [
  [
    [[[16,8,8,8],[0,8,8,8],[8,0,8,8],[16,7,8,-8],[8,8,8,8],[24,8,8,8]], // Head
     [[48,8,8,8],[32,8,8,8],[40,0,8,8],[48,7,8,-8],[40,8,8,8],[56,8,8,8]]], // Hat
    [[[28,20,4,12],[16,20,4,12],[20,16,8,4],[28,19,8,-4],[20,20,8,12],[32,20,8,12]]], // Torso
    [[[[48,20,4,12],[40,20,4,12],[44,16,4,4],[48,19,4,-4],[44,20,4,12],[52,20,4,12]], // Right Arm
      [[47,20,4,12],[40,20,4,12],[44,16,3,4],[47,19,3,-4],[44,20,3,12],[51,20,3,12]]]], // Right Arm (Slim)
    [[[[43,20,-4,12],[51,20,-4,12],[47,16,-4,4],[51,19,-4,-4],[47,20,-4,12],[55,20,-4,12]], // Left Arm
      [[43,20,-4,12],[50,20,-4,12],[46,16,-3,4],[49,19,-3,-4],[46,20,-3,12],[53,20,-3,12]]]], // Left Arm (Slim)
    [[[8,20,4,12],[0,20,4,12],[4,16,4,4],[8,19,4,-4],[4,20,4,12],[12,20,4,12]]], // Right Leg
    [[[3,20,-4,12],[11,20,-4,12],[7,16,-4,4],[11,19,-4,-4],[7,20,-4,12],[15,20,-4,12]]] // Left Leg
  ],
  [
    [[[16,8,8,8],[0,8,8,8],[8,0,8,8],[16,7,8,-8],[8,8,8,8],[24,8,8,8]], // Head
     [[48,8,8,8],[32,8,8,8],[40,0,8,8],[48,7,8,-8],[40,8,8,8],[56,8,8,8]]], // Hat
    [[[28,20,4,12],[16,20,4,12],[20,16,8,4],[28,19,8,-4],[20,20,8,12],[32,20,8,12]], // Torso
     [[28,36,4,12],[16,36,4,12],[20,32,8,4],[28,35,8,-4],[20,36,8,12],[32,36,8,12]]], // Jacket
    [[[[48,20,4,12],[40,20,4,12],[44,16,4,4],[48,19,4,-4],[44,20,4,12],[52,20,4,12]], // Right Arm
      [[47,20,4,12],[40,20,4,12],[44,16,3,4],[47,19,3,-4],[44,20,3,12],[51,20,3,12]]], // Right Arm (Slim)
     [[[48,36,4,12],[40,36,4,12],[44,32,4,4],[48,35,4,-4],[44,36,4,12],[52,36,4,12]], // Right Sleeve
      [[47,36,4,12],[40,36,4,12],[44,32,3,4],[47,35,3,-4],[44,36,3,12],[51,36,3,12]]]], // Right Sleeve (Slim)
    [[[[40,52,4,12],[32,52,4,12],[36,48,4,4],[40,51,4,-4],[36,52,4,12],[44,52,4,12]], // Left Arm
      [[39,52,4,12],[32,52,4,12],[36,48,3,4],[39,51,3,-4],[36,52,3,12],[43,52,3,12]]], // Left Arm (Slim)
     [[[56,52,4,12],[48,52,4,12],[52,48,4,4],[56,51,4,-4],[52,52,4,12],[60,52,4,12]], // Left Sleeve
      [[55,52,4,12],[48,52,4,12],[52,48,3,4],[55,51,3,-4],[52,52,3,12],[59,52,3,12]]]], // Left Sleeve (Slim)
    [[[8,20,4,12],[0,20,4,12],[4,16,4,4],[8,19,4,-4],[4,20,4,12],[12,20,4,12]], // Right Leg
     [[8,36,4,12],[0,36,4,12],[4,32,4,4],[8,35,4,-4],[4,36,4,12],[12,36,4,12]]], // Right Pant
    [[[24,52,4,12],[16,52,4,12],[20,48,4,4],[24,51,4,-4],[20,52,4,12],[28,52,4,12]], // Left Leg
     [[8,52,4,12],[0,52,4,12],[4,48,4,4],[8,51,4,-4],[4,52,4,12],[12,52,4,12]]] // Left Pant
  ]
];

function radians(d) {
  return d * (TAU / 360);
}

function getImage(id) {
  return id && window.namemc && window.namemc.images && window.namemc.images[id];
}

function toImage(png) {
  return new Promise((resolve, reject) => {
    if (!png) return resolve(null);
    let image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = `data:image/png;base64,${png}`;
  });
}

function toCanvas(image, x, y, w, h) {
  if (!image) return null;

  x = (typeof x === 'undefined' ? 0 : x);
  y = (typeof y === 'undefined' ? 0 : y);
  w = (typeof w === 'undefined' ? image.width : w);
  h = (typeof h === 'undefined' ? image.height : h);

  let canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  canvas.getContext('2d').drawImage(image, x, y, w, h, 0, 0, w, h);

  return canvas;
}

function getBitmap(canvas, x, y, w, h) {
  if (!canvas) return null;

  x = (typeof x === 'undefined' ? 0 : x);
  y = (typeof y === 'undefined' ? 0 : y);
  w = (typeof w === 'undefined' ? canvas.width : w);
  h = (typeof h === 'undefined' ? canvas.height : h);

  return canvas.getContext('2d').getImageData(x, y, w, h);
}

function putBitmap(canvas, bitmap, x, y) {
  x = (typeof x === 'undefined' ? 0 : x);
  y = (typeof y === 'undefined' ? 0 : y);

  canvas.getContext('2d').putImageData(bitmap, x, y);

  return canvas;
}

function hasAlphaLayer(bitmap) {
  for (let p = 3; p < bitmap.data.length; p += 4) {
    if (bitmap.data[p] < 255) {
      return true;
    }
  }
  return false;
}

function makeOpaque(bitmap) {
  if (!bitmap) return null;
  for (let p = 3; p < bitmap.data.length; p += 4) {
    bitmap.data[p] = 255;
  }
  return bitmap;
}

function rotateHue180(bitmap) {
  for (let p = 0; p < bitmap.data.length; p += 4) {
    let r = bitmap.data[p];
    let g = bitmap.data[p + 1];
    let b = bitmap.data[p + 2];
    let minMaxSum = Math.min(r, g, b) + Math.max(r, g, b);
    bitmap.data[p] = minMaxSum - r;
    bitmap.data[p + 1] = minMaxSum - g;
    bitmap.data[p + 2] = minMaxSum - b;
  }
  return bitmap;
}

function capeScale(height) {
  if (height % 22 === 0) {
    return height / 22;
  } else if (height % 17 === 0) {
    return height / 17;
  } else if (height >= 32 && (height & (height - 1)) === 0) { // power of 2
    return height / 32;
  } else {
    return Math.max(1, Math.floor(height / 22));
  }
}

function drawFace(id) {
  let elements = document.querySelectorAll(`canvas.skin-2d[data-id='${id}'], canvas.skin-2d[data-head='${id}']`);
  if (elements.length === 0) return;
  for (let e of elements) {
    let skin = getImage(e.getAttribute('data-id'));
    if (!skin) continue;
    let headId = e.getAttribute('data-head');
    let head = getImage(headId);
    if (headId && !head) continue;
    let sx = 8;
    if (e.getAttribute('data-side') === 'left')  sx += 8;
    if (e.getAttribute('data-side') === 'right') sx -= 8;
    let result = toCanvas(skin, sx, 8, 8, 8);
    let ctx = result.getContext('2d');
    if (hasAlphaLayer(getBitmap(toCanvas(skin)))) {
      putBitmap(result, makeOpaque(getBitmap(result)));
      ctx.drawImage(skin, sx + 32, 8, 8, 8, 0, 0, 8, 8);
    }
    if (head) {
      if (head.width === 32) {
        ctx.drawImage(head, sx, 8, 8, 8, 0, 0, 8, 8);
      } else if (head.width === 64) {
        ctx.drawImage(head, sx, 8, 8, 8, 0, 0, 8, 8);
        ctx.drawImage(head, sx + 32, 8, 8, 8, 0, 0, 8, 8);
      }
    }
    if (e.getAttribute('data-transform') === 'rotate-hue-180') {
      putBitmap(result, rotateHue180(getBitmap(result)));
    }
    ctx = e.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(result, 0, 0, e.width, e.height);
  }
}

function drawCape(id) {
  let cape = getImage(id);
  if (!cape) return;
  let elements = document.querySelectorAll(`canvas.cape-2d[data-cape='${id}']`);
  if (elements.length === 0) return;
  let cs = capeScale(cape.height);
  let canvas = toCanvas(cape, cs, cs, 10 * cs, 16 * cs);
  for (let e of elements) {
    let ctx = e.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(canvas, 0, 0, e.width, e.height);
  }
}

function colorFaces(geometry, bitmap, rectangles) {
  if (!rectangles) return null;

  const faces = [];
  const materials = [];
  const materialIndexMap = [];
  let f = 0;
  let side = THREE.FrontSide;
  rectangles.forEach(r => {
    const dh = 4*Math.sign(r[2]);
    const dv = 4*Math.sign(r[3])*bitmap.width;
    const r1 = 4*(r[1]*bitmap.width + r[0]);
    const r2 = 4*(r[3]*bitmap.width) + r1;
    for (let p1 = r1, p2 = r1 + 4*r[2]; p1 !== r2; p1 += dv, p2 += dv) {
      for (let p = p1; p !== p2; p += dh, f += 2) {
        const a = bitmap.data[p + 3];
        if (a < 255) side = THREE.DoubleSide;
        if (a === 0) continue;

        let materialIndex = materialIndexMap[a];
        if (typeof materialIndex === 'undefined') {
          materials.push(new THREE.MeshLambertMaterial({
            vertexColors: THREE.FaceColors,
            opacity: a / 255,
            transparent: a < 255
          }));
          materialIndex = materials.length - 1;
          materialIndexMap[a] = materialIndex;
        }

        const face1 = geometry.faces[f];
        const face2 = geometry.faces[f + 1];
        face1.color.r = bitmap.data[p] / 255;
        face1.color.g = bitmap.data[p + 1] / 255;
        face1.color.b = bitmap.data[p + 2] / 255;
        face2.color = face1.color;
        face1.materialIndex = materialIndex;
        face2.materialIndex = materialIndex;
        faces.push(face1);
        faces.push(face2);
      }
    }
  });

  if (faces.length === 0) return null;

  geometry.faces = faces;
  geometry = new THREE.BufferGeometry().fromGeometry(geometry);

  materials.forEach(m => m.side = side);

  return new THREE.Mesh(geometry, materials);
}

function buildSkinModel(skin, cape, slim, flip) {
  if (skin.width < 64 || skin.height < 32) {
    return null;
  }

  let v = (skin.height >= 64 ? 1 : 0);
  let armW = slim ? 3 : 4;

  let bitmap = getBitmap(skin);
  let hasAlpha = hasAlphaLayer(bitmap);
  let opaque = hasAlpha ? makeOpaque(getBitmap(skin)) : bitmap;

  let headGroup = new THREE.Object3D();
  headGroup.position.x = 0;
  headGroup.position.y = 12;
  headGroup.position.z = 0;
  let headBox = new THREE.BoxGeometry(8, 8, 8, 8, 8, 8);
  let headMesh = colorFaces(headBox, opaque, SKIN[v][0][0]);
  headGroup.add(headMesh);
  if (hasAlpha) {
    let hatBox = new THREE.BoxGeometry(9, 9, 9, 8, 8, 8);
    let hatMesh = colorFaces(hatBox, bitmap, SKIN[v][0][1]);
    if (hatMesh) headGroup.add(hatMesh);
  }

  let torsoGroup = new THREE.Object3D();
  torsoGroup.position.x = 0;
  torsoGroup.position.y = 2;
  torsoGroup.position.z = 0;
  let torsoBox = new THREE.BoxGeometry(8 + EPS, 12 + EPS, 4 + EPS, 8, 12, 4);
  let torsoMesh = colorFaces(torsoBox, opaque, SKIN[v][1][0]);
  torsoGroup.add(torsoMesh);
  if (v >= 1 && hasAlpha) {
    let jacketBox = new THREE.BoxGeometry(8.5 + EPS, 12.5 + EPS, 4.5 + EPS, 8, 12, 4);
    let jacketMesh = colorFaces(jacketBox, bitmap, SKIN[v][1][1]);
    if (jacketMesh) torsoGroup.add(jacketMesh);
  }

  let rightArmGroup = new THREE.Object3D();
  rightArmGroup.position.x = slim ? -5.5 : -6;
  rightArmGroup.position.y = 6;
  rightArmGroup.position.z = 0;
  let rightArmBox = new THREE.BoxGeometry(armW, 12, 4, armW, 12, 4).translate(0, -4, 0);
  let rightArmMesh = colorFaces(rightArmBox, opaque, SKIN[v][2][0][slim]);
  rightArmGroup.add(rightArmMesh);
  if (v >= 1 && hasAlpha) {
    let rightSleeveBox = new THREE.BoxGeometry(armW + 0.5 + EPS * 4, 12.5 + EPS * 4, 4.5 + EPS * 4, armW, 12, 4).translate(0, -4, 0);
    let rightSleeveMesh = colorFaces(rightSleeveBox, bitmap, SKIN[v][2][1][slim]);
    if (rightSleeveMesh) rightArmGroup.add(rightSleeveMesh);
  }

  let leftArmGroup = new THREE.Object3D();
  leftArmGroup.position.x = slim ? 5.5 : 6;
  leftArmGroup.position.y = 6;
  leftArmGroup.position.z = 0;
  let leftArmBox = new THREE.BoxGeometry(armW, 12, 4, armW, 12, 4).translate(0, -4, 0);
  let leftArmMesh = colorFaces(leftArmBox, opaque, SKIN[v][3][0][slim]);
  leftArmGroup.add(leftArmMesh);
  if (v >= 1 && hasAlpha) {
    let leftSleeveBox = new THREE.BoxGeometry(armW + 0.5 + EPS * 4, 12.5 + EPS * 4, 4.5 + EPS * 4, armW, 12, 4).translate(0, -4, 0);
    let leftSleeveMesh = colorFaces(leftSleeveBox, bitmap, SKIN[v][3][1][slim]);
    if (leftSleeveMesh) leftArmGroup.add(leftSleeveMesh);
  }

  let rightLegGroup = new THREE.Object3D();
  rightLegGroup.position.x = -2;
  rightLegGroup.position.y = -4;
  rightLegGroup.position.z = 0;
  let rightLegBox = new THREE.BoxGeometry(4, 12, 4, 4, 12, 4).translate(0, -6, 0);
  let rightLegMesh = colorFaces(rightLegBox, opaque, SKIN[v][4][0]);
  rightLegGroup.add(rightLegMesh);
  if (v >= 1 && hasAlpha) {
    let rightPantBox = new THREE.BoxGeometry(4.5 + EPS * 2, 12.5 + EPS * 2, 4.5 + EPS * 2, 4, 12, 4).translate(0, -6, 0);
    let rightPantMesh = colorFaces(rightPantBox, bitmap, SKIN[v][4][1]);
    if (rightPantMesh) rightLegGroup.add(rightPantMesh);
  }

  let leftLegGroup = new THREE.Object3D();
  leftLegGroup.position.x = 2;
  leftLegGroup.position.y = -4;
  leftLegGroup.position.z = 0;
  let leftLegBox = new THREE.BoxGeometry(4, 12, 4, 4, 12, 4).translate(0, -6, 0);
  let leftLegMesh = colorFaces(leftLegBox, opaque, SKIN[v][5][0]);
  leftLegGroup.add(leftLegMesh);
  if (v >= 1 && hasAlpha) {
    let leftPantBox = new THREE.BoxGeometry(4.5 + EPS * 3, 12.5 + EPS * 3, 4.5 + EPS * 3, 4, 12, 4).translate(0, -6, 0);
    let leftPantMesh = colorFaces(leftPantBox, bitmap, SKIN[v][5][1]);
    if (leftPantMesh) leftLegGroup.add(leftPantMesh);
  }

  let model = new THREE.Object3D();
  model.add(headGroup);
  model.add(torsoGroup);
  model.add(rightArmGroup);
  model.add(leftArmGroup);
  model.add(rightLegGroup);
  model.add(leftLegGroup);

  if (cape) {
    let cs = capeScale(cape.height);
    let capeGroup = new THREE.Object3D();
    capeGroup.position.x = 0;
    capeGroup.position.y = 8;
    capeGroup.position.z = -2;
    capeGroup.rotation.y += radians(180);
    let capeBox = new THREE.BoxGeometry(10, 16, 1, 10*cs, 16*cs, cs).translate(0, -8, 0.5);
    let capeMesh = colorFaces(capeBox, getBitmap(cape), [
      [11*cs,cs,cs,16*cs], [0,cs,cs,16*cs], [cs,0,10*cs,cs],
      [11*cs,cs-1,10*cs,-cs], [cs,cs,10*cs,16*cs], [12*cs,cs,10*cs,16*cs]
    ]);
    capeGroup.add(capeMesh);
    model.add(capeGroup);
  }

  if (flip) {
    model.rotation.z += radians(180);
  }

  return model;
}

const skin3d = {
  canvas: document.querySelector('canvas.skin-3d'),
  animateButton: document.getElementById('play-pause-btn'),
  renderFormTheta: document.getElementById('render-form-theta'),
  renderFormPhi: document.getElementById('render-form-phi'),
  renderFormTime: document.getElementById('render-form-time'),
  modelCache: {},
  dragState: {}
};

function updateRenderButton() {
  if (skin3d.renderFormTheta) skin3d.renderFormTheta.value = skin3d.theta.toFixed(2).replace(/\.?0+$/, '');
  if (skin3d.renderFormPhi)   skin3d.renderFormPhi.value   = skin3d.phi.toFixed(2).replace(/\.?0+$/, '');
  if (skin3d.renderFormTime)  skin3d.renderFormTime.value  = skin3d.time.toFixed(2).replace(/\.?0+$/, '');
}

function animateSkin(toggle) {
  let animate = (getCookie('animate') === 'true');
  if (toggle) {
    animate = !animate;
    setCookie('animate', animate.toString());
  }
  if (animate) {
    skin3d.animateButton.children[0].classList.remove('fa-play');
    skin3d.animateButton.children[0].classList.add('fa-pause');
    skin3d.animateButton.title = skin3d.animateButton.getAttribute('data-pause-title');
    skin3d.canvas.parentNode.classList.remove('animation-paused');
    if (!skin3d.animationId) {
      renderSkin();
      skin3d.startTime = performance.now() - skin3d.time * (1500 / 360);
      skin3d.animationId = window.requestAnimationFrame(renderSkinLoop);
    }
  } else {
    skin3d.animateButton.children[0].classList.remove('fa-pause');
    skin3d.animateButton.children[0].classList.add('fa-play');
    skin3d.animateButton.title = skin3d.animateButton.getAttribute('data-play-title');
    skin3d.canvas.parentNode.classList.add('animation-paused');
    if (skin3d.animationId) {
      window.cancelAnimationFrame(skin3d.animationId);
      skin3d.animationId = null;
    }
  }
}

function enableSkinRotation() {
  function startRotation(t, id) {
    skin3d.dragState[id] = t;
  }

  function rotate(t, id) {
    if (!skin3d.dragState[id]) {
      return false;
    }

    let result = true;

    skin3d.theta += t.screenX - skin3d.dragState[id].screenX;
    skin3d.phi   += t.screenY - skin3d.dragState[id].screenY;
    skin3d.canvas.setAttribute('data-theta', (skin3d.theta % 360).toFixed(2).replace(/\.?0+$/, ''));
    skin3d.canvas.setAttribute('data-phi',   (skin3d.phi   % 360).toFixed(2).replace(/\.?0+$/, ''));

    if (skin3d.phi < -90) {
      skin3d.phi = -90;
      result = false;
    } else if (skin3d.phi > 90) {
      skin3d.phi = 90;
      result = false;
    }

    skin3d.dragState[id] = t;

    skin3d.model.rotation.x = radians(skin3d.phi);
    skin3d.model.rotation.y = radians(skin3d.theta);

    if (!skin3d.animationId) {
      renderSkin();
    }

    return result;
  }

  function endRotation(t, id) {
    delete skin3d.dragState[id];
  }

  skin3d.canvas.addEventListener('mousedown', e => { e.preventDefault(); startRotation(e, 'mouse'); });
  window.addEventListener('mousemove', e => rotate(e, 'mouse'));
  window.addEventListener('mouseup', e => endRotation(e, 'mouse'));
  skin3d.canvas.addEventListener('touchstart', e => {
    for (let i = 0; i < e.changedTouches.length; i++) {
      startRotation(e.changedTouches[i], e.changedTouches[i].identifier);
    }
  });
  skin3d.canvas.addEventListener('touchmove', e => {
    let result = false;
    for (let i = 0; i < e.changedTouches.length; i++) {
      if (rotate(e.changedTouches[i], e.changedTouches[i].identifier)) {
        result = true;
      } else {
        delete skin3d.dragState[e.changedTouches[i].identifier];
      }
    }
    if (result) {
      e.preventDefault();
    }
  });
  skin3d.canvas.addEventListener('touchend', e => {
    for (let i = 0; i < e.changedTouches.length; i++) {
      endRotation(e.changedTouches[i], e.changedTouches[i].identifier);
    }
  });
  skin3d.canvas.addEventListener('touchcancel', e => {
    for (let i = 0; i < e.changedTouches.length; i++) {
      endRotation(e.changedTouches[i], e.changedTouches[i].identifier);
    }
  });
}

function renderSkinLoop() {
  skin3d.time = (performance.now() - skin3d.startTime) * (360 / 1500) % 1440;
  skin3d.canvas.setAttribute('data-time', skin3d.time.toFixed(2).replace(/\.?0+$/, ''));
  skin3d.animationId = window.requestAnimationFrame(renderSkinLoop);
  renderSkin();
}

function renderSkin() {
  if (!skin3d.canvas) return;

  skin3d.id = skin3d.canvas.getAttribute('data-id');
  skin3d.cape = skin3d.canvas.getAttribute('data-cape');
  skin3d.slim = skin3d.canvas.getAttribute('data-model') === 'slim' ? 1 : 0;
  skin3d.flip = skin3d.canvas.getAttribute('data-flip') === 'true';
  if (typeof skin3d.theta !== 'number') {
    skin3d.theta = skin3d.canvas.getAttribute('data-theta') ? parseFloat(skin3d.canvas.getAttribute('data-theta')) : 30;
  }
  if (typeof skin3d.phi !== 'number') {
    skin3d.phi = skin3d.canvas.getAttribute('data-phi') ? parseFloat(skin3d.canvas.getAttribute('data-phi')) : 21;
  }
  if (typeof skin3d.time !== 'number') {
    skin3d.time = skin3d.canvas.getAttribute('data-time') ? parseFloat(skin3d.canvas.getAttribute('data-time')) : (skin3d.flip ? 270 : 90);
  }

  let key = `${skin3d.id}:${skin3d.cape}:${skin3d.slim}`;
  if (!skin3d.modelCache[key]) {
    let skin = toCanvas(getImage(skin3d.id));
    let cape = toCanvas(getImage(skin3d.cape));
    if (!skin || skin3d.cape && !cape) return;
    skin3d.modelCache[key] = buildSkinModel(skin, cape, skin3d.slim, skin3d.flip);
  }
  if (skin3d.modelCache[key] !== skin3d.model) {
    if (skin3d.model) skin3d.scene.remove(skin3d.model);
    skin3d.model = skin3d.modelCache[key];
    if (!skin3d.scene) {
      skin3d.scene = new THREE.Scene();
      let ambLight = new THREE.AmbientLight(0xFFFFFF, 0.7);
      let dirLight = new THREE.DirectionalLight(0xFFFFFF, 0.3);
      dirLight.position.set(0.678, 0.284, 0.678);
      skin3d.scene.add(ambLight);
      skin3d.scene.add(dirLight);
    }
    skin3d.scene.add(skin3d.model);
  }

  if (!skin3d.model) return;

  skin3d.model.rotation.x = radians(skin3d.phi);
  skin3d.model.rotation.y = radians(skin3d.theta);
  let angle = Math.sin(radians(skin3d.time));
  skin3d.model.children[2].rotation.x = -radians(18) * angle;
  skin3d.model.children[3].rotation.x = radians(18) * angle;
  skin3d.model.children[4].rotation.x = radians(20) * angle;
  skin3d.model.children[5].rotation.x = -radians(20) * angle;
  if (skin3d.model.children[6]) {
    let capeAngle = Math.sin(radians(skin3d.time / 4));
    skin3d.model.children[6].rotation.x = radians(18) - radians(6) * capeAngle;
  }

  if (!skin3d.camera) {
    skin3d.camera = new THREE.PerspectiveCamera(38, skin3d.canvas.width / skin3d.canvas.height, 60 - 20, 60 + 20);
    skin3d.camera.position.x = 0;
    skin3d.camera.position.y = 0;
    skin3d.camera.position.z = 60;
    skin3d.camera.lookAt(new THREE.Vector3(0, 0, 0));
  }

  if (!skin3d.renderer) {
    skin3d.renderer = new THREE.WebGLRenderer({
      canvas: skin3d.canvas,
      antialias: true,
      alpha: true
    });
  }

  skin3d.renderer.render(skin3d.scene, skin3d.camera);

  updateRenderButton();
}

function updateSkin(element) {
  let canvas = document.querySelector('canvas.skin-3d');
  let skinId = element.getAttribute('data-id');
  let capeId = element.getAttribute('data-cape');
  let modelType = element.getAttribute('data-model');
  let redraw = false;
  if (skinId && canvas.getAttribute('data-id') !== skinId) {
    canvas.setAttribute('data-id', skinId);
    redraw = true;
  }
  if (capeId && canvas.getAttribute('data-cape') !== capeId) {
    canvas.setAttribute('data-cape', capeId);
    redraw = true;
  }
  if (modelType && canvas.getAttribute('data-model') !== modelType) {
    canvas.setAttribute('data-model', modelType);
    redraw = true;
  }
  if (redraw) {
    renderSkin();
    document.querySelectorAll('.skin-button').forEach(e => {
      e.classList.toggle('skin-button-selected',
        e.getAttribute('data-id') === canvas.getAttribute('data-id') ||
        e.getAttribute('data-cape') === canvas.getAttribute('data-cape'))
    });
  }
  return false;
}

function initializeSkin(id) {
  if (!skin3d.canvas) return;
  let skinId = skin3d.canvas.getAttribute('data-id');
  let capeId = skin3d.canvas.getAttribute('data-cape');
  if (id !== skinId && id !== capeId) return;
  if (!getImage(skinId) || capeId && !getImage(capeId)) return;
  if (getCookie('animate') === 'true') {
    animateSkin();
  } else {
    renderSkin();
  }
  enableSkinRotation();
  for (let e of document.querySelectorAll('.skin-button')) {
    e.addEventListener('mousemove', () => updateSkin(e));
    e.addEventListener('pointermove', () => updateSkin(e));
    e.addEventListener('touchmove', () => updateSkin(e));
  }
}

async function nmci(pngs) {
  if (!window.namemc) window.namemc = {};
  if (!window.namemc.images) window.namemc.images = {};
  for (let [id, png] of Object.entries(pngs)) {
    if (!window.namemc.images[id]) {
      window.namemc.images[id] = await toImage(png);
      initializeSkin(id);
      drawFace(id);
      drawCape(id);
    }
  }
}

function scaleSkinsToDevice() {
  if (typeof window.devicePixelRatio === 'number' && window.devicePixelRatio !== 1.0) {
    let ratio = Math.min(2.0, window.devicePixelRatio);
    if (skin3d.canvas) {
      skin3d.canvas.width *= ratio;
      skin3d.canvas.height *= ratio;
    }
    ratio = Math.max(1.0, Math.min(1.5, Math.round(window.devicePixelRatio * 4) / 4));
    document.querySelectorAll('img[data-src]').forEach(e => {
      let src = e.getAttribute('data-src');
      if (src.startsWith('https://s.namemc.com/3d/skin/body.png')) {
        src = src.replace(/width=[0-9]+/, `width=${Math.round(e.width * ratio)}`);
        src = src.replace(/height=[0-9]+/, `height=${Math.round(e.height * ratio)}`);
      }
      e.src = src;
    });
  } else {
    document.querySelectorAll('img[data-src]').forEach(e => e.src = e.getAttribute('data-src'));
  }
}

function formatTimezoneOffset(time) {
  let offset = time.getTimezoneOffset();
  let sign;
  if (offset > 0) {
    sign = '−';
  } else {
    sign = '+';
    offset = -offset;
  }
  let hourOffset = Math.floor(offset / 60);
  let minuteOffset = offset - 60 * hourOffset;

  return `(UTC${sign}${hourOffset.toString().padStart(2, '0')}:${minuteOffset.toString().padStart(2, '0')})`;
}

function localizeTimes() {
  document.querySelectorAll('time').forEach(e => {
    let time = new Date(e.getAttribute('datetime'));
    switch (e.getAttribute('data-type')) {
      case 'date':
        e.textContent = time.toLocaleDateString();
        break;
      case 'time':
        e.textContent = time.toLocaleTimeString();
        break;
      case 'timezone':
        e.textContent = formatTimezoneOffset(time);
        break;
      default:
        e.textContent = `${time.toLocaleDateString()} • ${time.toLocaleTimeString()}`;
    }
  });

  document.querySelectorAll('.title-time').forEach(e =>
    e.setAttribute('title', [e.getAttribute('title'), e.getAttribute('data-title-2')]
      .filter(t => !!t)
      .map(t => new Date(t))
      .map(t => `${t.toLocaleDateString()} • ${t.toLocaleTimeString()}`)
      .join('\n')));
}

async function makeClock() {
  const start = Date.now();
  const time = await fetch('https://api.namemc.com/time');
  const end = Date.now();
  const offset = new Date(await time.json()).getTime() - (start + end) / 2;
  return () => new Date(Date.now() + offset);
}

async function startTimers() {
  let timers = [...document.querySelectorAll('.countdown-timer')].map(e => ({
    element: e,
    date: new Date(`${e.getAttribute('data-datetime').substring(0, 19)}Z`),
    updateTitle: e.getAttribute('data-update-title')
  }));
  if (timers.length === 0) return;
  timers.sort((a, b) => a.date - b.date);

  let clock = await makeClock();
  let title = document.title;

  let tick = () => {
    let now = clock();
    let titleUpdated = false;
    timers.forEach(t => {
      t.seconds = Math.ceil((t.date.getTime() - now.getTime()) / 1000);

      let s = Math.max(0, t.seconds);
      let d = Math.floor(s / (60 * 60 * 24));
      s -= d * (60 * 60 * 24);
      let h = Math.floor(s / (60 * 60));
      s -= h * (60 * 60);
      let m = Math.floor(s / 60);
      s -= m * 60;

      let text;
      if (d) {
        text = `${d}:${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
      } else if (h) {
        text = `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
      } else {
        text = `${m}:${s.toString().padStart(2, '0')}`;
      }

      t.element.innerText = text;

      if (!titleUpdated && t.updateTitle && t.seconds >= 0) {
        document.title = `[${text}] ${title}`;
        titleUpdated = true;
      }
    });

    while (timers.length > 0 && timers[0].seconds <= 0) {
      timers.shift();
    }

    if (timers.length > 0) {
      setTimeout(tick, 1000 - now.getMilliseconds());
    }
  };

  tick();
}

localizeTimes();
scaleSkinsToDevice();