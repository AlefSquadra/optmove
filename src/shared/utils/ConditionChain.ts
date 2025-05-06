export class ConditionChain {
  private conditions: string[];
  private allowed: boolean;

  constructor(initial: string | string[]) {
    this.conditions = typeof initial === "string" ? [initial] : initial;
    this.allowed = false;
  }

  is(condition: string): this {
    this.allowed = this.conditions.includes(condition);
    return this;
  }

  or(condition: string): this {
    this.allowed = this.allowed || this.conditions.includes(condition);
    return this;
  }

  and(condition: string): this {
    this.allowed = this.allowed && this.conditions.includes(condition);
    return this;
  }

  get result(): boolean {
    return this.allowed;
  }
}
