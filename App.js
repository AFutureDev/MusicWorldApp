import React, { useState } from 'react';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import PlayerWidget from './components/PlayerWidget';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppContext } from './AppContext';

const App = () => {

  //const [songId, setSongId] = useState<String|null>(null);
  const [songId, setSongId] = useState(null);


  return (
    <SafeAreaProvider>
      <AppContext.Provider value={{
        songId,
        setSongId: (id) => setSongId(id),
      }}>
        <BottomTabNavigation />
        <PlayerWidget />
       </AppContext.Provider>
    </SafeAreaProvider>
  )
};

export default App;
