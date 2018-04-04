import { createNamespacedHelpers } from 'vuex'
import Vue from "vue";
import Component from 'vue-class-component'
import { UInput, USelect } from '@/components/common';
const { mapGetters, mapActions, mapState } = createNamespacedHelpers('login')

Vue.component('UInput', UInput);
Vue.component('USelect', USelect);

@Component
export default class Login extends Vue {
  
  username:string = 'mao';
  password:string = '';
  typeIndex:number = 1;
  typeList = [
    { id: 1, name: '游客' },
    { id: 2, name: 'VIP' },
    { id: 3, name: '管理员' },
  ]

  onLogin() {
    if (this.username === 'mao' && this.typeIndex === 1 && this.password === 'mao')
      this.$router.push('/counter');
    else{
      
    }
  }



}


// dynamic component 
// $refs!: {
//        helloComponent: Hello
  
// } 
