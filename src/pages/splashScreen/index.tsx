import {Suspense, useEffect, useRef, useState} from 'react'
import { CSSTransition } from 'react-transition-group'

import AppBoot from '@/services/appBoot'
import { Container, Logo } from './style'

interface SplashScreenProps {
  children ?: JSX.Element
}

function SplashScreen ({ children } : SplashScreenProps) {

  const [booting, setBooting] = useState(true)
  const nodeRef = useRef(null);
  useEffect(() => {
    if (!children) return
    AppBoot.run().then(() => setBooting(false))
  }, [])

  return (
    <>
    <CSSTransition
      classNames='anim'
      in={booting}
      timeout={500}
      unmountOnExit={true}
      nodeRef={nodeRef}
    >
      <Container>
        <Logo src={`${process.env.PUBLIC_URL}/favicon.svg`} />
      </Container>
    </CSSTransition>
    { children }
    </>
  )

}

export default function LoadingWrapper ({ children } : SplashScreenProps) {

  return (
    <Suspense fallback={<SplashScreen />}>
      <SplashScreen>{ children }</SplashScreen>
    </Suspense>
  )

}