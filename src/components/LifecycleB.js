import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Mansi'
      }
      console.log('lifcycleB constructor')
    }
    static getDerivedStateFromProps(props,state) {
        console.log('LifecycleB getDerivedFromProps')
        return null
    }
    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }
  render() {
      console.log('lifecycleB render')
    return (
      <div></div>
    )
  }

}

export default LifecycleB