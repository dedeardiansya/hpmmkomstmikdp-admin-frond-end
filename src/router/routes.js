import AuthRequired from '@/utils/AuthRequired'

const routes = [
  {
    path: '/',
    component: () => import('@/layout/DefaultLayout'),
    redirect: '/dashboard',
    beforeEnter: AuthRequired,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/Dashboard')
      },
      {
        path: 'post',
        redirect: '/post/lists'
      },
      {
        path: 'post/lists',
        name: 'post-lists',
        component: () => import('@/views/Post/Lists')
      },
      {
        path: 'post/create',
        name: 'post-create',
        component: () => import('@/views/Post/Create')
      },
      {
        path: 'post/edit',
        name: 'post-edit',
        component: () => import('@/views/Post/Edit')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '*',
    component: () => import('@/layout/DefaultLayout')
  }
]

export default routes
