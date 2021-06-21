import React from "react";

const AddLifts = () => {
  return (
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-xl-2  g-2 g-lg-3">
        <div class="col board-text-primary">
          <div class="p-3 board-bg-primary rounded-3 text-center text-sm-start ">
            <div class="form-floating ">
              <input
                type="number"
                class="form-control form-bg-primary border-0 board-text-primary"
                id="floatingInput"
                placeholder="Deadlift"
              ></input>
              <label for="floatingInput">Deadlift</label>
            </div>
            <div class="form-floating mt-2 mb-2">
              <input
                type="number"
                class="form-control form-bg-primary border-0"
                id="floatingInput"
                placeholder="Squat"
              ></input>
              <label for="floatingInput">Squat</label>
            </div>
            <div class="form-floating">
              <input
                type="number"
                class="form-control form-bg-primary border-0"
                id="floatingInput"
                placeholder="Bench Press"
              ></input>
              <label for="floatingInput">Bench Press</label>
            </div>
          </div>
        </div>
        <div class="col board-text-primary">
          <div class="p-3 board-bg-primary rounded-3 text-center text-sm-start ">
            <div class="form-floating ">
              <input
                type="number"
                class="form-control form-bg-primary border-0"
                id="floatingInput"
                placeholder="Deadlift"
              ></input>
              <label for="floatingInput">Deadlift</label>
            </div>
            <div class="form-floating mt-2 mb-2">
              <input
                type="number"
                class="form-control form-bg-primary border-0"
                id="floatingInput"
                placeholder="Squat"
              ></input>
              <label for="floatingInput">Squat</label>
            </div>
            <div class="form-floating">
              <input
                type="number"
                class="form-control form-bg-primary border-0"
                id="floatingInput"
                placeholder="Bench Press"
              ></input>
              <label for="floatingInput">Bench Press</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLifts;
