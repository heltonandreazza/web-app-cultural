import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import Footer from '../components/BlogFooter'
import Navigator from '../components/BlogNavigator'
import Seo from '../components/Seo'
import '../styles/global.css'

const Authors = ({
  data: {
    authors: { edges },
  },
}) => {
  const [showMenuMobile, setShowMenuMobile] = useState(false)

  return (
    <div className="bg-white">
      <Seo title="Blog Academia Cultural Autores" />
      <Navigator
        onClickOpenMenuMobile={() => setShowMenuMobile(true)}
        onClickCloseMenuMobile={() => setShowMenuMobile(false)}
        showMenuMobile={showMenuMobile}
      />

      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Sobre nós</h2>
            <p className="text-xl text-gray-500">
              A Academia Cultural é uma academia especializada em desenvolvimento de projetos de
              vida para a sua saúde.
            </p>
            <p className="text-xl text-gray-500">
              Aqui nós temos profissionais dedicados e apaixonados pelo que fazemos.
            </p>
            <p className="text-xl text-gray-500">
              Somos agentes da transformação diária de toda essa nova era da saúde e ajudamos
              pessoas a colocarem em prática seus projetos de vida. Seja do tamanho que for.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
              {edges.map(({ node: person }) => (
                <li key={person.name} className="sm:py-8">
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                      <GatsbyImage
                        className="object-cover shadow-lg rounded-lg"
                        image={person.image.gatsbyImageData}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3>{person.name}</h3>
                          <p className="text-indigo-600">{person.role}</p>
                        </div>
                        <div
                          className="mt-6 text-gray-500 space-y-6 text-lg"
                          dangerouslySetInnerHTML={{ __html: person.bio.childMarkdownRemark.html }}
                        />
                        <ul className="flex space-x-5">
                          <li>
                            <a
                              href={person.urlInstagram}
                              className="text-green-400 hover:text-green-500"
                            >
                              <span className="sr-only">Instagram</span>
                              <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>
                          {person.urlLinkedin && (
                            <li>
                              <a
                                href={person.urlLinkedin}
                                className="text-green-400 hover:text-green-500"
                              >
                                <span className="sr-only">LinkedIn</span>
                                <svg
                                  className="w-6 h-6"
                                  aria-hidden="true"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </a>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query {
    authors: allContentfulBlogAuthor {
      edges {
        node {
          image {
            gatsbyImageData
          }
          name
          urlInstagram
          urlLinkedin
          bio {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

export default Authors
