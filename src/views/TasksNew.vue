<template>
  <div class="tasks-new">
    <h1>New Task</h1>
    <div>
      Name: <input type="text" v-model="newTaskName">
      Description: <input type="text" v-model="newTaskDescription">
      Time: <input type="datetime-local" v-model="newTaskTime">
      

            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{childOption}}
                </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div v-for="info in children">
                      <a v-on:click="onChildClick(info.id, info.name)"
                      class="dropdown-item" href="#">{{info.name}}</a>
                    </div>
                  </div>
                  <button v-on:click="createTask();">Create Task</button>
            </div>
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
      newGuardianChildId: "",
      guardians: [],
      relationships: [],
      children: [],
      childOption: "Children"
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
       this.newGuardianChildId = id;
       this.childOption = name;
    },
    createTask: function() {
      var params = {
        name: this.newTaskName,
        description: this.newTaskDescription,
        dateTime: this.newTaskTime,
        relationship_id: this.newGuardianChildId
      };
      axios.post("/api/tasks", params).then(response => {
        this.tasks.push(response.data);
      });
    }
  }
};
</script>