/**
 * @jest-environment jsdom
 */

const {
  getByRole,
  queryByRole,
  queryByText,
  fireEvent,
} = require("@testing-library/dom");
const { calculateCost } = require("../index.js");

/**
 * Resets the DOM to a clean state before each test.
 * NOTE: In the future, there will be ways to directly
 * import the HTML file, but this works for now :)
 */
function resetDOM() {
  document.body.innerHTML = `
  <main>
    <h1>The Prescription</h1>
    <section>
      <h2>Prescription Details</h2>
      <label>
        Price per refill
        <input type="number" name="price" id="price" />
      </label>
      <label>
        Number of refills
        <input type="number" name="refills" id="refills" />
      </label>
      <label>
        Subscribed?
        <input type="checkbox" name="subscribed" id="subscribed" />
      </label>
      <label>
        Coupon?
        <input type="checkbox" name="coupon" id="coupon" />
      </label>
      <button id="calculate">Calculate Cost</button>
    </section>
    <label>
      Total Cost
      <output id="cost">$0.00</output>
    </label>
  </main>
  `;
  document.querySelector("#calculate").addEventListener("click", calculateCost);
}

describe("The document", () => {
  beforeEach(resetDOM);

  test("contains fields for a user to input price, refills, subscription status, and coupon status", () => {
    const price = queryByRole(document, "spinbutton", { name: /price/i });
    expect(price).not.toBe(null);

    const refills = queryByRole(document, "spinbutton", { name: /refills/i });
    expect(refills).not.toBe(null);

    const subscribed = queryByRole(document, "checkbox", {
      name: /subscribed/i,
    });
    expect(subscribed).not.toBe(null);

    const coupon = queryByRole(document, "checkbox", { name: /coupon/i });
    expect(coupon).not.toBe(null);

    const calculate = queryByRole(document, "button", { name: /calculate/i });
    expect(calculate).not.toBe(null);
  });

  test("displays $0.00 initially", () => {
    const cost = queryByText(document, "$0.00");
    expect(cost).not.toBe(null);
  });

  // TODO: Complete this test case so it is testing the described behavior.
  test("displays the correct cost for the user's input values after clicking the calculate button", () => {
    const price = getByRole(document, "spinbutton", { name: /price/i });
    const subscribed = getByRole(document, "checkbox", {
      name: /subscribed/i,
    });
    const refills = queryByRole(document, "spinbutton", { name: /refills/i });
    const calculateButton = getByRole(document, "button", {
      name: /calculate/i,
    });
    price.value = 30;
    refills.value = 1;
    subscribed.checked = true;
    fireEvent.click(calculateButton);

    // TODO: Change this assertion to check the correct value.
    expect(document.querySelector("#cost").value).toBe("$22.5");
  });
});
