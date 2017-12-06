import React, { Component, PropTypes } from 'react';
import { compose, withProps, setPropTypes, withState } from 'recompose';
import IconButton from './IconButton';
import ConfirmDeleteModal from 'ui/components/Modal/ConfirmDeleteModal';

const enhanceIconButton = compose(
  setPropTypes({
    target: PropTypes.string.isRequired,
    onConfirm: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
  }),
  withProps({
    title: 'Delete',
    icon: 'icon ion-trash-b',
  }),
  withState('isConfirming', 'setConfirming', false)
);

const renderIconButton = ({ onConfirm, disabled, target, isConfirming, setConfirming }) => {
  return (
    <span>
      <IconButton
        title="Delete"
        icon="icon ion-trash-b"
        onClick={() => setConfirming(true)}
        disabled={disabled} />
      <ConfirmDeleteModal
        target={target}
        isOpen={isConfirming}
        onConfirm={() => {
          setConfirming(false);
          onConfirm();
        }}
        onCancel={() => setConfirming(false)} />
    </span>
  );
};

export default enhanceIconButton(renderIconButton);

