import React from 'react';

const styles = {
  option: {
    display: 'inline-block',
    width: 40,
    height: 40,
    outline: '1px solid teal',
  },
};

const ColorPicker = ({ options }) => {
  console.log('props', options);
  return (
    <div>
      <h2>
        Color Picker
        <div>
          {options.map(({ label, color }) => (
            <span
              key={label}
              style={{
                ...styles.option,
                backgroundColor: color,
              }}
            >
              {color}
            </span>
          ))}
        </div>
      </h2>
    </div>
  );
};

export default ColorPicker;
