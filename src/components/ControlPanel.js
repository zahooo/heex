import React from 'react';
import PropTyes from 'prop-types';

import DropDown from './DropDown';
// Converts singular and plural worlds to each other.
import pluralize from 'pluralize';


/**
 * Makes a drop-down list with the given values and
 * calls a passed handler upon changing the value.
 * @property {Object.<string, string[]>} settings - property names and the selectable options
 * @property {function[]} [setters] - handlers for the change of settings
 * @example 
 * const settings = {
 *   colors: ['red', 'blue'],
 *   shapes: ['circle', 'rectangle']
 * }
 * const setter1 = () => myFunction1()
 * const setter2 = () => myFunction2()
 * const setters = [setter1, setter2]
 * <ControlPanel settings={settings} setters={setters} />
 */
const ControlPanel = ({ settings, setters }) => {
  return (
    <form>
      <button type='button'>
        Create map
      </button>
      {Object.entries(settings).map(([setting, options], index) => {
        return (
          <DropDown
            key={index}
            name={pluralize.singular(setting)}
            options={options}
            onChange={setters[index]} />
        )
      })}
    </form>
  )
};

ControlPanel.PropTyes = {
  settings: PropTyes.objectOf(PropTyes.arrayOf(PropTyes.string)).isRequired,
  setters: PropTyes.arrayOf(PropTyes.func)
};

export default ControlPanel;