import ReactDOMServer from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './index.css'

export { render }

async function render(pageContext: { urlPathname: string }) {
  const { urlPathname } = pageContext
  const helmetContext = {} as any

  const appHtml = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <MemoryRouter initialEntries={[urlPathname]}>
        <App />
      </MemoryRouter>
    </HelmetProvider>
  )

  const { helmet } = helmetContext

  return {
    documentHtml: appHtml,
    pageContext: {
      documentProps: {
        title: helmet.title.toString(),
        description: helmet.meta.toString(),
      },
      helmet: {
        title: helmet.title.toString(),
        meta: helmet.meta.toString(),
        link: helmet.link.toString(),
        script: helmet.script.toString(),
      },
    },
  }
}
