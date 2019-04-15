import React, { Component } from 'react';

export default class FamilyChanger extends Component {
  render() {
    return (
      <select className="dropDownContainer" onChange={ (e) => props.update(e.target.value) } disabled={ props.allowEdit === "false" }>
        <option value="monospace"> Monospace </option>
        <option value="arial"> Arial </option>
        <option value="courier"> Courier </option>
      </select>
    )
  }
}
