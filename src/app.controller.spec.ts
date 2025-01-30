import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const value = 'Hello World!';

      expect(appController.getHello()).toBe(value);
    });

    it('should return "4"', () => {
      const payload = { a: 2, b: 2 };

      expect(appController.addNumbers(payload)).toBe(4);
    });

    it('should return "Bye World!"', () => {
      const value = 'Bye World!';

      expect(appController.getBye()).toBe(value);
    });
  });
});
