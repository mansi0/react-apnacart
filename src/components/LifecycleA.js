import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Mansi'
      }
      console.log('lifcycleA constructor')
    }
    static getDerivedStateFromProps(props,state) {
        console.log('LifecycleA getDerivedFromProps')
        return null
    }
    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }
  render() {
      console.log('lifecycleA render')
    return (
      <div>
        <LifecycleB/>
      </div>
    )
  }

}

export default LifecycleA