import { useEffect, useRef, useCallback, memo } from 'react'

const MOBILE_BREAKPOINT = 768
const TWO_PI = Math.PI * 2

function isMobile() {
  return window.innerWidth < MOBILE_BREAKPOINT
}

function createNode(width, height, layer) {
  const angle = Math.random() * TWO_PI
  const speed = 0.3 + Math.random() * 0.35 + layer * 0.12
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    radius: 1.5 + Math.random() * 2.2 + layer * 0.7,
    layer,
    px: 1 + layer * 0.35,
    pulse: Math.random() * TWO_PI,
    pulseSpeed: 0.5 + Math.random() * 0.6,
    driftPhase: Math.random() * TWO_PI,
    driftAmp: 0.08 + Math.random() * 0.12,
  }
}

function createOrb(width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    radius: 50 + Math.random() * 90,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.2,
    hue: 0 + Math.random() * 25,
    alpha: 0.04 + Math.random() * 0.05,
    pulsePhase: Math.random() * TWO_PI,
  }
}

function createStreaker(width, height) {
  const fromLeft = Math.random() > 0.5
  return {
    x: fromLeft ? -20 : width + 20,
    y: Math.random() * height,
    vx: (fromLeft ? 1 : -1) * (1.2 + Math.random() * 2),
    vy: (Math.random() - 0.5) * 0.8,
    length: 40 + Math.random() * 80,
    alpha: 0.06 + Math.random() * 0.08,
    width: 0.6 + Math.random() * 0.8,
    hue: 0 + Math.random() * 25,
  }
}

function createRing(width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    radius: 20 + Math.random() * 50,
    rotation: Math.random() * TWO_PI,
    rotSpeed: (Math.random() - 0.5) * 0.008,
    vx: (Math.random() - 0.5) * 0.15,
    vy: (Math.random() - 0.5) * 0.12,
    alpha: 0.03 + Math.random() * 0.04,
    dashPhase: Math.random() * TWO_PI,
  }
}

function createDiamond(width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    size: 8 + Math.random() * 16,
    rotation: Math.random() * TWO_PI,
    rotSpeed: (Math.random() - 0.5) * 0.01,
    vx: (Math.random() - 0.5) * 0.12,
    vy: (Math.random() - 0.5) * 0.1,
    alpha: 0.04 + Math.random() * 0.04,
    hue: 0 + Math.random() * 25,
  }
}

function createRipple(width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    radius: 0,
    maxRadius: 40 + Math.random() * 60,
    speed: 0.3 + Math.random() * 0.4,
    alpha: 0.06 + Math.random() * 0.04,
    hue: 0 + Math.random() * 25,
  }
}

function createHexDot(width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    size: 3 + Math.random() * 4,
    rotation: Math.random() * TWO_PI,
    rotSpeed: (Math.random() - 0.5) * 0.005,
    alpha: 0.035 + Math.random() * 0.03,
    pulsePhase: Math.random() * TWO_PI,
  }
}

const LAYER_COLORS = [
  'rgba(185, 28, 28, 0.65)',
  'rgba(220, 38, 38, 0.6)',
  'rgba(248, 113, 113, 0.55)',
]

