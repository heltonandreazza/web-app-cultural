/* eslint-disable react/jsx-props-no-spreading */
import { StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import CookieConsent, { Cookies } from 'react-cookie-consent'

import '../../styles/global.css'
import { getWhatsUrl } from '../../utils'
import { CTA_WA_MESSAGES, URLS } from '../../utils/constants'

import Footer from '../../components/Footer'
import CardMidia from '../../components/midia/CardMidia'
import Navigator from '../../components/Navigator'
import Seo from '../../components/Seo'

import background from '../../images/background.webp'
import Blog from '../../images/blog.png'
import Facebook from '../../images/facebook.png'
import Instagram from '../../images/instagram.png'
import logo from '../../images/logo.png'
import Whatsapp from '../../images/whatsapp.png'
import Youtube from '../../images/youtube.png'

const socialMidias = [
  {
    description: 'Fale com as nossas consultoras:',
    hrefs: [
      {
        name: 'Barbara',
        url: 'https://wa.me/5547997279233',
      },
      {
        name: 'Carolina',
        url: 'https://wa.me/5547992203282',
      },
      {
        name: 'Mariana',
        url: 'https://wa.me/5547992375753',
      },
    ],
    href: URLS.whatsapp,
    img: Whatsapp,
  },
  {
    name: 'Facebook',
    href: URLS.facebook,
    img: Facebook,
  },
  {
    name: 'Instagram',
    href: URLS.instagram,
    img: Instagram,
  },
  {
    name: 'YouTube',
    href: URLS.youtube,
    img: Youtube,
  },
  {
    name: 'Blog',
    href: URLS.blog,
    img: Blog,
  },
]

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

const ShowAllSocialMidia = () => (
  <div className='flex flex-row flex-wrap justify-around max-w-7xl items-center m-auto -mt-16 '>
    {socialMidias.map((midia) => {
      return <CardMidia name={midia.name} img={midia.img} href={midia.href} hrefs={midia.hrefs} key={midia.name} description={midia.description} />
    })}
  </div>
)

const MapLocation = () => (
  <div className='flex items-center justify-center mt-20 md:mt-40 md:mb-20 px-4'>
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5810568273523!2d-49.277483684901476!3d-26.821465195864945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94defc07ba67c20f%3A0xddaf05c8ee94cd0!2sAcademia%20Cultural!5e0!3m2!1spt-BR!2sbr!4v1656974211452!5m2!1spt-BR!2sbr'
      width='1200'
      className='h-60 md:h-96'
      allowfullscreen=''
      loading='lazy'
      referrerpolicy='no-referrer-when-downgrade'
    ></iframe>
  </div>
)

const HeroMidia = () => (
  <div className=' flex flex-col md:flex-row max-w-7xl md:items-center px-4 content-center mx-auto mt-8 md:-mt-20'>
    <div className='md:w-1/2 '>
      <h2 className=' tracking-tight font-extrabold text-gray-900 text-4xl sm:text-5xl xl:text-6xl'>
        Siga-nos nas <span className='text-green-600'>redes sociais </span>e fique por dentro de todas as{' '}
        <span className='text-green-600'>novidades</span>.
      </h2>
    </div>

    <div className='md:w-1/2 relative -mt-10 md:mt:0 md:-mr-20 '>
      <StaticImage src='../../images/headersiga.png' />
    </div>
  </div>
)

const Index = ({ location }) => {
  const [showMenuMobile, setShowMenuMobile] = useState(false)

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
        {`Esse site utiliza cookies para te proporcionar uma melhor experi??ncia. Ao continuar
        navegando, voc?? aceita a nossa `}
        <a className='text-bold underline' href='/politicas-de-privacidade' target='_blank' rel='noreferrer'>
          pol??tica de privacidade
        </a>
      </CookieConsent>
      {/* MENU E HERO */}
      <div className='hidden lg:block lg:absolute lg:inset-0 max-h-3.5' aria-hidden='true'>
        <img src={background} alt='background' style={{ opacity: '0.7' }} />
      </div>

      <div className='relative pb-16 sm:pb-24 lg:pb-32'>
        <CTAHeader />
        <Navigator
          onClickOpenMenuMobile={() => setShowMenuMobile(true)}
          onClickCloseMenuMobile={() => setShowMenuMobile(false)}
          showMenuMobile={showMenuMobile}
          src={logo}
          hrefInspiring={'../#inspiring-histories'}
          hrefHome={'../'}
        />
        <HeroMidia />
      </div>

      <ShowAllSocialMidia />

      <MapLocation />

      <Footer src={logo} mainProjects='../#main-projects' moreProjects='../#more-projects' sobre='../' />
    </div>
  )
}
export default Index
