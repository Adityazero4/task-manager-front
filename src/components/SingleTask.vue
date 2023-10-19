<template>
  <div class="task" :class="{ complete: task.complete }">
    <div class="actions">
      <h3 @click="showDetail">{{ task.title }}</h3>
      <div class="icons">
        <router-link :to="{ name: 'EditTask', params: { id: task.id } }"
          ><span class="material-icons">edit</span></router-link
        >
        <span @click="TaskDelete" class="material-icons">delete</span>
        <span @click="TaskComplete" class="material-icons tick">done</span>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ task.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      showDetails: false,
      apiUrl: `${process.env.VUE_APP_API_BASE_URL}/${this.task.id}`,
    };
  },
  methods: {
    showDetail() {
      this.showDetails = !this.showDetails;
    },
    TaskDelete() {
      fetch(this.apiUrl, { method: "DELETE" }).then(() =>
        this.$emit("delete", this.task.id)
      );
    },
    TaskComplete() {
      fetch(this.apiUrl, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ complete: !this.task.complete }),
      })
        .then(() => this.$emit("complete", this.task.id))
        .catch((err) => console.log(err.name));
    },
  },
};
</script>

<style>
.task {
  margin: 20px auto;
  background-color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  border-left: 10px solid red;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 25px;
  margin-left: 10px;
  font-weight: bold;
  cursor: pointer;
  color: #bbb;
}
.material-icons:hover {
  color: #777;
}
.task.complete {
  border-left: 10px solid green;
}
.task.complete .tick {
  color: green;
}
</style>
