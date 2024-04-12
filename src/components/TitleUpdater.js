import React, { useEffect } from 'react';

function TitleUpdater() {
  useEffect(() => {
    document.title = 'Document Title Updated';

    return () => {
      document.title = 'React App';
    };
  }, []);

  return <div>Document title updated dynamically</div>;
}

export default TitleUpdater;
