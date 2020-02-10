// Calculation of data of a single tile
const calculateTileData = (row, column, base, landTileType, waterTileType) => {
  const centerX =
    row % 2 === 0 ?
      2 * base * column + .5 * base + column :
      base * (2 * column - 1) + .5 * base + column;
  const centerY = Math.ceil(base * .5573) * (3 * row - 1) + row;
  const rowNumber = row;
  const columnNumber = row % 2 === 0 ?
    2 * column - 1 :
    2 * column;
  const id = `r${rowNumber}c${columnNumber}`;
  const terrain = terrainGenerator(landTileType, waterTileType, row);
  return {
    centerX,
    centerY,
    rowNumber,
    columnNumber,
    id,
    terrain
  };
};

const terrainGenerator = (landTileType, waterTileType, rowNumber) => {
  const chosenTerrain = rowNumber % 2 === 0? landTileType: waterTileType;
  console.log(chosenTerrain);
  return chosenTerrain;
};

// Generation of the tiles on the map
export const generateTiles = (rowCount, colCount, tileBaseLength, landTileType, waterTileType) => {
  let tiles = [];
  for (let row = 1; row <= rowCount; row++) {
    // even rows have one more tile
    const columnsToMake = row % 2 === 0 ?
      colCount :
      colCount + 1;
    for (let column = 1; column <= columnsToMake; column++) {
      tiles.push(calculateTileData(row, column, tileBaseLength, landTileType, waterTileType));
    }
  };
  return tiles;
};


// Generating the points for the path of the tile
export const generateHexPath = (centerX, centerY, base) => {
  const center = `M ${String(centerX)} ${String(centerY)} `
  //declaring helper variables
  const small = Math.ceil(.5573 * base);
  const calculatedPoints = [];
  let path = 'm ';
  // calculating individual points
  calculatedPoints[0] = [-base, -small];
  calculatedPoints[1] = [0, 2 * small];
  calculatedPoints[2] = [base, small];
  calculatedPoints[3] = [base, - small];
  calculatedPoints[4] = [0, -2 * small];
  calculatedPoints[5] = [-base, -small];
  // making a hex path string from the points
  calculatedPoints.forEach((point, index) => {
    const line = index === 0 ? '' : 'l ';
    path = path.concat(line);
    point.forEach(coordinate => {
      path = path.concat(`${String(coordinate)} `);
    })
  });
  // closng down the path
  const hexPath = `${center}${path} Z`;
  return hexPath;
};