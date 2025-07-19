import { db, collection, addDoc, getDocs } from './firebase-config.js';

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

async function renderTasks() {
  taskList.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "tasks"));
  querySnapshot.forEach(doc => {
    const li = document.createElement("li");
    li.textContent = doc.data().name;
    taskList.appendChild(li);
  });
}

addTaskBtn.onclick = async () => {
  const taskName = taskInput.value.trim();
  if (taskName) {
    await addDoc(collection(db, "tasks"), { name: taskName });
    taskInput.value = "";
    renderTasks();
  }
};

renderTasks();