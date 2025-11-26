import { useRegisterSW } from 'virtual:pwa-register/react'
import Button from './ui/Button'

export default function PWABadge() {
  const {
    offlineReady,
    needRefresh,
    updateServiceWorker
  } = useRegisterSW()

  if (!offlineReady && !needRefresh) return null

  return (
    <div className="pwa-badge">
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <div>{offlineReady ? "App ready to work offline" : "New update available"}</div>
        {needRefresh && (
          <Button variant="ghost" size="sm" onClick={() => updateServiceWorker(true)}>
            Reload
          </Button>
        )}
      </div>
    </div>
  )
}
