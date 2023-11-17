export class MyClass {
    public name: string;
    constructor( nameInput?: string ) {
        let self = this;
        self.name = nameInput;
    }
    public saySomethingNice( input: string, catchphrase?: string ): string {
        if ( catchphrase == null ) { 
            return this.sayHello( input ) + ". " + this.sayCompliment();
        }
        return this.sayHello( input ) + ". " + catchphrase + ". " + this.sayCompliment();
    }
    public sayCompliment(): string {
        return "wow, nice fashion sense!";
    }
    public sayHello( input: string ): string {
        let self = this;
        if ( self.name != null ) {
            return input + ", my name is " + self.name;
        }
        return input;
    }
}


// Extend domain and range--> 1. input: something, output: something
//input give something to say hello and say something nice.
interface sayNiceGreetingsDependencies {
    sayHello: ( input: string ) => string;
    sayCompliment: () => string;
}
export function sayNiceGreetings( greeting: string, depedencies: sayNiceGreetingsDependencies ) {
    return depedencies.sayHello( greeting ) + ", " + depedencies.sayCompliment();
} //integrate sayHello, and sayCompliment

export function sayCompliment() {
    return "wow, nice fashion sense!";
}
export function sayHello( input: string ) {
    if ( input != null ) {
        return input;
    }
    return "hello";
}
export const tests: any[] = [{
    name: "myClass.saySomethingNice given state name: 'josh', input: 'something' and catchphrase: 'gee'o'willackers' should return 'something, my name is josh. gee'o'willackers'. wow, nice fashion sense!'",
    input: [ "something", "gee'o'willackers" ],
    context: function() {
        return new class mock extends MyClass {
            public name: "josh";
            public sayHello( input: string ) {
                return "something, my name is josh";
            }
            public sayCompliment() {
                return "wow, nice fashion sense!";
            }
        }( "josh" );
    },
    function: MyClass.prototype.saySomethingNice,
    output: "something, my name is josh. gee'o'willackers. wow, nice fashion sense!",
    debug: true
}, {
    name: "myClass.saySomethingNice given state name: 'josh', input: 'something' should return 'something, my name is josh. wow, nice fashion sense!'",
    input: [ "something" ],
    context: function() {
        return new class mock extends MyClass {
            public name: "josh";
            public sayHello( input: string ) {
                return "something, my name is josh";
            }
            public sayCompliment() {
                return "wow, nice fashion sense!";
            }
        }( "josh" );
    },
    function: MyClass.prototype.saySomethingNice,
    output: "something, my name is josh. wow, nice fashion sense!",
    debug: true
}, {
    name: "myClass.sayCompliment should return 'wow, nice fashion sense!'",
    input: [],
    context: function() {
        return new MyClass();
    },
    function: MyClass.prototype.sayCompliment,
    output: "wow, nice fashion sense!",
    debug: false
}, {
    name: "myClass.sayHello given state name: 'josh', input: 'something' should return 'something, my name is josh'",
    input: [ "something" ],
    context: function() {
        return new MyClass( "josh" );
    },
    function: MyClass.prototype.sayHello,
    output: "something, my name is josh",
    debug: false
}, {
    name: "myClass.sayHello given something should return something",
    input: [ "something" ],
    context: function() {
        return new MyClass();
    },
    function: MyClass.prototype.sayHello,
    output: "something",
    debug: false
}, {
    name: "sayNiceGreetings given 'hello' should return 'hello, wow, nice fashion sense!'",
    input: [ "hello", {
        sayHello: function( input: string ) {
            return "hello";
        },
        sayCompliment: function() {
            return "wow, nice fashion sense!";
        }
    }],
    function: sayNiceGreetings,
    output: "hello, wow, nice fashion sense!",
    debug: false
}, {
    name: "sayCompliment should return 'wow, nice fashion sense!'",
    input: [],
    function: sayCompliment,
    output: "wow, nice fashion sense!",
    debug: false
}, {
    name: "sayHello given something should return something",
    input: [ "something" ],
    function: sayHello,
    output: "something",
    debug: false
}, {
    name: "sayHello should return hello",
    input: [],
    function: sayHello,
    output: "hello",
    debug: false, //show the output and the expected output.
}];