import expect from "expect";
import { createStore } from "redux";
import rootReducer from "../reducers";
import initialState from "../reducers/initialState";
import * as courseActions from "../actions/courseActions";

describe("Store", () => {
  it("Should handle creating courses", () => {
    const store = createStore(rootReducer, initialState);
    const course = { title: "Clean Code" };
    const action = courseActions.createCourseSuccess(course);

    store.dispatch(action);
    const actual = store.getState().courses[0];

    expect(actual).toEqual(course);
  });

  it("Should handle updating courses", () => {
    const store = createStore(rootReducer, initialState);
    const course = { id: "clean-code", title: "Dirty Code" };
    const updatedCourse = { id: course.id, title: "Clean Code" };
    const createAction = courseActions.createCourseSuccess(course);
    const updateAction = courseActions.updateCourseSuccess(updatedCourse);

    store.dispatch(createAction);
    const initialCourse = store.getState().courses[0];
    expect(initialCourse).toEqual(course);

    store.dispatch(updateAction);
    const actual = store.getState().courses[0];
    expect(actual).toEqual(updatedCourse);
  });

});
