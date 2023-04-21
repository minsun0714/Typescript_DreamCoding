{
  // function: login -> success, fail
  type SuccessState = {
    result: "success"; // 공통 프로퍼티
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail"; // 공통 프로퍼티
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(id: string): LoginState {
    return {
      result: "success",
      response: {
        body: `${id} logged in!!`,
      },
    };
  }
  console.log(login("bonobono"));

  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
  console.log(
    printLoginState({
      result: "fail",
      reason: "실패쓰",
    })
  );
}
