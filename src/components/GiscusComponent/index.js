import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      id='comments'
      repo='Isaac-Tait/stickyFingersGiscus'
      repoId='R_kgDOKXwx5w'
      category='General'
      categoryId='DIC_kwDOKXwx584CZlwj'
      mapping='pathname'
      term='Welcome to @giscus/react component!'
      reactionsEnabled='1'
      emitMetadata='0'
      inputPosition='bottom'
      theme={colorMode}
      lang='en'
      crossorigin='anonymous'
      async
    />
  );
}
