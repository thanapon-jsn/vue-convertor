<template>
  <div class="hello">
    <b-container>
      <b-col><p>Oracle field and data type</p></b-col>
      

    <b-form class="mb-3">
    <b-form-group>
    <b-form-textarea
    id="textarea-no-resize"
    placeholder="Add oracle field type"
    rows="3"
    no-resize
    v-model="textBox">
    </b-form-textarea>
    </b-form-group>
      
     <b-button pill variant="outline-primary" v-on:click="clickToConvert()" style="padding: 0.375rem 1.75rem;">Convert</b-button>
    </b-form>

<b-list-group class="text-left">

      <b-list-group-item class="list-convert" v-for="field in fields" :key="field">{{field}}</b-list-group-item>
      </b-list-group>
    </b-container>

  </div>
</template>

<script>
import { convertOracleTypeToJava } from "../services/java-convertor";

export default {
  name: 'OracleTypeJava',
  data () {
    return {
      textBox: '',
      fields: []
    };
  },
  methods: {
    clickToConvert: function () {
      if (!this.textBox) {
        return;
      }
      this.fields = [];
      this.fields = convertOracleTypeToJava(this.textBox);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.list-group-item.list-convert {
  padding: 0.3rem 0.3rem;
  border: 0px;
}
</style>
