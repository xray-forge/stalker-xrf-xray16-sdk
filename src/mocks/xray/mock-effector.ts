import type { effector, effector_params } from "xray16";

/**
 * Mock of a generic X-Ray engine effector class for jest/node.
 *
 * @remarks
 * Methods are declared on the prototype rather than as own `jest.fn` fields on purpose. The engine class is meant
 * to be subclassed with {@link MockEffector.process} overridden, and own instance fields would shadow such an
 * override and leave `super.process` undefined. Use `jest.spyOn` when call assertions are needed.
 */
export class MockEffector implements effector {
  public static create(type: number, time: number): MockEffector {
    return new MockEffector(type, time);
  }

  public static mock(type: number, time: number): effector {
    return new MockEffector(type, time);
  }

  public __name: string = "effector";

  public type: number;
  public time: number;

  public constructor(type: number, time: number) {
    this.type = type;
    this.time = time;
  }

  public start(): void {}

  public process(params: effector_params): boolean {
    return false;
  }

  public finish(): void {}
}
