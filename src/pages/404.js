import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Introuvable</h1>
    <p>Cette route n&#39;existe pas... tristesse.</p>
  </Layout>
)

export default NotFoundPage
