import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { Game } from './interfaces/game.interface';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';

@Controller('api/pugs')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  /**
 * @description Get all games
 */
Router.get('/', async (req, res) => {
    try {
      const data = await GamesProvider.getGames();
      res.json({ data });
    } catch (error) {
      res.status(400);
    }
  });
  
  /**
   * @description Create new game
   */
  Router.post('/:id', async (req, res) => {
    const appId = req.params.id;
    try {
      await GamesProvider.createGame(appId);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  });
  
  /**
   * @description Get game by id
   */
  Router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const data = await GamesProvider.getGame(id);
      res.status({ data });
    } catch (error) {
      res.sendStatus(500);
    }
  });
  
  /**
   * @description Update game status
   */
  Router.post('/update/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      await GamesProvider.updateGame(id, status);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(400);
    }
  });
  
  /**
   * @description Delete all games - *unsafe*
   */
  
  Router.delete('/all', async (req, res) => {
    try {
      await GamesProvider.deleteAll();
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(400);
    }
  });
   
  /**
   * @description Delete game
   */
  Router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await GamesProvider.deleteGame(id);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(400);
    }
  });
  
  Router.delete('/all', async (req, res) => {
    try {
      console.log('asd');
      await GamesProvider.deleteAll();
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(400);
    }
  });
}
