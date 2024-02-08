import '@/styles/globals.css'


import MainLayout from '../components/mainLayout'
import {NextUIProvider} from "@nextui-org/system";


export default function App({ Component, pageProps }) {
  return (
    <>
  <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
  <NextUIProvider>
    
  </NextUIProvider>
    </>

  )
}
