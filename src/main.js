const LARGHEZZA = 1280;
const ALTEZZA = 720;

const config = {
  canvas_width: LARGHEZZA,
  canvas_height: ALTEZZA,
  canvas_id: "area_gioco",
  background_color: 0xABABAB,
  gravity_value: 2000,
  debug_mode: true,
};

function avvia() {
  PP.game.create(config);
}


