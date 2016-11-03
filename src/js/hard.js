class GildedRose {
  constructor (sellIn, quality, name) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  tick () {
    if (this.name === "Aged Brie"){
      this.agedBrie();
    } else if (this.name ==="Sulfuras, Hand of Ragnaros"){
      this.quality = 80;
    } else {
      this.normal();
    }

  }


  normal () {
    this.sellIn=this.sellIn-1;
    if (this.quality>0){
      if (this.sellIn<0){
        var qualityChange = -2;
      } else {
        var qualityChange = -1;
      }
      this.quality=this.quality + qualityChange;
    }
  }

  agedBrie(){
    this.sellIn=this.sellIn-1;
    if (this.sellIn<0){
        var qualityChange = 2;
      } else {
        var qualityChange = 1;
      }

      if ((this.quality + qualityChange)>50){
        this.quality = 50;
      } else {
        this.quality=this.quality + qualityChange;
      }
  }


}

var foo = new GildedRose();
foo.normal()

export { GildedRose };
