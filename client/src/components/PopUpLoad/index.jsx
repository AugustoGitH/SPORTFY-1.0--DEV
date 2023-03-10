import { PopUpLoadStyled } from "./styles";
import { motion } from "framer-motion";

import CircularDetermine from "../../components/CircularDetermine/index";
import { useEffect, useState } from "react";
export default function PopUpLoad({ show, over, whenFinished }) {
  const [loading, setLoading] = useState(true);
  const { messageToTop, functionClickButton, writtenButton } = whenFinished;
  useEffect(() => {
    if (over) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [over]);

  function clickButtonGoOut() {
    functionClickButton();
    window.document.body.style.overflow = "auto";
  }

  if (show) {
    window.document.body.style.overflow = "hidden";
    return (
      <PopUpLoadStyled>
            {loading ? (
              <div>
                <CircularDetermine speed={300} />
              </div>
            ) : (
              <div className="out-operation">
                <h3>
                  {messageToTop}
                  <i className="bx bxs-balloon"></i>
                </h3>
                <button onClick={clickButtonGoOut}>{writtenButton}</button>
              </div>
            )}
        </PopUpLoadStyled>
    );
  }else{
    window.document.body.style.overflow = "auto";
  }
}
