class GildedRose {
  constructor (sellIn, quality, name) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  tick () {
    this.normal();

  }


  normal () {
      this.sellIn=this.sellIn-1;
      if (this.quality>0){
        if (this.sellIn<0){
          this.quality = this.quality-2;
        } else {
          this.quality = this.quality-1;
        }
      }
    }

    
}

var foo = new GildedRose();
foo.normal()

export { GildedRose };
