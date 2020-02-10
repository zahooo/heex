import React from 'react';
import PropTyes from 'prop-types';

/**
 * Makes a drop-down list with the given values and
 * calls a passed handler upon changing the value.
 * @property {string} name - name of the set of options
 * @property {string[]} options - selectable options
 * @property {function} [onChange] - handler for the change event
 * @example const name = 'pet';
 * const options = ['cat', 'dog']
 * const handler = e => e.target.value
 * <DropDown name={name} options={options} onChnange={handler} />
 */
const DropDown = ({ name, options, onChange }) => {
  return (
    <div>
      <label
        htmlFor={name}>
        {`Choose ${name}`}
      </label>
      <select
        name={name}
        onChange={onChange} >
        {options.map(option => {
          return (
            <option
              key={option}
              value={option}>
              {option}
            </option>)
        })}
      </select>
    </div>
  )
};

DropDown.PropTyes = {
  name: PropTyes.string.isRequired,
  options: PropTyes.arrayOf(PropTyes.string).isRequired,
  onChange: PropTyes.func
};

export default DropDown;


