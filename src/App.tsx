import { useEffect } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { useSettings } from './store/settings'
import { Home } from './pages/Home'
import { Units } from './pages/Units'
import { UnitPage } from './pages/UnitPage'
import { KaiwaList, KaiwaTopicPage, KaiwaDialoguePage } from './pages/Kaiwa'
import { ExamList, ExamPage } from './pages/Exams'
import { SettingsPage } from './pages/Settings'
import { Review } from './pages/Review'
import { japaneseVoices, onVoicesChanged } from './lib/speech'

function useAppearance() {
  const { theme, fontSize, furigana } = useSettings()
  useEffect(() => {
    const root = document.documentElement
    const apply = () => {
      const dark = theme === 'dark' || (theme === 'system' && matchMedia('(prefers-color-scheme: dark)').matches)
      root.classList.toggle('dark', dark)
    }
    apply()
    const mq = matchMedia('(prefers-color-scheme: dark)')
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [theme])
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('fs-sm', 'fs-lg')
    if (fontSize !== 'base') root.classList.add(`fs-${fontSize}`)
  }, [fontSize])
  useEffect(() => {
    document.documentElement.classList.toggle('no-furi', !furigana)
  }, [furigana])
  useEffect(() => {
    japaneseVoices()
    return onVoicesChanged(() => japaneseVoices())
  }, [])
}

export default function App() {
  useAppearance()
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="units" element={<Units />} />
          <Route path="u/:id" element={<Navigate to="ly-thuyet" replace />} />
          <Route path="u/:id/:tab" element={<UnitPage />} />
          <Route path="kaiwa" element={<KaiwaList />} />
          <Route path="kaiwa/:id" element={<KaiwaTopicPage />} />
          <Route path="kaiwa/:id/:did" element={<KaiwaDialoguePage />} />
          <Route path="exams" element={<ExamList />} />
          <Route path="exams/:id" element={<ExamPage />} />
          <Route path="review" element={<Review />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
