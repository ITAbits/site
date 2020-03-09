import React from 'react'

import '../style/Calendar.css'

export default props => {
  return (
    <div id='calendar-sector'>
      <h3>Calendário</h3>
      <p>Acompanhe o nosso Google Calendar e fique de olho nos próximos eventos do nosso grupo!</p>
      <div className='responsiveCal'>
        <iframe src='https://calendar.google.com/calendar/embed?src=itabitsdiretoria%40gmail.com&ctz=America%2FSao_Paulo'
          style={{border: '0'}} width='800' height='600' frameBorder='0' scrolling='no' />
      </div>
    </div>
  )
}
