class QuotationResponse {
  PRICE: string;
  HIGHDAY: string;
  LOWDAY: string;
  CHANGEPCT24HOUR: string;
  LASTUPDATE: string;

  constructor(
    price: string,
    highDay: string,
    lowDay: string,
    lastDayVariation: string,
    lastUpdate: string,
  ) {
    this.PRICE = price;
    this.HIGHDAY = highDay;
    this.LOWDAY = lowDay;
    this.CHANGEPCT24HOUR = lastDayVariation;
    this.LASTUPDATE = lastUpdate;
  }
}

export default QuotationResponse;
