Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn:()=>Meteor.subscribe('posts')
});

// 路由到帖子列表
Router.route('/', {name: 'postsList'});
// 动态路由到帖子页面
Router.route('/posts/:_id', {
	name:'postPage',
	data() { return Posts.findOne(this.params._id); }
});

// 
Router.onBeforeAction('dataNotFound', {only: 'postPage'});