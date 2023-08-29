const { Titlebar, TitlebarColor } = require('custom-electron-titlebar');

module.exports = () => {
  new Titlebar({
    backgroundColor: TitlebarColor.fromHex('#050505'),
    minimizable: false,
    maximizable: false,
    menu: null,
  });
  const mainStyle = document.querySelector('#container').style;
  mainStyle.width = '100%';
  mainStyle.position = 'fixed';
  mainStyle.border = 'unset';
};
