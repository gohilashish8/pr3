import React from 'react'
import './General.css'
import { Container, Row } from 'react-bootstrap'
import CountBox from './CountBox'
import { FaAward, FaHeartbeat, FaHospital, FaUserMd } from "react-icons/fa";

const General = () => {
  return (

   <>
     


    <section id="counts" class="counts">
    <Container>
      <Row>

        <CountBox Snumber = "23" pText="Doctors" icon={<FaUserMd/>}/>
        <CountBox Snumber = "18" pText="Departments" icon={<FaHospital/>}/>
        <CountBox Snumber = "980" pText="Patients" icon={<FaHeartbeat/>}/>
        <CountBox Snumber = "12" pText="Awards" icon={<FaAward/>}/>

      </Row>

    </Container>
  </section>
   </>
  )
}

export default General