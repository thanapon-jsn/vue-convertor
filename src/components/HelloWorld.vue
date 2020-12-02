<template>
  <div class="hello">
    <p>Oracle field and data type</p>

    <form>
      <textarea v-model="textBox" placeholder="Add oracle field type" rows="5" cols="120"></textarea>
      <br>
      <button v-on:click="clickToConvert()">Convert</button>
    </form>
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
import { convertOracleTypeToJava } from '../services/java-convertor'

export default {
  name: 'HelloWorld',
  data () {
    return {
      textBox: '',
      text: ''
    }
  },
  methods: {
    clickToConvert: function () {
     let fieldsJava = convertOracleTypeToJava(this.textBox);
     fieldsJava.forEach(fieldJava => {
       this.text += fieldJava + '\n';
     });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
