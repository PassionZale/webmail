export default (router) => router.map({
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
});

