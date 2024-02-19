import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const discord = 'https://discord.gg/grZbJUsF3K'
const srcCode = 'https://github.com/morcxlla/foe-ops-docs'

const debug = '3bp5w0obd'

const config: DocsThemeConfig = {

  gitTimestamp: ({ timestamp }) => {
    const date = timestamp.getDate();
    const month = timestamp.toLocaleString("es-ES", { month: "2-digit" });
    const year = timestamp.getFullYear().toString().slice(-2);;
    return (
      <> Última actualización: {date}/{month}/{year} </>
    );
  },

  useNextSeoProps() {
    return {
      titleTemplate: '%s - FOE' // Sufijo en el titulo de la pagina
    }
  },

  primaryHue: 85,
  primarySaturation: 65,
  darkMode: true,

  banner: {
    key: 'discord-03uk77pqd', // ID (Para guardar cuando un usuario lo cierra (si se cambia el banner debe cambiarse el id para que todos lo vean adecuadamente))
    dismissible: true, // PUEDE CERRARSE?
    text: (
      <a href={discord} target="_blank">
        ¡Únete a Discord!
      </a>
    )
  },

  sidebar: {
    defaultMenuCollapseLevel: 1, // Posición y funcionamiento de los 'dropdowns'
    toggleButton: true, // Se puede oculta el Menu lateral
  },

  logo: <div
    style={{
      paddingLeft: "50px", lineHeight: "38px", fontWeight: 550,
      background: "url(/foe-logo-min.png) no-repeat left", backgroundSize: "38px",
    }}
  >
    FOE OPS DOCS
  </div>,

  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://foe-ops.vercel.app' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/foe-logo-min.png"/>
        <meta property="og:type" content="website"></meta>

        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'FOE [ES]'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Comunidad Milsim PvPvE [ES]'}
        />
        <meta property="og:image" content="/seo_img.jpg"/>

        <meta name="twitter:title" content={frontMatter.title || 'FOE'}/>
        <meta
          name="twitter:description"
          content={frontMatter.description || 'Comunidad Milsim PvPvE [ES]'}
        />
        <meta property="twitter:domain" content={url}/>
        <meta property="twitter:url" content={url}/>
        <meta name="twitter:card" content="/seo_img.jpg"/>
        <meta name="twitter:image" content="/seo_img.jpg"/>
      </>
    )
  },

  footer: {
    text:
      <p>
        Creado por <a rel="noreferrer" href="https://github.com/morcxlla" target="_blank" style={{color: "#72aa25"}}>Morcxlla_</a> con <a rel="noreferrer" href="https://nextra.site/" target="_blank" style={{color: "#72aa25"}}>Nextra</a>
      </p>
    ,
  },

  project: { link: srcCode },
  chat: { link: discord },
  docsRepositoryBase: `${srcCode}/tree/main`,
  
  direction: 'ltr',

  // Langs
  themeSwitch: {
    useOptions() {
      return {
        light: 'Claro',
        dark: 'Oscuro',
        system: 'Auto'
      }
    }
  },
  search: {
    placeholder: 'Buscar...',
  },
  toc: {
    title: 'En esta pagina',
  },
  editLink: {
    text: 'Editar esta pagina',
  },
  feedback: {
    content: '¿Preguntas o errores? →'
  },
}

export default config
