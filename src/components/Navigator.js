import React from 'react'
import { getWhatsUrl } from '../utils'
import { CTA_WA_MESSAGES, URLS } from '../utils/constants'

const Navigator = ({ showMenuMobile, onClickOpenMenuMobile, onClickCloseMenuMobile, src, hrefInspiring, hrefHome}) => (
  <>
    <nav
      className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
      aria-label="Global"
    >
      <div className="flex items-center flex-1">
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href={hrefHome}>
            <span className="sr-only">Workflow</span>
            <img className="h-14 w-auto sm:h-20" src={src} alt="logo" />
          </a>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
              onClick={onClickOpenMenuMobile}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden md:block md:ml-10 md:space-x-10">
          <a href={hrefInspiring} className="font-bold text-green-500 hover:text-green-900">
            Projetos de vida!
          </a>
          <a
            href={getWhatsUrl(CTA_WA_MESSAGES.headerCtaMenuItem2)}
            target="_blank"
            className="font-medium text-green-500 hover:text-green-900"
            rel="noreferrer"
            onClick={() => {
              if (typeof window?.gtag !== 'undefined') {
                window.gtag('event', 'conversion', {
                  send_to: 'AW-364234672/wCafCJ_ik-MCELCP160B',
                  event_callback: () => console.log('evento enviado'),
                  value: CTA_WA_MESSAGES.headerCtaMenuItem2,
                })
              }
            }}
          >
            Agende agora
          </a>
          <a
            href="https://academia-cultural.kpages.online/resultadoja"
            target="_blank"
            className="font-bold text-green-500 hover:text-green-900"
            rel="noreferrer"
          >
            Exercite-se em casa
          </a>
          <a href="/blog" className="font-medium text-green-500 hover:text-green-900">
            Blog
          </a>
          <a href="/links" className="font-medium text-green-500 hover:text-green-900">
            Siga
          </a>
        </div>
      </div>
      <div className="hidden md:block text-right">
        <span className="inline-flex shadow-md ring-1 ring-black ring-opacity-5">
          <a
            href={URLS.playstore}
            target="_blank"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium text-green-500 bg-white hover:bg-green-50"
            rel="noreferrer"
          >
            Entrar
          </a>
        </span>
      </div>
    </nav>
    {/* ABSOLUTE MOBILE MENU */}
    <div
      className={`${
        showMenuMobile ? '' : 'hidden'
      } absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
    >
      <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div className="px-5 pt-4 flex items-center justify-between">
          <div>
            <img className="h-8 w-auto" src={src} alt="" />
          </div>
          <div className="-mr-2">
            <button
              type="button"
              onClick={onClickCloseMenuMobile}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="px-2 pt-2 pb-3">
          <a
            href="#inspiring-histories"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Projetos de vida!
          </a>
          <a
            href={getWhatsUrl(CTA_WA_MESSAGES.headerCtaMenuItem2)}
            target="_blank"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            rel="noreferrer"
            onClick={() => {
              if (typeof window?.gtag !== 'undefined') {
                window.gtag('event', 'conversion', {
                  send_to: 'AW-364234672/wCafCJ_ik-MCELCP160B',
                  event_callback: () => console.log('evento enviado'),
                  value: CTA_WA_MESSAGES.headerCtaMenuItem2,
                })
              }
            }}
          >
            Agende agora
          </a>
          <a
            href="https://academia-cultural.kpages.online/resultadoja"
            target="_blank"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            rel="noreferrer"
          >
            Exercite-se em casa
          </a>
          <a
            href="/blog"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Blog
          </a>
          <a 
            href="/links"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Siga
          </a>
        </div>
        <a
          href={URLS.playstore}
          target="_blank"
          className="block w-full px-5 py-3 text-center font-medium text-green-600 bg-gray-50 hover:bg-gray-100"
          rel="noreferrer"
        >
          Entrar
        </a>
      </div>
    </div>
  </>
)

export default Navigator
