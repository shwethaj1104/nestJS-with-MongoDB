import { Test, TestingModule } from '@nestjs/testing';
import { UserContollerController } from './user_contoller.controller';

describe('UserContollerController', () => {
  let controller: UserContollerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserContollerController],
    }).compile();

    controller = module.get<UserContollerController>(UserContollerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
