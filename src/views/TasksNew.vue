<template>
  <div class="tasks-new">
    <h1>New Task</h1>
    <div>
      Name: <input type="text" v-model="newTaskName">
      Description: <input type="text" v-model="newTaskDescription">
      Time: <input type="datetime-local" v-model="newTaskTime">
      

  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {{childName}}
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <div v-for="child in children">
        <div v-on:click="onChildClick(child.id, child.name)"
        class="dropdown-item">{{child.name}}</div>
      </div>
    </div>
  </div>

  <button v-on:click="createTask();">Create Task</button>
            <!-- <div v-for='child in children'>
              {{child.name}}
            </div> -->
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
        newTaskTime: "",
        childId: "",
        guardians: [],
        relationships: [],
        children: [],
        childName: "Children"
      };
  },
  created: function() {
    axios.get("/api/tasks").then(response => {
      this.tasks = response.data;
    });
    axios.get("/api/children").then(response => {
      this.children = response.data;
    });
    axios.get("/api/users").then(response => {
      this.guardians = response.data;
    });
    axios.get("/api/relationships").then(response => {
      this.relationships = response.data;
    });
  },
  methods: {
    onChildClick: function(id, name){
       this.childId = id;
       this.childName = name;
    },
    createTask: function() {
      var params = {
        name: this.newTaskName,
        description: this.newTaskDescription,
        time: this.newTaskTime
      };
      axios.post("/api/tasks", params).then(
        response => {
                        this.createChildrenTask(response.data.id);
                      })
                      .catch(error => {
                        this.errors = error.response.data.errors;
                      });
      // axios.post("/api/tasks", params).then(response => {
      //   this.tasks.push(response.data);
      // });
    },
    createChildrenTask: function(taskId) {
      var params = {
         child_id: this.childId,
         task_id: taskId
      };
      axios.post("/api/children_tasks", params).then( response => {
        console.log(response.data);
      });
    }
  }
};

</script>