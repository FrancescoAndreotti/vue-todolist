Vue.config.devtools = true;

new Vue({
  el: "#root",
  data: {
    newTaskText: "",
    tasksList: [
      { text: "fare la spesa" },
      { text: "Andare in banca" },
    ],
  },
  methods: {
    onAddClick() {
      this.tasksList.push({
        text: this.newTaskText

      });

      this.newTaskText = "";
    },
    onDeleteClick(indiceDaCancellare) {
      this.tasksList.splice(indiceDaCancellare, 1);
    },
  }
});