import deepFreeze from 'deep-freeze';
import counterReducer from './reducer';

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0,
  };

  const anotherState = {
    good: 4,
    ok: 5,
    bad: 3,
  };

  test('should return a proper initial state when called with undefined state', () => {
    const state = {};
    const action = {
      type: 'DO_NOTHING',
    };

    deepFreeze(state);
    const newState = counterReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });

  test('good is incremented', () => {
    const action = {
      type: 'GOOD',
    };
    const state = initialState;

    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0,
    });
  });

  test('ok is incremented', () => {
    const action = {
      type: 'OK',
    };
    const state = initialState;

    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0,
    });
    deepFreeze(newState);
    const action2 = {
      type: 'ZERO',
    };
    const newState2 = counterReducer(newState, action2);
    expect(newState2).toEqual({
      good: 0,
      ok: 2,
      bad: 0,
    });
  });

  test('bad is incremented', () => {
    const action = {
      type: 'BAD',
    };
    const state = initialState;

    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 1,
    });
  });

  test('reset state', () => {
    const action = {
      type: 'RESET',
    };
    const state = anotherState;

    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 0,
    });
  });
});
