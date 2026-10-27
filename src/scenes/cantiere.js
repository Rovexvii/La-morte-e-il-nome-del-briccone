import { crea_morte, muovi_morte, frena } from "../morte.js";
import { Y_TERRENO, crea_terreno, crea_camera } from "../livello.js";

function preload(s) {}

function create(s) {
    crea_morte(s);
    crea_terreno(s);
    crea_camera(s);
}

function update(s) {
    muovi_morte(s);
}


function destroy(s) {}

PP.scenes.add ("cantiere", preload, create, update, destroy);