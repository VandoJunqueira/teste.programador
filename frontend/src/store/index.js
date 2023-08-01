import { createStore } from 'vuex'

import { useToast } from "vue-toastification";
import SweetAlert from 'sweetalert2'

const toast = useToast()
const Swal = SweetAlert

// Create a new store instance.
export default createStore({
    state() {
        return {
            authenticated: false,
            user: null,
            cart: JSON.parse(localStorage.getItem('cart')) ?? [],
            toast: [],
            indexPage: 0,
            pageLoading: false,
            toggleMenu: false,
            relatorio: {
                competicao: { titulo: '' },
                categoria: { titulo: '' }
            }
        }
    },
    mutations: {
        storage(state) {
            state.user = JSON.parse(localStorage.user)
        },
        relatorio(state, dados) {
            state.relatorio = dados
        },
        toggleMenu(state, status = null) {
            if (status == null) {
                state.toggleMenu = !state.toggleMenu
            } else {
                state.toggleMenu = status
            }
        },
        user(state, user) {
            state.user = user;
            localStorage.user = JSON.stringify(user);
        },
        authenticated(state) {
            state.authenticated = true;
            localStorage.authenticated = true;
        },
        sair(state) {
            localStorage.clear();
        },
        updateCart(state, item) {
            state.cart = state.cart.filter(i => i.id !== item.id);
            //state.cart = state.cart.filter(i => i.dupla.id !== item.dupla.id);
            console.log(item);
            state.cart.push(item);
            state.cart.sort((a, b) => a.id - b.id)
            localStorage.cart = JSON.stringify(state.cart);

        },
        clearCart(state) {
            //state.cart = [];

            localStorage.removeItem('cart')

        },
        removeCart(state, item) {
            state.cart = state.cart.filter(i => i.id !== item.id);
            localStorage.cart = JSON.stringify(state.cart);
        },
        addToast(state, toast) {
            state.toast.push(toast);
        },
        removeToast(state) {
            state.toast.splice(0, 1);
        },
        setPage(state, index) {
            state.indexPage = index.id;
        },
        setLoading(state, loading) {
            state.pageLoading = loading.status;
        }
    },
    getters: {
        isAuthenticated: state => {
            state.authenticated = localStorage.authenticated ?? false;
            return state.authenticated;
        },
        getUser(state) {
            if (state.user != null) {
                return state.user;
            } else {
                if (localStorage.user) {
                    state.user = JSON.parse(localStorage.user);
                    return state.user;
                }
            }
        },
        getCart(state) {
            if (state.cart != null) {
                return state.cart;
            } else {
                if (localStorage.cart) {
                    state.cart = JSON.parse(localStorage.cart);
                    return state.cart;
                }
            }
        },
        getToast(state) {
            return state.toast;
        },
        getRelatorio(state) {
            return state.relatorio;
        },
        getIndexPage(state) {
            return state.indexPage;
        },
        getPageLoading(state) {
            return state.pageLoading;
        },
        getToggleMenu(state) {
            return state.toggleMenu;
        }
    },
    actions: {
        alert(context, result) {
            let alert = null;
            switch (result.status) {
                case 'success':
                    alert = {
                        title: 'Sucesso',
                        text: result.text,
                        timer: 5000,
                        timerProgressBar: true,
                        icon: result.status,
                        confirmButtonText: 'OK'
                    }
                    break;
                case 'error':
                    alert = {
                        title: 'Error!',
                        text: result.text,
                        icon: result.status,
                        confirmButtonText: 'OK'
                    }
                case 'question':
                    alert = {
                        title: 'Atenção',
                        text: result.text,
                        icon: result.status,
                        confirmButtonText: 'OK'
                    }
                    break;
                case 'warning':
                    alert = {
                        title: 'Atenção',
                        text: result.text,
                        icon: result.status,
                        confirmButtonText: 'OK',
                        showCancelButton: true,
                        cancelButtonText: 'Cancelar'
                    }
                    break;

                default:
                    break;
            }

            return Swal.fire(alert);

        }
    }
})
