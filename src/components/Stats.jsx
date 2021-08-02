import React, { Component } from 'react'
import Stat from './Stat'

let stats = [
  {
    title: "Review",
    numbers: [1281]
  },
  {
    title: "Average Rating",
    numbers: [4.6]
  },
  {
    title: "Sentiment Analysis",
    numbers: [960,122,321]
  }
]

let statComponents = stats.map(stat=><Stat title={stat.title} numbers={stat.numbers}/>)

export default class Stats extends Component {
  render() {
    return (
      <div className="stats">
       {statComponents}
      </div>
    )
  }
}
