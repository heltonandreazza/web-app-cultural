/* eslint-disable react/jsx-props-no-spreading */
import { graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import applestorePng from '../images/applestore.png'
import background from '../images/background.webp'
import cardiospeedlogo from '../images/cardiospeedlogo.png'
import cardiospeedphoto from '../images/cardiospeedphoto.webp'
import fisioterapialogo from '../images/fisioterapialogo.png'
import fisioterapiaphoto from '../images/fisioterapiaphoto.webp'
import googleplayPng from '../images/googleplay.png'
import hiperclogo from '../images/hiperclogo.png'
import hipercphoto from '../images/hipercphoto.webp'
import logo from '../images/logo.png'
import reabilitalogo from '../images/reabilitalogo.png'
import reabilitaphoto from '../images/reabilitaphoto.webp'
import reabvidlogo from '../images/reabvidlogo.png'
import reabvidphoto from '../images/reabvidphoto.webp'
import resultadojalogo from '../images/resultadojalogo.png'
import resultadojaphoto from '../images/resultadojaphoto.webp'
import studiopilateslogo from '../images/studiopilateslogo.png'
import studiopilatesphoto from '../images/studiopilatesphoto.webp'
import video1 from '../images/video1.webp'
import video2 from '../images/video2.webp'
import video3 from '../images/video3.webp'
import vivalevelogo from '../images/vivalevelogo.png'
import vivalevephoto from '../images/vivalevephoto.webp'
import BlogColunCards, { BlogColunCardsItem } from '../components/BlogColunCards'
import Button from '../components/Button'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Hero, { HeroLeft, HeroRight } from '../components/Hero'
import Navigator from '../components/Navigator'
import InstaSection from '../components/InstaSection'
import '../styles/global.css'
import { getWhatsUrl, openWhatsUrl } from '../utils'
import { CTA_WA_MESSAGES, URLS } from '../utils/constants'
import Seo from '../components/Seo'

const blogVideos = [
  {
    imageProps: { src: video1, alt: 'video 1' },
    title: 'Rose Maria',
    ctaTitle: 'Comece agora',
    ctaOnClick: () => {
      openWhatsUrl(CTA_WA_MESSAGES.videosCta1)
      if (typeof window?.gtag !== 'undefined') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-364234672/wCafCJ_ik-MCELCP160B',
          event_callback: () => console.log('evento enviado'),
          value: CTA_WA_MESSAGES.videosCta1,
        })
      }
    },
    videoUrl: 'https://www.youtube.com/embed/tzs8s4uTNUg',
    description: `
    "Eu não tinha esperança nenhuma" - Rose Maria.
    Convidamos você a conhecer nossa cliente do Programa Reabilita aqui da Cultural.
    Inspire-se na vitória da Rose e busque sua qualidade de vida em profissionais que irão abraçar sua saúde!`,
  },
  {
    imageProps: { src: video2, alt: 'video 2' },
    title: 'Jeniffer Schmoegel',
    ctaTitle: 'Comece agora',
    ctaOnClick: () => {
      openWhatsUrl(CTA_WA_MESSAGES.videosCta2)
      if (typeof window?.gtag !== 'undefined') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-364234672/wCafCJ_ik-MCELCP160B',
          event_callback: () => console.log('evento enviado'),
          value: CTA_WA_MESSAGES.videosCta2,
        })
      }
    },
    videoUrl: 'https://www.youtube.com/embed/cFnwTgnmCjo',
    description: `Ela encontrou na Cultural um ambiente tão familiar que até trouxe sua avó Marlene para treinar junto!
      Jenifer sentia muita ansiedade, e em apenas 2 semanas já notou melhora na sua qualidade de vida, equilibrando a sua saúde física e mental.`,
  },
  {
    imageProps: { src: video3, alt: 'video 3' },
    title: 'Heide Mohr',
    ctaTitle: 'Comece agora',
    ctaOnClick: () => {
      openWhatsUrl(CTA_WA_MESSAGES.videosCta3)
      if (typeof window?.gtag !== 'undefined') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-364234672/wCafCJ_ik-MCELCP160B',
          event_callback: () => console.log('evento enviado'),
          value: CTA_WA_MESSAGES.videosCta3,
        })
      }
    },
    videoUrl: 'https://www.youtube.com/embed/E-JerJAS5z4',
    description: `Conheça a Heide, aluna da Academia Cultural. Heide sentia dores na coluna, foi assim que ela procurou seu médico,
     onde o mesmo solicitou que ela optasse por CIRURGIA OU ACADEMIA. O que será que a Heide fez? Assista o vídeo.`,
  },
]

