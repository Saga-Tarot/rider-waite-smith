import { riderwaitesmith } from "../../declarations/riderwaitesmith";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with riderwaitesmith actor, calling the greet method
  const greeting = await riderwaitesmith.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
