console.log('should run');

class Sprite {
  name = '';
  x = 0;
  y = 0;

  constructor(name: string) {
    this.name = name;
  }
}

function mixinExample1() {
  type Constructor = new (...args: any[]) => {};

  function Scale<TBase extends Constructor>(Base: TBase) {
    return class Scaling extends Base {
      #scale = 1;

      setScale(scale: number) {
        this.#scale = scale;
      }

      get scale(): number {
        return this.#scale;
      }
    };
  }

  const EightBitSprite = Scale(Sprite);

  const flappySprite = new EightBitSprite('Bird');
  flappySprite.setScale(0.8);
  console.log(' flappySprite.scale ', flappySprite.scale);
}

function mixinExample2_Constrained() {
  type Constructor = new (...args: any[]) => {};

  type GConstructor<T = {}> = new (...args: any[]) => T;

  // this allows for creating classes which only work with constrained base
  // classes

  type Positionable = GConstructor<{ setPos: (x: number, y: number) => void }>;
  type Spritable = GConstructor<Sprite>;
  type Loggable = GConstructor<{ print: () => void }>;

  //then create mixins which only work works when you have a particular base
  // to build on

  function Jumpable<TBase extends Positionable>(Base: TBase) {
    return class Jumpable extends Base {
      jump() {
        // this mixin will only work if it is passed a base
        // class which has setPos defined because of the
        // positionable constraint

        this.setPos(0, 20);
      }
    };
  }
}

function alternativePattern() {
  // classes for mixins can not inherit any other classes because they will be discarded
  class Jumpable {
    constructor(public x: number, public y: number) {}

    jump() {
      function calcNextPos(pos: number) {
        return pos + 1 + Math.floor(Math.random() * 3);
      }

      this.x = calcNextPos(this.x);
      this.y = calcNextPos(this.y);
    }
  }

  const j = new Jumpable(1, 1);

  class Duckable {
    constructor(public sound: string) {}

    duck() {
      return this.sound;
    }
  }

  const d = new Duckable('default duck sound');

  class Sprite {
    #color = '';

    constructor(args: [duck: Duckable, jump: Jumpable]) {
      args.forEach((arg) => {
        Object.assign(this, arg);
      });
    }

    get color() {
      return this.#color;
    }

    set color(value) {
      this.#color = value;
    }
  }

  const s = new Sprite([d, j]);

  (() => {
    // then you create an interface which merges
    // the expected mixins with the same name as your base
    interface SpriteMix extends Jumpable, Duckable {
      color: string;
    }

    // Apply the mixins into the base class via
    // the JS at runtime
    applyMixins(Sprite, [Jumpable, Duckable]);

    let player = new Sprite([d, j]) as undefined as SpriteMix;

    player.jump();
    player.color = 'custom';
    console.log('player position ', player.x, player.y);
    console.log('player color ', player.color);
  })();

  function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
      let propertyNames: string[] = [];

      propertyNames = Object.getOwnPropertyNames(baseCtor.prototype);

      propertyNames.forEach((name) => buildProperty(name));

      function buildProperty(name: string) {
        Object.defineProperty(
          derivedCtor.prototype,
          name,
          Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
            Object.create(null)
        );
      }
    });
  }
}

function constraintsWithDecoratosAndMixins() {
  const Pausable = (target: typeof Player) => {
    return class Pausable extends target {
      shouldFreeze = false;
    };
  };

  @Pausable
  class Player {
    x = 0;
    y = 0;
  }

  // the player class does not have the decorator's type merged
  const player = new Player();
  // player.shouldFreeze

  // the runtime aspect could be manually replicated via
  // type composition or interface merging

  type FreezablePlayer = Player & { shouldFreeze: boolean };

  const playerFreezable = new Player() as unknown as FreezablePlayer;

  console.log(`playerFreezable.shouldFreeze `, playerFreezable.shouldFreeze);
}

function static_property_mixins() {
  function base<T>() {
    class Base {
      static prop: T;
    }

    return Base;
  }

  function derived<T>() {
    class Derived extends base<T>() {
      static anotherProp: T;
    }

    return Derived;
  }

  class Spec extends derived<string>() {}

  Spec.prop = 'my prop 1';
  Spec.anotherProp = 'another prop';

  console.log('Spec ', Spec);
}

(function main() {
  // mixinExample1();
  // alternativePattern();
  // constraintsWithDecoratosAndMixins();

  static_property_mixins();
})();
