<template>
  <form @submit.prevent="editTaskSubmit">
    <label>Title:</label>
    <br />
    <input type="text" v-model="title" required />
    <br />
    <label>Details:</label>
    <br />
    <textarea v-model="details" required></textarea>
    <br />
    <button>Update Task</button>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      details: "",
      apiUrl: process.env.VUE_APP_API_BASE_URL + this.id,
    };
  },
  mounted() {
    fetch(this.apiUrl)
      .then((res) => res.json())
      .then((data) => {
        (this.title = data.title), (this.details = data.details);
      });
  },
  methods: {
    editTaskSubmit() {
      fetch(this.apiUrl, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: this.title, details: this.details }),
      })
        .then(() => this.$router.push("/HomePage"))
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style>
form {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 2px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  padding: 10px;
  border: 2px solid #ddd;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
}
form button {
  display: block;
  margin: 20px auto 0;
  background-color: green;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
}
</style>
