import Vue from "vue";
import Component from 'vue-class-component'

@Component({
  props: {
    dropdownList: Array,
    mySelectedIndex: Number,
    labelFields: String,
  },
  model: {
     prop: 'my-selected-index',
     event: 'my-change'
   },
})
export default class USelect extends Vue {

  onSelectChange(e) {
    this.$emit('my-change', e.target.selectedIndex);
  }

  getSelected(index) {
    return index === this.$props.mySelectedIndex;
  }

  getOptionItems(item) {
    if (this.$props.labelFields) {
      return item[this.$props.labelFields]
    }
    return item;
  }

}