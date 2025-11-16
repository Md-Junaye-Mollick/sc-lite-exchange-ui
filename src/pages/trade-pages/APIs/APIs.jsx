import React from 'react'
import APIsHeader from '../../../components/trade-sections/APIs-sections/APIsHeader';
import APIsConnectivity from '../../../components/trade-sections/APIs-sections/APIsConnectivity';
import APIsVIPInstitutional from '../../../components/trade-sections/APIs-sections/APIsVIPInstitutional';
import APIsLinkProgram from '../../../components/trade-sections/APIs-sections/APIsLinkProgram';
import APIsDevelopers from '../../../components/trade-sections/APIs-sections/APIsDevelopers';
import APIsFaq from '../../../components/trade-sections/APIs-sections/APIsFaq';

const APIs = () => {
  return (
    <div>
      <APIsHeader/>
      <APIsConnectivity/>
      <APIsVIPInstitutional/>
      <APIsLinkProgram/>
      <APIsDevelopers/>
      <APIsFaq/>
    </div>
  )
}

export default APIs;