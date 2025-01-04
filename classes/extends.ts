(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      // console.log("Constructor Avenger llamado!");
    }
    protected getRealName(): string {
      return `${this.name} - ${this.realName}`;
    }
  }

  class xMen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      // console.log("Constructor de Xmen llamado!");
    }

    getFullNameInXmen() {
      // console.log(super.getRealName());
    }
  }

  const wolverine = new xMen("Name", "Real Name", true);
  // console.log(wolverine);
  wolverine.getFullNameInXmen();
})();
