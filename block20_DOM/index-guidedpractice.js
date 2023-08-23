const MONA = "Mona lisa";


function main() {
  // Access the root element using JavaScript
  const root = document.getElementById("root"); // so we can start manipulate the dom since this is the only element in Html

  //   Create an h1 element with the name of a famous piece of art: Mona Lisa
  const firstHeading = document.createElement("h1");
  firstHeading.innerText = MONA; // an example to create a const
  //   Add (append) the h1 element to the root element
  root.appendChild(firstHeading);

  //   Set the image asset and add thisLinks to an external site. image to the root element
  const monaImage = document.createElement("img");
  monaImage.src =
    "https://drive.google.com/file/d/1A_VCH7UUCfnUVs-RxST7lgra_MdP62X8/view";
  root.appendChild(monaImage);

  //   Add a p element description to the root element. Description should read: The Mona Lisa is a famous painting.
  const para = document.createElement("p");
  para.innerText = "The Mona Lisa is a famous painting."; // no need to create a const
  root.appendChild(para);
}

main(); //we have to call this function so it will render on the page