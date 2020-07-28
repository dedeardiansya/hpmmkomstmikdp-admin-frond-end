const routes = [
  {
    path: '*',
    component: () => import('@/layout/DefaultLayout')
  }
]

export default routes
