import React, { ReactNode, useContext } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import CategoryConsumer from '@contexts/category'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
    
    const categories = useContext(CategoryConsumer)
    console.log(categories)
    return <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
        
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  
  }

export default Layout
