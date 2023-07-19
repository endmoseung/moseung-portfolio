import Instagram from '/public/assets/Icons/instagram.png'
import LinkedIn from '/public/assets/Icons/linkedin.png'
import Velog from '/public/assets/Icons/velog.png'
import Github from '/public/assets/Icons/github.png'

export const TABS = [
  { title: 'About' as const, link: 'About' as const },
  { title: 'Skills' as const, link: 'Skills' as const },
  { title: 'Work' as const, link: 'Work' as const },
  { title: 'Project' as const, link: 'Project' as const },
  { title: 'Others' as const, link: 'Others' as const },
]

export type TabsOriginType = 'About' | 'Skills' | 'Work' | 'Others' | 'Project'

export type TabsTypeObject = { title: TabsOriginType; link: TabsOriginType }

export type TabsType = TabsTypeObject[]

export const SNS = [
  {
    src: Instagram,
    link: 'https://www.instagram.com/mo___seung_2/',
  },
  { src: Velog, link: 'https://velog.io/@endmoseung' },
  { src: Github, link: 'https://github.com/endmoseung' },
  {
    src: LinkedIn,
    link: 'https://www.linkedin.com/in/%EC%8A%B9%EB%AA%A8-%EA%B9%80-848b2b242/',
  },
]

export const SKILLS = [
  {
    title: 'Frontend' as const,
    sub: ['React', 'Typescript', 'Recoil', 'TailwindCss', 'CSS In Js'] as const,
  },
  {
    title: 'Collaboration' as const,
    sub: ['Slack', 'Git', 'Figma'] as const,
  },
  {
    title: 'CI/CD' as const,
    sub: ['Slack', 'Git', 'Figma'] as const,
  },
]

export const WORK = [
  { description: '이 회사에서 3년 재직했어요.', buttonTitle: '상세 보기' },
  {
    description:
      '디자인 컴포넌트 제작, 사내 서비스 신규 개발과 유지보수, 개발 문화형성(코드리뷰,테크톡,페어프로그래밍)',
    buttonTitle: '상세 보기',
  },
]

export const PROJECTS = [{ githubLink: '', buttonTitle: '상세 보기' }]
