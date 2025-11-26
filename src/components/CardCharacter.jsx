import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function CardCharacter({ c }) {
  const [imgSrc, setImgSrc] = useState(null)
  const [imgOk, setImgOk] = useState(false)

  useEffect(() => {
    const filename = c?.image
    // debug character and image field
    // eslint-disable-next-line no-console
    console.debug('[CardCharacter] character:', c?.id, 'image field:', filename)
    if (!filename) {
      setImgSrc(null)
      setImgOk(false)
      return
    }

    // Try Vite-resolved assets first using import.meta.glob (eager, as url)
    let cancelled = false
    try {
      const modules = import.meta.glob('../assets/images/*', { eager: true, as: 'url' })
      const key = `../assets/images/${filename}`
      if (modules && modules[key]) {
        const candidate = modules[key]
        const img = new Image()
        img.onload = () => {
          if (cancelled) return
          setImgSrc(candidate)
          setImgOk(true)
          console.debug('[CardCharacter] image loaded via glob:', candidate)
        }
        img.onerror = () => {
          console.warn('[CardCharacter] glob asset failed to load:', candidate)
          // fallthrough to public/raw candidates below
          tryFallbacks()
        }
        img.src = candidate
        return () => { cancelled = true }
      }
    } catch (e) {
      // ignore glob failure
    }

    const tryFallbacks = () => {
      const candidates = []
      try {
        candidates.push(new URL(`../assets/images/${filename}`, import.meta.url).href)
      } catch (e) {}
      candidates.push(`/images/${filename}`)
      candidates.push(filename)

      const filteredCandidates = candidates.filter((x) => typeof x === 'string' && x)

      const tryNext = (idx) => {
        if (cancelled || idx >= filteredCandidates.length) {
          setImgOk(false)
          setImgSrc(null)
          console.warn('[CardCharacter] no working image candidate for', filename, 'c.id=', c?.id)
          return
        }

        const candidate = filteredCandidates[idx]
        const img = new Image()
        img.onload = () => {
          if (cancelled) return
          setImgSrc(candidate)
          setImgOk(true)
          console.debug('[CardCharacter] image loaded fallback:', candidate)
        }
        img.onerror = () => {
          if (cancelled) return
          console.warn('[CardCharacter] failed to load candidate:', candidate)
          tryNext(idx + 1)
        }
        img.src = candidate
      }

      tryNext(0)
    }

    tryFallbacks()

    return () => { cancelled = true }

    return () => {
      cancelled = true
    }
  }, [c?.image])

  return (
    <Link to={`/character/${c.id}`} className="block">
      <div className="card">
        <div className="char-row">
          {imgSrc && imgOk ? (
            <img src={imgSrc} alt={c.codename} className="avatar" style={{objectFit:'cover',display:'block'}} />
          ) : (
            <div className="avatar">{c.codename[0]}</div>
          )}

          <div>
            <div className="card-title">{c.codename}</div>
            <div className="card-sub">{c.role}</div>
          </div>
        </div>

        <p className="card-desc">{c.description}</p>
      </div>
    </Link>
  )
}