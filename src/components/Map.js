import React, { useState } from 'react';
import Tile from '../components/Tile';

import { generateTiles } from '../utils/tileUtils';
import { createMapData } from '../utils/sessionUtils';

const Map = ({ mapSize, tileBaseLength, terrains, landTileType, waterTileType }) => {
  const [selectedTile, selectTile] = useState(null);

  const { rowCount, colCount, viewBoxHorizontal, viewBoxVertical } = createMapData(mapSize, tileBaseLength);
  const tiles = generateTiles(rowCount, colCount, tileBaseLength, landTileType, waterTileType);

  const toggleTile = e => {
    const newTile = e.target.id === selectedTile ? null : e.target.id;
    selectTile(newTile);
  }

  return (
    <svg
      viewBox={`0 0 ${viewBoxHorizontal} ${viewBoxVertical}`}
      width='1200px'
    >
      <defs>
        {terrains && Object.entries(terrains).map(([type, colorData]) => {
          return (
            <radialGradient id={type} key={`${type}-gradient`}>
              <stop
                offset='0'
                stopColor={`hsl(${colorData['hue']}, ${colorData['sat']}, 10%)`}
              />
              <stop
                offset='.8'
                stopColor={`hsl(${colorData['hue']}, ${colorData['sat']}, 24%)`}
              />
              <stop
                offset='1'
                stopColor={`hsl(${colorData['hue']}, ${colorData['sat']}, 30%)`}
              />
            </radialGradient>
          )
        })}
      </defs>
      {tiles.map(tile => {
        return (
          <Tile
            tileBaseLength={tileBaseLength}
            datum={tile}
            key={`tile-${tile.id}`}
            toggleTile={toggleTile}
            selectedTile={selectedTile}
          />
        )
      })}

    </svg>
  );
};



export default Map;