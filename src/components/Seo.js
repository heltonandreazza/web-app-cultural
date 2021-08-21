import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultName: name
        author {
          name
          summary
        }
        defaultKeywords: keywords
        social {
          facebook
          insta
          twitter
        }
      }
    }
    file(name: { eq: "logo" }) {
      defaultImage: absolutePath
    }
  }
`
// type = 'website' || 'article' || 'blog'
const SEO = ({ name, title, description, image, imageAlt = 'academia cultural', type = 'website', url, keywords = '' }) => {
  const { site, file } = useStaticQuery(query)

  const { defaultName, defaultTitle, titleTemplate, defaultDescription, siteUrl, defaultKeywords } = site.siteMetadata
  const { defaultImage } = file

  const seo = {
    title: title || defaultTitle,
    name: name || defaultName,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: url || siteUrl,
    imageAlt,
    keywords: keywords || defaultKeywords,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      <meta name='keywords' content={seo.keywords} />

      {/* facebook */}
      {seo.name && <meta property='og:site_name' content={name} />}
      {seo.url && <meta property='og:url' content={seo.url} />}
      {seo.title && <meta property='og:title' content={seo.title} />}
      {seo.description && <meta property='og:description' content={seo.description} />}
      {seo.image && <meta property='og:image' content={seo.image} />}
      {seo.imageAlt && <meta property='og:image:alt' content={seo.imageAlt} />}
      <meta property='og:type' content={type} />
    </Helmet>
  )
}

export default SEO