const mainProjects = [
  {
    label: 'Mais vendidos',
    imageSrc: resultadojaphoto,
    imageAlt: 'resultado ja',
    imageTitle: resultadojalogo,
    description: `Programa especifico para perder peso e reduzir as suas medidas corporais através de exercícios de
  alto gasto calórico que irão proporcionar excelentes resultados para emagrecer, 
  trazendo mais qualidade de vida.`,
    ctaTitle: 'Comece Agora',
    ctaHref: CTA_WA_MESSAGES.greatPlansCta1,
    ctaTitle2: 'Treine em casa',
    ctaHref2: 'https://academia-cultural.kpages.online/resultadoja',
  },
  {
    label: 'Mais vendidos',
    imageSrc: reabilitaphoto,
    imageAlt: 'reabilita',
    imageTitle: reabilitalogo,
    description: `Nada melhor do que eliminar dores nas costas e no joelho. 
    Esse projeto foi feito para reabilitação de patologias em geral como hérnias discais, inflamações
    articulares, pós cirúrgicos e lesões por movimentos repetitivos.`,
    ctaTitle: 'Comece Agora',
    ctaHref: CTA_WA_MESSAGES.greatPlansCta2,
  },
  {
    imageSrc: reabvidphoto,
    imageAlt: 'reabvid',
    imageTitle: reabvidlogo,
    description: `Mais novo programa para pessoas que ficaram com alguma anomalia em função da
  contaminação do Covid 19, nesse projeto as fisioterapeutas fazem um tratamento ideal
  para recuperação cardiorrespiratória.`,
    ctaTitle: 'Comece Agora',
    ctaHref: CTA_WA_MESSAGES.greatPlansCta3,
  },
]

const projects = [
  {
    titleImage: hiperclogo,
    paragraph: `Foi criado para pessoas que buscam musculação com objetivo
 de perder flacidez, ganhar massa muscular e definição, além de ajudar no fortalecimento e perda de gordura localizada.`,
    ctaTitle: 'Comece agora',
    ctaOnClick: () => {
      openWhatsUrl(CTA_WA_MESSAGES.plansCta1)
      if (typeof window?.gtag !== 'undefined') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-364234672/wCafCJ_ik-MCELCP160B',
          event_callback: () => console.log('evento enviado'),
          value: CTA_WA_MESSAGES.plansCta1,
        })
      }
    },
    image: hipercphoto,
  },
  {
    titleImage: studiopilateslogo,
    paragraph: `No pilates, através de exercícios estimulados por aparelhos com tração nossas fisioterapeutas
irão proporcionar uma melhora de flexibilidade, fortalecimento muscular, reabilitação, postura 
e estímulos para uma vida mais saudável.`,
    ctaTitle: 'Comece agora',
    ctaOnClick: () => {
      openWhatsUrl(CTA_WA_MESSAGES.plansCta2)
      if (typeof window?.gtag !== 'undefined') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-364234672/wCafCJ_ik-MCELCP160B',
          event_callback: () => console.log('evento enviado'),
          value: CTA_WA_MESSAGES.plansCta2,
        })
      }
    },
    image: studiopilatesphoto,
  },
  {
    titleImage: fisioterapialogo,
    paragraph: `Através da fisioterapia e com fisioterapeutas altamente qualificadas para tratamentos pós cirúrgicos,
reabilitações, drenagens linfáticas, ventosa terapia, kinesio taping, auriculoterapia, eletro analgesia 
terapia postural e massagens relaxantes.`,
    ctaTitle: 'Comece agora',
    ctaOnClick: () => {
      openWhatsUrl(CTA_WA_MESSAGES.plansCta3)
      if (typeof window?.gtag !== 'undefined') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-364234672/wCafCJ_ik-MCELCP160B',
          event_callback: () => console.log('evento enviado'),
          value: CTA_WA_MESSAGES.plansCta3,
        })
      }
    },
    image: fisioterapiaphoto,
  },
  {
    titleImage: vivalevelogo,
    paragraph: `Se você procura um projeto para ter uma melhora em sua disposição no dia a dia,
com exercícios super equilibrados onde vai deixar sua vida leve, com saúde e qualidade.`,
    ctaTitle: 'Comece agora',
    ctaOnClick: () => {
      openWhatsUrl(CTA_WA_MESSAGES.plansCta4)
      if (typeof window?.gtag !== 'undefined') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-364234672/wCafCJ_ik-MCELCP160B',
          event_callback: () => console.log('evento enviado'),
          value: CTA_WA_MESSAGES.plansCta4,
        })
      }
    },
    image: vivalevephoto,
  },
  {
    titleImage: cardiospeedlogo,
    paragraph: `Se você gosta de caminhar, correr ou pedalar vai se impressionar com esse projeto
 para aumentar sua resistência e fortalecimento muscular.`,
    ctaTitle: 'Comece agora',
    ctaOnClick: () => {
      openWhatsUrl(CTA_WA_MESSAGES.plansCta5)
      if (typeof window?.gtag !== 'undefined') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-364234672/wCafCJ_ik-MCELCP160B',
          event_callback: () => console.log('evento enviado'),
          value: CTA_WA_MESSAGES.plansCta5,
        })
      }
    },
    image: cardiospeedphoto,
  },
]

