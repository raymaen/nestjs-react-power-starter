import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Nsystem from 'react-notification-system-redux';

const Notifications = ({ notifications }) => (
  <Nsystem notifications={notifications} />
);

Notifications.contextTypes = {
  store: PropTypes.object
};

Notifications.propTypes = {
  notifications: PropTypes.array
};

export default connect(state => ({ notifications: state.notifications }))(
  Notifications
);
