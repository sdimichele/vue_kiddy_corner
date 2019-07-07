<template>
  <div class="children-new">
    <form>
      <h1>New Child</h1>
      <div>
        Name: <input type="text" v-model="newChildName">
        Picture: <input type="text" v-model="newPictureUrl">
        Parent: <input type="text" v-model="parentTrue">
        <button v-on:click="createChild();">Create Child</button>

      </div>
    </form>
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
