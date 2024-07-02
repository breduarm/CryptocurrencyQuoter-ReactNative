class CryptoCurrencyResponse {
  CoinInfo: CoinInfoResponse;

  constructor(coinInfo: CoinInfoResponse) {
    this.CoinInfo = coinInfo;
  }
}

class CoinInfoResponse {
  Id: string;
  FullName: string;
  Name: string;

  constructor(id: string, fullName: string, name: string) {
    this.Id = id;
    this.FullName = fullName;
    this.Name = name;
  }
}

export default CryptoCurrencyResponse;
