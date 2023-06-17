class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }

  display(level = 0) {
    const indent = "    ".repeat(level);
    console.log(indent + "- " + this.data);
    for (const child of this.children) {
      child.display(level + 1);
    }
  }
}

function createNode() {
  const data = prompt("Enter data for the new node:");
  return new Node(data);
}

$(document).ready(function() {
  const root = new Node("Root");
  root.display();

  $("#addNodeButton").on("click", function() {
    const choice = prompt("Do you want to add a child node? (yes/no)");
    if (choice.toLowerCase() !== "yes") {
      return;
    }

    const newNode = createNode();
    root.addChild(newNode);

    console.log("\nUpdated tree:");
    root.display();
  });
});
