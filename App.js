import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';

const LANGUAGES = [
  {code: 'en', label: 'english'},
  {code: 'ru', label: 'russian'},
  {code: 'de', label: 'deutsch'},
  {code: 'fr', label: 'french'},
];

const App = () => {
  const {t, i18n} = useTranslation();
  const selectedLanguageCode = i18n.language;

  const setLanguage = code => {
    return i18n.changeLanguage(code);
  };

  return (
    <View>
      <Text
        style={{fontSize: 20, color: 'black', textAlign: 'center', margin: 30}}>
        SELECT A LANGUAGE
      </Text>
      {LANGUAGES.map(language => {
        const selectedLanguage = language.code === selectedLanguageCode;
        return (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              margin: 20,
              backgroundColor: '#ffd670',
              borderRadius: 30,
              width: 100,
              height: 50,
              alignItems: 'center',
            }}
            key={language.code}
            disabled={selectedLanguage}
            onPress={() => setLanguage(language.code)}>
            <Text
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                fontSize: 20,
                color: 'black',
              }}>
              {language.label}
            </Text>
          </TouchableOpacity>
        );
      })}
      <View>
        <Text style={{fontSize: 24, color: 'black', margin: 15}}>
          {t('Welcome')}
        </Text>
      </View>
    </View>
  );
};

export default App;