const YoutubeVideo = ({ src }) => (
  <iframe title='titulo' className='w-full' id='ytplayer' type='text/html' width='640' height='360' src={src} frameBorder='0' />
)

const CTAHeader = () => (
  <nav className='flex bg-green-600 p-4 mb-6'>
    <a
      href={getWhatsUrl(CTA_WA_MESSAGES.headerTopCta)}
      target='_blank'
      className='flex flex-1 items-center justify-center font-regular text-lg text-white hover:text-gray-300'
      rel='noreferrer'
      onClick={() => {
        if (typeof window?.gtag !== 'undefined') {
          window.gtag('event', 'conversion', {
            send_to: 'AW-364234672/wCafCJ_ik-MCELCP160B',
            event_callback: () => console.log('evento enviado'),
            value: CTA_WA_MESSAGES.headerTopCta,
          })
        }
      }}
    >
      <span className='mr-3'>Clique aqui e nos contate via whatsapp para ter um atendimento diferenciado</span>
      <svg className='h-10 w-10' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
        <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z' />
      </svg>
    </a>
  </nav>
)

const HLTitle = ({ children }) => (
  <h1>
    <span className='mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl'>{children}</span>
  </h1>
)
const HLDescription = ({ children }) => <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>{children}</p>
const HLButtonActions = ({ children }) => <div className='mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0'>{children}</div>
const HLLinkActions = ({ children }) => <div className='mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0'>{children}</div>
const VideosSection = ({ children }) => <div className='relative max-w-7xl mx-auto'>{children}</div>
const VSHeader = ({ children }) => <div className='flex flex-col'>{children}</div>
const VSContent = ({ children }) => <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>{children}</div>

const CTAImageContentSection = ({ children, className }) => (
  <div id='main-projects' className={className || 'relative py-16 bg-green-50'}>
    <div className='max-w-7xl mx-auto bg-green-500 lg:bg-transparent'>
      <div className='lg:grid lg:grid-cols-12'>{children}</div>
    </div>
  </div>
)

const CTAICSContent = ({ children, reverse }) => (
  <div
    className={`relative bg-green-400 ${
      reverse ? 'lg:col-start-1' : 'lg:col-start-3'
    } lg:row-start-1 lg:col-span-10  lg:grid lg:grid-cols-10 lg:items-center`}
  >
    {children}
  </div>
)
const CTAICSContentAbsSVG = ({ children }) => (
  <div className='hidden absolute inset-0 overflow-hidden lg:block' aria-hidden='true'>
    {children}
  </div>
)

