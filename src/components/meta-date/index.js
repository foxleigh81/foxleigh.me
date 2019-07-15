import PropTypes from 'prop-types'
import React from 'react'
import moment from 'moment'

import './styles.scss'

const MetaDate = ({ date }) => {

  const dateParts = (d) => {
    const dateString = moment(d).format('Do MMMM YYYY').split(' ')
    return {
      day: dateString[0],
      month: dateString[1],
      year: dateString[2],
    }
  }

  return (
    <div className="meta-date">
      <span class="day">{dateParts(top.date).day}</span>
      <span class="month">{dateParts(top.date).month}</span>
      <span class="year">{dateParts(top.date).year}</span>
    </div>
  )
}

MetaDate.propTypes = {
  date: PropTypes.string.isRequired,
}

export default MetaDate
