import React from'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import localFont from 'next/font/local';

const HarmonyOS = localFont({
  src:[
    {
      path:'./HarmonyOS_Sans/HarmonyOS_Sans_Black.ttf',
      style:'black',
      weight:'900'
    },
    {
      path:'./HarmonyOS_Sans/HarmonyOS_Sans_Bold.ttf',
      style:'bold',
      weight:'700'
    },
    {
      path:'./HarmonyOS_Sans/HarmonyOS_Sans_Light.ttf',
      style:'light',
      weight:'300'
    },
    {
      path:'./HarmonyOS_Sans/HarmonyOS_Sans_Medium.ttf',
      style:'medium',
      weight:'500'
    },
    {
      path:'./HarmonyOS_Sans/HarmonyOS_Sans_Regular.ttf',
      style:'normal',
      weight:'400'
    },
    {
      path:'./HarmonyOS_Sans/HarmonyOS_Sans_Thin.ttf',
      style:'thin',
      weight:'100'
    }

  ],
  display:'swap'
})


const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={HarmonyOS.className}>
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;