import MSG from "components/MSG";
import React from "react";

function Messages() {
  return (
    <div>
      <div className="container space-y-4 sm:space-y-6 lg:space-y-10 xl:space-y-14">
        <MSG msg="Ready to invite us to be a key part of your success story?" />
        <MSG msg="all good things start with a “hello” 😉" />
        <MSG msg="Let’s start with hello" user={true} />
        <MSG msg="GET IN TOUCH" />
      </div>
    </div>
  );
}

export default Messages;
