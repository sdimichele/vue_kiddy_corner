<template>
  <div class="tasks">
    <h1>All Tasks</h1>
    <!-- {{ guardian }} -->
    
      <div v-for='child in children'>
         <router-link v-bind:to="'/children/' + child['id']"><button> {{child.name}}</button></router-link>
        <div v-for='tasks in child'>
          <div v-for='task in tasks'>
            {{task.name}} 
            {{task.description}}
            {{task.time}}
          </div>
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
      task: []
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
    axios.get('/api/children').then(response => {
      this.children = response.data; 
    });
    axios.get('/api/tasks').then(response => {
      this.tasks = response.data;
    })
  },
  methods: {}
};
</script>