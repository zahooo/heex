export const createMapData = (size, tileBaseLength) => {
  let rowCount, colCount;
  switch (size) {
    case 'Small':
      rowCount = 3;
      colCount = 5;
      break;
    case 'Medium':
      rowCount = 5;
      colCount = 8;
      break;
    case 'Large':
      rowCount = 6;
      colCount = 10;
      break;
    default:
      throw new Error('Please ensure that the createMapData function receives the mapsize.')
  };
  const viewBoxHorizontal = tileBaseLength * (2 * colCount + 3);
  const viewBoxVertical = viewBoxHorizontal * (rowCount / colCount);

  return {
    rowCount,
    colCount,
    viewBoxHorizontal,
    viewBoxVertical
  };
};