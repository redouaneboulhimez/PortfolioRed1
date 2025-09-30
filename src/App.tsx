import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

function App() {
  const [activeId, setActiveId] = useState<string>('home')
  const [navHidden, setNavHidden] = useState<boolean>(false)
  const [showTop, setShowTop] = useState<boolean>(false)
  const [showAllProjects, setShowAllProjects] = useState<boolean>(false)
  const [showAllCertifications, setShowAllCertifications] = useState<boolean>(false)
  const lastScrollY = useRef<number>(0)

  useEffect(() => {
    const sectionIds = [
      'home','skills','projects','experience','education','testimonials','pricing','contact'
    ]
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id')
            if (id) setActiveId(id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] }
    )
    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setShowTop(y > 300)
      if (y > lastScrollY.current && y > 80) setNavHidden(true)
      else setNavHidden(false)
      lastScrollY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const id = target.getAttribute('href')?.slice(1)
        if (id) {
          const element = document.getElementById(id)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }
      }
    }
    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <header className={`sticky top-0 z-50 backdrop-blur border-b border-gray-200 bg-white/70 transition-transform ${navHidden ? '-translate-y-full' : 'translate-y-0'}`}>
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="text-lg font-semibold">Redouane Boulhimez</a>
          <ul className="flex gap-5 text-sm">
            <li><a href="#skills" className={`relative pb-1 ${activeId==='skills'?'text-blue-600 font-medium':'hover:text-blue-600'} after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 ${activeId==='skills'?'after:w-full':''}`}>Compétences</a></li>
            <li><a href="#projects" className={`relative pb-1 ${activeId==='projects'?'text-blue-600 font-medium':'hover:text-blue-600'} after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 ${activeId==='projects'?'after:w-full':''}`}>Projets</a></li>
            <li><a href="#certifications" className={`relative pb-1 ${activeId==='certifications'?'text-blue-600 font-medium':'hover:text-blue-600'} after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 ${activeId==='certifications'?'after:w-full':''}`}>Certifications</a></li>
            <li><a href="#experience" className={`relative pb-1 ${activeId==='experience'?'text-blue-600 font-medium':'hover:text-blue-600'} after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 ${activeId==='experience'?'after:w-full':''}`}>Expériences</a></li>
            <li><a href="#education" className={`relative pb-1 ${activeId==='education'?'text-blue-600 font-medium':'hover:text-blue-600'} after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 ${activeId==='education'?'after:w-full':''}`}>Formation</a></li>

            <li><a href="#contact" className={`relative pb-1 ${activeId==='contact'?'text-blue-600 font-medium':'hover:text-blue-600'} after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 ${activeId==='contact'?'after:w-full':''}`}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="home" className="flex-1">
        <motion.section
          className="mx-auto max-w-6xl px-4 py-24"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <motion.p 
                className="text-sm uppercase tracking-widest text-blue-600 font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Portfolio
              </motion.p>
              <motion.h1 
                className="mt-3 text-4xl sm:text-5xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Redouane Boulhimez
              </motion.h1>
              <motion.p 
                className="mt-3 text-xl text-blue-600 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Full-Stack Developer & AI Enthusiast
              </motion.p>
              <motion.div 
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <motion.div 
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span>Open for Work</span>
              </motion.div>
              <motion.p 
                className="mt-4 text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Passionné par le développement web et l'intelligence artificielle, je crée des solutions innovantes qui combinent technologies modernes et intelligence artificielle pour résoudre des problèmes complexes.
              </motion.p>
              <motion.div 
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <motion.a 
                  href="#contact" 
                  className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Me Contacter
                </motion.a>
                <motion.a 
                  href="/Copie de Redouane Boulhimez _ LinkedIn (1).pdf" 
                  download
                  className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Télécharger CV
                </motion.a>
              </motion.div>
            </div>
            <motion.div 
              className="mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.div 
                className="relative h-64 w-64 rounded-full border-4 border-blue-600/20 bg-gray-100 overflow-hidden shadow-2xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img
                  src="/WhatsApp Image 2025-09-29 à grr.jpg"
                  alt="Photo de profil de Redouane Boulhimez"
                  className="h-full w-full object-cover"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-500/20 animate-pulse"></div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>


        <motion.section id="skills" className="mx-auto max-w-6xl px-4 py-16" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
          <motion.h2 className="text-2xl font-semibold" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            Compétences
          </motion.h2>
          <motion.div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <motion.div className="group relative rounded-lg border p-4 cursor-pointer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <div className="absolute inset-0 rounded-lg bg-blue-50/60 scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 pointer-events-none"></div>
              <div className="relative z-10">
              <h3 className="font-medium flex items-center gap-2">
                <span className="text-lg">🔧</span>
                Développement
              </h3>
              <p className="mt-2 text-gray-600 text-sm">Python, Java, Spring Boot, Django, React, Angular</p>
              </div>
              <div className="pointer-events-none absolute left-0 top-full mt-3 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-50">
                <div className="w-[360px] rounded-2xl border border-white/20 bg-white/70 backdrop-blur-md shadow-lg p-3">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-50">
                      <img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" className="h-5 w-5" />
                      <span className="text-sm text-gray-700">Python</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-50">
                      <img src="https://cdn.simpleicons.org/java/ED8B00" alt="Java" className="h-5 w-5" onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://cdn.simpleicons.org/openjdk/000000'; }} />
                      <span className="text-sm text-gray-700">Java</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-50">
                      <img src="https://cdn.simpleicons.org/springboot/6DB33F" alt="Spring Boot" className="h-5 w-5" />
                      <span className="text-sm text-gray-700">Spring Boot</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-50">
                      <img src="https://cdn.simpleicons.org/django/092E20" alt="Django" className="h-5 w-5" />
                      <span className="text-sm text-gray-700">Django</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-50">
                      <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="h-5 w-5" />
                      <span className="text-sm text-gray-700">React</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-50">
                      <img src="https://cdn.simpleicons.org/angular/DD0031" alt="Angular" className="h-5 w-5" />
                      <span className="text-sm text-gray-700">Angular</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="group relative rounded-lg border p-4 cursor-pointer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
              <div className="absolute inset-0 rounded-lg bg-blue-50/60 scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 pointer-events-none"></div>
              <div className="relative z-10">
              <h3 className="font-medium flex items-center gap-2">
                <img src="https://cdn.simpleicons.org/docker/2496ED" alt="DevOps" className="h-5 w-5" />
                DevOps
              </h3>
              <p className="mt-2 text-gray-600 text-sm">Docker, Kubernetes, CI/CD</p>
              </div>
              <div className="pointer-events-none absolute left-0 top-full mt-3 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-50">
                <div className="w-[360px] rounded-2xl border border-white/20 bg-white/70 backdrop-blur-md shadow-lg p-3">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-50">
                      <img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" className="h-5 w-5" />
                      <span className="text-sm text-gray-700">Docker</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-50">
                      <img src="https://cdn.simpleicons.org/kubernetes/326CE5" alt="Kubernetes" className="h-5 w-5" />
                      <span className="text-sm text-gray-700">Kubernetes</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-50">
                      <img src="https://cdn.simpleicons.org/githubactions/2088FF" alt="GitHub Actions" className="h-5 w-5" />
                      <span className="text-sm text-gray-700">GitHub Actions</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-50">
                      <img src="https://cdn.simpleicons.org/jenkins/D24939" alt="Jenkins" className="h-5 w-5" />
                      <span className="text-sm text-gray-700">Jenkins</span>
                    </div>
                   
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="group relative rounded-lg border p-4 cursor-pointer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
              <div className="absolute inset-0 rounded-lg bg-blue-50/60 scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 pointer-events-none"></div>
              <div className="relative z-10">
              <h3 className="font-medium flex items-center gap-2">
                <img src="https://cdn.simpleicons.org/mysql/4479A1" alt="Bases de données" className="h-5 w-5" />
                Bases de données
              </h3>
              <p className="mt-2 text-gray-600 text-sm">MySQL, PostgreSQL</p>
              </div>
              <div className="pointer-events-none absolute left-0 top-full mt-3 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-50">
                <div className="w-[360px] rounded-2xl border border-white/20 bg-white/70 backdrop-blur-md shadow-lg p-3">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-50">
                      <img src="https://cdn.simpleicons.org/mysql/4479A1" alt="MySQL" className="h-5 w-5" />
                      <span className="text-sm text-gray-700">MySQL</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-50">
                      <img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="PostgreSQL" className="h-5 w-5" />
                      <span className="text-sm text-gray-700">PostgreSQL</span>
                    </div>
                    
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-50">
                      <img src="https://cdn.simpleicons.org/sqlite/003B57" alt="SQLite" className="h-5 w-5" />
                      <span className="text-sm text-gray-700">SQLite</span>
                    </div>
                    
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-50">
                      <img src="https://cdn.simpleicons.org/prisma/2D3748" alt="Prisma" className="h-5 w-5" />
                      <span className="text-sm text-gray-700">Prisma</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="group relative rounded-lg border p-4 cursor-pointer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
              <div className="absolute inset-0 rounded-lg bg-blue-50/60 scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 pointer-events-none"></div>
              <div className="relative z-10">
              <h3 className="font-medium flex items-center gap-2">
                <img src="https://cdn.simpleicons.org/git/F05032" alt="Outils" className="h-5 w-5" />
                Outils
              </h3>
              <p className="mt-2 text-gray-600 text-sm">Git, Linux, Cloud</p>
              </div>

              <div className="pointer-events-none absolute left-0 top-full mt-3 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-50">
                <div className="w-[360px] rounded-2xl border border-white/20 bg-white/70 backdrop-blur-md shadow-lg p-3">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-50">
                      <img src="https://cdn.simpleicons.org/git/F05032" alt="Git" className="h-5 w-5" />
                      <span className="text-sm text-gray-700">Git</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-50">
                      <img src="https://cdn.simpleicons.org/linux/000000" alt="Linux" className="h-5 w-5" />
                      <span className="text-sm text-gray-700">Linux</span>
                    </div>
                    
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-50">
                      <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub" className="h-5 w-5" />
                      <span className="text-sm text-gray-700">GitHub</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-50">
                      <img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" className="h-5 w-5" />
                      <span className="text-sm text-gray-700">Docker</span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="group relative rounded-lg border p-4 cursor-pointer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7 }}>
              <div className="absolute inset-0 rounded-lg bg-blue-50/60 scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 pointer-events-none"></div>
              <div className="relative z-10">
              <h3 className="font-medium flex items-center gap-2">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/microsoftazure.svg" alt="Cloud" className="h-5 w-5" onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjMDA3OEM0Ii8+Cjwvc3ZnPgo='; }} />
                Cloud
              </h3>
              <p className="mt-2 text-gray-600 text-sm">Azure, VMware ESXi</p>
              </div>
              <div className="pointer-events-none absolute left-0 top-full mt-3 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-50">
                <div className="w-[360px] rounded-2xl border border-white/20 bg-white/70 backdrop-blur-md shadow-lg p-3">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-50">
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/microsoftazure.svg" alt="Azure" className="h-5 w-5" onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjMDA3OEM0Ii8+Cjwvc3ZnPgo='; }} />
                      <span className="text-sm text-gray-700">Azure</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-50">
                      <img src="https://cdn.simpleicons.org/vmware/607078" alt="VMware ESXi" className="h-5 w-5" />
                      <span className="text-sm text-gray-700">VMware ESXi</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section id="projects" className="mx-auto max-w-6xl px-4 py-16" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
          <motion.h2 className="text-2xl font-semibold" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            Projets
          </motion.h2>
          <motion.ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <motion.li className="group relative border rounded-lg p-4 cursor-pointer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <div className="absolute inset-0 rounded-lg bg-blue-50/60 scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 pointer-events-none"></div>
              <div className="relative z-10">
              <h3 className="font-medium">Système de gestion et affichage d'actualités par agences</h3>
              <p className="text-gray-600 text-sm mt-2">Projet académique.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-200">Python</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-200">Django</span>
                <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200">SQLite</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-200">HTML/CSS</span>
              </div>
              </div>
              <div className="pointer-events-none absolute left-0 top-full mt-3 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-50">
                <div className="w-[900px] max-w-[95vw] rounded-2xl border border-white/20 bg-white/70 backdrop-blur-md shadow-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold">Aperçu</h4>
                      <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                        <li>Application de gestion et d’affichage des actualités des agences Redal (Agdal, Ryad, Hassan)</li>
                        <li>Deux modules&nbsp;:</li>
                        <li>Module client (kiosques)&nbsp;: consultation des actualités selon l’agence sélectionnée</li>
                        <li>Module administrateur (back‑office)&nbsp;: gestion des clients, agences et actualités (ajout, modification, suppression)</li>
                        <li>Authentification et inscription sécurisées avec formulaires personnalisés</li>
                        <li>Gestion des médias&nbsp;: affichage des actualités avec images associées</li>
                        <li>Interface réactive et conviviale, adaptée aux différents supports</li>
                        <li>Base de données SQLite intégrée à Django (Python)</li>
                        <li>Diagrammes UML&nbsp;: cas d’utilisation, classes, séquences (authentification, inscription)</li>
                        <li>Tests fonctionnels (navigation, affichage, gestion CRUD des actualités/agences)</li>
                        <li>Documentation complète et gestion du projet versionnée avec Git</li>
                      </ul>
                    </div>
                    <div className="md:border-l md:pl-4 relative flex items-center justify-center">
                      <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} spaceBetween={12} slidesPerView={1} className="w-full max-w-md">
                          <SwiperSlide>
                            <img src="/Screenshot 2024-09-14 130228.png" alt="Redal screenshot 1" className="w-full h-80 object-contain rounded" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src="/Screenshot 2024-09-14 125831.png" alt="Redal screenshot 2" className="w-full h-80 object-contain rounded" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src="/Screenshot 2024-09-14 125952.png" alt="Redal screenshot 3" className="w-full h-80 object-contain rounded" />
                          </SwiperSlide>
                      </Swiper>
                      
                    </div>
                  </div>
                </div>
              </div>
            </motion.li>
            <motion.li className="group relative border rounded-lg p-4 cursor-pointer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
              <div className="absolute inset-0 rounded-lg bg-blue-50/60 scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 pointer-events-none"></div>
              <div className="relative z-10">
              <h3 className="font-medium">Code Quality Analyser with AI</h3>
              <p className="text-gray-600 text-sm mt-2">Analyse qualité de code .</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-200">React</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-200">Tailwind CSS</span>
                <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200">Python</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-200">AI/ML</span>
              </div>
              </div>
              <div className="pointer-events-none absolute left-0 top-full mt-3 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-50">
                <div className="w-[900px] max-w-[95vw] rounded-2xl border border-white/20 bg-white/70 backdrop-blur-md shadow-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold">Aperçu</h4>
                      <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                        <li>Application d’analyse de la qualité du code multi‑langages</li>
                        <li>Analyse Java, C/C++, Python, JavaScript, HTML, CSS</li>
                        <li>Analyse statique avec Semgrep et Pylint (bugs, vulnérabilités, mauvaises pratiques)</li>
                        <li>Suggestions de refactoring via modèles (ChatGPT, CodeBERT)</li>
                        <li>Indicateurs: complexité, couverture tests, conventions, redondances, performances</li>
                        <li>Rapports PDF et HTML clairs et personnalisés</li>
                        <li>UI dynamique avec React + Tailwind CSS</li>
                        <li>Jeux de test et scénarios de validation</li>
                        <li>Documentation complète et gestion projet via Git</li>
                      </ul>
                    </div>
                    <div className="md:border-l md:pl-4 relative flex items-center justify-center">
                      <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} spaceBetween={12} slidesPerView={1} className="w-full max-w-md">
                          <SwiperSlide>
                            <img src="/image.png" alt="CQA screenshot 1" className="w-full h-80 object-contain rounded" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src="/image2.png" alt="CQA screenshot 2" className="w-full h-80 object-contain rounded" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src="/image3.png" alt="CQA screenshot 3" className="w-full h-80 object-contain rounded" />
                          </SwiperSlide>
                      </Swiper>
                      
                    </div>
                  </div>
                </div>
              </div>
            </motion.li>
            <motion.li className="group relative border rounded-lg p-4 cursor-pointer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
              <div className="absolute inset-0 rounded-lg bg-blue-50/60 scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 pointer-events-none"></div>
              <div className="relative z-10">
              <h3 className="font-medium">DevOps • Kubernetes Microservices</h3>
              <p className="text-gray-600 text-sm mt-2">Déploiement de microservices sur Kubernetes.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-200">Kubernetes</span>
                <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200">Docker</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-200">Microservices</span>
                <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200">DevOps</span>
              </div>
              </div>
              <div className="pointer-events-none absolute left-0 top-full mt-3 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-50">
                <div className="w-[900px] max-w-[95vw] rounded-xl border bg-white shadow-md p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold">Aperçu</h4>
                      <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                        <li>Architecture microservices (API, frontend, worker) conteneurisés</li>
                        <li>Déploiement Kubernetes (Deployments, Services, Ingress)</li>
                        <li>CI/CD (GitHub Actions) pour build/push images Docker</li>
                        <li>Observabilité (Prometheus/Grafana) et logs centralisés</li>
                        <li>Scalabilité automatique (HPA) et secrets/configmaps</li>
                      </ul>
                    </div>
                    <div className="md:border-l md:pl-4 relative flex items-center justify-center">
                      <Swiper 
                        modules={[Navigation, Pagination]} 
                        navigation={true}
                        pagination={{ clickable: true }} 
                        spaceBetween={12} 
                        slidesPerView={1} 
                        className="w-full max-w-md"
                      >
                          <SwiperSlide>
                            <img src="/WhatsApp Image 2025-06-25 à 19.55.58_57ce0d61.jpg" alt="Kubernetes project screenshot 1" className="w-full h-80 object-contain rounded" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src="/WhatsApp Image 2025-06-25 à 19.56.00_13e513d3.jpg" alt="Kubernetes project screenshot 2" className="w-full h-80 object-contain rounded" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src="/WhatsApp Image 2025-06-25 à 19.56.00_97b69b7e.jpg" alt="Kubernetes project screenshot 3" className="w-full h-80 object-contain rounded" />
                          </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </motion.li>
            <motion.li className="group relative border rounded-lg p-4 cursor-pointer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
              <div className="absolute inset-0 rounded-lg bg-blue-50/60 scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 pointer-events-none"></div>
              <div className="relative z-10">
              <h3 className="font-medium">ESXi • VM Ubuntu</h3>
              <p className="text-gray-600 text-sm mt-2">Virtualisation avec VMware ESXi et déploiement d'une VM Ubuntu.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-200">VMware ESXi</span>
                <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200">Ubuntu</span>
                <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200">Virtualisation</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-200">Linux</span>
              </div>
              </div>
              <div className="pointer-events-none absolute left-0 top-full mt-3 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-50">
                <div className="w-[900px] max-w-[95vw] rounded-xl border bg-white shadow-md p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold">Aperçu</h4>
                      <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                        <li>Installation et configuration d'un hyperviseur VMware ESXi</li>
                        <li>Création d'une VM Ubuntu Server avec ressources dédiées</li>
                        <li>Configuration réseau (vSwitch, port groups) et accès SSH</li>
                        <li>Snapshots, templates et bonnes pratiques de gestion</li>
                        <li>Durcissement sécurité de la VM et mises à jour</li>
                      </ul>
                    </div>
                    <div className="md:border-l md:pl-4 relative flex items-center justify-center">
                      <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} spaceBetween={12} slidesPerView={1} className="w-full max-w-md">
                          <SwiperSlide>
                            <img src="https://cdn.simpleicons.org/ubuntu/E95420" alt="Ubuntu" className="w-full h-80 object-contain rounded" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src="https://cdn.simpleicons.org/vmware/607078" alt="VMware ESXi" className="w-full h-80 object-contain rounded" />
                          </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </motion.li>
            
            {/* Additional Projects - Show when expanded */}
            {showAllProjects && (
              <>
                <li className="group relative border rounded-lg p-4 cursor-pointer">
                  <div className="absolute inset-0 rounded-lg bg-blue-50/60 scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 pointer-events-none"></div>
                  <div className="relative z-10">
                    <h3 className="font-medium">Ultrabolic Labs – Site e-commerce fitness</h3>
                    <p className="text-gray-600 text-sm mt-2">Plateforme e-commerce spécialisée dans le fitness et la nutrition.</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-200">React</span>
                      <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-200">Tailwind CSS</span>
                      <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200">E-commerce</span>
                      <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-200">JavaScript</span>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute left-0 top-full mt-3 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-50">
                    <div className="w-[900px] max-w-[95vw] rounded-2xl border border-white/20 bg-white/70 backdrop-blur-md shadow-lg p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-semibold">Aperçu</h4>
                          <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                            <li>Plateforme e-commerce complète pour produits fitness et nutrition</li>
                            <li>Interface utilisateur moderne avec React et Tailwind CSS</li>
                            <li>Système de panier et de commandes en temps réel</li>
                            <li>Gestion des stocks et des produits avec base de données</li>
                            <li>Authentification sécurisée et gestion des profils utilisateurs</li>
                            <li>Paiement intégré avec Stripe et autres méthodes</li>
                            <li>Dashboard administrateur pour la gestion des commandes</li>
                            <li>Optimisation SEO et performance pour le référencement</li>
                            <li>Design responsive adapté mobile et desktop</li>
                          </ul>
                        </div>
                        <div className="md:border-l md:pl-4 relative flex items-center justify-center">
                          <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} spaceBetween={12} slidesPerView={1} className="w-full max-w-md">
                            <SwiperSlide>
                              <img src="/Capture d'écran 2025-09-03 223629.png" alt="Ultrabolic Labs screenshot 1" className="w-full h-80 object-contain rounded" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src="/Capture d'écran 2025-09-03 223926.png" alt="Ultrabolic Labs screenshot 2" className="w-full h-80 object-contain rounded" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src="/Capture d'écran 2025-09-03 224001.png" alt="Ultrabolic Labs screenshot 3" className="w-full h-80 object-contain rounded" />
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="group relative border rounded-lg p-4 cursor-pointer">
                  <div className="absolute inset-0 rounded-lg bg-blue-50/60 scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 pointer-events-none"></div>
                  <div className="relative z-10">
                    <h3 className="font-medium">AI ChatBot avec React</h3>
                    <p className="text-gray-600 text-sm mt-2">Assistant virtuel intelligent avec interface moderne.</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-200">React</span>
                      <span className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded-full border border-green-200">OpenAI API</span>
                      <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200">Node.js</span>
                      <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-200">AI/ML</span>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute left-0 top-full mt-3 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-50">
                    <div className="w-[900px] max-w-[95vw] rounded-2xl border border-white/20 bg-white/70 backdrop-blur-md shadow-lg p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-semibold">Aperçu</h4>
                          <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                            <li>ChatBot intelligent utilisant l'API OpenAI GPT</li>
                            <li>Interface de chat moderne avec React et Tailwind CSS</li>
                            <li>Gestion des conversations en temps réel</li>
                            <li>Intégration API sécurisée avec gestion des erreurs</li>
                            <li>Personnalisation des réponses selon le contexte</li>
                            <li>Interface responsive et intuitive</li>
                          </ul>
                        </div>
                        <div className="md:border-l md:pl-4 relative flex items-center justify-center">
                          <div className="w-full h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                              </div>
                              <p className="text-gray-600 font-medium">AI ChatBot Interface</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="group relative border rounded-lg p-4 cursor-pointer">
                  <div className="absolute inset-0 rounded-lg bg-blue-50/60 scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 pointer-events-none"></div>
                  <div className="relative z-10">
                    <h3 className="font-medium">Task Manager avec Firebase</h3>
                    <p className="text-gray-600 text-sm mt-2">Application de gestion de tâches collaborative.</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-200">React</span>
                      <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs rounded-full border border-orange-200">Firebase</span>
                      <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200">Real-time</span>
                      <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-200">Collaboration</span>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute left-0 top-full mt-3 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-50">
                    <div className="w-[900px] max-w-[95vw] rounded-2xl border border-white/20 bg-white/70 backdrop-blur-md shadow-lg p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-semibold">Aperçu</h4>
                          <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                            <li>Application de gestion de tâches en temps réel</li>
                            <li>Authentification et gestion des utilisateurs avec Firebase</li>
                            <li>Collaboration en équipe avec partage de tâches</li>
                            <li>Synchronisation automatique des données</li>
                            <li>Interface drag-and-drop pour organiser les tâches</li>
                            <li>Notifications push et email pour les deadlines</li>
                          </ul>
                        </div>
                        <div className="md:border-l md:pl-4 relative flex items-center justify-center">
                          <div className="w-full h-80 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                              </div>
                              <p className="text-gray-600 font-medium">Task Management Dashboard</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="group relative border rounded-lg p-4 cursor-pointer">
                  <div className="absolute inset-0 rounded-lg bg-blue-50/60 scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 pointer-events-none"></div>
                  <div className="relative z-10">
                    <h3 className="font-medium">Weather App avec API</h3>
                    <p className="text-gray-600 text-sm mt-2">Application météo avec prévisions détaillées.</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-200">React</span>
                      <span className="px-2 py-1 bg-yellow-50 text-yellow-600 text-xs rounded-full border border-yellow-200">Weather API</span>
                      <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200">Geolocation</span>
                      <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-200">Responsive</span>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute left-0 top-full mt-3 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-50">
                    <div className="w-[900px] max-w-[95vw] rounded-2xl border border-white/20 bg-white/70 backdrop-blur-md shadow-lg p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-semibold">Aperçu</h4>
                          <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                            <li>Application météo avec prévisions 7 jours</li>
                            <li>Intégration API météo avec géolocalisation</li>
                            <li>Interface moderne avec animations météo</li>
                            <li>Recherche par ville et géolocalisation automatique</li>
                            <li>Données en temps réel et mise à jour automatique</li>
                            <li>Design responsive adapté mobile et desktop</li>
                          </ul>
                        </div>
                        <div className="md:border-l md:pl-4 relative flex items-center justify-center">
                          <div className="w-full h-80 bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                </svg>
                              </div>
                              <p className="text-gray-600 font-medium">Weather Dashboard</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </>
            )}
          </motion.ul>
          
          {/* View All Projects Button */}
          <div className="mt-8 text-center">
            <motion.button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAllProjects ? 'Voir Moins de Projets' : 'Voir Tous les Projets'}
              <span className="ml-2">
                {showAllProjects ? '↑' : '↓'}
              </span>
            </motion.button>
          </div>
        </motion.section>

        <motion.section id="certifications" className="mx-auto max-w-6xl px-4 py-16" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold">Certifications</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="https://www.coursera.org/account/accomplishments/verify/C6RG08062K0O" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg border p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <img src="https://cdn.simpleicons.org/google/4285F4" alt="Google" className="w-10 h-10" onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzQyODVGNCIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5HPC90ZXh0Pgo8L3N2Zz4K'; }} />
                </div>
                <div>
                  <h3 className="font-semibold">Introduction to Git and GitHub</h3>
                  <p className="text-sm text-gray-600">Google</p>
                  <p className="text-xs text-gray-500 mt-1">Avril 2025</p>
                </div>
              </div>
            </a>

            <a href="https://www.coursera.org/account/accomplishments/verify/NAV6R4QUZVVS" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg border p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <img src="https://cdn.simpleicons.org/microsoftazure/0078D4" alt="Azure" className="w-10 h-10" onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzAwNzhENCIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BPC90ZXh0Pgo8L3N2Zz4K'; }} />
                </div>
                <div>
                  <h3 className="font-semibold">Virtual Networks in Azure</h3>
                  <p className="text-sm text-gray-600">Whizlabs</p>
                  <p className="text-xs text-gray-500 mt-1">Avril 2025</p>
                </div>
              </div>
            </a>

            <a href="https://www.coursera.org/account/accomplishments/verify/JFE0PMSC2FWR" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg border p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                  <img src="https://cdn.simpleicons.org/java/ED8B00" alt="Java" className="w-10 h-10" onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iI0VEOEIwMCIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5KPC90ZXh0Pgo8L3N2Zz4K'; }} />
                </div>
                <div>
                  <h3 className="font-semibold">Introduction to Java and Object-Oriented Programming</h3>
                  <p className="text-sm text-gray-600">University of Pennsylvania</p>
                  <p className="text-xs text-gray-500 mt-1">Novembre 2024</p>
                </div>
              </div>
            </a>

            <a href="https://www.coursera.org/account/accomplishments/verify/R4BBUI3BI7GB" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg border p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <img src="https://cdn.simpleicons.org/meta/0467DF" alt="Meta" className="w-10 h-10" onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzA0NjdERiIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NPC90ZXh0Pgo8L3N2Zz4K'; }} />
                </div>
                <div>
                  <h3 className="font-semibold">React Basics</h3>
                  <p className="text-sm text-gray-600">Meta</p>
                  <p className="text-xs text-gray-500 mt-1">Novembre 2024</p>
                </div>
              </div>
            </a>

            <a href="https://www.coursera.org/account/accomplishments/verify/VYAPNPDX8HWM" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg border p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                  <img src="https://cdn.simpleicons.org/duke/001A57" alt="Duke" className="w-10 h-10" onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzAwMUE1NyIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EPC90ZXh0Pgo8L3N2Zz4K'; }} />
                </div>
                <div>
                  <h3 className="font-semibold">Impact Measurement & Management for the SDGs</h3>
                  <p className="text-sm text-gray-600">Duke University</p>
                  <p className="text-xs text-gray-500 mt-1">Mai 2024</p>
                </div>
              </div>
            </a>

            <a href="https://www.coursera.org/account/accomplishments/verify/H4GKTGF9LC3K" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg border p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                  <img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-semibold">Programming for Everybody (Getting Started with Python)</h3>
                  <p className="text-sm text-gray-600">University of Michigan</p>
                  <p className="text-xs text-gray-500 mt-1">Mai 2024</p>
                </div>
              </div>
            </a>

            {/* Additional Certifications - Show when expanded */}
            {showAllCertifications && (
              <>

                <a href="https://www.coursera.org/account/accomplishments/verify/LUGMKBUDWK2A" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg border p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                      <img src="https://cdn.simpleicons.org/hongkonguniversity/FF6B35" alt="HKUST" className="w-10 h-10" onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iI0ZGNkIzNSIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IPC90ZXh0Pgo8L3N2Zz4K'; }} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Software Engineering: Software Design and Project Management</h3>
                      <p className="text-sm text-gray-600">The Hong Kong University of Science and Technology</p>
                      <p className="text-xs text-gray-500 mt-1">Mai 2024</p>
                    </div>
                  </div>
                </a>

                <a href="https://www.coursera.org/account/accomplishments/verify/S2ELFRLRQKN4" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg border p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                      <img src="https://cdn.simpleicons.org/linux/FCC624" alt="Linux" className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="font-semibold">The Unix Workbench</h3>
                      <p className="text-sm text-gray-600">Johns Hopkins University</p>
                      <p className="text-xs text-gray-500 mt-1">Mai 2024</p>
                    </div>
                  </div>
                </a>

                <a href="https://coursera.org/account/accomplishments/records/RCS8D9V9C2UF" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg border p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                      <img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML5" className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Introduction to HTML5</h3>
                      <p className="text-sm text-gray-600">University of Michigan</p>
                      <p className="text-xs text-gray-500 mt-1">Avril 2024</p>
                    </div>
                  </div>
                </a>

                <a href="https://www.coursera.org/account/accomplishments/verify/CMCGCYFQ8P9S" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg border p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                      <img src="https://cdn.simpleicons.org/linux/FCC624" alt="Linux" className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Linux Fundamentals</h3>
                      <p className="text-sm text-gray-600">LearnQuest</p>
                      <p className="text-xs text-gray-500 mt-1">Mars 2024</p>
                    </div>
                  </div>
                </a>

                <a href="https://www.coursera.org/account/accomplishments/verify/XLH8ALKAF6K4" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg border p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Interactivity with JavaScript</h3>
                      <p className="text-sm text-gray-600">University of Michigan</p>
                      <p className="text-xs text-gray-500 mt-1">Janvier 2024</p>
                    </div>
                  </div>
                </a>

                <a href="https://www.coursera.org/account/accomplishments/verify/HEPX8EBXH4R5" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg border p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                      <img src="https://cdn.simpleicons.org/cplusplus/00599C" alt="C++" className="w-10 h-10" />
                    </div>
      <div>
                      <h3 className="font-semibold">Introduction à la programmation orientée objet (en C++)</h3>
                      <p className="text-sm text-gray-600">École Polytechnique Fédérale de Lausanne</p>
                      <p className="text-xs text-gray-500 mt-1">Janvier 2024</p>
                    </div>
                  </div>
                </a>

                <a href="https://www.coursera.org/account/accomplishments/verify/R7B6XL2SEHFQ" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg border p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="font-semibold">HTML, CSS, and Javascript for Web Developers</h3>
                      <p className="text-sm text-gray-600">Johns Hopkins University</p>
                      <p className="text-xs text-gray-500 mt-1">Mai 2023</p>
                    </div>
                  </div>
                </a>
              </>
            )}
          </div>
          
          {/* View All Certifications Button */}
          <div className="mt-8 text-center">
            <motion.button
              onClick={() => setShowAllCertifications(!showAllCertifications)}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAllCertifications ? 'Voir Moins de Certifications' : 'Voir Toutes les Certifications'}
              <span className="ml-2">
                {showAllCertifications ? '↑' : '↓'}
              </span>
            </motion.button>
          </div>
        </motion.section>

        <motion.section id="experience" className="mx-auto max-w-6xl px-4 py-16" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold">Expériences</h2>
          <div className="mt-6 border-l pl-6 space-y-6">
            <div className="flex items-start gap-3">
              <img
                src="/dxc.png"
                alt="DXC Technology"
                className="h-12 w-12 mt-1 object-contain"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://cdn.simpleicons.org/dxctechnology/7F3F98'; }}
              />
              <div>
                <h3 className="font-medium">Full Stack Developer</h3>
                <p className="text-gray-600 text-sm">DXC Technology · Stage</p>
                <p className="text-gray-500 text-sm">juil. 2025 – août 2025 · 2 mois</p>
                <p className="text-gray-500 text-sm">Rabat, Rabat‑Salé‑Kénitra, Maroc · Hybride</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <img
                src="/redal.png"
                alt="Redal"
                className="h-12 w-12 mt-1 object-contain"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
              <div>
                <h3 className="font-medium">Full Stack Developer</h3>
                <p className="text-gray-600 text-sm">Redal · Stage</p>
                <p className="text-gray-500 text-sm">2023 · 2 mois</p>
                <p className="text-gray-500 text-sm">Rabat, Maroc · Hybride</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="education" className="mx-auto max-w-6xl px-4 py-16" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold">Formation</h2>
          <div className="mt-6 border-l pl-6 space-y-6">
            <div className="flex items-start gap-3">
              <img
                src="/emsi.png"
                alt="EMSI"
                className="h-12 w-12 mt-1 object-contain"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://cdn.simpleicons.org/education/1E40AF'; }}
              />
              <div>
                <h3 className="font-medium">Ingénierie informatique MIAGE</h3>
                <p className="text-gray-600 text-sm">EMSI Rabat · Formation</p>
                <p className="text-gray-500 text-sm">2021 – 2026 · 5 ans</p>
                <p className="text-gray-500 text-sm">Rabat, Maroc · Présentiel</p>
              </div>
            </div>
          </div>
        </motion.section>

        

        <motion.section id="contact" className="mx-auto max-w-6xl px-4 py-16" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
          <motion.h2 className="text-2xl font-semibold" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            Contact
          </motion.h2>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
              <h3 className="text-xl font-semibold mb-6">Envoyez-moi un message</h3>
              <form
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const formData = new FormData(form);
                  const payload = {
                    name: String(formData.get('name') || ''),
                    email: String(formData.get('email') || ''),
                    message: String(formData.get('message') || ''),
                  };
                  try {
                    const endpoint = (import.meta as any).env.VITE_CONTACT_ENDPOINT || 'http://localhost/contact.php';
                    const res = await fetch(endpoint, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(payload),
                    });
                    const json = await res.json();
                    alert(json.ok ? 'Message envoyé avec succès !' : 'Erreur: ' + (json.error || ''));
                    if (json.ok) form.reset();
                  } catch (err) {
                    alert('Erreur réseau. Veuillez réessayer.');
                  }
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                    <input 
                      name="name" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                      placeholder="Votre nom" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      name="email" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                      placeholder="votre@email.com" 
                      type="email" 
                      required 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    name="message" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" 
                    placeholder="Décrivez votre projet ou votre message..." 
                    rows={6} 
                    required 
                  />
                </div>
                <motion.button 
                  className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Envoyer le message
                </motion.button>
              </form>
            </motion.div>
            
            <motion.div className="space-y-8" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
              <div>
                <h3 className="text-xl font-semibold mb-6">Informations de contact</h3>
                <div className="space-y-6">
                  <motion.div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors" whileHover={{ scale: 1.02 }}>
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <img src="https://cdn.simpleicons.org/gmail/EA4335" alt="Email" className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:redouaneboulhimez2003@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                        redouaneboulhimez2003@gmail.com
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors" whileHover={{ scale: 1.02 }}>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <img src="/linkedin.png" alt="LinkedIn" className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/redouane-boulhimez/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">
                        linkedin.com/in/redouane-boulhimez
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors" whileHover={{ scale: 1.02 }}>
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub" className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">GitHub</p>
                      <a href="https://github.com/redouaneboulhimez" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">
                        github.com/redouaneboulhimez
        </a>
      </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 h-10 w-10 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-600">
          © {new Date().getFullYear()} Redouane Boulhimez
        </div>
      </footer>
      </div>
  )
}

export default App
