import React from 'react';
import { Mixpanel } from 'mixpanel-react-native';

const MixpanelContext = React.createContext();

export const useMixpanel = () => React.useContext(MixpanelContext);

export const MixpanelProvider = ({children}) => {
  const [mixpanel, setMixpanel] = React.useState(null);

  React.useEffect(() => {
    const trackAutomaticEvents = true;
    const mixpanelInstance = new Mixpanel(
      `a13f8c5a5af75f2b945a61b4r76a73ef`,
      trackAutomaticEvents
    );
    mixpanelInstance.init();
    setMixpanel(mixpanelInstance);
  }, []);

  return <MixpanelContext.Provider value={mixpanel}>{children}</MixpanelContext.Provider>;
};