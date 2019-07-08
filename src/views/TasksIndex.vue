<template>
  <div class="tasks">
   <!--  <h1>All Tasks</h1> -->
  <!--  {{tasks[2].child_info[0].name}}
   {{tasks}} -->
    <!-- {{ tasks }} -->
   <!--  {{child}} -->
   <!--  <div v-for='child in children'>
      <router-link  class="fa fa-graduation-cap" v-bind:to="'/children/' + child['id']"><button> {{child.name}}</button></router-link>
      <div v-for='thing in child.tasks'>
        {{ thing.name }}
        <!- {{ thing.description }} -->
       <!--  {{ thing.time }} -->

     <!--    <button v-on:click="completedTask(thing)"> {{ thing.status }} </button> --> 
        <!-- <button onclick=" alert('Are you sure you want to change the status');"
        > {{ thing.status }} </button> -->

  <section class="pt-9 pb-6 py-md-7">
  <div class="container">
    <div class="section-title justify-content-center mb-4 mb-md-8 wow fadeInUp">

      <span class="shape shape-left bg-info"></span>
      <h2 class="text-danger">All Tasks</h2>
      <span class="shape shape-right bg-info"></span>
    </div>

    <div class="row wow fadeInUp">
      <!-- Media -->
      <!-- <div class="col-sm-6 col-xl-4 col-xs-12">
        <div class="media mb-6">
          <div v-for='child in children'>
          <div class="media-icon-large bg-warning mr-xl-4"> -->
<!-- here -->
          <!--   <i class="fa fa-graduation-cap"  aria-hidden="true"></i>
          </div>

          <div class="media-body">
          <h3><router-link  class="text-warning" v-bind:to="'/children/' + child['id']">{{child.name}}</router-link></h3>
            <div v-for='thing in child.tasks'>
            <h5 class="text-warning">{{ thing.name }}</h5>
            <p> {{ thing.time }}</p>
          </div>
          </div>
          </div>
        </div>
      </div> -->

      <!-- Media -->
      <div class="col-12 col-sm-8 offset-sm-2">
        <div class="media mb-6 row">
         <div class="col" v-for='child in children'>
          <div class="media-icon-large bg-success mr-xl-4 mx-auto d-block">
            <i class="fa fa-leaf" aria-hidden="true"></i>
          </div>

          <div class="media-body text-center">
            <h3><router-link  class="text-warning" v-bind:to="'/children/' + child['id']">{{child.name}}</router-link></h3>
            <div v-for='thing in child.tasks'>
            <h5 class="text-warning">{{ thing.name }}</h5>
            <p> {{ thing.time }}</p>
          </div>
          </div>
        </div>
        </div>
      </div>

      <!-- Media -->
      <!-- <div class="col-sm-6 col-xl-4 col-xs-12">
        <div class="media mb-6">
          <div class="media-icon-large bg-danger mr-xl-4">
            <i class="fa fa-car" aria-hidden="true"></i>
          </div>
          <div class="media-body">
            <h3 class="text-danger">Transportation</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
      </div> -->

      <!-- Media -->
    <!--   <div class="col-sm-6 col-lg-4 col-xs-12">
        <div class="media mb-6">
          <div class="media-icon-large bg-info mr-xl-4">
            <i class="fa fa-cutlery" aria-hidden="true"></i>
          </div>
          <div class="media-body">
            <h3 class="text-info">Delicious Food</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
      </div> -->

      <!-- Media -->
  <!--     <div class="col-sm-6 col-xl-4 col-xs-12">
        <div class="media mb-6">
          <div class="media-icon-large bg-purple mr-xl-4">
            <i class="fa fa-heart" aria-hidden="true"></i>
          </div>
          <div class="media-body">
            <h3 class="text-purple">Love & Care</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
      </div> -->

      <!-- Media -->
    <!--   <div class="col-sm-6 col-xl-4 col-xs-12">
        <div class="media mb-7">
          <div class="media-icon-large bg-pink mr-xl-4">
            <i class="fa fa-shield" aria-hidden="true"></i>
          </div>
          <div class="media-body">
            <h3 class="text-pink">Annual Sports</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</section>



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
      tasks: []
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
    axios.get('/api/tasks').then(response => {
      this.tasks = response.data; 
    });

  // 
    // console.log("Hello Task!!")
    // axios.get('/api/tasks').then(response => {
      // this.tasks = response.data;
    // })
  },
  methods: {
    completedTask: function(inputThing) {
      var params = {
                    status: "completed"
                   };
      axios.patch("/api/tasks/" + inputThing.id, params).then(response => {
        inputThing.status = "completed";
      });

    }
  }
};
</script>