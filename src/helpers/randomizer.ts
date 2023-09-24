function randomizer(max: number, amount: number) {
    const randomNums: Array<number> = [];
    for (let i = 0; i < amount; i++) {
      const num = Math.floor(Math.random() * max);
      randomNums.push(num);
    }
    return randomNums;
  }

export default randomizer