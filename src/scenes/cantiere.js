const TERRA = "0xB96E54";
const NERO = "0x000000";

const A_TERRENO = 96;
const Y_TERRENO = 624;

const L_LIVELLO = 2500;
const ANTICIPO_CAMERA = 200;

const X_MORTE = 200;
const L_MORTE = 80;
const A_MORTE = 137;

const VEL_SALTO = 1100;
const VEL_CORSA = 600;

const TASTO_SALTO = PP.key_codes.SPACE;
const TASTO_SX = PP.key_codes.LEFT;
const TASTO_DX = PP.key_codes.RIGHT;

let terreno;
let morte;
let partita_finita = false;

function preload(s) {}

function create(s) {
    crea_terreno(s);
    crea_morte(s);
    crea_camera(s);
}

function crea_camera(s) {
    PP.physics.set_world_bounds(s, 0, 0, L_LIVELLO, ALTEZZA);
    PP.camera.set_bounds(s, 0, 0, L_LIVELLO, ALTEZZA);
    PP.camera.start_follow(s, morte, -ANTICIPO_CAMERA, 0);
}


function crea_terreno(s) {
    terreno = PP.shapes.rectangle_add(s, L_LIVELLO / 2, Y_TERRENO + A_TERRENO / 2, L_LIVELLO, A_TERRENO, TERRA, 1);
    PP.physics.add(s, terreno, PP.physics.type.STATIC);
}

function crea_morte(s) {
    morte = PP.shapes.rectangle_add(s, X_MORTE, Y_TERRENO - A_MORTE / 2, L_MORTE, A_MORTE, NERO, 1);

    PP.physics.add(s, morte, PP.physics.type.DYNAMIC);
    PP.physics.set_collide_world_bounds(morte, true);
    PP.physics.add_collider(s, morte, terreno);
}

function update(s) {
    cammina(s);
    salta(s)
}

function cammina(s) {
    if (PP.interactive.kb.is_key_down(s, TASTO_SX)) {
        PP.physics.set_velocity_x(morte, -VEL_CORSA);
    } else if (PP.interactive.kb.is_key_down(s, TASTO_DX)) {
        PP.physics.set_velocity_x(morte, VEL_CORSA);
    } else {
        PP.physics.set_velocity_x(morte, 0);
    }
}

function salta(s) {
    if (PP.interactive.kb.is_key_just_down(s, TASTO_SALTO) && PP.physics.is_on_ground(morte)) {
    PP.physics.set_velocity_y(morte, -VEL_SALTO);
    }
}

function destroy(s) {}

PP.scenes.add("cantiere", preload, create, update, destroy);