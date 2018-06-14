import React, { Component } from 'react'
import styled from 'styled-components'
import H2 from '../../../_Elements/H2/H2'
import CenteredDiv from '../../../_Elements/CenteredDiv/CenteredDiv'

const UL = styled.ul`
  display: grid;
  grid-gap: 10px;
  padding-left: 20px;
`

export default class Education extends Component {
  render() {
    return (
      <section>
        <H2>&#123; Education &#125;</H2>
        <CenteredDiv>
          <p className="highlight">
            I believe strongly in life-long education and therefor regularly
            partake in different courses
          </p>
          <UL>
            <li>
              Udacity's Google Developer Challenge Scholarship holder for Mobile
              Web Specialist nanodegree (2017-2018)
            </li>
            <li>Google Analytics certified (2017-2018)</li>
            <li>
              React for Beginners on Egghead.io, CSS grid by Wesbos, The Vue
              book
            </li>
            <li>
              Plethora of tutorials and blog posts closely related to: React,
              Vue, JavaScript, WebComponents, Stencil, Polymer, etc.
            </li>
          </UL>
          <p className="highlight">
            Bachelor of Engineering (B.E.), Computer Software Engineering
            <br />
            Helsinki Metropolia University of Applied Sciences
          </p>
        </CenteredDiv>
      </section>
    )
  }
}
