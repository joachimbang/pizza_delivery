import { motion } from "framer-motion";
import { useState } from "react";
import DialogUserInfo from "../../pages/Admin/DialogUserInfo";
import { SquarePen, History } from "lucide-react";
import { useNavigate } from "react-router";

const CardListUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  


  

  const goToHistoricByUser = () => {
    navigate('/admin/historicbyuser');
  };

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
                Remaining Reason
              </div>
            </div>
            <p className="list-col-wrap text-xs">
              "Remaining Reason" became an instant hit, praised for its haunting
              sound and emotional depth. A viral performance brought it
              widespread recognition, making it one of Dio Lupa’s most iconic
              tracks.
            </p>
            <button
              className="btn btn-square btn-ghost"
              onClick={() => setIsOpen(true)}
            >
              <SquarePen />
            </button>
            <button onClick={goToHistoricByUser} className="btn btn-square btn-ghost">
              <History />
            </button>
          </div>
        </div>
      </motion.div>
      <DialogUserInfo isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default CardListUser;
