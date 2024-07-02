import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import Quotation from '../adapters/entities/Quotation';
import axios, {AxiosResponse} from 'axios';
import QuotationResponse from '../adapters/responses/QuotationResponse';

const useGetCryptoCurrencyQuote = (
  shouldGetQuote: boolean,
  cryptoCurrency: string,
  currency: string,
  setShouldGetQuote: Dispatch<SetStateAction<boolean>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
) => {
  const [quoteResult, setQuoteResult] = useState<Quotation>(new Quotation());
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCryptoCurrencyQuote = async () => {
      try {
        setLoading(true);

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`;
        const response: AxiosResponse = await axios.get(url);
        const quotationResponse: QuotationResponse =
          response.data.DISPLAY[cryptoCurrency][currency];

        setTimeout(() => {
          setLoading(false);
          setQuoteResult(
            new Quotation(
              quotationResponse.PRICE,
              quotationResponse.HIGHDAY,
              quotationResponse.LOWDAY,
              quotationResponse.CHANGEPCT24HOUR,
              quotationResponse.LASTUPDATE,
            ),
          );
        }, 3000);
      } catch (e) {
        setLoading(false);
        setError(e);
        console.error('Error getting Cryptocurrency quote:', e);
      }
    };

    if (shouldGetQuote) {
      getCryptoCurrencyQuote();
      setShouldGetQuote(false);
    }
  }, [shouldGetQuote]);

  return {quoteResult, error};
};

export default useGetCryptoCurrencyQuote;
