import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Josh Prince | Design & Development"
      link={[
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,500,600,700|Montserrat:300' },
      ]}
      script={[
        { aync: true, src: 'https://www.googletagmanager.com/gtag/js?id=UA-107487939-1' },
        {
          type: 'text/javascript',
          innerHTML: 'window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments)};gtag(\'js\', new Date());gtag(\'config\', \'UA-107487939-1\');'
        }
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
