class HelloWorld {
  constructor(public name: string) {}

  greet(): string {
    return this.name;
  }
}

export default HelloWorld