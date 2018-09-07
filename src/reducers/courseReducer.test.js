import * as actions from "../actions/courseActions";
import courseReducer from "./courseReducer";
import expect from "expect";

describe("Course Reducer", () => {
  it("should add course when passed CREATE_COURSE_SUCCESS", () => {
    const initialState = [
      {title: "A"},
      {title: "B"}
    ];
    const newCourse = {title: "C"};
    const action = actions.createCourseSuccess(newCourse);

    const newState = courseReducer(initialState, action);

    expect(newState.length).toEqual(3);
    expect(newState).toEqual([...initialState, newCourse]);
  });

  it("should update course when passed UPDATE_COURSE_SUCCESS", () => {
    const initialState = [
      {id: "A", title: "A"},
      {id: "B", title: "B"},
      {id: "C", title: "C"}
    ];
    const course = {id: "B", title: "New Title"};
    const action = actions.updateCourseSuccess(course);

    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(c => c.id == course.id);
    const untouchedCourse = newState.find(c => c.id == "A");

    expect(updatedCourse.title).toEqual(course.title);
    expect(untouchedCourse.title).toEqual(untouchedCourse.id);
    expect(newState.length).toEqual(3);
  });
});
