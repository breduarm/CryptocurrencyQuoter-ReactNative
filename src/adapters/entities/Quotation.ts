class Quotation {
  price: string;
  highPriceDay: string;
  lowPriceDay: string;
  lastDayVariaton: string;
  lastUpdate: string;

  constructor();
  constructor(
    price?: string,
    highPriceDay?: string,
    lowPriceDay?: string,
    lastDayVariaton?: string,
    lastUpdate?: string,
  );
  constructor(
    price?: string,
    highPriceDay?: string,
    lowPriceDay?: string,
    lastDayVariaton?: string,
    lastUpdate?: string,
  ) {
    this.price = price ? price : '';
    this.highPriceDay = highPriceDay ? highPriceDay : '';
    this.lowPriceDay = lowPriceDay ? lowPriceDay : '';
    this.lastDayVariaton = lastDayVariaton ? lastDayVariaton : '';
    this.lastUpdate = lastUpdate ? lastUpdate : '';
  }

  isValidQuotation(): boolean {
    return !Object.values(this).includes('');
  }
}

export default Quotation;
