'use strict';

module.exports = {
	app: {
		title: 'Project Client Skeleton',
		description: 'Web Client Skeleton',
		keywords: 'skeleton, killian and partners'
	},
    db: 'mongodb://localhost/databank',
    mailer: {
        from: process.env.MAILER_FROM || 'MAILER_FROM',
        options: {
            service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
            auth: {
                user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
                pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
            }
        }
    },
	port: process.env.PORT || 1337,
	templateEngine: 'swig',
	sessionSecret: 'KPWPS',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/vendors/bootstrap/dist/css/bootstrap.css',
				'public/vendors/bootstrap/dist/css/bootstrap-theme.css',
			],
			js: [
				'public/vendors/angular/angular.js',
				'public/vendors/angular-resource/angular-resource.js',
				'public/vendors/angular-cookies/angular-cookies.js',
				'public/vendors/angular-animate/angular-animate.js',
				'public/vendors/angular-touch/angular-touch.js',
				'public/vendors/angular-sanitize/angular-sanitize.js',
				'public/vendors/angular-ui-router/release/angular-ui-router.js',
				'public/vendors/angular-ui-utils/ui-utils.js',
				'public/vendors/angular-bootstrap/ui-bootstrap-tpls.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
//			'public/config.js',
//			'public/application.js',
            'public/app.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/vendors/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};