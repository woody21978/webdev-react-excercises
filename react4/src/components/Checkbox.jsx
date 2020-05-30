import React from "react";

export default class Checkbox extends React.Component {
  render() {
    const { name, label, onChange, checked } = this.props;

    return (
      <label>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          defaultChecked={checked}
          onChange={() => {
            if (onChange) {
              onChange();
            }
          }}
        />
        {label}
      </label>
    );
  }
}
