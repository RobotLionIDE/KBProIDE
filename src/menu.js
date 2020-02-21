import Vue from "vue";

const { app, Menu, shell, BrowserWindow } = require("electron");
var isMac = process.platform === "darwin";
const template = [
  ...(process.platform === "darwin"
    ? [
      {
        label: app.getName(),
        submenu: [
          { role: "about" },
          { type: "separator" },
          { role: "services" },
          { type: "separator" },
          { role: "hide" },
          { role: "hideothers" },
          { role: "unhide" },
          { type: "separator" },
          { role: "quit" }
        ]
      }
    ]
    : []),
  {
    label: "Файл",
    submenu: [
      {
        label: "Новый",
        accelerator: "CmdOrCtrl+N",
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send("file-new");
        }
      },
      {
        label: "Открыть",
        accelerator: "CmdOrCtrl+O",
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send("file-open");
        }
      },
      {
        label: "Сохранить как",
        accelerator: "CmdOrCtrl+S",
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send("file-save");
        }
      },
      /*
      { type: "separator" },
      {
        label: "Открыть папку плат",
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send("file-board-folder");
        }
      },
      {
        label: "Открыть папку платформ",
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send(
            "file-platform-folder");
        }
      },
      {
        label: "Открыть папку плагинов",
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send("file-plugin-folder");
        }
      },
      */
      { type: "separator" },
      {
        label: "Настройки",
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send("file-setting",
            "");
        }
      },
      { type: "separator" },
      isMac
        ? { role: "close", label: "Выход" }
        : { role: "quit", label: "Выход" }
    ]
  },
  // { role: 'editMenu' }
  {
    label: "Правки",
    submenu: [
      {
        label: "Отмена",
        accelerator: "CmdOrCtrl+Z",
        registerAccelerator: false,
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send("edit-undo");
        }
      },
      {
        label: "Повтор",
        accelerator: "CmdOrCtrl+Y",
        registerAccelerator: false,
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send("edit-redo");
        }
      },
      { type: "separator" },
      {
        label: "Вырезать",
        accelerator: "CmdOrCtrl+X",
        registerAccelerator: false,
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send("edit-cut");
        }
      },
      {
        label: "Копировать",
        accelerator: "CmdOrCtrl+C",
        registerAccelerator: false,
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send("edit-copy");
        }
      },
      {
        label: "Вставить",
        accelerator: "CmdOrCtrl+V",
        registerAccelerator: false,
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send("edit-paste");
        }
      },
      { type: "separator" },
      {
        label: "Найти",
        accelerator: "CmdOrCtrl+F",
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send("edit-find");
        }
      },
      {
        label: "Заменить",
        accelerator: "CmdOrCtrl+H",
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send("edit-replace");
        }
      },
      {
        label: "Форматировать код",
        accelerator: "CmdOrCtrl+Shift+F",
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send("clang-format");
        }
      }
    ]
  },
  // { role: 'viewMenu' }
  {
    label: "Вид",
    submenu: [
      { role: "reload", label: "Обновить" },
      { role: "forcereload", label: "Принудительно обновить" },
      { role: "toggledevtools", label: "Инструменты разработчика" },
      { type: "separator", label: "" },
      { role: "resetzoom", label: "Масштаб по умолчанию" },
      { role: "zoomin", label: "Увеличить" },
      { role: "zoomout", label: "Уменьшить" },
      { type: "separator" },
      { role: "togglefullscreen", label: "Полноэкранный режим" }
    ]
  },
  {
    label: "Инструменты",
    submenu: [
    ]
  },
  // { role: 'windowMenu' }
  {
    label: "Окно",
    submenu: [
      { role: "minimize", label: "Свернуть" },
        //{ role: "zoom", label: "Масштаб" },
      ...(isMac
        ? [
          { type: "separator" },
          { role: "front", label: "front" },
          { type: "separator" },
          { role: "window", label: "Окно" }
        ]
        : [
          { role: "close", label: "Закрыть" }
        ])
    ]
  },

  {
    role: "Help", label: "Справка",
    submenu: [
      {
        label: "О проекте",
        click() { shell.openExternal("https://www.kbide.org"); }
      },
      /*
      {
        label: "О проекте",
        click() { shell.openExternal("https://www.kbide.org/about"); }
      },
      */
      {
        label: "Обучающий тур",
        click() { BrowserWindow.getFocusedWindow().webContents.send("help-tour"); }
      },
      /*
      { type: "separator" },
      {
        label: "Update",
        click() {
          BrowserWindow.getFocusedWindow().webContents.send("help-update");
        }
      }
      */
    ]
  }

];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
