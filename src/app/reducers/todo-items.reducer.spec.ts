import { todoitemReducer, initialState } from './todo-items.reducer';

describe('TodoItems Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = todoitemReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
