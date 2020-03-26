// o pacote "intl" precisou ser instalado, pq no Android ele não vem como default (no iOs já vem)
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import Routes from './src/routes';

export default function App() {
  return (
    <Routes />
  );
}
