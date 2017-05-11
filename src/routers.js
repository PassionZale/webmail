export default (router) => router.map({
    '/': {
        name: 'index',
        component: require('./components/list/index.vue'),
        subRoutes: {
            '/': {
                name: 'inbox-list',
                component: require('./components/list/inbox.vue'),
            },
            '/sent-list': {
                name: 'sent-list',
                component: require('./components/list/sent.vue'),
            },
            '/draft-list': {
                name: 'draft-list',
                component: require('./components/list/draft.vue'),
            },
        },

    },
    'search': {
        name: 'search',
        component: require('./components/search/search.vue'),
    },
});

