<template>
  <div class="tasks-new">
    <section class="bg-light py-7 py-md-10">
      <div class="container">
        <div class="row wow fadeInUp">
          <div class="col-sm-6 col-xs-12">
            <div class="section-title align-items-baseline mb-4">
            <h2 class="text-danger px-0 mb-0">Add a Task</h2>
            </div>
          <p class="text-dark font-size-15">Add a Task or activity for your child. </p>
          </div>
          <div class="col-sm-6 col-xs-12">
            <form v-on:submit.prevent="createTask()">
              <div class="form-group form-group-icon">
                <i class="fa fa-user "></i>
                <div class="dropdown">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{childName}}
                    </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div v-for="child in children">
                      <div v-on:click="onChildClick(child.id, child.name)"
                      class="dropdown-item">{{child.name}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group form-group-icon">
                <i class="fa fa-futbol-o"></i>
                <input type="text" class="form-control border-warning" placeholder="Activity Name" v-model="newTaskName">
              </div>
              <div class="form-group form-group-icon">
                <i class="fa fa-calendar-o"></i>
                <input type="datetime-local" class="form-control border-success" v-model="newTaskTime">
              </div>
              <div class="form-group form-group-icon">
                <i class="fa fa-comments "></i>
                <textarea class="form-control border-info" placeholder="Write a description here" rows="6" v-model="newTaskDescription"></textarea>
              </div>
                <button type="submit" class="btn btn-danger float-right text-uppercase">
                  Submit
                </button>
            </form>
          </div>
        </div>
      </div>
    </section>
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
      axios.post("/api/tasks", params)
        .then(response => {
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
        this.$router.push("/tasks");
      });
    }
  }
};

</script>