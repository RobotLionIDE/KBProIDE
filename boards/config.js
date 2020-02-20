module.exports = {
  data: {
    board_config: 1,
    block: {},
    template: "",
  },
  persistence: {
    board : 'esp32-wroom',
    board_info : {
      name : 'esp32-wroom',
      platform : 'arduino-esp32',
      title : 'Generic ESP32 Wroom',
      description : 'ESP32-Wroom development board (Compatible with all ESP32 board).\n',
      author : 'Comdet Phueadphut',
      email : 'comdet.p@gmail.com',
      website : 'https://docs.espressif.com/projects/esp-idf/en/latest/hw-reference/get-started-devkitc.html',
      git : "https://github.com/comdet/generic-esp32-wroom/",
      image : '/static/display.jpg',
      version : '1.0.1'
    }
  },
};
