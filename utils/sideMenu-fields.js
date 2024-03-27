export const SideMenuFields = [
  {
    id: 1,
    title: 'Menu Management',
    items: [
      {
        id: 1,
        icon: 'grid1x2-fill',
        name: 'My Dashboard',
        url: '/user/dashboard'
      },
      {
        id: 2,
        icon: 'chat-square-dots-fill',
        name: 'Messages',
        url: '/user/message'
      },
      {
        id: 3,
        icon: 'bell-fill',
        name: 'Notification',
        url: '/user/notification'
      }
    ]
  },
  {
    id: 2,
    title: 'Job Management',
    items: [
      {
        id: 1,
        icon: 'list-ul',
        name: 'Job List',
        url: '/user/job/list'
      },
      {
        id: 2,
        icon: 'person-square',
        name: 'Job Contract',
        url: '/user/job/contract'
      }
    ]
  },
  {
    id: 3,
    title: 'Resourece Management',
    items: [
      {
        id: 1,
        icon: 'person-circle',
        name: 'Resource List',
        url: '/user/resource/list'
      },
      {
        id: 2,
        icon: 'people-fill',
        name: 'Member Management',
        url: 'member/list'
      },
      {
        id: 3,
        icon: 'person-square',
        name: 'Offer List',
        url: '/user/resource'
      },
      {
        id: 4,
        icon: 'list-ul',
        name: 'Resource Contract'
      }
    ]
  },
  {
    id: 4,
    title: '',
    items: [
      {
        id: 1,
        icon: 'cash',
        name: 'Payment Management'
      },
      {
        id: 2,
        icon: 'exclamation',
        name: 'About Us'
      },
      {
        id: 3,
        icon: 'question',
        name: 'Help'
      },
      {
        id: 3,
        icon: 'list-ul',
        name: 'Service List'
      }
    ]
  }
]
export const SIDEBAR_SETTING = [
  {
    id: 1,
    title: 'Setting',
    items: [
      {
        id: 1,
        icon: 'person-bounding-box',
        name: 'My Info',
        url: '/user/dashboard'
      },
      {
        id: 2,
        icon: 'bell-fill',
        name: 'Notification Setting',
        url: '/user/message/{id}'
      },
      {
        id: 3,
        icon: 'bag-plus-fill',
        name: 'Password & Sercurity',
        url: '/user/notification'
      }
    ]
  },
  {
    id: 2,
    title: '',
    items: [
      // {
      //   id: 1,
      //   icon: 'person-square',
      //   name: 'Contract Management',
      //   url: '/user/job/list'
      // },
      // {
      //   id: 2,
      //   icon: 'aspect-ratio',
      //   name: 'Payment Management',
      //   url: '/user/job/contract'
      // },
      {
        id: 3,
        icon: 'exclamation-circle-fill',
        name: 'About Us',
        url: '/user/job/contract'
      },
      {
        id: 4,
        icon: 'question-circle-fill',
        name: 'Help',
        url: '/user/job/contract'
      },
      {
        id: 5,
        icon: 'list-ul',
        name: 'Service List',
        url: '/user/job/contract'
      }
    ]
  }
]
