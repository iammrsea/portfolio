export default function({ route, app }) {
  if (route.path === "/blog") {
    app.router.push("/blog/1");
    console.log("middleware is getting called");
  }
}
