import React from 'react'


export default props => {
  return (
    <div id='header-container' style={{textAlign: 'center'}}>
        <svg class="animate-reveal animate-second" width="100vw" height="70vh">
          <defs>
            <symbol id="red">
              <rect width="50" height="50" style={{fill:'rgb(211,47,47)'}}/>
              <rect y="50" width="50" height="9" style={{fill:'rgb(183,28,28)'}}/>
            </symbol>
            <symbol id="yellow">
              <rect width="50" height="50" style={{fill:'rgb(255,193,7)'}}/>
              <rect y="50" width="50" height="9" style={{fill:'rgb(245,127,23)'}}/>
            </symbol>
            <symbol id="blue">
              <rect width="50" height="50" style={{fill:'rgb(63,81,181)'}}/>
              <rect y="50" width="50" height="9" style={{fill:'rgb(26,35,126)'}}/>
            </symbol>
          </defs>
          <g>
            <g style={{transform: 'translate(50%, 5%)'}}>
              <g transform="translate(-27.5,0)">
                <use xlinkHref="#red"/>
                <g transform="translate(0,35)">
                  <use xlinkHref="#yellow" x="-110"/>
                  <use xlinkHref="#blue"   x="-55"/>
                  <use xlinkHref="#blue"   x="55"/>
                  <use xlinkHref="#yellow" x="110"/>
                  <g transform="translate(0, 64)">
                    <use xlinkHref="#yellow" x="-55"/>
                    <use xlinkHref="#blue"/>
                    <use xlinkHref="#yellow" x="55"/>
                    <g transform="translate(0, 64)">
                      <use xlinkHref="#yellow"/>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <div class="typewriter">
          <h1>itabits</h1>
        </div>
    </div>
  )
}
