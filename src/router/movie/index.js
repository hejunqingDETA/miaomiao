export default {
    path: '/movie',
    component: ()=>import('@/views/Movie'),
    name: 'movie',
    children: [
      {
        path: 'city',
        component: () => import('@/components/City'),
      },
      {
        path: 'comingsoon',
        component: () => import('@/components/ComingSoon'),
      },
      {
        path: 'nowplaying',
        component: () => import('@/components/NowPlaying'),
        query:{
            t:Date.now()
        }
      },
      {
        path: 'search',
        component: () => import('@/components/Search'),
      },
      {
        // path: '/movie',
        // redirect: '/movie/nowplaying'

        path: '/movie',
        redirect: to => {
            return '/movie/nowplaying'
        }
      }
    ]
}