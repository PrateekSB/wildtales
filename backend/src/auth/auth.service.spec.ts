import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { ValidateType, LoginType, MockType } from 'src/types';
import { LoginUserDTO } from 'src/users/login-user.dto';

describe('AuthService', () => {
  let service: AuthService;

  const mockValidate: ValidateType = {
    id: 0,
    username: 'test',
    firstName: 'Max',
    lastName: 'Mustermann',
    email: 'max@mustermann.de',
  };

  const mockLogin: LoginType = {
    access_token: '1234',
    id: 0,
    username: 'test',
    firstName: 'Max',
    lastName: 'Mustermann',
    email: 'max@mustermann.de',
  };

  const authServiceMockFactory: () => MockType<AuthService> = jest.fn(() => ({
    validateUser: jest.fn(() => mockValidate),
    login: jest.fn(() => mockLogin),
  })) as any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: AuthService, useFactory: authServiceMockFactory },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  test('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('validateUser()', async () => {
    expect(await service.validateUser('test', 'test')).toEqual(mockValidate);
  });

  test('login()', async () => {
    const mockParams = { username: 'test', password: 'test' } as LoginUserDTO;
    expect(await service.login(mockParams)).toEqual(mockLogin);
  });
});
