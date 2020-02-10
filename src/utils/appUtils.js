/**
 * Defines the selectable values of different map settings.
 * @const {Object<string, string[]>}
 */
export const settings = {
  sizes: ['small', 'medium', 'large'],
  types: ['land', 'water']
}

/**
 * Defines the available terrain models of the map tiles.
 * @const {Object[]}
 */
const terrains = [
  {
    name: 'desert',
    type: 'land',
    hue: 60,
    sat: 80
  },
  { 
    name: 'grassland',
    type: 'land',
    hue: 120,
    sat: 70
  },
  {
    name: 'plains',
    type: 'land',
    hue: 50,
    sat: 30
  },
  {
    name: 'coast',
    type: 'water',
    hue: 195,
    sat: 80
  },
  {
    name: 'ocean',
    type: 'water',
    hue: 235,
    sat: 54
  }
];

/**
 * Determines the available terrain models of the map tiles.
 * @param {string} type - map type
 * @param {object} terrains - terrains to choose from
 * @returns {object} - chosen terrains
 */
const getTerrains = (type, terrains) => {
  const usedTerrains = terrains.filter(terrain => terrain.type === type);
  return usedTerrains;  
}

export const getRandomSeed = (size, type, terrains) => {
  const terrainCount = getTerrains(type, terrains).length;
}