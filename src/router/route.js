
import Layout from 'src/pages/layout/layout';


// 不作为main组件子页面展示的页面单独写，如下
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录'
  },
  component: () => import('src/pages/login/login')
};
export const registerRouter = {
  path: '/register',
  name: 'register',
  meta: {
    title: 'Register - 注册'
  },
  component: () => import('src/pages/register/register')
};



// 错误页面
export const errorRouter = {
  path: '/error/:code',
  name: 'error',
  meta: {
    title: 'error'
  },
  component: () =>
    import('src/pages/error/index')
};

// 作为main组件子页面展示  但不在左侧菜单显示的路由卸载otherRoter里
export const otherRouter = {
  path: '',
  name: 'homeRouter',
  redirect: '/home',
  meta: {
    requireAuth: true
  },
  component: Layout,
  children: [
    {
      path: 'home',
      name: 'home',
      title: '首页',
      component: () => import('src/pages/home/home')
    }
  ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
/*  
  {
    path: '/data',
    name: 'data',
    title: '数据管理',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'insert',
        name: 'insert',
        title: '添加数据',
        component: () => import('src/pages/data/insert')
      },
      {
        path: 'delete',
        name: 'delete',
        title: '删除数据',
        component: () => import('src/pages/data/delete')
      }
    ]
  },
*/
  {
    path: '/tasks',
    name: 'tasks',
    title: '任务管理',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'insert',
        name: 'insert',
        title: '添加任务',
        component: () => import('src/pages/tasks/insert')
      },
      {
        path: 'log',
        name: 'log',
        title: '添加任务',
        component: () => import('src/pages/tasks/log')
      },
  
      {
        path: 'delete',
        name: 'delete',
        title: '删除任务',
        component: () => import('src/pages/tasks/delete')
      },
      {
        path: 'result',
        name: 'result',
        title: '任务结果',
        component: () => import('src/pages/tasks/result')
      }
    ]
  },

/*
  {
    path: '/user',
    name: 'user',
    title: '用户管理',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'user_index',
        title: '用户管理',
        component: () => import('src/pages/user/index')
      }
    ]
  },
*/
{
  path: '/models',
  name: 'models',
  title: 'model',
  meta: {
    requireAuth: true
  },
  component: Layout,
  children: [
    {
      path: 'insert',
      name: 'insert',
      title: 'insert',
      component: () => import('src/pages/models/insert')
    }
  ]
},
  {
    path: '/tutorial',
    name: 'tutorial',
    title: '权限管理',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'tutorial_index',
        title: '权限管理',
        component: () => import('src/pages/tutorial/index')
      }
    ]
  },
  {
    path: '/faq',
    name: 'faq',
    title: '日志管理',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'faq_index',
        title: '操作日志',
        component: () => import('src/pages/faq/index')

      }
    ]
  },
  {
    path: '/contact',
    name: 'contact',
    title: '测试',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'contact_index',
        title: '测试',
        component: () => import('src/pages/contact/contact')
      }
    ]
  }
];

export const routers = [
  loginRouter,
  registerRouter,
  errorRouter,
  otherRouter,
  ...appRouter
];
