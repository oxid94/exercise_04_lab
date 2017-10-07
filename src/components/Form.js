import React from 'react'
import './Form.css'

const Form = (props) => {
  return (
    <form className="form" onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit(this._from.value, this._to.value)
      }}>
      <fieldset>
        <label>From:</label>
        <input
          defaultValue=""
          placeholder="From"
          type="text"
          ref={(input) => this._from = input} />
        <label>To:</label>
        <input
          defaultValue=""
          placeholder="To"
          type="text"
          ref={(input) => this._to = input} />
        <input className="block" type="submit"/>
      </fieldset>
    </form>
  )
}

export default Form