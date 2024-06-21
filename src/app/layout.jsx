import React from'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
    <body>
    <AntdRegistry>{children}</AntdRegistry>
    </body>
    </html>
  );
};

export default RootLayout;