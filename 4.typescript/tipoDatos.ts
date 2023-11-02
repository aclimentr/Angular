
//number
    let num1: number = 10;
    // num1 = "asda"; // en typescript ya no podemos cambiar el tipo de dato
    num1 = 123; // en ts si podemos cambiar el valor siendo del mismo tipo
//string
    let myString: string = "pepito";

//boolean
    let myBoolean: boolean = false;
//undefined
    let varUndefined: undefined = undefined;
//null
    let varNull: null = null;
//object
    let kitty: object = {
        name: "kitty",
        age: "1",
        color: "orange"
    }
//array
    let numeros: number[] = [1,2,3,4,5]
    let numeros2: any[] = [1,2,3, "asdasd"]

//varios tipos

    let edad: number | string | null = "20/05/78";
        edad = 45;
        edad = null;

    let arrayNumerosString: (number | string)[] = [1,2,3,"asdea"]

//any : acepta cualquiera
    let variable: any = "pepito";
    variable = 5;
    variable = true;
    variable = null;

//unknown
    let variable2: unknown = "pepito";
    variable2 = null;
    variable2 = 4;