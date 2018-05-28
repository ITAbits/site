import React from 'react'
import { Grid } from 'semantic-ui-react'


export default props => {
  return (
        <svg width="100vw" height="105vh">
          <defs>
            <symbol id="red">
              <rect width="100" height="100" style={{fill:'rgb(211,47,47)'}}/>
              <rect y="100" width="100" height="9" style={{fill:'rgb(183,28,28)'}}/>
            </symbol>
            <symbol id="yellow">
              <rect width="100" height="100" style={{fill:'rgb(255,193,7)'}}/>
              <rect y="100" width="100" height="9" style={{fill:'rgb(245,127,23)'}}/>
            </symbol>
            <symbol id="blue">
              <rect width="100" height="100" style={{fill:'rgb(63,81,181)'}}/>
              <rect y="100" width="100" height="9" style={{fill:'rgb(26,35,126)'}}/>
            </symbol>
          </defs>
          <g transform="translate(300, 50)">
            <g>
              <use xlinkHref="#red"/>
              <g transform="translate(0, 62)">
                <use xlinkHref="#yellow" x="-212"/>
                <use xlinkHref="#blue"   x="-106"/>
                <use xlinkHref="#blue"   x="106"/>
                <use xlinkHref="#yellow" x="212"/>
                <g transform="translate(0, 112)">
                  <use xlinkHref="#yellow" x="-106"/>
                  <use xlinkHref="#blue"/>
                  <use xlinkHref="#yellow" x="106"/>
                  <g transform="translate(0, 112)">
                    <use xlinkHref="#yellow"/>
                  </g>
                </g>
              </g>
            </g>
            <g transform="translate(-80, 400)">
              <path id="path">
              <animate attributeName="d" from="m0,110 h0" to="m0,110 h1100" dur="6.8s" begin="0s" fill="freeze"/>
              </path>
              <text font-size="72" font-family="Montserrat" style={{fill:'rgb(255, 255, 255)'}}>
                <textPath xlinkHref="#path">itabits</textPath>
              </text>
            </g>
          </g>
        </svg>
  )
}
