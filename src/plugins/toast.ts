import Toast from "vue-toastification";
// import "vue-toastification/dist/index.css";
import "~/assets/styles/toasts.scss";

// DOC VUE TOASTIFICATION : https://github.com/Maronato/vue-toastification
export default defineNuxtPlugin(({ vueApp }) => {
  const options = {
    transition: "Vue-Toastification__fade",
    maxToasts: 5,
    newestOnTop: true,

    
    position: "bottom-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.5,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: false,
    rtl: false,

    bodyClassName: ["font-medium"]
  };
  vueApp.use(Toast, options);
})