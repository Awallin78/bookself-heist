import { useRegisterSW } from 'virtual:pwa-register/react'

export default function PWABadge() {
  const {
    offlineReady,
    needRefresh,
    updateServiceWorker
  } = useRegisterSW()

  if (!offlineReady && !needRefresh) return null

  return (
    <div className="fixed bottom-24 right-4 bg-white shadow-lg rounded-xl px-4 py-3 text-sm">
      {offlineReady ? "App ready to work offline" : "New update available"}
      {needRefresh && (
        <button
          className="ml-2 underline text-blue-600"
          onClick={() => updateServiceWorker(true)}
        >
          Reload
        </button>
      )}
    </div>
  )
}
