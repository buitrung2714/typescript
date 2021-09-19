//FUNCTION SIGN
let summary: (a: number, b: number) => void
summary = (a: number, b:number) => console.log(a+b);
summary(3,4);

//OBJ
type StrNumber = number | string;
type student = {
    id: StrNumber
    name: string
    graduate: boolean
}
let func: (student: student) => void;

const sinhvien: student = {
    id: 1,
    name: "Tyson",
    graduate: true
}

func = ({id,name,graduate}) => console.log(`I am ${name} has id ${id} and I ${graduate ? 'Graduated' : 'No graduate'}`)

func(sinhvien)