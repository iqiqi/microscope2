Template.postsList.helpers({
  posts:()=> Posts.find({})
});


// 两种订阅的写法
// Template.postsList.onCreated(()=>{
	// Template.instance().subscribe('posts');
// });
// Template.postsList.onCreated(function postsListCreated(){
	// this.subscribe('posts');
// });