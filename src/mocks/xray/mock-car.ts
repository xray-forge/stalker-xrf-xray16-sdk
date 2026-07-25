import { jest } from "@jest/globals";
import { type CCar } from "xray16";

import { MockCGameObject } from "./mock-c-game-object";
import { MockVector } from "./mock-vector";

/**
 * Configuration of the car mock.
 */
export interface IMockCCarConfig {
  canHit?: boolean;
  hasWeapon?: boolean;
  health?: number;
  isObjectVisible?: boolean;
}

/**
 * Mock of the X-Ray engine car object, used by minigun and vehicle related schemes.
 *
 * Values supplied through the config are stored as mutable fields, so a test can change car state between calls
 * instead of re-creating the mock.
 */
export class MockCCar extends MockCGameObject implements CCar {
  public static override create(config: IMockCCarConfig = {}): MockCCar {
    const car: MockCCar = new MockCCar();

    car.canHit = config.canHit ?? true;
    car.hasWeapon = config.hasWeapon ?? true;
    car.health = config.health ?? 1;
    car.isObjectVisible = config.isObjectVisible ?? true;

    return car;
  }

  public static override mock(config: IMockCCarConfig = {}): CCar {
    return MockCCar.create(config) as unknown as CCar;
  }

  public static readonly eWpnActivate = 3 as const;
  public static readonly eWpnAutoFire = 5 as const;
  public static readonly eWpnDesiredDir = 1 as const;
  public static readonly eWpnDesiredPos = 2 as const;
  public static readonly eWpnFire = 4 as const;
  public static readonly eWpnToDefaultDir = 6 as const;

  public override __name: string = "CCar";

  public canHit: boolean = true;
  public hasWeapon: boolean = true;
  public health: number = 1;
  public isObjectVisible: boolean = true;
  public fuel: number = 1;
  public fuelConsumption: number = 1;
  public fuelTank: number = 1;
  public explodeTime: number = 0;
  public rpm: number = 0;
  public isEngineActive: boolean = false;
  public isEngaged: boolean = false;

  public SetEnterLocked = jest.fn() as unknown as jest.MockedFunction<CCar["SetEnterLocked"]>;

  public SetExitLocked = jest.fn() as unknown as jest.MockedFunction<CCar["SetExitLocked"]>;

  public CanHit = jest.fn(() => this.canHit) as unknown as jest.MockedFunction<CCar["CanHit"]>;

  public CarExplode = jest.fn() as unknown as jest.MockedFunction<CCar["CarExplode"]>;

  public ChangefFuel = jest.fn() as unknown as jest.MockedFunction<CCar["ChangefFuel"]>;

  public ChangefHealth = jest.fn() as unknown as jest.MockedFunction<CCar["ChangefHealth"]>;

  public CurrentVel = jest.fn(() => MockVector.create()) as unknown as jest.MockedFunction<CCar["CurrentVel"]>;

  public ExplodeTime = jest.fn(() => this.explodeTime) as unknown as jest.MockedFunction<CCar["ExplodeTime"]>;

  public FireDirDiff = jest.fn(() => 0) as unknown as jest.MockedFunction<CCar["FireDirDiff"]>;

  public GetfFuel = jest.fn(() => this.fuel) as unknown as jest.MockedFunction<CCar["GetfFuel"]>;

  public get_fuel = jest.fn(() => this.fuel) as unknown as jest.MockedFunction<CCar["get_fuel"]>;

  public GetfFuelConsumption = jest.fn(
    () => this.fuelConsumption
  ) as unknown as jest.MockedFunction<CCar["GetfFuelConsumption"]>;

  public get_fuel_consumption = jest.fn(
    () => this.fuelConsumption
  ) as unknown as jest.MockedFunction<CCar["get_fuel_consumption"]>;

  public GetfFuelTank = jest.fn(() => this.fuelTank) as unknown as jest.MockedFunction<CCar["GetfFuelTank"]>;

  public get_fuel_tank = jest.fn(() => this.fuelTank) as unknown as jest.MockedFunction<CCar["get_fuel_tank"]>;

  public GetfHealth = jest.fn(() => this.health) as unknown as jest.MockedFunction<CCar["GetfHealth"]>;

  public HasWeapon = jest.fn(() => this.hasWeapon) as unknown as jest.MockedFunction<CCar["HasWeapon"]>;

  public IsObjectVisible = jest.fn(
    () => this.isObjectVisible
  ) as unknown as jest.MockedFunction<CCar["IsObjectVisible"]>;

  public PlayDamageParticles = jest.fn() as unknown as jest.MockedFunction<CCar["PlayDamageParticles"]>;

  public SetExplodeTime = jest.fn() as unknown as jest.MockedFunction<CCar["SetExplodeTime"]>;

  public SetfFuel = jest.fn() as unknown as jest.MockedFunction<CCar["SetfFuel"]>;

  public set_fuel = jest.fn() as unknown as jest.MockedFunction<CCar["set_fuel"]>;

  public SetfFuelConsumption = jest.fn() as unknown as jest.MockedFunction<CCar["SetfFuelConsumption"]>;

  public set_fuel_consumption = jest.fn() as unknown as jest.MockedFunction<CCar["set_fuel_consumption"]>;

  public SetfFuelTank = jest.fn() as unknown as jest.MockedFunction<CCar["SetfFuelTank"]>;

  public set_fuel_tank = jest.fn() as unknown as jest.MockedFunction<CCar["set_fuel_tank"]>;

  public SetfHealth = jest.fn((health: number) => health) as unknown as jest.MockedFunction<CCar["SetfHealth"]>;

  public IsActiveEngine = jest.fn(() => this.isEngineActive) as unknown as jest.MockedFunction<CCar["IsActiveEngine"]>;

  public StartEngine = jest.fn() as unknown as jest.MockedFunction<CCar["StartEngine"]>;

  public StopEngine = jest.fn() as unknown as jest.MockedFunction<CCar["StopEngine"]>;

  public HandBreak = jest.fn() as unknown as jest.MockedFunction<CCar["HandBreak"]>;

  public ReleaseHandBreak = jest.fn() as unknown as jest.MockedFunction<CCar["ReleaseHandBreak"]>;

  public GetRPM = jest.fn(() => this.rpm) as unknown as jest.MockedFunction<CCar["GetRPM"]>;

  public SetRPM = jest.fn() as unknown as jest.MockedFunction<CCar["SetRPM"]>;

  public StopDamageParticles = jest.fn() as unknown as jest.MockedFunction<CCar["StopDamageParticles"]>;

  public engaged = jest.fn(() => this.isEngaged) as unknown as jest.MockedFunction<CCar["engaged"]>;

  public Action = jest.fn() as unknown as jest.MockedFunction<CCar["Action"]>;

  public SetParam = jest.fn() as unknown as jest.MockedFunction<CCar["SetParam"]>;
}
