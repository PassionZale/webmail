export default (router) => router.map({
    '/': {
        name: 'index',
        component: require('./components/mail_list/index.vue'),
        subRoutes: {
            '/': {
                name: 'inbox-list',
                component: require('./components/mail_list/inbox.vue'),
            },
            '/sent-list': {
                name: 'sent-list',
                component: require('./components/mail_list/sent.vue'),
            },
            '/draft-list': {
                name: 'draft-list',
                component: require('./components/mail_list/draft.vue'),
            },
        },

    },
    'search': {
        name: 'search',
        component: require('./components/search/search.vue'),
    },
    'detail': {
        name: 'detail',
        component: require('./components/mail_detail/detail.vue')
    }
});

