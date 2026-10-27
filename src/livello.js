import { morte, frena } from "./morte.js";

export const Y_TERRENO = 592;
const TERRA = "0xB96E54";
const L_LIVELLO = 5000;
const A_CASSA = 80;
const L_CASSA = 80;

const ANTICIPO_CAMERA = 200;

export let terreni;
export let cassa;


export function crea_terreno(s) {
    terreno = PP.shapes.rectangle_add(s, L_LIVELLO / 2, Y_TERRENO + A_TERRENO / 2, L_LIVELLO, A_TERRENO, TERRA, 1);
    PP.physics.add(s, terreno, PP.physics.type.STATIC);
}

export function crea_camera(s) {
    PP.physics.set_world_bounds(s, 0, 0, L_LIVELLO, ALTEZZA);
    PP.camera.set_bounds(s, 0, 0, L_LIVELLO, ALTEZZA);
    PP.camera.start_follow(s, morte, -ANTICIPO_CAMERA, 0);
}

export function crea_attrito (s, attrito) {
    for ( let i = 0; i < terreni.lenght; i++) {PP.physics.add_collider_f(s, morte, terreni [i], attrito);}
}