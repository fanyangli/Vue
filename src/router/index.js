import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
			// 我的班课
      path: '/',
      name: 'Index',
      component: resolve => require(['../components/Index.vue'],resolve)
    },
		{
			// 任务中心
			path:'/task',
			name:'Task',
			component:resolve => require(['../components/Task.vue'],resolve)
		},
		{
			// 库管理
			path:'/lib',
			name:'Lib',
			component:resolve => require(['../components/Lib.vue'],resolve)
		},
		{
			// sunming
			path:'/ucenter',
			name:'UCenter',
			component:resolve => require(['../components/UCenter.vue'],resolve)
		},
		{
			// 新增课程
			path:'/new_course',
			name:'NewCourse',
			component:resolve => require(['../components/NewCourse.vue'],resolve)
		},
		
		{
			//班课详情
			path: '/course/:id',
			name: 'CourseDetail',
			component: resolve => require(['../components/CourseDetail.vue'], resolve)
		},
		{
			// 修改课程
			path:'/gai',
			name:'Gai',
			component:resolve => require(['../components/Gai.vue'], resolve)
		},
  ]
})
