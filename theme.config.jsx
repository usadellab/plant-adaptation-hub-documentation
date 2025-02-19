import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import Image from './components/Image';


export default  {
  // logo: <span>Camelina-hub documentation</span>,
    logo: (
      <>
<Image src='/FAV-32.png' alt="Hello" width={20} height={20} />
          <span style={{marginLeft : '0.3em', fontWeight: 1000, fontSize : 25 }}>
          Plant Adaptation Hub documentation
        </span>
      </>
    ),
  project: {
    link: 'https://github.com/usadellab/untwistApp',
  },

  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s '  //replaced the default 'Nextra' text with empty string
      }
    }
  },
  
  chat: {
    // link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/usadellab/untwistApp/tree/documentation',
  footer: {
    text: 'Plant Adaptation Hub documentation',
  },


  mdxComponents: {
    img: Image
  }
}

// export default config