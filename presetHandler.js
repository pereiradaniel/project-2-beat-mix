const presets = require('./presets');

const getPreset = (index) => {
  return presets[index] || null;
};

const createOrUpdatePreset = (index, array) => {
  if (!presets[index]) {
    return;
  }
  presets[index] = array;
  return presets[index];
};

const presetHandler = (req_type, pArray, newPresetArray) => {
  if (req_type === 'GET') {
    let preset = getPreset(pArray);
    if (preset) {
      return [200, preset];
    } else {
      return [404];
    }
  } else if (req_type === 'PUT') {
    const newPreset = createOrUpdatePreset(pArray, newPresetArray);
    if (newPreset) {
      return [200, newPreset];
    } else {
      return [404];
    }
  } else {
    return[400];
  }
};

module.exports = presetHandler;
