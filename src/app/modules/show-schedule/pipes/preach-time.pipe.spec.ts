import { PreachTimePipe } from './preach-time.pipe';

describe('PreachTimePipe', () => {
  let pipe: PreachTimePipe;
  let hourMock: Date;

  beforeEach(() => {
    pipe = new PreachTimePipe();
    hourMock = new Date();
  });

  test('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  test('should return string hour increased by number minutes with format h - h A', () => {
    //Arrange
    hourMock.setHours(9);
    hourMock.setMinutes(0);
    hourMock.setMilliseconds(0);
    const durationMinutes = 120;
    const expectedMock = '9 - 11 AM';

    //Act
    const result = pipe.transform(hourMock, durationMinutes);

    //Assert
    expect(expectedMock).toBe(result);
  });

  test('should return string hour increased by number minutes with format h:mm - h:mm A', () => {
    //Arrange
    hourMock.setHours(9);
    hourMock.setMinutes(45);
    hourMock.setMilliseconds(0);
    const durationMinutes = 120;
    const expectedMock = '9:45 - 11:45 AM';

    //Act
    const result = pipe.transform(hourMock, durationMinutes);

    //Assert
    expect(expectedMock).toBe(result);
  });
});
