import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ["income"]

  compute(event) {
      event.preventDefault();
      let amount = parseInt(this.incomeTarget.value);
      document.getElementById("daily").innerText = `£${amount * 0.6}`;
      document.getElementById("smile").innerText = `£${amount * 0.1}`;
      document.getElementById("splurge").innerText = `£${amount * 0.1}`;
      document.getElementById("fire").innerText = `£${amount * 0.2}`;
      let summary = document.getElementById("summary");
      if (summary.classList.contains("d-none")) {
          summary.classList.remove("d-none")
      }
  }
}