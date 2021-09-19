interface Person {
    id: number | string;
    name: string;
    speak(lang: string): void;
    spend(amt: number): number;
}

const tyson:Person = {
    id: 3,
    name: 'tyson',
    speak(text: string){ console.log(text) },
    spend(amount: number){ return amount; }
}

const helloPerson = (person: Person) => console.log(`Hello ${person.name}`)

console.log(helloPerson(tyson))