import React from 'react';
import { Switch } from '../../../../components/Switch';
import { useShallow } from 'zustand/react/shallow';
import { useYTDLiveChatStore } from '../../../../../stores';
import { useYLCReactionButtonDisplayChange } from '../../hooks/useYLCReactionButtonDisplayChange';

export const ReactionButtonDisplaySwitch = () => {
  const { reactionButtonDisplay, setReactionButtonDisplay } = useYTDLiveChatStore(
    useShallow((state) => ({
      reactionButtonDisplay: state.reactionButtonDisplay,
      setReactionButtonDisplay: state.setReactionButtonDisplay,
    })),
  );
  console.log(reactionButtonDisplay);
  const { changeDisplay } = useYLCReactionButtonDisplayChange();
  return (
    <Switch
      checked={reactionButtonDisplay}
      id="reaction-button-display-switch"
      onChange={(checked) => {
        console.log(checked);
        changeDisplay(checked);
        setReactionButtonDisplay(checked);
      }}
    />
  );
};
