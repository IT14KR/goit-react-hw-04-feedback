import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './Notificatin.styled';

export const Notification = ({ message }) => <Text>{message}</Text>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
