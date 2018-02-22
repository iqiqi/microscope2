Template.postItem.helpers({
	domain() {
		const a = document.createElement('a');
		console.log(this.title);
		console.log(this.url);
		a.href = this.url;
		return a.hostname;
	}
});