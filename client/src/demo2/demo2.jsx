import React, { Component, PropTypes } from 'react'

const A = ({value = ''}) => {
  return (
    <div>
      <h3>Demo2. PropTypes</h3>
      <br />
      <p>输出: {value}</p>
    </div>
  )
}
A.propTypes = {
  value: PropTypes.String
}

class Demo2 extends Component {
  render () {
    return <A value='qReact' />
  }
}




// class Demo2 extends Component {
//   static propTypes = {
//     fetchDisabledCode: PropTypes.func,
//     setDisabledCode: PropTypes.func,
//     unsetDisabledCode: PropTypes.func,
//     updateDisabledCode: PropTypes.func,
//     disabledCode: PropTypes.array,
//   } 

//   render () {
//     return (
//       <div>
//         <p>第二个react例子</p>
//       </div>
//     )
//   }
// }

export default Demo2