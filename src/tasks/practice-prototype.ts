function randMax(max) {
  const rnd = Math.trunc(1e9 * Math.random()) % max;
  return rnd;
}

type ReelType = {
  symbols: string[];
  spin(): void;
  display(): any;
};

const reel: ReelType = {
  symbols: ['♠', '♥', '♦', '♣', '☺', '★', '☾', '☀'],
  spin(): void {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },
  display(): string {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    return this.symbols[this.position];
  },
};

type ReelWithPosition = ReelType & { position: null | string };

const getReelWithPosition = (reel: ReelType): ReelWithPosition => {
  return Object.create(reel, {
    position: {
      value: null,
      writable: true,
    },
  });
};

const slotMachine = {
  reels: [
    getReelWithPosition(reel),
    getReelWithPosition(reel),
    getReelWithPosition(reel),
  ],
  spin() {
    this.reels.forEach(function spinReel(reel: ReelWithPosition) {
      reel.spin();
    });
  },
  display() {
    let finalDisplay = '';
    this.reels.forEach((reel: ReelWithPosition) => {
      let intermediateDisplay = '';

      const length = 3;
      for (let i = 0; i < length; i++) {
        let toConcat;
        const reelDisplayed = reel.display();
        if (i < length - 1) {
          toConcat = `${reelDisplayed} | `;
        } else {
          toConcat = `${reelDisplayed}`;
        }
        intermediateDisplay = intermediateDisplay.concat(`${toConcat}`);
        reel.spin();
      }
      finalDisplay = finalDisplay.concat(intermediateDisplay.concat(' \n'));
    });

    console.log(finalDisplay);
    return finalDisplay;
  },
};

slotMachine.spin();
slotMachine.display();
// ☾ | ☀ | ★
// ☀ | ♠ | ☾
// ♠ | ♥ | ☀

slotMachine.spin();
slotMachine.display();
// ♦ | ♠ | ♣
// ♣ | ♥ | ☺
// ☺ | ♦ | ★
