import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { MockType, UserType, UserProfile } from 'src/types';
import { UsersService } from './users.service';

describe('Users Controller', () => {
  let controller: UsersController;

  const mockUser: UserType = {
    id: 0,
    password: 'test',
    username: 'test',
    firstName: 'Max',
    lastName: 'Mustermann',
    email: 'max@mustermann.de',
  };

  const mockProfile: UserProfile = {
    id: 0,
    username: 'test',
    firstName: 'Max',
    lastName: 'Mustermann',
    email: 'max@mustermann.de',
  };

  const userServiceMockFactory: () => MockType<UsersService> = jest.fn(() => ({
    findUserByUsername: jest.fn(() => mockUser),
  })) as any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        { provide: UsersService, useFactory: userServiceMockFactory },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  test('should be defined', () => {
    expect(controller).toBeDefined();
  });

  test('getUserProfile()', () => {
    const mockParams = { user: mockUser };
    expect(controller.getUserProfile(mockParams)).toEqual(mockProfile);
  });
});
