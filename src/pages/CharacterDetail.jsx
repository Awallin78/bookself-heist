import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Characters } from "../data/characters";
import Button from "../components/ui/Button";
import { useState, useEffect } from "react";

export default function CharacterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const c = Characters.find((ch) => ch.id === id);

  if (!c) {
    return <div className="app-container">Character not found.</div>;
  }

  const tryResolveImage = (filename) => {
    if (!filename) return null
    try {
      return new URL(`../assets/images/${filename}`, import.meta.url).href
    } catch (e) {
      return filename
    }
  }

  const [imgSrc, setImgSrc] = useState(null)
  const [imgOk, setImgOk] = useState(false)

  useEffect(() => {
    const filename = c?.image
    if (!filename) {
      setImgSrc(null)
      setImgOk(false)
      return
    }

    // try import.meta.glob first (vite-resolved assets)
    let cancelled = false
    try {
      const modules = import.meta.glob('../assets/images/*', { eager: true, as: 'url' })
      const key = `../assets/images/${filename}`
      if (modules && modules[key]) {
        const candidate = modules[key]
        const img = new Image()
        img.onload = () => {
          if (cancelled) return
          setImgOk(true)
          setImgSrc(candidate)
          console.debug('[CharacterDetail] image loaded via glob:', candidate)
        }
        img.onerror = () => {
          console.warn('[CharacterDetail] glob asset failed to load:', candidate)
          tryFallbacks()
        }
        img.src = candidate
        return () => { cancelled = true }
      }
    } catch (e) {}

    const tryFallbacks = () => {
      const candidates = []
      try { candidates.push(new URL(`../assets/images/${filename}`, import.meta.url).href) } catch(e){}
      candidates.push(`/images/${filename}`)
      candidates.push(filename)

      const filteredCandidates = candidates.filter((x) => typeof x === 'string' && x)

      const tryNext = (idx) => {
        if (cancelled || idx >= filteredCandidates.length) {
          setImgOk(false)
          setImgSrc(null)
          console.warn('[CharacterDetail] no working image candidate for', filename)
          return
        }
        const candidate = filteredCandidates[idx]
        const img = new Image()
        img.onload = () => {
          if (cancelled) return
          setImgOk(true)
          setImgSrc(candidate)
          console.debug('[CharacterDetail] image loaded fallback:', candidate)
        }
        img.onerror = () => {
          if (cancelled) return
          console.warn('[CharacterDetail] failed candidate:', candidate)
          tryNext(idx + 1)
        }
        img.src = candidate
      }

      tryNext(0)
    }

    tryFallbacks()

    return () => { cancelled = true }
  }, [c?.image])

  return (
    <div className="app-container">
      <div style={{marginBottom:12}}>
        <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
          ← Back
        </Button>
      </div>

      <div className="card">
        <div className="char-row">
          {imgSrc && imgOk ? (
            <img src={imgSrc} alt={c.codename} className="avatar" style={{width:80,height:80,fontSize:'1.4rem',objectFit:'cover',display:'block'}} />
          ) : (
            <div className="avatar" style={{width:80,height:80,fontSize:'1.4rem'}}>{c.codename[0]}</div>
          )}

          <div>
            <div className="card-title" style={{fontSize:'1.1rem'}}>{c.codename}</div>
            <div className="card-sub">
              {c.name} — {c.role}
            </div>
          </div>
        </div>

        <p className="card-desc" style={{marginTop:14}}>{c.description}</p>
      </div>
    </div>
  );
}
