class SmallestIntegerFinder {
  findSmallestInt(args) {
    if (args.length === 1) {
      return args[0];
    }
    if (args[0] < args[1]) {
      args.splice(1, 1);
      return this.findSmallestInt(args);
    } else {
      return this.findSmallestInt(args.slice(1));
    }
  }
}
