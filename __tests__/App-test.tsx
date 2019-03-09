// Copyright (c) 2014-present, Facebook, Inc. All rights reserved.

// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import * as TestUtils from 'react-dom/test-utils';
import { App, mapStateToProps } from '../src/app/containers/App';
import { RootState } from '../src/app/reducers';

let rootState: RootState;

beforeEach(() => {
  rootState = {
    todos: [
      {
        id: 1,
        text: 'Use Redux',
        completed: false
      }
    ]
  }
});

describe('App container', () => {
  describe('the container element', () => {
    describe('mapStateToProps', () => {
      it('should map the state to props correctly', () => {
        const componentProps = {} as App.Props;
        const componentState = mapStateToProps(rootState, componentProps);

        expect(componentState.todos).toEqual(rootState.todos);
      })
    });
  })
});