function HeroCanvas() {
  const canvasRef = useRef(null)
  const frameRef = useRef(null)
  const nodesRef = useRef([])
  const orbsRef = useRef([])
  const streakersRef = useRef([])
  const ringsRef = useRef([])
  const diamondsRef = useRef([])
  const ripplesRef = useRef([])
  const hexDotsRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 })
  const dimsRef = useRef({ w: 0, h: 0 })
  const activeRef = useRef(true)
  const mobileRef = useRef(false)

  const init = useCallback(() => {
    const w = dimsRef.current.w
    const h = dimsRef.current.h
    const mobile = isMobile()
    mobileRef.current = mobile
    const nodeCount = mobile ? 40 : 85
    const orbCount = mobile ? 3 : 7
    const ringCount = mobile ? 2 : 5
    const diamondCount = mobile ? 3 : 8
    const hexDotCount = mobile ? 4 : 10

    const nodes = []
    for (let i = 0; i < nodeCount; i++) {
      const layer = i < nodeCount * 0.3 ? 0 : i < nodeCount * 0.7 ? 1 : 2
      nodes.push(createNode(w, h, layer))
    }
    nodesRef.current = nodes

    const orbs = []
    for (let i = 0; i < orbCount; i++) orbs.push(createOrb(w, h))
    orbsRef.current = orbs

    streakersRef.current = []

    const rings = []
    for (let i = 0; i < ringCount; i++) rings.push(createRing(w, h))
    ringsRef.current = rings

    const diamonds = []
    for (let i = 0; i < diamondCount; i++) diamonds.push(createDiamond(w, h))
    diamondsRef.current = diamonds

    ripplesRef.current = []

    const hexDots = []
    for (let i = 0; i < hexDotCount; i++) hexDots.push(createHexDot(w, h))
    hexDotsRef.current = hexDots
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: false })

    let resizeTimer
    const doResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      if (w === 0 || h === 0) return
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      dimsRef.current = { w, h }
      init()
    }
    const resize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(doResize, 100)
    }

    doResize()

    const onMouse = (e) => {
      mouseRef.current.tx = (e.clientX / window.innerWidth) - 0.5
      mouseRef.current.ty = (e.clientY / window.innerHeight) - 0.5
    }

    const onVisibility = () => {
      if (!document.hidden && activeRef.current && !frameRef.current) {
        frameRef.current = requestAnimationFrame(render)
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasActive = activeRef.current
        activeRef.current = entry.isIntersecting
        if (entry.isIntersecting && !wasActive && !frameRef.current) {
          frameRef.current = requestAnimationFrame(render)
        }
      },
      { threshold: 0 },
    )
    observer.observe(canvas)

    window.addEventListener('resize', resize)
    if (!mobileRef.current) {
      window.addEventListener('mousemove', onMouse, { passive: true })
    }
    document.addEventListener('visibilitychange', onVisibility)

    const mobile = isMobile()
    const CONNECTION_DIST = mobile ? 90 : 130
    const CONNECTION_DIST_SQ = CONNECTION_DIST * CONNECTION_DIST
    const curveCount = mobile ? 2 : 6
    const curveStep = mobile ? 6 : 4
    const dotStep = mobile ? 48 : 36
    const maxStreakers = mobile ? 2 : 6
    const maxRipples = mobile ? 2 : 4

    const render = (time) => {
      if (!activeRef.current || document.hidden) {
        frameRef.current = null
        return
      }

      const { w, h } = dimsRef.current
      if (w === 0 || h === 0) {
        frameRef.current = requestAnimationFrame(render)
        return
      }

      const t = time * 0.001
      const mouse = mouseRef.current

      mouse.x += (mouse.tx - mouse.x) * 0.07
      mouse.y += (mouse.ty - mouse.y) * 0.07
      const mx = mouse.x
      const my = mouse.y

      ctx.fillStyle = '#fff5f5'
      ctx.fillRect(0, 0, w, h)

      // Dot grid with subtle plus marks
      ctx.fillStyle = 'rgba(148,163,184,0.07)'
      ctx.beginPath()
      for (let gx = dotStep; gx < w; gx += dotStep) {
        for (let gy = dotStep; gy < h; gy += dotStep) {
          ctx.moveTo(gx + 0.8, gy)
          ctx.arc(gx, gy, 0.8, 0, TWO_PI)
        }
      }
      ctx.fill()

      // Plus-mark accents at wider intervals
      ctx.strokeStyle = 'rgba(148,163,184,0.06)'
      ctx.lineWidth = 0.6
      const plusStep = dotStep * 3
      for (let gx = plusStep; gx < w; gx += plusStep) {
        for (let gy = plusStep; gy < h; gy += plusStep) {
          ctx.beginPath()
          ctx.moveTo(gx - 3, gy)
          ctx.lineTo(gx + 3, gy)
          ctx.moveTo(gx, gy - 3)
          ctx.lineTo(gx, gy + 3)
          ctx.stroke()
        }
      }

      // Floating orbs
      const orbs = orbsRef.current
      for (let i = 0; i < orbs.length; i++) {
        const orb = orbs[i]
        orb.x += orb.vx
        orb.y += orb.vy
        orb.pulsePhase += 0.012
        if (orb.x < -orb.radius) orb.x = w + orb.radius
        else if (orb.x > w + orb.radius) orb.x = -orb.radius
        if (orb.y < -orb.radius) orb.y = h + orb.radius
        else if (orb.y > h + orb.radius) orb.y = -orb.radius

        const pf = 1 + Math.sin(orb.pulsePhase) * 0.15
        const r = orb.radius * pf
        const ox = orb.x + mx * 20
        const oy = orb.y + my * 16

        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, r)
        grad.addColorStop(0, `hsla(${orb.hue}, 80%, 72%, ${(orb.alpha + 0.02) * pf})`)
        grad.addColorStop(0.6, `hsla(${orb.hue}, 75%, 78%, ${orb.alpha * 0.5 * pf})`)
        grad.addColorStop(1, 'transparent')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(ox, oy, r, 0, TWO_PI)
        ctx.fill()
      }

      // Pulsing ripples
      const ripples = ripplesRef.current
      if (Math.random() < 0.008 && ripples.length < maxRipples) {
        ripples.push(createRipple(w, h))
      }
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rip = ripples[i]
        rip.radius += rip.speed
        const life = rip.radius / rip.maxRadius
        const a = rip.alpha * (1 - life)
        if (a <= 0.002) {
          ripples.splice(i, 1)
          continue
        }
        ctx.beginPath()
        ctx.arc(rip.x + mx * 8, rip.y + my * 6, rip.radius, 0, TWO_PI)
        ctx.strokeStyle = `hsla(${rip.hue}, 70%, 68%, ${a})`
        ctx.lineWidth = 1.2 * (1 - life * 0.5)
        ctx.stroke()
      }

      // Floating diamonds
      const diamonds = diamondsRef.current
      for (let i = 0; i < diamonds.length; i++) {
        const d = diamonds[i]
        d.x += d.vx
        d.y += d.vy
        d.rotation += d.rotSpeed
        if (d.x < -30) d.x = w + 30
        else if (d.x > w + 30) d.x = -30
        if (d.y < -30) d.y = h + 30
        else if (d.y > h + 30) d.y = -30

        const dx = d.x + mx * 14
        const dy = d.y + my * 11
        const s = d.size

        ctx.save()
        ctx.translate(dx, dy)
        ctx.rotate(d.rotation)
        ctx.beginPath()
        ctx.moveTo(0, -s)
        ctx.lineTo(s * 0.6, 0)
        ctx.lineTo(0, s)
        ctx.lineTo(-s * 0.6, 0)
        ctx.closePath()
        ctx.strokeStyle = `hsla(${d.hue}, 65%, 70%, ${d.alpha})`
        ctx.lineWidth = 0.8
        ctx.stroke()
        ctx.restore()
      }

      // Hex dot accents (small hollow hexagons)
      const hexDots = hexDotsRef.current
      for (let i = 0; i < hexDots.length; i++) {
        const hd = hexDots[i]
        hd.rotation += hd.rotSpeed
        hd.pulsePhase += 0.02
        const pa = hd.alpha * (0.7 + Math.sin(hd.pulsePhase) * 0.3)
        const hx = hd.x + mx * 10
        const hy = hd.y + my * 8
        const s = hd.size

        ctx.save()
        ctx.translate(hx, hy)
        ctx.rotate(hd.rotation)
        ctx.beginPath()
        for (let v = 0; v < 6; v++) {
          const angle = (TWO_PI / 6) * v - Math.PI / 6
          const px = Math.cos(angle) * s
          const py = Math.sin(angle) * s
          if (v === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.closePath()
        ctx.strokeStyle = `rgba(248, 113, 113, ${pa})`
        ctx.lineWidth = 0.7
        ctx.stroke()
        ctx.restore()
      }

      // Rotating rings
      const rings = ringsRef.current
      for (let i = 0; i < rings.length; i++) {
        const ring = rings[i]
        ring.x += ring.vx
        ring.y += ring.vy
        ring.rotation += ring.rotSpeed
        ring.dashPhase += 0.015

        if (ring.x < -60) ring.x = w + 60
        else if (ring.x > w + 60) ring.x = -60
        if (ring.y < -60) ring.y = h + 60
        else if (ring.y > h + 60) ring.y = -60

        const rpx = ring.x + mx * 12
        const rpy = ring.y + my * 10

        ctx.save()
        ctx.translate(rpx, rpy)
        ctx.rotate(ring.rotation)
        const gs = ring.dashPhase % TWO_PI
        ctx.beginPath()
        ctx.arc(0, 0, ring.radius, gs, gs + Math.PI * 1.4)
        ctx.strokeStyle = `rgba(248, 113, 113, ${ring.alpha})`
        ctx.lineWidth = 1
        ctx.stroke()

        // Inner concentric arc
        ctx.beginPath()
        ctx.arc(0, 0, ring.radius * 0.55, gs + Math.PI, gs + Math.PI + Math.PI * 0.9)
        ctx.strokeStyle = `rgba(248, 113, 113, ${ring.alpha * 0.5})`
        ctx.lineWidth = 0.6
        ctx.stroke()
        ctx.restore()
      }

      // Sine curves
      for (let c = 0; c < curveCount; c++) {
        const yBase = h * (0.12 + c * 0.14)
        const amp = 30 + c * 12
        const freq = 0.003 + c * 0.0005
        const speed = t * (0.3 + c * 0.06)
        const parallax = mx * (10 + c * 5) * 0.3

        ctx.beginPath()
        for (let px = 0; px <= w; px += curveStep) {
          const py = yBase +
            Math.sin(px * freq + speed) * amp +
            Math.cos(px * freq * 0.6 + speed * 0.8) * (amp * 0.45) +
            parallax
          if (px === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.strokeStyle = `rgba(248, 113, 113, ${0.055 - c * 0.006})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Streakers
      const streakers = streakersRef.current
      if (Math.random() < 0.018 && streakers.length < maxStreakers) {
        streakers.push(createStreaker(w, h))
      }
      for (let i = streakers.length - 1; i >= 0; i--) {
        const s = streakers[i]
        s.x += s.vx
        s.y += s.vy
        const tailX = s.x - s.vx * s.length * 0.3
        const tailY = s.y - s.vy * s.length * 0.3

        const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY)
        grad.addColorStop(0, `hsla(${s.hue}, 70%, 65%, ${s.alpha})`)
        grad.addColorStop(1, `hsla(${s.hue}, 70%, 65%, 0)`)

        ctx.beginPath()
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(tailX, tailY)
        ctx.strokeStyle = grad
        ctx.lineWidth = s.width
        ctx.stroke()

        if (s.x < -s.length - 40 || s.x > w + s.length + 40 || s.y < -60 || s.y > h + 60) {
          streakers.splice(i, 1)
        }
      }

      // Update nodes
      const nodes = nodesRef.current
      const len = nodes.length
      for (let i = 0; i < len; i++) {
        const node = nodes[i]
        node.driftPhase += 0.008
        node.x += node.vx + Math.sin(node.driftPhase) * node.driftAmp
        node.y += node.vy + Math.cos(node.driftPhase * 0.7) * node.driftAmp
        node.pulse += node.pulseSpeed * 0.016
        if (node.x < 0 || node.x > w) node.vx *= -1
        if (node.y < 0 || node.y > h) node.vy *= -1
        if (node.x < 0) node.x = 0
        else if (node.x > w) node.x = w
        if (node.y < 0) node.y = 0
        else if (node.y > h) node.y = h
      }

      // Pre-compute projected positions
      const projected = new Float64Array(len * 2)
      for (let i = 0; i < len; i++) {
        const node = nodes[i]
        projected[i * 2] = node.x + mx * 25 * node.px
        projected[i * 2 + 1] = node.y + my * 20 * node.px
      }

      // Draw connections
      ctx.lineWidth = 0.6
      ctx.beginPath()
      for (let i = 0; i < len; i++) {
        const ax = projected[i * 2]
        const ay = projected[i * 2 + 1]
        for (let j = i + 1; j < len; j++) {
          const ddx = ax - projected[j * 2]
          const ddy = ay - projected[j * 2 + 1]
          const distSq = ddx * ddx + ddy * ddy
          if (distSq < CONNECTION_DIST_SQ) {
            ctx.moveTo(ax, ay)
            ctx.lineTo(projected[j * 2], projected[j * 2 + 1])
          }
        }
      }
      ctx.strokeStyle = 'rgba(185, 28, 28, 0.1)'
      ctx.stroke()

      // Triangle fills between close triplets (desktop only, sparse)
      if (!mobileRef.current) {
        ctx.fillStyle = 'rgba(248, 113, 113, 0.018)'
        const triDistSq = CONNECTION_DIST_SQ * 0.6
        for (let i = 0; i < len; i += 3) {
          const ax = projected[i * 2]
          const ay = projected[i * 2 + 1]
          for (let j = i + 1; j < len; j += 2) {
            const bx = projected[j * 2]
            const by = projected[j * 2 + 1]
            const dab = (ax - bx) * (ax - bx) + (ay - by) * (ay - by)
            if (dab > triDistSq) continue
            for (let k = j + 1; k < len; k += 2) {
              const cx = projected[k * 2]
              const cy = projected[k * 2 + 1]
              const dac = (ax - cx) * (ax - cx) + (ay - cy) * (ay - cy)
              const dbc = (bx - cx) * (bx - cx) + (by - cy) * (by - cy)
              if (dac < triDistSq && dbc < triDistSq) {
                ctx.beginPath()
                ctx.moveTo(ax, ay)
                ctx.lineTo(bx, by)
                ctx.lineTo(cx, cy)
                ctx.fill()
                break
              }
            }
          }
        }
      }

      // Draw nodes by layer
      for (let layer = 0; layer < 3; layer++) {
        ctx.fillStyle = LAYER_COLORS[layer]
        ctx.beginPath()
        for (let i = 0; i < len; i++) {
          if (nodes[i].layer !== layer) continue
          const r = nodes[i].radius * (1 + Math.sin(nodes[i].pulse) * 0.3)
          const nx = projected[i * 2]
          const ny = projected[i * 2 + 1]
          ctx.moveTo(nx + r, ny)
          ctx.arc(nx, ny, r, 0, TWO_PI)
        }
        ctx.fill()
      }

      // Node highlights
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
      ctx.beginPath()
      for (let i = 0; i < len; i++) {
        const r = nodes[i].radius * (1 + Math.sin(nodes[i].pulse) * 0.3) * 0.4
        ctx.moveTo(projected[i * 2] + r, projected[i * 2 + 1])
        ctx.arc(projected[i * 2], projected[i * 2 + 1], r, 0, TWO_PI)
      }
      ctx.fill()

      // Glow for top-layer nodes on desktop
      if (!mobileRef.current) {
        for (let i = 0; i < len; i++) {
          if (nodes[i].layer !== 2) continue
          const r = nodes[i].radius * (1 + Math.sin(nodes[i].pulse) * 0.3) * 3.5
          const nx = projected[i * 2]
          const ny = projected[i * 2 + 1]
          const glow = ctx.createRadialGradient(nx, ny, 0, nx, ny, r)
          glow.addColorStop(0, 'rgba(248, 113, 113, 0.07)')
          glow.addColorStop(1, 'transparent')
          ctx.fillStyle = glow
          ctx.beginPath()
          ctx.arc(nx, ny, r, 0, TWO_PI)
          ctx.fill()
        }
      }

      // Subtle edge vignette
      const vigW = w * 0.35
      const leftVig = ctx.createLinearGradient(0, 0, vigW, 0)
      leftVig.addColorStop(0, 'rgba(255, 245, 245, 0.5)')
      leftVig.addColorStop(1, 'transparent')
      ctx.fillStyle = leftVig
      ctx.fillRect(0, 0, vigW, h)

      const rightVig = ctx.createLinearGradient(w, 0, w - vigW, 0)
      rightVig.addColorStop(0, 'rgba(255, 245, 245, 0.5)')
      rightVig.addColorStop(1, 'transparent')
      ctx.fillStyle = rightVig
      ctx.fillRect(w - vigW, 0, vigW, h)

      frameRef.current = requestAnimationFrame(render)
    }

    frameRef.current = requestAnimationFrame(render)

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      clearTimeout(resizeTimer)
      observer.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [init])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ display: 'block' }}
    />
  )
}

export default memo(HeroCanvas)
