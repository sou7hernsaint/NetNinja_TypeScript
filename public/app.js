// Note: the below notes wont make sense in the compiled app.js ...
import { ModernInvoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payment.js";
const invoiceOne = new ModernInvoice("BitDegree", "Cirriculum Design", 1500);
const invoiceTwo = new ModernInvoice("BitDegree", "Final Project Design", 2000);
let invoices = []; // Setting 'invoices' type to this only allows things generated by the Invoice constructor to be stored
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
// The above interface simply spells-out what any variable in the future must have and do if it is declared as an instance of IsPerson:
const me = {
    name: "James",
    age: 37,
    speak(text) {
        // Note that here, what's returned (void) is explicitly stated by us
        console.log(text);
    },
    spend(amount) {
        // Note that here, what's returned (number) is inferred by TS
        console.log(`I spend ${amount}`);
        return amount;
    },
};
let someone; // Here, we declare that, in the future, when someone is initialized, it must abide by the 'IsPerson' Interface
const greetPerson = (person) => {
    console.log("Hello", person.name, "!");
}; // Here, we declare a function that can only take an 'IsPerson' object in as its parameter
greetPerson(me); // Here, we pass in our 'me' object ... which has been declared as an 'IsPerson' object
//
// *** Modularized Interfaces (importing & exporting)
//
// Here, we
// 1) declare two variables with our 'HasFormatter' type,
// 2) use our imported "ModernInvoice" class (from invoice.ts) to construct two instances,
// 3) store them in an array that has been defined to accept only 'HasFormatter'-typed objects (which docOne & docTwo are)
let docOne;
let docTwo;
docOne = new ModernInvoice("James", "Content Development", 1200);
docTwo = new ModernInvoice("BitDegree", "Sprint 20", 2500);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
// console.log("docs:", docs);
// Putting this all together ...
// HTML form parent
const form = document.querySelector(".new-item-form");
// console.log(form.children);
// Form Inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
console.log(amount.value);
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
// Button listener
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new ModernInvoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
