module.exports =

	siteName: 'Gridsome'

	plugins: [
		...(require './localPluginsHelper') [
			'sass-patch'
			use: 'whitelist'
			options: [
				/\.(s?c|sa)ss$/
				/^vuetify/
			]
			'coffeescript'
			'vuetify'
			use: 'commerce'
			options: apiKey: 'pk_test_17906550bd7c7acc2325b68138714acb792a9dd2bcc1b'
		]
		'gridsome-plugin-pug'
		use: '@gridsome/source-filesystem'
		options:
			path: 'blog/**/*.md'
			typeName: 'Post'
		'gridsome-plugin-netlify-cms'
		# '~/plugins/js/print-webpack-config'
	]

	transformers:
		remark:
			externalLinksTarget: '_blank'
			externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
			anchorClassName: 'icon icon-link'
			plugins: []
		netlify: {}