const CTAICSContentDescriptions = ({ children, reverse }) => (
  <div
    className={`relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 ${
      reverse ? 'lg:col-start-2' : 'lg:col-start-4'
    } lg:col-span-6`}
  >
    {children}
  </div>
)

const CTAICSContentDescriptionsCTA = ({ children, ...otherProps }) => (
  <a
    className='block w-full py-3 pl-3 px-5 mr-4 text-center bg-white border border-transparent shadow-md text-base font-medium text-green-600 hover:bg-green-50 sm:inline-block sm:w-auto'
    {...otherProps}
  >
    {children}
  </a>
)

const CTAICSContentDescriptionsParagraph = ({ children }) => <p className='text-lg text-white'>{children}</p>

const CTAICSImage = ({ image, alt, reverse }) => (
  <div className={`relative ${reverse ? 'lg:col-start-9' : 'lg:col-start-1'} lg:row-start-1 lg:col-span-4 lg:bg-transparent z-10`}>
    <div className='max-w-md mx-auto sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0'>
      <div className='aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1'>
        <img className='object-cover object-center shadow-2xl max-height-0' src={image} alt={alt} />
      </div>
    </div>
  </div>
)

const CTAImageContent = ({ imageSrc, imageAlt, imageTitle, label, description, ctaTitle, ctaHref, ctaTitle2, ctaHref2 }) => (
  <CTAImageContentSection>
    <CTAICSImage image={imageSrc} alt={imageAlt} />
    <CTAICSContent>
      <CTAICSContentAbsSVG>
        <BottomSquaresDots />
        <TopSquaresDots />
      </CTAICSContentAbsSVG>
      <CTAICSContentDescriptions>
        <div className='flex justify-between'>
          <img src={imageTitle} alt='plano' />
          {label && (
            <div className='flex items-center'>
              <span className='p-4 text-base font-medium text-white bg-red-400 shadow-sm'>{label}</span>
            </div>
          )}
        </div>
        <CTAICSContentDescriptionsParagraph>{description}</CTAICSContentDescriptionsParagraph>
        <CTAICSContentDescriptionsCTA
          href={getWhatsUrl(ctaHref)}
          target='_blank'
          onClick={() => {
            if (typeof window?.gtag !== 'undefined') {
              window.gtag('event', 'conversion', {
                send_to: 'AW-364234672/wCafCJ_ik-MCELCP160B',
                event_callback: () => console.log('evento enviado'),
                value: CTA_WA_MESSAGES.headerTopCta,
              })
            }
          }}
        >
          {ctaTitle}
        </CTAICSContentDescriptionsCTA>
        {ctaTitle2 && (
          <CTAICSContentDescriptionsCTA href={ctaHref2} target='_blank'>
            {ctaTitle2}
          </CTAICSContentDescriptionsCTA>
        )}
      </CTAICSContentDescriptions>
    </CTAICSContent>
  </CTAImageContentSection>
)

const BottomSquaresDots = () => (
  <svg
    className='absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0'
    width='404'
    height='384'
    fill='none'
    viewBox='0 0 404 384'
    aria-hidden='true'
  >
    <defs>
      <pattern id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
        <rect x='0' y='0' width='4' height='4' className='text-green-500' fill='currentColor' />
      </pattern>
    </defs>
    <rect width='404' height='384' fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)' />
  </svg>
)

const TopSquaresDots = () => (
  <svg
    className='absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2'
    width='404'
    height='384'
    fill='none'
    viewBox='0 0 404 384'
    aria-hidden='true'
  >
    <defs>
      <pattern id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
        <rect x='0' y='0' width='4' height='4' className='text-green-500' fill='currentColor' />
      </pattern>
    </defs>
    <rect width='404' height='384' fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)' />
  </svg>
)

