import React, { Component } from 'react'

const user = {
  firstName: 'qreact',
  lastName: 'anujs',
}
const setName = ( {firstName = '', lastName = ''} ) => `firstName: ${firstName} - lastName: ${lastName}` 
const html = <p>{setName(user)}</p>
const element = (
  <div>
    <h3>Demo. 1</h3>
    <br />
    {html}
  </div>
)

class Demo1 extends Component {
  render () {
    return <div>{element}</div>
  }
}

export default Demo1
