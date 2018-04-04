import Vue from 'vue'
import Component from 'vue-class-component'
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'
const ModuleGetter = namespace('counter', Getter)
const ModuleState = namespace('counter', State)
const ModuleAction = namespace('counter', Action)

@Component
export default class Counter extends Vue {

  @ModuleState count
  @ModuleGetter evenOrOdd
  @ModuleAction increment
  @ModuleAction decrement
  @ModuleAction incrementIfOdd
  @ModuleAction incrementAsync

}