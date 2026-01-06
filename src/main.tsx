import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StartGame from './StartGame.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <StartGame />
    </StrictMode>,
)
