<template>
  <div class="children-new">
      <!--   <input type="text" v-model="newChildName"> -->
      <!--   <button v-on:click="createChild();">Create Child</button> -->
<section class="bg-light py-7 py-md-10">
  <div class="container">
    <div class="row wow fadeInUp">
      <div class="col-sm-6 col-xs-12">
        <div class="section-title align-items-baseline mb-4">
          <h2 class="text-danger px-0 mb-0">Register a Child</h2>
        </div>
        <p class="text-dark font-size-15">Please add your child's name to start adding activities for them. </p>
        <ul class="list-unstyled">
          <li class="media align-items-center mb-3">
          </li>
        </ul>
      </div>
      <div class="col-sm-6 col-xs-12">
        <form>
          <div class="form-group form-group-icon">
            <i class="fa fa-user "></i>
            <input type="text" class="form-control border-warning" placeholder="Name" v-model="newChildName">
          </div>
            <button v-on:click="createChild();" class="btn btn-danger float-right text-uppercase">
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
 var axios = require ('axios');

export default {
  data: function() {
    return {
      children: [],
      newChildName: "",
      newPictureUrl: "",
      guardianId: 0,
      parentTrue: true
    };
  },
  created: function() {
   this.guardianId = localStorage.getItem("guardianId");
  },
  methods: {
    createChild: function() {
      var params = {
        name: this.newChildName,
        picture_url: this.newPictureUrl

      };
      axios.post("/api/children", params).then(
        response => {
                        this.createRelationship(response.data.id);
                      })
                      .catch(error => {
                        this.errors = error.response.data.errors;
                      });





      //   this.children.push(response.data);
      // });
    },
    createRelationship: function(child) {
      var params = {
         child_id: child,
         guardian_id: this.guardianId,
         parent: this.parentTrue
      };
      axios.post("/api/relationships", params).then( response => {
      this.children.push(response.data);
      });
    }
  }
};
</script>
