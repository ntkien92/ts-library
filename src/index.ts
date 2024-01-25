class HelloWorld {
  constructor(public name: string) {}

  greet(): string {
    return this.name;
  }

  sayHello(): string {
    return `Hello ${this.name}`;
  }
}

export default HelloWorld