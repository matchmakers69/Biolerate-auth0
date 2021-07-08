import React from 'react';
import Layout from 'Layout';
import Routes from 'routes';
import MainTemplate from 'templates/MainTemplate';

const App = () => {
  return (
    <MainTemplate>
      <Layout>
        <Routes />
      </Layout>
    </MainTemplate>
  );
};

export default App;
