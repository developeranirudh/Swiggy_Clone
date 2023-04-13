const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello React"),
    React.createElement("h1", {}, "Hello React 2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello React"),
    React.createElement("h1", {}, "Hello React 2"),
  ]),
]);
console.log(parent);
const heading = React.createElement("h1", {}, "Hello React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
