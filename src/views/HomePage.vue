<template>
  <div class="homePage">
    <FilterNav @filterChange="current = $event" :current="current"></FilterNav>
    <div v-if="tasks.length">
      <div v-for="task in filteredTasks" :key="task.id">
        <SingleTask
          :task="task"
          @delete="deleteMethod"
          @complete="completeMethod"
        ></SingleTask>
        <Navbar />
      </div>
    </div>
  </div>
</template>

<script>
import SingleTask from "../components/SingleTask.vue";
import FilterNav from "../components/FilterNav.vue";
export default {
  name: "HomePage",
  components: { SingleTask, FilterNav },
  data() {
    return {
      tasks: [],
      current: "all",
      apiUrl: process.env.VUE_APP_API_BASE_URL,
    };
  },
  mounted() {
    fetch(this.apiUrl)
      .then((res) => res.json())
      .then((data) => (this.tasks = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    deleteMethod(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    completeMethod(id) {
      let c = this.tasks.find((task) => task.id === id);
      c.complete = !c.complete;
    },
  },
  computed: {
    filteredTasks() {
      if (this.current === "completed") {
        return this.tasks.filter((task) => task.complete);
      } else if (this.current === "ongoing") {
        return this.tasks.filter((task) => !task.complete);
      } else {
        return this.tasks;
      }
    },
  },
};
</script>
