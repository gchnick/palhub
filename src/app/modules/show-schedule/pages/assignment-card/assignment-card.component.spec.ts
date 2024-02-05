import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { PreachTimePipe } from '../../pipes/preach-time.pipe';
import {
  AssignmentCardComponent,
  AssignmentCardType,
} from './assignment-card.component';
import { assignmentCardMother } from './assignment-card.mother';

describe('AssignmentCardComponent', () => {
  let dataMock: AssignmentCardType;

  beforeEach(async () => {
    // Arrange
    dataMock = Object.assign(assignmentCardMother);
    // Act
    await render(AssignmentCardComponent, {
      componentProperties: { data: dataMock },
      imports: [],
      declarations: [PreachTimePipe],
    });
  });

  test('should render', () => {
    // Assert
    expect(screen.getByText(/9 - 11 AM/i)).toBeVisible();
  });
});
