import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGames } from '../store/games/game.actions';
import AddGamesDialog from '../components/modules/games/AddGamesDialog';
import GameDataTable from '../components/modules/games/GameDataTable';

const GamesPage = ({ getGames, games }) => {
  useEffect(() => {
    getGames();
  }, []);
  return (
    <Fragment>
      <AddGamesDialog />
      <GameDataTable games={games} />
    </Fragment>
  );
};

GamesPage.propTypes = {
  games: PropTypes.array.isRequired,
  getGames: PropTypes.func.isRequired
};

export default connect(state => ({ games: state.games }), { getGames })(
  GamesPage
);
