'use strict';

const containers = document.querySelectorAll('.js-buttons-container');

const setDataAttribute = ({settingTarget}, params) => {
    const element = document.querySelector(settingTarget);
    for (const [key, value] of Object.entries(params)) {
      element.dataset[key] = value;
    }
  };

const setClass = ({settingTarget}, params) => {
    const element = document.querySelector(settingTarget);

    for (const [key, value] of Object.entries(params)) {
        element.classList.add(value);
    }
};
  
const applySetting = (setting, params) => {
    if (setting.settingType === 'class') {
        setClass(setting, params);
    } else if (setting.settingType === 'attribute') {
        setDataAttribute(setting, params);
    }
  };
  
const settingButtonClickHandler = (evt, setting) => {
  const button = evt.target.closest('button');

  if (!button) {
    return;
  }

  const params = {};

  const settingName = button.dataset.settingName;
  const settingValue = button.dataset.settingValue;
  params[settingName] = settingValue;
  
  applySetting(setting, params);
};

const init = () => {
    containers.forEach((container) => {
        const setting = container.dataset;
    
        container.addEventListener('click', (evt) => {
          settingButtonClickHandler(evt, setting);
        });
      });
};

init();













/*

'use strict';

const buttonThemeLight = document.querySelector('.theme-button-light');
const buttonThemeDark = document.querySelector('.theme-button-dark');

const buttonfontSansSerif = document.querySelector('.font-button-sans-serif');
const buttonfontSerif = document.querySelector('.font-button-serif');

const buttonfontSmall = document.querySelector('.font-size-button-s');
const buttonfontMedium = document.querySelector('.font-size-button-m');
const buttonfontLarge = document.querySelector('.font-size-button-l');


  const buttonThemeLightHandler = () => {
    document.documentElement.dataset['themeName'] = 'light';
  };
  
  const buttonThemeDarkHandler = () => {
    document.documentElement.dataset['themeName'] = 'dark';
  };
  

  const buttonfontSansSerifHandler = () => {
    document.documentElement.dataset['themeFont'] = 'sans serif';
  };
  
  const buttonfontSerifHandler = () => {
    document.documentElement.dataset['themeFont'] = 'serif';
  };


  const buttonFontSmallHandler = () => {
    document.documentElement.dataset['themeFontSize'] = 'small';
  };
  
  const buttonFontMediumHandler = () => {
    document.documentElement.dataset['themeFontSize'] = 'medium';
  };
  
  const buttonFontLargeHandler = () => {
    document.documentElement.dataset['themeFontSize'] = 'large';
  };




  const init = () => {
    buttonThemeLight.addEventListener('click', buttonThemeLightHandler);
    buttonThemeDark.addEventListener('click', buttonThemeDarkHandler);

    buttonfontSansSerif.addEventListener('click', buttonfontSansSerifHandler);
    buttonfontSerif.addEventListener('click', buttonfontSerifHandler);

    buttonfontSmall.addEventListener('click', buttonFontSmallHandler);
    buttonfontMedium.addEventListener('click', buttonFontMediumHandler);
    buttonfontLarge.addEventListener('click', buttonFontLargeHandler);
  };
  
  init();
  */