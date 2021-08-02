import React, { Component } from 'react'

let links = ["Dashboard", "Widget","Reviews", "Customers", "Online Analysis", "Settings"]
let linkDivs = links.map(link=><li>{link}</li>)

export default class SideNav extends Component {
  render() {
    return (
      <div className="sideNav">
        <ul>
          {linkDivs}
        </ul>
      </div>
    )
  }
}
