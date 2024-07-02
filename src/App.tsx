import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from './components/Header';
import Form from './components/Form';
import axios, {AxiosResponse} from 'axios';
import QuotationComponent from './components/QuotationComponent';
import Quotation from './adapters/entities/Quotation';
import QuotationResponse from './adapters/responses/QuotationResponse';

function App(): React.JSX.Element {
  const [currency, setCurrency] = useState('');
  const [cryptoCurrency, setCryptoCurrency] = useState('');
  const [shouldGetQuote, setShouldGetQuote] = useState(false);
  const [quoteResult, setQuoteResult] = useState<Quotation>(new Quotation());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (shouldGetQuote) {
      getCryptoCurrencyQuote();
      setShouldGetQuote(false);
    }
  }, [shouldGetQuote]);

  const getCryptoCurrencyQuote = async () => {
    try {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`;
      const response: AxiosResponse = await axios.get(url);
      const quotationResponse: QuotationResponse = response.data.DISPLAY[cryptoCurrency][currency];

      setLoading(true);
      setTimeout(() => {
        setQuoteResult(
          new Quotation(
            quotationResponse.PRICE,
            quotationResponse.HIGHDAY,
            quotationResponse.LOWDAY,
            quotationResponse.CHANGEPCT24HOUR,
            quotationResponse.LASTUPDATE,
          ),
        );
        setLoading(false);
      }, 3000);
    } catch (e) {
      setLoading(false);
      console.error('Error getting Cryptocurrency quote', e);
    }
  };

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const backgroundContentColor = {
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };

  const component = loading ? (
    <ActivityIndicator size="large" color="#5949E2" />
  ) : (
    <QuotationComponent quotation={quoteResult} />
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={backgroundContentColor}>
          <Header />

          <Image
            style={styles.bannerImg}
            source={require('./assets/img/cryptomonedas.png')}
          />

          <View style={styles.content}>
            <Form
              currency={currency}
              cryptoCurrency={cryptoCurrency}
              setCurrency={setCurrency}
              setCryptoCurrency={setCryptoCurrency}
              setShouldGetQuote={setShouldGetQuote}
            />

            <View style={{marginTop: 40}}>{component}</View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bannerImg: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
  content: {
    marginHorizontal: '2.5%',
  },
});

export default App;
