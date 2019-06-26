<template>
  <div class="tasks">
    <h1>All Tasks</h1>
   <!--  {{ guardian }} -->
    
    <div v-for='child in children'>
      <!-- {{ child.id }} -->
       <router-link v-bind:to="'/children/' + child['id']"><button> {{child.name}}</button></router-link>
      <div v-for="tasks in child.task">
        {{ tasks.name }} || {{ tasks.description }} || {{ tasks.time }} {{tasks.status }}
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
      children: [],
      task: [],
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
  
    console.log("Hello Task!!")
    axios.get('/api/tasks?child_id=' + this.$route.params.id).then(response => {
      this.tasks = response.data;
    })
  },
  methods: {}
};
</script>