const CTAContentImageSection = ({ children, title }) => (
  <div id='more-projects' className='bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
    <div className='relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl'>
      {/* HEADER */}
      <div>
        <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>{title}</h2>
      </div>
      <div className='mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12'>{children}</div>
    </div>
  </div>
)

const CTAContentImage = ({ title, titleImage, paragraph, ctaTitle, ctaOnClick, image }) => (
  <div className='flex flex-col md:flex-row-reverse'>
    <div className='w-12/12 py-4 md:w-5/12 md:px-10 md:py-0'>
      <img className='border-2 border-green-200 rounded-xl' src={image} alt='' />
    </div>
    <div className='w-12/12 md:w-7/12'>
      <div>
        {title && <p className='text-xl font-semibold text-gray-900'>{title}</p>}
        {titleImage && <img src={titleImage} alt='plano' />}
        <p className='mt-3 text-gray-500'>{paragraph}</p>
      </div>
      <div className='mt-3'>
        <Button onClick={ctaOnClick}>{ctaTitle}</Button>
      </div>
    </div>
  </div>
)

const CTABanner = () => (
  <div className='bg-green-100'>
    <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between'>
      <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
        <span className='block'>Preparado para o seu novo projeto de vida?</span>
        <span className='block text-green-500'>Agende a sua experiência gratuita!</span>
      </h2>
      <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
        <Button
          onClick={() => {
            openWhatsUrl(CTA_WA_MESSAGES.sectionCta)
            if (typeof window?.gtag !== 'undefined') {
              window.gtag('event', 'conversion', {
                send_to: 'AW-364234672/wCafCJ_ik-MCELCP160B',
                event_callback: () => console.log('evento enviado'),
                value: CTA_WA_MESSAGES.sectionCta,
              })
            }
          }}
        >
          Agende atendimento personalizado
        </Button>
      </div>
    </div>
  </div>
)

