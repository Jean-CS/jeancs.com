/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Link} from 'gatsby'
import Layout from 'components/layout'
import Seo from 'components/seo'

export default function IndexPage() {
  return (
    <Layout breadcrumb=".com" showFooter={false}>
      <Seo
        title="Jean Carlos"
        description="React & Python developer."
      />
      <section>
        <p sx={{m: 0, fontSize: 3, color: 'text'}}>
          React & Python developer based in 🌎
        </p>
      </section>
      <nav sx={{display: 'inline-flex', flexDirection: 'column', pt: 4}}>
        <Link sx={linkStyles} to="/blog">
          /Blog
        </Link>
        <Link sx={linkStyles} to="/mail">
          /mail
        </Link>
        {/*<Link sx={linkStyles} to="/now">*/}
        {/*  /now*/}
        {/*</Link>*/}
        <Link sx={linkStyles} to="/contact">
          /contact
        </Link>
        <a href="https://github.com/Jean-CS" sx={linkStyles}>
          /GitHub
        </a>
        {/*<a*/}
        {/*  href="https://www.youtube.com/channel/UCQPW7EPRHF4Eb1Ei9I5Gf6A"*/}
        {/*  sx={linkStyles}*/}
        {/*>*/}
        {/*  /YouTube*/}
        {/*</a>*/}
        <a href="https://twitter.com/Jean_CSx" sx={linkStyles}>
          /Twitter
        </a>
      </nav>
    </Layout>
  )
}

const linkStyles = {
  textDecoration: 'none',
  color: 'primary',
  fontFamily: 'menlo, monospace',
  fontSize: 2,
  fontWeight: 'body',
  textTransform: 'lowercase',
  mb: 3,
}
