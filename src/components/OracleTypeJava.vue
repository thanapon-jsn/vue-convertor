<template>
  <div>
    <b-container>
      <p>Oracle field and data type</p>

      <b-form class="mb-3">
        <b-form-group>
          <b-form-textarea
          id="textarea-no-resize"
          placeholder="Add oracle field type"
          rows="8"
          no-resize
          v-model="oracleTextFields"></b-form-textarea>
        </b-form-group>

        <b-button pill variant="outline-primary" v-on:click="clickToConvert()" style="padding: 0.375rem 1.75rem;">Convert</b-button>
      </b-form>

      <b-list-group class="text-left">
        <b-list-group-item class="list-convert" v-for="field in javaFields" :key="field">{{field}}</b-list-group-item>
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
      oracleTextFields: '',
      javaFields: []
    };
  },
  methods: {
    clickToConvert: function () {
      if (!this.oracleTextFields) {
        return;
      }
      this.javaFields = [];
      this.javaFields = convertOracleTypeToJava(this.oracleTextFields);
    },
  },
};
</script>

<style scoped>

div.list-group-item.list-convert {
  padding: 0.3rem 0.3rem;
  border: 0px;
}
</style>