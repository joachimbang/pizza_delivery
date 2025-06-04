import { motion } from "framer-motion";
import { useState } from "react";
import DialogUserInfo from "../../pages/Admin/DialogUserInfo";
import { SquarePen, History } from "lucide-react";

const CardHistoricByUser = () => {
  //   const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white list rounded-xl p-5 mb-6  shadow-md ">
          <div className="list-row ">
            <div>
              <img
                className="size-10 rounded-box"
                src="https://img.daisyui.com/images/profile/demo/1@94.webp"
              />
            </div>
            <div>
              <div>Dio Lupa</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                date
              </div>
            </div>
            <div className="list-col-wrap">Description</div>
            <p className="list-col-wrap text-xl">
              12 $
            </p>
            {/* <button
              className="btn btn-square btn-ghost"
              onClick={() => setIsOpen(true)}
            >
              <SquarePen />
            </button> */}
            <button className="btn btn-square btn-ghost">
              <History />
            </button>
          </div>
        </div>
      </motion.div>
      {/* <DialogUserInfo isOpen={isOpen} onClose={() => setIsOpen(false)} /> */}
    </>
  );
};

export default CardHistoricByUser;
