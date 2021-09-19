import { Invoice, Payment } from "./classImplementInterface";
import { hasPrint } from "./interfaceForClass";

const tyson: hasPrint = new Invoice("Pen", "Essay", 500000);
const pen: hasPrint = new Payment("Tyson", "Essay", 1000000);

const info: hasPrint[] = [];
info.push(tyson);
info.push(pen);

info.forEach((t) => console.log(t.print()));
