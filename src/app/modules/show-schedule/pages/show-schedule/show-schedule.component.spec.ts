import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { ShowScheduleComponent } from './show-schedule.component';

describe('ShowScheduleComponent', () => {
  beforeEach(async () => {
    // Arrange

    // Act
    await render(ShowScheduleComponent, {
      componentProperties: {},
      imports: [],
    });
  });

  test('should render', () => {
    // Assert
    expect(screen.getByText('text')).toBeVisible();
  });
});
