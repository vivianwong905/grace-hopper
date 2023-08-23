const NAME = "Allie";
const TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ante in nibh mauris cursus mattis molestie a. Tincidunt ornare massa eget egestas purus viverra. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Amet purus gravida quis blandit turpis cursus in. Pellentesque dignissim enim sit amet venenatis urna cursus. Scelerisque in dictum non consectetur a erat. Id interdum velit laoreet id donec. Est ante in nibh mauris cursus mattis. Dui ut ornare lectus sit amet est placerat. Vel eros donec ac odio tempor orci dapibus ultrices. Aliquam ut porttitor leo a diam. Consequat ac felis donec et odio pellentesque diam volutpat. Sapien pellentesque habitant morbi tristique senectus et netus et. Tristique magna sit amet purus gravida quis blandit turpis cursus. Amet luctus venenatis lectus magna fringilla urna porttitor.";
const DOGGO_TEXT =
  "Doggo ipsum heckin good boys pats doggo sub woofer long bois thicc, woofer dat tungg tho pats. smol very taste wow I am bekom fat. Long woofer ur givin me a spook most angery pupper I have ever seen doggorino, you are doing me a frighten very taste wow. Doggo porgo floofs the neighborhood pupper wrinkler, heckin angery woofer boofers heckin angery woofer pupper, very taste wow dat tungg tho puggorino. Long doggo pupper you are doing me a frighten clouds waggy wags, adorable doggo shooberino.";

function main() {
  const root = document.getElementById("root");

  console.log(root instanceof Node);
  console.log(root instanceof Element);
  console.log(root instanceof HTMLElement);
  console.log(root instanceof HTMLDivElement);

  const heading = document.createElement("h1");

  // innerHTML sets the actual HTML content
  // and will accept HTML tags
  // heading.innerHTML = `<em>${NAME}</em>`;
  heading.innerText = NAME;

  root.appendChild(heading);

  const paragraph = document.createElement("p");
  paragraph.innerText = TEXT;
  root.appendChild(paragraph);

  // Insert between H1 and P
  // parentNode.insertBefore(newNode, referenceNode)

  const para2 = document.createElement("p");
  para2.innerText = DOGGO_TEXT;
  root.insertBefore(para2, paragraph);

  // Add a button
  const btn = document.createElement("button");
  btn.innerText = "Click me!";
  btn.className = "purple";
  root.appendChild(btn);

  btn.addEventListener("click", (event) => {
    const alertString = `Button was clicked!

Target Inner Text: ${event.target.innerText}

Current Target ClassName: ${event.target.className}`;

    event.target.className =
      event.target.className === "purple" ? "green" : "purple";

    alert(alertString);
  });
}

main();

// the css for purple:
/*
.purple {
    background-color: purple;
    color: white;
}

.green {
    background-color: green;
    color: white;
}
*/

