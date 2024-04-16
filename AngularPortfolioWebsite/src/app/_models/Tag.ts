export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
    static readonly NODEJS = new Tag('Node.JS', 'green');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'olive');
    static readonly REACT = new Tag('React', 'black');
    static readonly REACTNATIVE = new Tag('React-Native', 'blue');
    static readonly FIREBASE = new Tag('Firebase', 'brown');
    static readonly POSTGRES = new Tag('PSQL', 'purple');
    static readonly SQL = new Tag('SQL', 'pink');



    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}