<template>
  <div class="children-show">
    <h1>{{ child.name }} </h1>

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