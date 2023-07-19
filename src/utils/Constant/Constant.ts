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

export const STUDY = [
  {
    title: '우아한 테크코스 스터디',
    duration: '2022.10 ~ 2023.2',
    details: [
      '서로 코드리뷰를 하면서 과제구현에 대해서 신경 쓴 부분을 공유하며 자유롭게 스터디.',
      '위의 과정에 관련 초기룰 설정, 스터디가 적극적으로 진행되도록 팀 리드',
      '스터디 내에서 3명의 최종 합격자',
      '코스 종료 후 모던 자바스크립트 딥다이브 스터디',
    ],
    links: [
      {
        title: '스터디 관련 GitHub Repository',
        link: 'https://github.com/Wooteco-JS-study/Modern_Javascript_Teco',
      },
      {
        title: '코스 이후 회고글',
        link: 'https://velog.io/@endmoseung/%EC%9A%B0%EC%95%84%ED%95%9C-%ED%85%8C%ED%81%AC%EC%BD%94%EC%8A%A4-5%EA%B8%B0-4%EC%A3%BC%EC%B0%A8-%EB%A6%AC%EB%B7%B0-%EC%A0%84%EC%B2%B4%ED%9A%8C%EA%B3%A0#3-%EB%8A%90%EB%82%80%EC%A0%90',
      },
    ],
  },
  {
    title: '서울 프론트엔드 스터디',
    duration: '2023.5 ~ 진행중',
    details: [
      '스터디 기간동안 한 책을 정해 스터디원당 주제를 할당하고 해당 내용을 발표 및 토의',
      '위의 과정에 관련 초기룰 설정, 스터디가 적극적으로 진행되도록 팀 리드',
      '스터디 내용 실제 프로젝트에 적용',
    ],
    links: [
      {
        title: '스터디 관련 GitHub Repository',
        link: 'https://github.com/FrontendStudySeoul',
      },
      {
        title: '스터디 진행 회고글',
        link: 'https://velog.io/@endmoseung/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%8A%A4%ED%84%B0%EB%94%94-%ED%9A%8C%EA%B3%A0',
      },
    ],
  },
]

export const PRESENTATION = [
  {
    title: '구름톤 네트워킹 스피커',
    details: [
      '구름톤 1~4기 네트워킹 행사에서 스피킹',
      '주제 : 구름톤4기에서 좋은 팀문화를 만들어 최우수상을 수상했던 경험',
    ],
    links: [
      {
        title: '발표 영상',
        link: 'https://www.youtube.com/watch?v=kZKVnY41tCs&t=1s',
      },
    ],
  },
  {
    title: '테오콘 스피커',
    details: [
      '테오콘이라는 컨퍼런스에서 스태프 및 스피커',
      '주제 : 구름톤4기에서 좋은 팀문화를 만들어 최우수상을 수상했던 경험',
    ],
    links: [
      {
        title: '발표 영상',
        link: 'https://www.youtube.com/watch?v=j-sQeQibT4U',
      },
      {
        title: '테오콘 회고글',
        link: 'https://velog.io/@endmoseung/%ED%85%8C%EC%98%A4%EC%BD%98-%EC%8A%A4%ED%83%9C%ED%94%84%EC%8A%A4%ED%94%BC%EC%BB%A4-%ED%9B%84%EA%B8%B0',
      },
    ],
  },
]
