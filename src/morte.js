const NERO = "0x000000";

const X_MORTE = 200;
const L_MORTE = 80;
const A_MORTE = 137;

const VEL_SALTO = 1100;
const VEL_CORSA = 600;

const TASTO_SALTO = PP.key_codes.SPACE;
const TASTO_SX = PP.key_codes.LEFT;
const TASTO_DX = PP.key_codes.RIGHT;

const ATTRITO_FOGNE = 300;
const ATTRITO_NORMALE = 3000;

let ss_morte;

export let morte;

let animazione;

export function crea_morte(s, x, y) {
    morte = PP.shapes.rectangle_add(s, X_MORTE, Y_TERRENO - A_MORTE / 2, L_MORTE, A_MORTE, NERO, 1);

    PP.physics.add(s, morte, PP.physics.type.DYNAMIC);
    PP.physics.set_collide_world_bounds(morte, true);
    PP.physics.add_collider(s, morte, terreno);
}

export function muovi_morte(s) {
    cammina(s);
    salta(s);
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

export function scivola (s, a, b) {
    PP.physics.set_drag_x (a, ATTRITO_FOGNE);
}

export function frena (s, a, b) {
    PP.physics.set_drag_x (a, ATTRITO_NORMALE);
}