import React, {useEffect, useState} from 'react';
// import type {PropsWithChildren} from 'react';
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
import axios from 'axios';
import Quotation from './components/Quotation';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;
// const Section = ({children, title}: SectionProps): React.JSX.Element => {}

function App(): React.JSX.Element {
  const [currency, setCurrency] = useState('');
  const [cryptoCurrency, setCryptoCurrency] = useState('');
  const [shouldGet, setShouldGet] = useState(false);
  const [quoteResult, setQuoteResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (shouldGet) {
      getCryptoCurrencyQuote();
      setShouldGet(false);
    }
  }, [shouldGet]);

  const getCryptoCurrencyQuote = async () => {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}}&tsyms=${currency}`;
    const result = await axios.get(url);

    setLoading(true);
    setTimeout(() => {
      setQuoteResult(result.data.DISPLAY[cryptoCurrency][currency]);
      setLoading(false);
    }, 3000);
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
    <Quotation quotation={quoteResult} />
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
              setShouldGet={setShouldGet}
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
