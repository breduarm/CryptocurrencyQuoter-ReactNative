import React, {useState} from 'react';
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
import QuotationComponent from './components/QuotationComponent';
import useGetCryptoCurrencyQuote from './hooks/useGetCryptoCurrencyQuote';

function App(): React.JSX.Element {
  const [currency, setCurrency] = useState('');
  const [cryptoCurrency, setCryptoCurrency] = useState('');
  const [shouldGetQuote, setShouldGetQuote] = useState(false);
  const [loading, setLoading] = useState(false);

  const {quoteResult, error} = useGetCryptoCurrencyQuote(
    shouldGetQuote,
    cryptoCurrency,
    currency,
    setShouldGetQuote,
    setLoading,
  );

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
