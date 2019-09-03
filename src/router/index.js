import { lazy } from 'react'

// import LotteryHistoryPage from '@/pages/Lottery/LotteryHistory'
// import LotteryDetailPage from '@/pages/Lottery/LotteryDetail'
// import LotteryQueryPage from '@/pages/Lottery/LotteryQuery'
// import BeautyImagesPage from '@/pages/BeautyImages'
// import SpacePage from '@/pages/Space'

const LotteryHistoryPage = lazy(() => import('@/pages/Lottery/LotteryHistory'))
const LotteryDetailPage =  lazy(() => import('@/pages/Lottery/LotteryDetail'))
const LotteryQueryPage =  lazy(() => import('@/pages/Lottery/LotteryQuery'))
const BeautyImagesPage =  lazy(() => import('@/pages/BeautyImages'))
const TodoListPage =  lazy(() => import('@/pages/TodoList'))
const SpacePage =  lazy(() => import('@/pages/Space'))


export const routes = {
  default: '/space',
  list: [
    {
      title: '彩票', key: 'lottery', icon: 'barcode',
      children: [
        {
          path: '/lottery/history',
          component: LotteryHistoryPage,
          title: '历史中奖信息',
          key: 'lottery-history',
          icon: 'project'
        },
        {
          path: '/lottery/query',
          component: LotteryQueryPage,
          title: '中奖计算器',
          key: 'lottery-query',
          icon: 'calculator'
        },
        {
          path: '/lottery/detail/:id/:no',
          component:LotteryDetailPage,
          key: 'lottery-detail',
          link: false
        }
      ]
    },
    {
      path: '/beauty-images',
      component: BeautyImagesPage,
      title: '美图推荐',
      key: 'beauty-images',
      icon: 'file-image'
    },
    {
      path: '/todolist',
      component: TodoListPage,
      title: '待办事项',
      key: 'todolist',
      icon: 'block'
    },
    {
      path: '/space',
      component: SpacePage,
      title: '预留空位',
      key: 'space',
      icon: 'border'
    }
  ]
}

export const flatteningRoutes = (() => {
  let { list } = routes
  let flatten = []
  list.forEach(item => {
    if (!item.children) return flatten.push(item)
    flatten = flatten.concat(item.children)
  })
  return {
    default: routes.default,
    list: flatten
  }
})()