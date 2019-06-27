<template>
  <div class="children-show">
    <!-- {{ child.picture_url }}...
    {{ child.name }}....
    {{ child.task[0]['name']  }}....
    {{ child.task[0]['description']  }}.... -->
    <!-- {{ child.picture_url }} -->
    <!-- {{ child.picture_url }} -->

   <!--  <br>
    Child's name: {{ child.name }}
    <br>
    Activity: {{ child.task[0]['name'] }}
    <br>
    Description: {{ child.task[0]['description'] }}
    <br>
    Date: {{ child.task[0]['datetime']}}
    <br>
    Time: {{ child.task[0]['time'] }}
    <br>
    Status: {{child.task[0]['status']}}
    <br>
    Assigned to: {{ child.relationships[0].guardian.name }}
    <br>
 -->
   {{ child.name}}
<div v-for='thing in child.tasks'>
        {{ thing.name }}
        {{ thing.description }}
        {{ thing.time }}
        {{ thing.status }}
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
      child: [],
      task: []
    };
  },
  
  created: function() {
   axios.get("/api/relationships").then(response => {
      this.relationship = response.data;
    });
    axios.get("/api/users").then(response => {
      this.guardian = response.data;
    });
    axios.get('/api/children/' + this.$route.params.id).then(response => {
      this.child = response.data; 
    });
    axios.get('/api/tasks').then(response => {
      this.tasks = response.data;
    })
  },
  methods: {}
};
</script>