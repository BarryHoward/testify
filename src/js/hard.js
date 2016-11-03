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
    } else if (this.name ==="Conjured Mana Cake"){
      this.conjured();
    } else if (this.name === "Backstage passes to a TAFKAL80ETC concert"){
      this.backstage();
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
    this.quality=this.quality + qualityChange;
    if (this.quality>50){
      this.quality=50;
    }
  }

  conjured(){
    this.sellIn=this.sellIn-1;
    if (this.quality>0){
      if (this.sellIn<0){
        var qualityChange = -4;
      } else {
        var qualityChange = -2;
      }
      this.quality=this.quality + qualityChange;
    }
  }

  backstage(){
    this.sellIn=this.sellIn-1;
    if (this.sellIn<0){
      this.quality = 0;
    } else {
      if (this.sellIn<5){
        var qualityChange = 3;
      } else if (this.sellIn<10){
        var qualityChange = 2;
      } else {
        var qualityChange = 1;
      }
      this.quality = this.quality + qualityChange;
      if (this.quality>50){
        this.quality =50;
      }
    }
  }

}

export { GildedRose };
