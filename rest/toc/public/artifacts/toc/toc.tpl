<template id="blog-toc">
	<ul class="is-list is-variant-toc">
		<li v-for="header in headers" class="is-row is-variant-toc" :class="'toc-item-' + header.depth">
			<button @click="jumpTo(header)" class="is-button is-variant-toc" :class="getChildComponentClasses('toc-button-' + header.depth)">{{header.content}}</button>
		</li>
	</ul>
</template>