Vue.view("blog-toc", {
	props: {
		content: {
			type: String
		},
		childComponents: {
			type: Object,
			required: false
		}
	},
	computed: {
		headers: function() {
			var parsed = nabu.formatters.markdown.parse(this.content)
				.filter(function(x) {
					if (x.type.match(/^h[0-9]+$/)) {
						x.depth = parseInt(x.type.replace(/h([0-9]+)/, "$1"));
					 	return true;
					}
					return false;
				})
			console.log("headers are", parsed);
			return parsed;
		}
	},
	methods: {
		getChildComponents: function() {
			var childComponents = [{
				title: "Button (h1)",
				name: "toc-button-1",
				component: "button"
			}, {
				title: "Button (h2)",
				name: "toc-button-2",
				component: "button"
			}, {
				title: "Button (h3)",
				name: "toc-button-3",
				component: "button"
			}, {
				title: "Button (h4)",
				name: "toc-button-4",
				component: "button"
			}, {
				title: "Button (h5)",
				name: "toc-button-5",
				component: "button"
			}, {
				title: "Button (h6)",
				name: "toc-button-6",
				component: "button"
			}];
			return childComponents;
		},
		jumpTo: function(header) {
			console.log("jumping to", header);
			var target = document.getElementById(header.linkId);
			var properties = {};
			properties.behavior = "smooth";
			properties.block = "start";
			properties.inline = "nearest";
			target.scrollIntoView(properties);
		}
	}
});