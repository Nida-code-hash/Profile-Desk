import React from 'react';

interface MetaDataProps {
  title?: string;
  keywords?: string;
  description?: string;
}

const MetaData: React.FC<MetaDataProps> = ({ title = "React Profile Desk", keywords = "Admin", description = "React Profile Desk" }) => {
  return <>
    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
    <title>{title}</title>
  </>;
};

export default MetaData; 