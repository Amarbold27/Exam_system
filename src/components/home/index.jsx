import { CustomDialog, useDialog,Alert } from 'react-st-modal';
import React, { useState } from "react";
// The element to be shown in the modal window
function Home() {
    return (
      <div>
        <button
          onClick={async () => {
            await Alert('Амжилттай', 'Бүртгэл');
        }}
        >
            Alert
        </button>
      </div>
    );
  }
 

export default Home;