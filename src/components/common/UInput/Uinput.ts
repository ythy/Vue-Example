import utils from '@/utils/CommonUtils';
import Vue from "vue";
import Component from 'vue-class-component'

@Component({
  props: {
    value: String,
    maxAscii: String,
  }
})
export default class UInput extends Vue {

  inputValue = '';


  created() {
    this.inputValue = this.$props.value;
  }


  onInput(event) {
    if (this.$props.maxAscii) {
      if (utils.getStringAscii(this.inputValue) > this.$props.maxAscii)
        this.inputValue = utils.getMaxAsciiString(this.inputValue, this.$props.maxAscii);
    }
    this.$emit('input', this.inputValue)
  }

}