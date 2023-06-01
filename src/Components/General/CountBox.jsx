import React from 'react'
import { Col } from 'react-bootstrap'

const CountBox = ({Snumber , pText , icon}) => {
  return (
    <Col lg={3} md={6}>
          <div class="count-box">
            {<i class="fas fa-user-md"> {icon} </i>}
            <span>{Snumber}</span>
            <p>{pText} </p>
          </div>
    </Col>
  )
}

export default CountBox