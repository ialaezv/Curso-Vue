export default {

    name: 'auth',
    component: () => import(/* webpackChunkName: "Auth Layout" */ '@/modules/auth/layouts/AuthLayout.vue'),
    children: [
        {
            path: '',
            name: 'login',
            component: () => import(/* webpackChunkName: "Login View" */ '@/modules/auth/views/Login.vue'),

        },
        {
            path: '/sign_up',
            name: 'sign_up',
            component: () => import(/* webpackChunkName: "Register View" */ '@/modules/auth/views/Register.vue'),
        }
    ]
}