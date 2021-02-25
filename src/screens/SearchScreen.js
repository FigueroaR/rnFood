import React, { useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsLists from '../components/ResultsList'

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  //console.log(results)

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      //console.log(result.price)
      return result.price === price
    })
  }


  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsLists results={filterResultsByPrice('$')} title="Cost Effective"/>
      <ResultsLists results={filterResultsByPrice('$$')} title="Bit Pricier"/>
      <ResultsLists results={filterResultsByPrice('$$$')} title="Big Spender"/>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
