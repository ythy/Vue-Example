import { createNamespacedHelpers } from 'vuex'
import Vue from "vue";
import Component from 'vue-class-component'
import { UInput, USelect } from '@/components/common';
const { mapGetters, mapActions, mapState } = createNamespacedHelpers('login')

Vue.component('UInput', UInput);
Vue.component('USelect', USelect);

@Component
export default class Login extends Vue {
  
  // initial data
  username:string = 'mao';
  password:string = '';
  typeIndex:number = 1;
  typeList = [
    { id: 1, name: '游客' },
    { id: 2, name: 'VIP' },
    { id: 3, name: '管理员' },
  ]


  // method
  onLogin() {
    console.log('uname', this.username);
    if (this.username === '1' && this.typeIndex === 2)
      this.$router.push('/counter');
  }

}


// dynamic component 
// $refs!: {
//        helloComponent: Hello
  
// } 
