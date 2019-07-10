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
   <!-- {{ child.name}} -->
<!-- <div v-for='thing in child.tasks'>
        {{ thing.name }}
        {{ thing.description }}
        {{ thing.time }}
        {{ thing.status }}
</div> -->
<section class="py-9" id="courses">
  <div class="container">
    <div class="section-title justify-content-center mb-4 mb-md-8 wow fadeInUp">

      <span class="shape shape-left bg-info"></span>
      <h2 class="text-danger">{{child.name }}'s Activities</h2>
      <span class="shape shape-right bg-info"></span>
    </div>

    <div class="row wow fadeInUp">
      <div class="col-sm-3 m-4 card-group" v-for="thing in child.tasks">
        <div class="card">
          <a href="course-single-left-sidebar.html" class="position-relative">
            <img class="card-img-top lazyestload" data-src="assets/img/courses/courses-img1.jpg" src="assets/img/courses/courses-img1.jpg" alt="Card image">
            <div class="card-img-overlay">
              <span class="badge badge-warning badge-rounded-circle"></span>
            </div>
          </a>
          <div class="card-body border-top-5 px-3 border-warning">
            <h3 class="card-title">
              <a class="text-warning text-capitalize d-block text-truncate" href="course-single-left-sidebar.html">{{thing.name}}</a>
            </h3>
            <ul class="list-unstyled text-muted">
              <li class="mb-1">
                <i class="fa fa-calendar-o mr-2" aria-hidden="true"></i>Age 2 to 4 Years
              </li>
              <li>
                <i class="fa fa-clock-o mr-2" aria-hidden="true"></i>{{thing.time}}
              </li>
            </ul>

            {{thing.description}}
            <div class="d-block">
              <button class="btn btn-danger float-right text-uppercase" v-on:click="completedTask(thing)"> {{ thing.status }} </button>
            </div>
          </div>
        </div>
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