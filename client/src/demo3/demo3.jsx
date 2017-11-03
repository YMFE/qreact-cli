import React, { Component } from 'react'

class Demo3 extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      aaa: {
        a: 7
      }
    }
  }

  click () {
    this.setState(state => state.aaa.a = 8)
  }
  render () {
    return (
      <section>
        <h3>Demo3. PureComponent</h3>
        <br />
        <p>这个数字怎么点击也不会变</p>
        <div onClick={this.click.bind(this) }>{this.state.aaa.a}</div>
      </section>
    )
  }
}

export default Demo3