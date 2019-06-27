<template>
  <div class="tasks">
    <h1>All Tasks</h1>
   <!--  {{ guardian }} -->
    <!-- {{ tasks }} -->
    <div v-for='child in children'>
      <router-link v-bind:to="'/children/' + child['id']"><button> {{child.name}}</button></router-link>
      <div v-for='thing in child.tasks'>
        {{ thing.name }}
        {{ thing.description }}
        {{ thing.time }}
         <button v-on:click="completed(thing.status); alert('Are you sure you want to change the status');"> {{thing.status}} </button>
      </div> 
    </div> 
  </div>
 


</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      guardian: [],
      relationship: [],
      children: []
      // tasks: []
    };
  },
  created: function() {
   axios.get("/api/relationships").then(response => {
      this.relationship = response.data;
    });
   console.log("***********")
    axios.get("/api/users").then(response => {
      this.guardian = response.data;
    });
    console.log("Hello World!!!")
    axios.get('/api/children').then(response => {
      this.children = response.data; 
    });
  // 
    // console.log("Hello Task!!")
    // axios.get('/api/tasks').then(response => {
      // this.tasks = response.data;
    // })
  },
  methods: {

      completed: function(status) {
        this.buttonName = status;
      }
    }
};
</script>