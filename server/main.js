import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if(Posts.find().count()===0) {
		Posts.insert({
			title:'Introducing Telescope',
			url:'http://sachagreif.com/introducing-telescope/'
		});
		
		Posts.insert({
			title:'淘宝网',
			url:'https://www.taobao.com'
		});
		
		Posts.insert({
			title:'腾讯网',
			url:'https://www.qq.com'
		});
		
		Posts.insert({
			title:'百度网',
			url:'https://www.baidu.com'
		});
  }
  
  Meteor.publish('posts',function() {
	  return Posts.find({});
  });
});
