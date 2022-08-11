export default defineNuxtRouteMiddleware(async (to, from) => {
  const open = useState("open");
  open.value = false;
});
