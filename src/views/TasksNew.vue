<template>
  <div class="tasks-new">
    <h1>New Task</h1>
    <div>
      Name: <input type="text" v-model="newTaskName">
      Description: <input type="text" v-model="newTaskDescription">
      Time: <input type="datetime-local" v-model="newTaskTime">
      
      <button v-on:click="createTask();">Create Task</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";


export default {
  data: function() {
    return {
      tasks: [],
      newTaskName: "",
      newTaskDescription: "",
      newTaskTime: ""
    };
  },
  created: function() {
    axios.get("/api/tasks").then(response => {
      this.tasks = response.data;
    });
  },
  methods: {
    createTask: function() {
      var params = {
        name: this.newTaskName,
        description: this.newTaskDescription,
        dateTime: this.newTaskTime
      };
      axios.post("/api/tasks", params).then(response => {
        this.tasks.push(response.data);
      });
    }
  }
};
</script>