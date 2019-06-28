<template>
  <div class="container">
    <h1>New Task</h1>
    <div>
      Name: <input type="text" v-model="newTaskName">
      Description: <input type="text" v-model="newTaskDescription">
      Time: <input type="text" v-model="newTaskTime">
      Date: <input type="text" v-model="newTaskDate">
      
      <button v-on:click="createTask()">Create Task</button>
    </div>
    <h1>All Tasks</h1>
   <!--  <div v-for="photo in photos">
      <h2>{{ photo.name }}</h2>
      <img v-bind:src="photo.url">
      <p>Width: {{ photo.width }}</p>
      <p>Height: {{ photo.height }}</p>
    </div> -->
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
      newPhotoHeight: ""
    };
  },
  created: function() {
    axios.get("/api/photos").then(response => {
      this.photos = response.data;
    });
  },
  methods: {
    createPhoto: function() {
      var params = {
        name: this.newPhotoName,
        width: this.newPhotoWidth,
        height: this.newPhotoHeight
      };
      axios.post("/api/photos", params).then(response => {
        this.photos.push(response.data);
        this.newPhotoName = "";
        this.newPhotoWidth = "";
        this.newPhotoHeight = "";
      });
    }
  }
};
</script>