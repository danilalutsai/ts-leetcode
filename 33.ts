class MyStack {
  private queue: number[] = [];

  push(x: number): void {
    this.queue.push(x)
    const n = this.queue.length - 1;
    for (let i = 0; i < n; i++) {
      this.queue.push(this.queue.shift()!);
    }
  }

  pop(): number {
    return this.queue.shift()!;
  }

  top(): number {
    return this.queue[0];
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}
