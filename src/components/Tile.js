import React from 'react';

import { generateHexPath } from '../utils/tileUtils';

const Tile = ({ tileBaseLength, datum, toggleTile, selectedTile }) => {
  const { centerX, centerY, id, terrain } = datum;
  const hexPath = generateHexPath(centerX, centerY, tileBaseLength);
  const isSelected = selectedTile === id ? true : false;
  return (
    <g onClick={toggleTile}>
      <path
        d={hexPath}
        id={id}
        fill={`url(#${terrain})`}
        className={isSelected ?
          'selected-tile' :
          'unselected-tile'} />
      <text
        x={String(centerX)}
        y={String(centerY)}
        textAnchor='middle'>
        {isSelected ? 'Selected' : ''}
      </text>
    </g>
  );
}



export default Tile;