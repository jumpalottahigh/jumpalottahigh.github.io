import React from 'react'

import Layout from '../components/Layout/layout.js'

import Intro from '../components/Home/Intro/Intro.js'
import SkillsOverview from '../components/Home/SkillsOverview/SkillsOverview'
import Statements from './../components/Home/Statements/Statements'
import GithubActivity from './../components/Home/GithubActivity/GithubActivity'
import Inspirational from './../components/Home/Inspirational/Inspirational'

const IndexPage = () => (
  <Layout>
    <Intro />
    <SkillsOverview />
    <Statements />
    <GithubActivity />
    <Inspirational />
  </Layout>
)

export default IndexPage