const POSTS_QUERY = graphql`
  query {
    posts: allContentfulPost(limit: 3, filter: { visible: { eq: true } }, sort: { order: DESC, fields: createdAt }) {
      edges {
        node {
          title
          slug
          description
          createdAt
          updatedAt
          featuredImage {
            gatsbyImageData
          }
          categories {
            category
            slug
          }
          readTime
          author {
            name
            image {
              gatsbyImageData
            }
            urlInstagram
          }
        }
      }
    }
    instaPosts: allInstaNode(limit: 3) {
      edges {
        node {
          caption
          comments
          id
          likes
          mediaType
          timestamp
          type
          username
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
const Index = ({ location }) => {
  const [showMenuMobile, setShowMenuMobile] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [currentVideoUrlModal, setCurrentVideoUrlModal] = useState(false)
  const data = useStaticQuery(POSTS_QUERY)

  return (
    <div className='relative bg-white overflow-hidden'>
      <Seo url={location?.href} />
      <CookieConsent
        buttonText='Aceito'
        style={{ background: '#2B373B' }}
        cookieName='cookie-lgpd-consent'
        expires={7}
        buttonStyle={{ background: '#029669', color: 'white' }}
        onAccept={() => {
          Cookies.set('gatsby-gdpr-google-analytics', true, { expires: 7 })
          Cookies.set('gatsby-gdpr-google-tagmanager', true, { expires: 7 })
        }}
      >
        {`Esse site utiliza cookies para te proporcionar uma melhor experiência. Ao continuar
        navegando, você aceita a nossa `}
        <a className='text-bold underline' href='/politicas-de-privacidade' target='_blank'>
          política de privacidade
        </a>
      </CookieConsent>
      {/* MENU E HERO */}
      <div className='hidden lg:block lg:absolute lg:inset-0 max-h-screen' aria-hidden='true'>
        <img src={background} alt='background' style={{ opacity: '0.7' }} />
      </div>
      <div className='relative pb-16 sm:pb-24 lg:pb-32'>
        <CTAHeader />
        <Navigator
          onClickOpenMenuMobile={() => setShowMenuMobile(true)}
          onClickCloseMenuMobile={() => setShowMenuMobile(false)}
          showMenuMobile={showMenuMobile}
          src={logo}
        />

        <Hero>
          <HeroLeft>
            <HLTitle>
              <span className='block text-gray-900'>Construa aqui o seu</span>
              <span className='block text-green-500'>projeto de vida</span>
            </HLTitle>
            <HLDescription>
              Uma vida saudável é seguramente o maior desejo de todos nós. Afinal, sem saúde a vida não tem o mesmo significado, e o melhor caminho
              para se sentir feliz, enérgico e saudável no futuro é levar uma vida feliz, enérgica e saudável no presente
            </HLDescription>
            <HLButtonActions>
              <p className='text-base font-medium text-gray-900'>Junte-se a nós e descubra como é viver melhor</p>
              <div className='mt-3 sm:flex'>
                <Button
                  onClick={() => {
                    openWhatsUrl(CTA_WA_MESSAGES.heroCtaLifeProject)
                    if (typeof window?.gtag !== 'undefined') {
                      window.gtag('event', 'conversion', {
                        send_to: 'AW-364234672/wCafCJ_ik-MCELCP160B',
                        event_callback: () => console.log('evento enviado'),
                        value: CTA_WA_MESSAGES.heroCtaLifeProject,
                      })
                    }
                  }}
                >
                  Começar seu projeto
                </Button>
                <Button onClick={() => window.open('https://academia-cultural.kpages.online/resultadoja')}>Exercite-se em casa</Button>
              </div>
            </HLButtonActions>
            <HLLinkActions>
              <p className='mt-3 text-sm text-gray-500'>
                Já possui cadastro?
                <a href={URLS.playstore} target='_blank' className='ml-2 font-medium text-green-500 underline' rel='noreferrer'>
                  Acessar seu perfil
                </a>
              </p>
            </HLLinkActions>
          </HeroLeft>
          <HeroRight>
            <div className='relative mx-auto w-full shadow-lg'>
              {/* <YoutubeVideo src="https://www.youtube-nocookie.com/embed/oon1aJAVHxo?controls=0" /> */}
              <YoutubeVideo src='https://www.youtube-nocookie.com/embed/d9mUlqlGCtI?controls=0' />
            </div>
            <div className='flex space-x-6 items-center justify-center mt-4'>
              <a href={URLS.facebook} target='_blank' className='text-green-400 hover:text-green-500' rel='noreferrer'>
                <span className='sr-only'>Facebook</span>
                <svg className='h-14 w-14' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fillRule='evenodd'
                    d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>

              <a href={URLS.instagram} target='_blank' className='text-green-400 hover:text-green-500' rel='noreferrer'>
                <span className='sr-only'>Instagram</span>
                <svg className='h-14 w-14' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fillRule='evenodd'
                    d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>

              <a href={URLS.youtube} target='_blank' className='text-green-400 hover:text-green-500' rel='noreferrer'>
                <span className='sr-only'>Youtube</span>
                <svg className='h-14 w-16' fill='currentColor' aria-hidden='true'>
                  <g viewBox='0 0 24 24' preserveAspectRatio='xMidYMid meet'>
                    <g>
                      <path
                        d='M63,14.87c-0.72-2.7-2.85-4.83-5.56-5.56C52.54,8,32.88,8,32.88,8S13.23,8,8.32,9.31
              c-2.7,0.72-4.83,2.85-5.56,5.56C1.45,19.77,1.45,30,1.45,30s0,10.23,1.31,15.13c0.72,2.7,2.85,4.83,5.56,5.56
              C13.23,52,32.88,52,32.88,52s19.66,0,24.56-1.31c2.7-0.72,4.83-2.85,5.56-5.56C64.31,40.23,64.31,30,64.31,30
              S64.31,19.77,63,14.87z'
                      />
                      <polygon fill='#FFFFFF' points='26.6,39.43 42.93,30 26.6,20.57' />
                    </g>
                  </g>
                </svg>
              </a>

              <a href={URLS.appstore} target='_blank' rel='noreferrer'>
                <img src={applestorePng} alt='apple store' className='h-12' />
              </a>

              <a href={URLS.playstore} target='_blank' rel='noreferrer'>
                <img src={googleplayPng} alt='play store' className='h-12' />
              </a>
            </div>
          </HeroRight>
        </Hero>
      </div>

      {/* HISTÓRIAS QUE INSPIRAM */}
      <div id='inspiring-histories' className='relative bg-green-50 pt-16 pb-20 lg:pt-24 lg:pb-28 lg:px-8'>
        <div className='absolute inset-0'>
          <div className='bg-white h-1/3 sm:h-2/3' />
        </div>
        <VideosSection>
          <VSHeader>
            <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 px-4 sm:text-4xl md:px-0'>Histórias que inspiram</h2>
          </VSHeader>
          <VSContent>
            {blogVideos.map((item) => (
              <Card
                imageProps={item.imageProps}
                title={item.title}
                ctaTitle={item.ctaTitle}
                ctaOnClick={item.ctaOnClick}
                description={item.description}
                onClick={() => {
                  setShowVideoModal(true)
                  setCurrentVideoUrlModal(item.videoUrl)
                }}
              />
            ))}
          </VSContent>
        </VideosSection>
      </div>

      {/* PLANOS */}
      {mainProjects.map((item) => (
        <CTAImageContent
          key={item.imageTitle}
          imageSrc={item.imageSrc}
          imageAlt={item.imageAlt}
          imageTitle={item.imageTitle}
          label={item.label}
          description={item.description}
          ctaTitle={item.ctaTitle}
          ctaTitle2={item.ctaTitle2}
          ctaHref={item.ctaHref}
          ctaHref2={item.ctaHref2}
        />
      ))}

      {/* MAIS PLANOS */}
      <CTAContentImageSection title='Veja mais projetos para a sua vida'>
        {projects.map((item) => (
          <CTAContentImage
            key={item.titleImage}
            titleImage={item.titleImage}
            paragraph={item.paragraph}
            ctaTitle={item.ctaTitle}
            ctaOnClick={item.ctaOnClick}
            image={item.image}
          />
        ))}
      </CTAContentImageSection>
      <CTABanner />
      {/* ABSOLUTE MODAL VIDEO */}
      {showVideoModal && (
        <div className='fixed inset-0 p-2 z-10' onClick={() => setShowVideoModal(false)}>
          <div className='overflow-hidden flex items-center justify-center'>
            <div className='rounded-lg shadow-md  p-5 w-5/5 md:w-3/5 bg-white mt-32'>
              <YoutubeVideo src={currentVideoUrlModal} />
            </div>
          </div>
        </div>
      )}
      <BlogColunCards title='Postagens mais recentes' description='Saúde, disposição, felicidade e muito mais. Acesse o nosso Blog!' href='\blog'>
        {data.posts.edges.slice(0, 3).map(({ node }) => (
          <BlogColunCardsItem
            title={node.title}
            imageUrl={node.featuredImage.gatsbyImageData}
            categoryName={node.categories?.map((c) => c.category).join('/')}
            categoryHref={`/blog${node.categories[0]?.slug}`}
            href={`/blog${node.slug}`}
            description={node.description}
            authorName={node.author?.name}
            authorImageUrl={node.author?.image.gatsbyImageData}
            authorHref={node.author?.urlInstagram}
            datetime={node.createdAt}
            date={new Date(node.createdAt).toLocaleDateString()}
            readingTime={node.readTime}
          />
        ))}
      </BlogColunCards>
      <InstaSection
        posts={data.instaPosts}
        people={[
          {
            name: 'Lindsay Walton',
            role: 'Front-end Developer',
            imageUrl:
              'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
            twitterUrl: '#',
            linkedinUrl: '#',
          },
          {
            name: 'Lindsay Walton',
            role: 'Front-end Developer',
            imageUrl:
              'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
            twitterUrl: '#',
            linkedinUrl: '#',
          },
          {
            name: 'Lindsay Walton',
            role: 'Front-end Developer',
            imageUrl:
              'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
            twitterUrl: '#',
            linkedinUrl: '#',
          },
        ]}
      />
      <Footer src={logo} />
    </div>
  )
}
export default Index
