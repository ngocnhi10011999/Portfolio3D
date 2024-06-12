import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import { Logo } from '@pmndrs/branding'
import './styles.css'
import './styles_laptop.css'
import { App } from './App'
import { LapTop3D } from './LapTop3D'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a href="https://pmnd.rs/" style={{ position: 'absolute', top: 40, left: 90, fontSize: '13px' }}>
        pmnd.rs
        <br />
        dev collective
      </a>
      <div style={{ position: 'absolute', top: 40, right: 40, fontSize: '13px' }}>10/17/2021</div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <Suspense fallback={null}>
      <LapTop3D />
      <App />
    </Suspense>
    <Overlay />
    <Logo style={{ position: 'absolute', top: 40, left: 40, width: 30 }} />
  </>
)
