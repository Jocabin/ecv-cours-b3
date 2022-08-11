export default defineNuxtRouteMiddleware((_to, _from) => {
  const open = useState("open");
  open.value = false;
});
